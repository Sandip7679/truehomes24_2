import React, { useEffect, useRef, useState } from 'react';
import Header from '../components/Header/Header';
import TopSearchNavBar from '../components/TopSearchNavBar';
import { styles } from '../Styles/Styles';
import PropertyListCard from '../components/PropertyListCard';
import RecentViewCard from '../components/RecentViewCard';
import FAQs from '../components/FAQs';
import Footer from '../components/Footer';
import TopCItiesFilter from '../components/TopCItiesFilter';
import { NavLink, useLocation } from 'react-router-dom';
import PropertyForSlides from '../components/PropertyForSlides';
import Contact from '../components/Contact';
import { useDispatch, useSelector } from 'react-redux';
import useApi, { UseApi } from '../ApiConf';
import Pagenation from '../components/Pagenation';
import { setCurrPage } from '../Redux/reducer/User';
import loader from '../assets/Icons/loader.gif';
import ScrollUp from '../components/ScrollUp';

const Localities = [
    { location: 'Shela (40)' },
    { location: 'Prahlad Nagar (30)' },
    { location: 'Sanathal (15)' },
    { location: 'Gota (11)' },
    { location: 'south Bhopal (9)' },
    { location: 'south Bhopal (9)' },
    { location: 'south Bhopal (9)' },
    { location: 'south Bhopal (9)' },
    { location: 'south Bhopal (9)' },
    { location: 'Shela (40)' },
    { location: 'Shela (40)' },
    { location: 'Shela (40)' },
    { location: 'Shela (40)' },
    { location: 'Shela (40)' },
]

const propertyTypes = ['Localities', 'Property Status', 'Budget'];

const PropertyList = () => {
    const [contactModalStatus, setcontactModalStatus] = useState({ show: false, data: {} });
    const [propertyType, setPropertyType] = useState('Localities');
    const { login_status, currLocation, propertyListState, currPage, pageRefresh } = useSelector(state => state.User);
    const [propertyListData, setPropertyListData] = useState({ currPage: 1, totalProperty: null, lastPage: null, propertyList: [] });
    const [rightListData, setRightListData] = useState({ recentView: [], newProject: [], loading: true });
    const [loadingList, setLoadingList] = useState(true);
    const { fetchData } = useApi();
    const { FetchData } = UseApi();
    const dispatch = useDispatch();
    const scrollUpTarget = useRef();
    const listPage = useRef();
    const routePath = useLocation();


    // useEffect(()=>{
    //     if(pageRefresh){
    //         console.log('page refresh....',routePath.pathname);
    //     }
    // },[]);

    useEffect(() => {
        if (currPage > 1) {
            dispatch(setCurrPage(1));
        }
    }, [])

    useEffect(() => {
        // console.log('propertyListState...', propertyListState);
        // console.log('currLocation...', currLocation);
        getPropertyList(1);
    }, [propertyListState, currLocation]);

    useEffect(() => {
        getPropertyList(currPage);
    }, [currPage]);

    useEffect(() => {
        getRightListData();
    }, [currLocation]);

    const getRightListData = async () => {
        let data;
        try {
            data = await fetchData(`listing-right-side-content?city=${currLocation.code}`, 'GET');
        } catch (err) {
            console.log(err);
        }
        if (data) {
            // console.log('rightlistdata....', data);
            setRightListData({ recentView: data.recentView, newProject: data.newProjcts, loading: false });
        }
    }



    // const getLocations = async () => {
    //     let data;
    //     let quary = `${searchStatus.quary}` +
    //         `&type=${searchStatus.type}` +
    //         `&city=${searchStatus.city}` +
    //         `&locality=${searchStatus.locality}`;
    //     try {
    //         data = await fetchData('home-search?query=' + quary, 'GET');
    //         // console.log('data.... data...', data)
    //     } catch (err) {
    //         console.log('err... data..', err);
    //         setNoSuggestion(true);
    //     }
    //     if (data?.content) {
    //         console.log('searchdata...', data);
    //         setSearchResult(data.content);
    //         setNoSuggestion(true);
    //     }
    // }


    const onClickContactBtn = (item) => {
        setcontactModalStatus({
            show: true, data: {
                owner: item.userDetails?.name,
                type: item.userAs,
                icon: item.userDetails?.image
            }
        });
    }
    const onCloseContact = () => {
        setcontactModalStatus({ show: false, data: null });
    }
    // const getStatusString = (statusArr) => {
    //     console.log('statusAr..', statusArr);
    //     if (statusArr.length > 0) {
    //         return statusArr.filter(it => it).join('-');
    //     } else {
    //         return '';
    //     }
    // }

    const getPropertyList = async (currpage) => {
        setLoadingList(true);
        let data;
        // console.log('propertyListState...', propertyListState);
        // console.log('currLocation...', currLocation);
        let quary = `property_status=${propertyListState?.propertyStatus?.value == 'new projects' ? 'new project' : propertyListState?.propertyStatus?.value}` +
            `&country=${currLocation.country}&city=${currLocation.code}&locality=${currLocation.location}` +
            `&bedroom=${propertyListState?.BHKtype}` +
            `&property_type=${propertyListState.propertyTypes}` +
            `&min_price=${propertyListState.priceRange[0]}&max_price=${propertyListState.priceRange[1]}` +
            // `&min_price=&max_price=` +
            `&furnishing=${propertyListState.moreStatus.furnishingTypes}` +
            `&bathroom=${propertyListState.moreStatus.bathrooms}` +
            `&min_area=${propertyListState.moreStatus.minArea}&max_area=${propertyListState.moreStatus.maxArea}` +
            `&availableFor=${propertyListState.moreStatus.newResale}` +
            `&availability=${propertyListState.moreStatus.constructionStatus}` +
            `&facing=${propertyListState.moreStatus.facing}` +
            `&floor=${propertyListState.moreStatus.floor}` +
            `&amenities=${propertyListState.moreStatus.amenities}` +
            `&listed_by=${propertyListState.moreStatus.listedBy}` +
            `&verified=&page=${currpage}`
        let endpoint = 'property-list?' + quary;

        try {
            data = await FetchData(endpoint, 'GET');
        } catch (err) {
            console.log('err fetching propertylist...', err);
            setLoadingList(false);
        }
        if (data) {
            // console.log('data.totalProperty..', data.totalProperty)
            let lastpage = Math.floor(data.totalProperty / 25) + 1;
            setPropertyListData({ currPage: data.page, totalProperty: data.totalProperty, lastPage: lastpage, propertyList: data.property });
            setLoadingList(false);
        }
    }

    return (
        <div ref={listPage} className='mx-auto' >
            <Header />
            <div className={'mt-[50px] ' + (loadingList && 'opacity-70')}>
                <TopSearchNavBar pageRef={listPage} />
                <div ref={scrollUpTarget} className='px-[2%] pt-[250px] sm:pt-[140px] lg:pt-28  container mx-auto py-5'>
                    <div className={styles.textMedium}>
                        <NavLink className={'hover:opacity-70'} to="/">Home</NavLink> {'> '}
                        {currLocation.locationName ? (`Property for ${propertyListState.propertyStatus.for} in ${currLocation.locationName} >`) : ''}
                        Property for {propertyListState.propertyStatus.for} in {currLocation.city} </div>
                    <div className='lg:flex gap-5'>

                        {<div className='mt-5 tracking-wide lg:w-[64%]'>
                            <div>
                                <p className={styles.textMedium}>Showing {(currPage - 1) * 25 + 1}-{(currPage - 1) * 25 + propertyListData?.propertyList?.length} of {propertyListData.totalProperty} property for {propertyListState?.propertyStatus?.for}</p>
                                <p className={styles.title3 + 'mt-1'}>Property for {propertyListState.propertyStatus.for} in {currLocation.locationName ? (currLocation.locationName + ', ') : ''} {currLocation.city}</p>
                                <div className='flex gap-2 border-b-[1px] mt-2 border-b-gray-200'>
                                    {propertyTypes.map((item, index) => {
                                        return (
                                            <button key={index}
                                                onClick={() => setPropertyType(item)}
                                                className={(propertyType === item ? 'border-b-[1px]' : '') + ' hover:border-b-[1px] border-b-gray-700 pb-1 mr-3'}>
                                                <p className={styles.textMedium + ''}>{item}</p>
                                            </button>
                                        )
                                    })}

                                </div>
                                <div className='shadow-sm rounded flex flex-wrap max-h-[140px] border-[1px] border-gray-200 mt-5 mx-2 overflow-y-auto p-2'>
                                    {Localities.map((item, index) => {
                                        return (
                                            <button key={index} className={styles.btn + 'm-1 hover:bg-orange-50 border-orange-500'}>
                                                <p className='text-sm'> {item.location}</p>
                                            </button>
                                        )
                                    })}
                                </div>
                                {loadingList && <div className="fixed top-[100px] right-1/2 flex justify-center items-center mt-16">
                                    {/* <i class={"fa-solid fa-spinner" + styles.loading}></i> */}
                                    {/* <img alt="Please wait.." title="Please wait.." src="https://www.truehomes24.com/assets/front_end/images/loader.gif" /> */}
                                    <img alt="Please wait.." title="Please wait.." src={loader} />
                                </div>}
                                <div className='min-h-screen'>
                                    {propertyListData?.propertyList?.map((item, index) => {
                                        return (
                                            <PropertyListCard key={index} func={onClickContactBtn} Data={item} />
                                        )
                                    })}

                                    {(!loadingList && propertyListData?.propertyList?.length == 0) && <div className={styles.noDataFound}>
                                        No Data Available, Please try again.
                                    </div>}
                                </div>
                                {propertyListData?.propertyList?.length != 0 && <div>
                                    <Pagenation lastPage={propertyListData.lastPage} />
                                </div>}
                                <div className='mt-10'>
                                    <FAQs />
                                </div>
                            </div>
                        </div>}

                        <div className={'w-full lg:w-[35%] bg-slate-50 py-4 px-1 ' + (rightListData.loading && 'opacity-50 animate-pulse bg-white')}>
                            <div>
                                <RecentViewCard title={'Recent View Property'} Data={rightListData.recentView} />
                            </div>
                            <div className='mt-10'>
                                <RecentViewCard title={'New Project Property'} Data={rightListData.newProject} />
                            </div>
                        </div>
                    </div>

                </div>
                <div className='px-[2%] py-5'>
                    <p className={styles.title1 + 'mb-8 text-left'}>Property In {currLocation.city} For {propertyListState.propertyStatus.for}</p>
                    <PropertyForSlides />
                </div>
            </div>
            <ScrollUp targetElement={scrollUpTarget} />
            {contactModalStatus.show && <Contact Data={contactModalStatus.data} func={onCloseContact} />}
            <TopCItiesFilter />
            <Footer />
        </div>
    );
}

export default PropertyList;
