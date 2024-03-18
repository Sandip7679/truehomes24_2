import React, { useEffect, useState } from 'react';
import Carousel from 'react-multi-carousel';
import { UseApi } from '../ApiConf';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { setOutsideFilterState, setPropertyListState } from '../Redux/reducer/User';
// import { styles } from '../Styles/Styles';


const PropertyForSlides = () => {
    // const { fetchData } = useApi();
    const { FetchData } = UseApi();
    const dispatch = useDispatch();
    const { currLocation, propertyListState,outSideFilterState } = useSelector(state => state.User);
    const [propertyInForData, setPropertyInForData] = useState([]);
    const [viewMoreStatus, setViewMoreStatus] = useState(null);

    useEffect(() => {
        getPropertyInFor();
    }, [currLocation.code, propertyListState.propertyStatus]);
    const getPropertyInFor = async () => {
        let data;
        let propStatus = propertyListState.propertyStatus.value == 'rent' ? 'rent' : 'sale';
        try {
            data = await FetchData(`listing-bottom-content?city=${currLocation.code}&property_status=${propStatus}`, 'GET');
            console.log('data.... data...', data);
            console.log('currLocation.code rsc...', currLocation.code,'propStatus..',propStatus);
        } catch (err) {
            console.log('err... data..', err);
        }
        if (data?.length) {
            setPropertyInForData(data);
            // console.log('data.count..', data.count);
            // setPropertyCount(data.count);
        }
    }

    const setStatusForLink = (item) => {
        let propstatus;
        let minPrice = '';
        let maxPrice = '';
        if (item.property_status == 'rent') {
            propstatus = { text: 'Rent', value: 'rent', for: 'Rent', index: 0 };
        } else {
            propstatus = { text: 'Buy', value: 'sale', for: 'Sale', index: 1 };
        }
        if (item.min_price && !item.max_price) {
            minPrice = 0;
            maxPrice = item.minPrice;
        } else if (!item.min_price && item.max_price) {
            minPrice = item.max_price;
            maxPrice = ''
        }
        else if (item.min_price && item.max_price) {
            minPrice = item.min_price;
            maxPrice = item.max_price;
        }
        dispatch(setPropertyListState({
            ...propertyListState,
            propertyStatus: propstatus,
            BHKtype:item.bedroom?item.bedroom : '',
            propertyTypes: item.property_type ? `${item.property_type}` : '',
            priceRange: [minPrice, maxPrice],
            moreStatus: { furnishingTypes: '', bathrooms: '', minArea: '', maxArea: '', newResale: '', constructionStatus: '', facing: '', amenities: '', listedBy:item.listed_by?item.listed_by : '', floor: '' },
            sortBy: 'featured',
            clearAll: false
        }));
        // dispatch(setOutsideFilterState({...outSideFilterState,propertyTypes:true}));
        window.scrollTo({ top: 0, behavior: 'smooth' });
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
                            {console.log('item..proinfrodaa...',item)}
                            <p className='mb-2 to-gray-200 font-semibold'>{item.title}</p>
                            {item?.details?.length && item?.details?.map((itm, ind) => {
                                return (
                                    <>
                                        {(ind < 5 || viewMoreStatus?.[index]) &&
                                            <p key={ind}
                                                onClick={() => setStatusForLink(itm)}
                                                className='text-sm my-2 hover:opacity-80 hover:cursor-pointer text-gray-600'>
                                                <NavLink to={`/${itm?.link}`}>{itm?.text}</NavLink>
                                            </p>
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
