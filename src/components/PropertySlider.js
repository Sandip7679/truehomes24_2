import React, { useEffect, useState } from 'react';
import { styles } from '../Styles/Styles';
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";
import { NavLink } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from './svgIcons';

const PropertySlider = ({ Data, type }) => {

    return (
        <div>
            <div className='my-10'>
                    {type && <h1 className={styles.title1 + 'text-start mb-5 px-0'}>{type}</h1>}
                    <Carousel
                        swipeable={true}
                        draggable={false}
                        responsive={responsive}
                        // ssr={true}
                        infinite={true}
                        autoPlay={true}
                        autoPlaySpeed={2000}
                        keyBoardControl={true}
                        transitionDuration={2000}
                        // partialVisbile
                        customButtonGroup={<div className=''></div>}
                        containerClass='mx-auto'
                        itemClass='pt-2'
                        customLeftArrow={
                            <div className='absolute'>
                                <button className='sm:hidden bg-black bg-opacity-30 opacity-70 hover:bg-opacity-60 rounded-full flex justify-center items-center p-2'>
                                    <ArrowLeft classname={'w-7 h-7 text-white'} />
                                </button>
                                <button className='hidden sm:flex justify-center items-center rounded-full  bg-white shadow-md p-4'>
                                    <i class="fa-solid fa-arrow-left  text-gray-500 "></i>
                                </button>
                            </div>

                        }
                        customRightArrow={
                            <div className='absolute right-0'>
                                <button className='sm:hidden bg-black bg-opacity-30 opacity-70 hover:bg-opacity-60 rounded-full flex justify-center items-center p-2'>
                                    <ArrowRight classname={'w-7 h-7 text-white'} />
                                </button>
                                <button className='hidden rounded-full sm:flex justify-center items-center bg-white shadow-md p-4'>
                                    <i class="fa-solid fa-arrow-right text-gray-500  "></i>
                                </button>
                            </div>

                        }
                    >
                        {Data.map((item, index) => {
                            return (
                                <div key={index} className=' rounded-md shadow-lg border-[1px] h-full mx-4  group'>
                                    <NavLink to={'/project_details'}>
                                        <div className='relative items-center rounded-t-md overflow-hidden hover:cursor-pointer'>
                                            <img alt='' src={item.image}
                                                className='h-[170px] w-full transform transition-transform hover:scale-110 duration-1000'
                                            />
                                        </div>
                                    </NavLink>

                                    <div className='relative p-3 min-h-[230px] text-left'>
                                        <h1 className={styles.title4}>{item.title}</h1>
                                        <p className='text-sm'>by {item.listedBy}</p>
                                        <p className='text-sm mt-3'>3.5, 4, 5 BHK Apartment </p>
                                        <div className='flex'>
                                            <h1 className='text-sm text-gray-500'>{item.location}</h1>
                                        </div>

                                        <div className='absolute bottom-1'>
                                            <p className={styles.title4 + 'mt-3'}>{'\u20B9'} 25 Cr</p>
                                            {/* <i class="fas fa-rupee-sign"></i> */}
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </Carousel>
            </div>
        </div>
    );
}

const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 1200 },
        items: 3.5,
    },
    desktop: {
        breakpoint: { max: 1200, min: 1024 },
        items: 3,
    },
    tablet: {
        breakpoint: { max: 1024, min: 640 },
        items: 2,
    },
    mobile: {
        breakpoint: { max: 640, min: 0 },
        items: 1,
    },
};

export default PropertySlider;
