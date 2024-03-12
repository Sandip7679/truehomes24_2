import React, { useEffect, useState } from 'react';
import { LinkIcon } from './svgIcons';
import { styles } from '../Styles/Styles';
import { useDispatch, useSelector } from 'react-redux';
import  { UseApi } from '../ApiConf';
import { NavLink } from 'react-router-dom';
import { setPropertyListState, setlocation } from '../Redux/reducer/User';


const TopCItiesFilter = () => {
    const [currCityId, setCurrCityId] = useState(0);
    const [citiesData, setCitiesData] = useState([]);
    const { propertyListState } = useSelector(state => state.User);
    // const { fetchData } = useApi();
    const { FetchData } = UseApi();
    const dispatch = useDispatch();

    useEffect(() => {
        getAllCitiesData();
    }, [propertyListState.propertyStatus?.value]);

    const getAllCitiesData = async () => {
        let data;
        let propertyStatus = propertyListState.propertyStatus.value;
        if (propertyStatus == 'new project') {
            propertyStatus = 'sale';
        }
        try {
            data = await FetchData(`residential-projects-in-top-cities?property_status=${propertyStatus}`, 'GET');
        } catch (err) {
            console.log(err);
        }
        if (data) {
            setCitiesData(data.dataCityNProp);
        }
    }

    const onClickTopResCities = (item) => {
        if (item.property_status == 'rent') {
            dispatch(setPropertyListState({
                ...propertyListState,
                propertyStatus: { text: 'Rent', value: 'rent', for: 'Rent', index: 1 },
            }));
        } else {
            dispatch(setPropertyListState({
                ...propertyListState,
                propertyStatus: { text: 'Buy', value: 'sale', for: 'Sale', index: 0 },
            }));
        }
        let location = { country: '90', city: citiesData[currCityId]?.cityName, code: citiesData[currCityId].cityId, location: item.locality, locationName: item.localityName, project: '', projectName: null, area: citiesData[currCityId]?.cityName }
        localStorage.setItem('location', JSON.stringify(location));
        dispatch(setlocation(location));
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    return (
        <div className='px-[5%] pb-10 bg-gray-50 pt-14'>
            <h1 className={styles.title1}>Browse Residential Projects In Top Cities</h1>
            <div className='w-[95%] sm:flex justify-between pt-2 border-b-[1px] mt-10 border-b-gray-200'>
                {/* <button className='p-1 focus:border-b-2 focus:border-gray-600 active:border-b-2 active:border-gray-600'>Ahmedabad</button> */}
                {citiesData?.map((item, index) => {
                    return (
                        <button key={index}
                            onClick={() => setCurrCityId(index)}
                            className={`p-1 hover:opacity-60 animated-border px-2 ${index === currCityId ? 'border-b-[1px] border-gray-600' : ''}`}>
                            {item.cityName}
                        </button>
                    )
                })}

            </div>
            {/* <div className='flex flex-wrap mt-5'> */}
            <div className='mt-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2'>
                {citiesData[currCityId]?.props?.map((item, index) => {
                    return (
                        <button
                            onClick={() => onClickTopResCities(item)}
                            key={index} className='text-left text-sm text-gray-600'>
                            <NavLink to={`/${item.link}`} className='flex hover:underline'>
                                {/* {console.log('item ...',item)} */}
                                <span><LinkIcon classname={'h-4 w-4 mt-1 mr-1'} /></span>
                                <span className='truncate'>{item.text}</span>
                            </NavLink>
                        </button>
                    )
                })}
            </div>

            {/* </div> */}
        </div>
    );
}

export default TopCItiesFilter;
