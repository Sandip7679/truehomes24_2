import React, { useEffect, useState } from 'react';
import { LinkIcon } from './svgIcons';
import { styles } from '../Styles/Styles';
import { useSelector } from 'react-redux';
import useApi from '../ApiConf';


const TopCItiesFilter = () => {
    const [currCityId, setCurrCityId] = useState(0);
    const [citiesData,setCitiesData] = useState([]);
    const {propertyListState} = useSelector(state=>state.User);
    const { fetchData} = useApi();

    useEffect(() => {
        getAllCitiesData();
    }, [propertyListState.propertyStatus?.value]);

    const getAllCitiesData = async () => {
        let data;
        try {
            data = await fetchData(`residential-projects-in-top-cities?property_status=${propertyListState.propertyStatus.value}`, 'GET');
        } catch (err) {
            console.log(err);
        }
        if (data) {
            setCitiesData(data.dataCityNProp);
        }
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
                            className={`p-1 hover:opacity-60 animated-border px-2 ${index=== currCityId ? 'border-b-[1px] border-gray-600' : ''}`}>
                            {item.cityName}
                        </button>
                    )
                })}

            </div>
            {/* <div className='flex flex-wrap mt-5'> */}
                <div className='mt-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 '>
                    {citiesData[currCityId]?.props?.map((item, index) => {
                        return (
                            <button key={index} className='text-left text-sm text-gray-600 mx-4 mt-2'>
                                <div className='flex hover:underline'>
                                    <span><LinkIcon classname={'h-4 w-4 mt-1 mr-1'} /></span>
                                    <span className=''>{item.text}</span>
                                </div>
                            </button>
                        )
                    })}
                </div>

            {/* </div> */}
        </div>
    );
}

export default TopCItiesFilter;
