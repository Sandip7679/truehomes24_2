import React, { useEffect, useState } from 'react';
import { CallIcon, EmailIcon, LocationIcon } from './svgIcons';
import { styles } from '../Styles/Styles';
import { NavLink } from 'react-router-dom';
// import logoImage from '../assets/images/logo.jpg'
import useApi, { UseApi } from '../ApiConf';
import { useDispatch, useSelector } from 'react-redux';
import { setPropertyListState, setlocation } from '../Redux/reducer/User';


const Footer = () => {
    // const { fetchData } = useApi();
    const { FetchData } = UseApi();
    const dispatch = useDispatch();
    const { currLocation, propertyListState } = useSelector(state => state.User);
    const [footerData, setFooterData] = useState(null);
    const [visitorCount,setVisitorCount] = useState(null);
    useEffect(() => {
        getFooterData();
        getVisitorCount();
    }, []);

    const getFooterData = async () => {
        let data;
        try {
            data = await FetchData('footer-property-list', 'GET');
        } catch (err) {
            console.log(err);
        }
        if (data) {
            // console.log('footer data..',data);
            setFooterData(data);
        }
    }

    const getVisitorCount = async () => {
        let data;
        try {
            data = await FetchData('get-visitor-count', 'GET');
        } catch (err) {
            console.log(err);
        }
        if (data) {
            // console.log('footer data..',data);
            setVisitorCount(data.count);
        }
    }
    // const getQuickLinkPath = (url) => {
    //     let arr = url.split('/');
    //     return `/${arr[arr.length - 1]}`
    // }

    const setPopularSearchStatus = (item) => {
        if (item.property_status == 'sale') {
            dispatch(setPropertyListState({
                ...propertyListState,
                propertyStatus: { text: 'Buy', value: 'sale', for: 'Sale', index: 0 },
                propertyTypes: item.property_type ? item.property_type : ''
            }));
        }
        else if (item.property_status == 'rent') {
            dispatch(setPropertyListState({
                ...propertyListState, propertyStatus: { text: 'Rent', value: 'rent', for: 'Rent', index: 1 },
                propertyTypes: item.property_type ? item.property_type : ''
            }));
        }
        else if (item.property_status == 'new project') {
            dispatch(setPropertyListState({
                ...propertyListState, propertyStatus: { text: 'New Project', value: 'new project', for: 'Sale', index: 2 },
                propertyTypes: item.property_type ? item.property_type : ''
            }));
        }
        let location = { country: '90', city: 'India', code: '', location: '', locationName: null, project: '', projectName: null, area: 'City' };
        localStorage.setItem('location', JSON.stringify({ ...currLocation, ...location }));
        dispatch(setlocation(location));
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    const setStatusForPropertyInIndia = (item) => {
        if (item.property_status == 'sale') {
            dispatch(setPropertyListState({
                ...propertyListState,
                propertyStatus: { text: 'Buy', value: 'sale', for: 'Sale', index: 0 },
            }));
        }
        let location = { country: '90', city: item.cityName, code: item.city, location: '', locationName: null, project: '', projectName: null, area: item.cityName }
        localStorage.setItem('location', JSON.stringify({ ...currLocation, ...location }));
        dispatch(setlocation(location));
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    const setStatusForInternationalProp = (item) => {
        if (item.property_status == 'new project') {
            dispatch(setPropertyListState({
                ...propertyListState,
                propertyStatus: { text: 'New Project', value: 'new project', for: 'Sale', index: 2 },
            }));
        }
        let location = { country: '', city: item.cityName, code: item.city, location: '', locationName: null, project: '', projectName: null, area: item.cityName }
        localStorage.setItem('location', JSON.stringify({ ...currLocation, ...location }));
        dispatch(setlocation(location));
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }


    const setStatusForNewProject = (item) => {
        localStorage.setItem('propertyStatus', 'new project');
        dispatch(setPropertyListState({ ...propertyListState, propertyStatus: { text: 'New Project', value: 'new project', for: 'Sale', index: 2 } }));
        let location = { country: '90', city: item.cityName, code: item.city, location: '', locationName: null, project: '', projectName: null, area: item.cityName }
        localStorage.setItem('location', JSON.stringify({ ...currLocation, ...location }));
        dispatch(setlocation(location));
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    return (
        <div className='bg-black w-full p-10 text-white flex flex-wrap justify-between gap-5 px-[2%] lg:px-[5%]'>
            <div className='text-left text-sm w-[300px]'>
                <img alt='' src={footerData?.logo} />
                {/* <img alt='' src={logoImage} /> */}
                <p className='my-5'>Welcome to Truehomes24.com</p>
                <ul>
                    <li className='flex'>
                        <div classname={' h-6 w-6'}>
                            <LocationIcon classname={' h-5 w-5'} />
                        </div>
                        <div className='mx-2 max-w-xl' >
                            {/* <p>Corporate office B14-ANKUR PALM SPRINGS, PADI, CHENNAI-600050</p>
                            <p className='mt-5'>RERA :TN/Agent/0179/2022</p>
                            <p>RERA :TN/Agent/0179/2022</p>
                            <p className='mt-5'>GST-29AAOCM0530A1ZT</p> */}
                            {/* <div dangerouslySetInnerHTML={{ __html: footerData?.fullAdress }}/> */}
                            {/* {footerData?.fullAdress} */}
                            {/* {footerData?.fullAdress && String.raw`${footerData.fullAdress}`} */}
                            <pre>{footerData?.fullAdress}</pre>
                        </div>

                    </li>
                    <li className='flex mt-5'>
                        <div className='h-4 w-4'>
                            <EmailIcon classname={'h-4 w-4 mt-1'} />
                        </div>
                        <p className='ml-4'>{footerData?.email}</p>
                    </li>
                    <li className='flex mt-2'>
                        {/* <CallIcon classname={'h-6 w-6 text-white'} /> */}
                        <i class="fa-solid fa-phone"></i>
                        <p className='ml-4'>{footerData?.contact}</p>
                    </li>
                </ul>
            </div>
            <div className='mt-5 text-left'>
                <h1 className={styles.title2Bold}>Popular Searches</h1>
                <div className='text-sm tracking-wide'>
                    {footerData?.popularSearches?.map((item, index) => {
                        return (
                            <div key={index} className='mt-2 hover:underline opacity-90'>
                                <NavLink to={`/${item.url}`}
                                    onClick={() => setPopularSearchStatus(item)}
                                >
                                    <p>{item.text}</p>
                                </NavLink>
                                {/* <p>{item.text}</p> */}
                            </div>
                        )
                    })}
                </div>
            </div>

            <div className='mt-5 text-left'>
                <h1 className={styles.title2Bold}>Quick Links</h1>
                <div className='text-sm tracking-wide opacity-90'>
                    {footerData?.quickLinks?.map((item, index) => {
                        return (
                            <div key={index} className='mt-2 hover:underline cursor-pointer'>
                                <NavLink to={`/${item.url}`}>
                                    <p className='ml-1'>{item.text}</p>
                                </NavLink>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div>
                <div className='text-left mt-5'>
                    <h1 className={styles.title2Bold}>Property in India</h1>
                    <div className='text-left text-sm mt-2 opacity-90'>
                        {footerData?.propertyInIndia?.map((item, index) => {
                            return (
                                <>
                                    {index % 2 != 0 && <div
                                    >
                                        <NavLink
                                            onClick={() => {
                                                setStatusForPropertyInIndia(footerData.propertyInIndia[index - 1]);
                                            }}
                                            to={`/${footerData.propertyInIndia[index - 1].url}`}
                                            className='hover:underline cursor-pointer'
                                        >{footerData.propertyInIndia[index - 1].text}</NavLink>{' '}
                                        | <NavLink
                                            onClick={() => {
                                                setStatusForPropertyInIndia(item);
                                            }}
                                            to={`/${item.url}`}
                                            className='hover:underline cursor-pointer'>{item.text}</NavLink>
                                    </div>}
                                </>
                            )
                        })}
                    </div>
                </div>
                <div className='text-left mt-4'>
                    <h1 className={styles.title2Bold}>New Projects in India</h1>
                    <div className='text-left text-sm mt-2 opacity-90'>
                        {footerData?.newProjectsInIndia?.map((item, index) => {
                            return (
                                <>
                                    {index % 2 != 0 && <p>
                                        <NavLink
                                            to={`/${footerData.newProjectsInIndia[index - 1].url}`}
                                            onClick={() => setStatusForNewProject(footerData.newProjectsInIndia[index - 1])}
                                            className='hover:underline cursor-pointer'>{footerData.newProjectsInIndia[index - 1].text}</NavLink>{' '}
                                        | <NavLink
                                            to={`/${item.url}`}
                                            onClick={() => setStatusForNewProject(item)}
                                            className='hover:underline cursor-pointer'>{item.text}</NavLink>
                                    </p>}
                                </>
                            )
                        })}
                    </div>
                </div>
                <div className='text-left mt-4'>
                    <h1 className={styles.title2Bold}>Properties in International Cities</h1>
                    <div className='text-left text-sm mt-2 opacity-90'>
                        {footerData?.internationalProps?.map((item, index) => {
                            return (
                                <>
                                    {index % 2 != 0 && <p>
                                        <NavLink
                                            onClick={() => setStatusForInternationalProp(footerData.internationalProps[index - 1])}
                                            to={`/${footerData.internationalProps[index - 1].url}`}>
                                            <span className='hover:underline cursor-pointer'>{footerData.internationalProps[index - 1].text}</span>
                                        </NavLink>
                                        {' '}
                                        | <NavLink
                                            to={`/${item.url}`}
                                            onClick={() => setStatusForInternationalProp(item)}
                                            className='hover:underline cursor-pointer'>{item.text}</NavLink>
                                    </p>}
                                </>
                            )
                        })}
                    </div>
                </div>
                <div className='bg-gray-200 text-center w-[180px] mt-5 text-black'>
                    <div className='py-2 border-b-[1px] border-black'>
                        <p className=''>Visitor Counter</p>
                    </div>
                    <div className='py-2'>
                        {visitorCount}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
