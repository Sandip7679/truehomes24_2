import React, { useEffect, useState } from 'react';
import Carousel from 'react-multi-carousel';
import useApi from '../ApiConf';
import { useSelector } from 'react-redux';
// import { styles } from '../Styles/Styles';

const bestBudgetSearch = [
    'below 30 lakhs', 'between 30 to 50 lakhs',
    'between 50 to 75 lakhs', 'between 75 to 1 crore', 'between 1 to 1.75 crore',
    'above 1.75 crore'
];

const propertyOption = [
    'Verified Property in Bangalore', 'Property in Bangalore by owner', 'New Property in Bangalore',
    'Apartment in Bangalore by owner', 'Apartment in Bangalore', 'Independent House/Billa in Bangalore',
    // 'Builder Floor in Bangalore', 'Serviced Apartment/PG in Bangalore', 'Commercial Land in Bangalore'
]
const commertialOptions = [
    'Commertial Property for sale in Bangalore',
    'Office Space in Bangalore',
    'Shop/Showroom in Bangalore',
    'New commertial property in Bangalore'
]

const PropertyForSlides = () => {
    const { fetchData } = useApi();
    const { currLocation, propertyListState } = useSelector(state => state.User);
    const [propertyInForData, setPropertyInForData] = useState([]);
    const [viewMoreStatus, setViewMoreStatus] = useState(null);

    useEffect(() => {
        getPropertyInFor();
    }, [currLocation.code, propertyListState.propertyStatus]);
    const getPropertyInFor = async () => {
        let data;

        try {
            data = await fetchData(`listing-bottom-content?city=${currLocation.code}&property_status=${propertyListState.propertyStatus.value}`, 'GET');
            console.log('data.... data...', data);
        } catch (err) {
            console.log('err... data..', err);
        }
        if (data?.length) {
            setPropertyInForData(data);
            // console.log('data.count..', data.count);
            // setPropertyCount(data.count);
        }
    }

    return (
        <div className='item-center w-full'>
            <Carousel
                swipeable={true}
                draggable={false}
                responsive={responsive}
                // ssr={true}
                // infinite={true}
                // autoPlay={true}
                // autoPlaySpeed={2000}
                // transitionDuration={2000}
                keyBoardControl={true}

            >

                {propertyInForData?.map((item, index) => {
                    return (
                        <div className='w-full self-center pl-[15%]'>
                            <p className='mb-2 to-gray-200 font-semibold'>{item.title}</p>
                            {item?.details?.map((itm, ind) => {
                                return (
                                    <>
                                        {(ind < 5 || viewMoreStatus?.[index]) &&
                                            <p key={ind} className='text-sm my-2 hover:opacity-80 hover:cursor-pointer text-gray-600'>{itm.text}</p>
                                        }
                                    </>
                                )
                            })}
                            {
                                <button
                                    onClick={() => setViewMoreStatus(pre => ({ ...pre, [index]: !viewMoreStatus?.[index] }))}
                                    className='underline font-semibold text-gray-500 hover:text-gray-600'>
                                    {viewMoreStatus?.[index] ? 'View Less' : 'View More'}
                                </button>
                            }
                        </div>
                    )
                })}

                {/* <div className='w-full self-center pl-[15%]'>
                    <p className='mb-2 to-gray-200 font-semibold'>BHK-WISE PROPERTY IN BANGALORE</p>
                    {['1', '2', '3', '4', '4+'].map((item, index) => {
                        return (
                            <p key={index} className='text-sm my-2 hover:opacity-80 hover:cursor-pointer text-gray-600'>{item}BHK Apartment in Bangalore</p>
                        )
                    })}
                </div>
                <div className='w-full self-center pl-[15%]'>
                    <p className='mb-2 to-gray-200 font-semibold'>BEST BUDGET SEARCHES IN BANGALORE</p>
                    {bestBudgetSearch.map((item, index) => {
                        return (
                            <p key={index} className='text-sm my-2 hover:opacity-80 hover:cursor-pointer text-gray-600'>Apartment in Bangalore {item}</p>
                        )
                    })}
                </div>
                <div className='w-full self-center pl-[15%]'>
                    <p className='mb-2 to-gray-200 font-semibold'>PROPERTY OPTIONS IN BANGALORE</p>
                    {propertyOption.map((item, index) => {
                        return (
                            <p key={index} className='text-sm my-2 hover:opacity-80 hover:cursor-pointer text-gray-600'>{item}</p>
                        )
                    })}
                </div>
                <div className='w-full self-center pl-[15%]'>
                    <p className='mb-2 to-gray-200 font-semibold'>COMMERCIAL INVESTMENT OPTIONS IN BANGALORE</p>
                    {commertialOptions.map((item, index) => {
                        return (
                            <p key={index} className='text-sm my-2 hover:opacity-80 hover:cursor-pointer text-gray-600'>Apartment in Bangalore {item}</p>
                        )
                    })}
                </div> */}
            </Carousel>
        </div>
    );
}

export default PropertyForSlides;

const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 1200 },
        items: 3,
    },
    desktop: {
        breakpoint: { max: 1200, min: 1024 },
        items: 3,
    },
    tablet: {
        breakpoint: { max: 1024, min: 764 },
        items: 2,
    },
    mobile: {
        breakpoint: { max: 764, min: 0 },
        items: 1,
    },
};
