import React from 'react';
import Carousel from 'react-multi-carousel';
import { NavLink } from 'react-router-dom';
import { styles } from '../Styles/Styles';
import { ArrowLeft, ArrowRight } from './svgIcons';
// import { ArrowLeft, ArrowRight } from './svgIcons';


// import { Bedroom, LandArea } from './svgIcons';
// import possession2 from '../assets/Icons/possession2.png'


const RecentAdded = ({ Data, func }) => {
    return (
        <div className='mt-10'>
            <h1 className={styles.title1 + 'text-start px-0'}>Recnetly Added</h1>
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
                itemClass='pt-10'
                containerClass='mx-auto'

                customButtonGroup={<div></div>}
                customLeftArrow={
                    // <button className='absolute rounded-full flex justify-center items-center bg-white shadow-md p-5'>
                    //     <i class="fa-solid fa-arrow-left "></i>
                    // </button>
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
                    // <button className='absolute right-1 rounded-full flex justify-center items-center bg-white shadow-md p-5'>
                    //     <i class="fa-solid fa-arrow-right "></i>
                    // </button>
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
                {Data?.length && Data.map((item, index) => {
                    return (
                        <div key={index} className='rounded-xl shadow-lg border-[1px] mx-4 h-full group'>
                            <NavLink to={'/project_details'}>
                                <div className='relative items-center rounded-lg overflow-hidden hover:cursor-pointer'>
                                    <img alt='' src={item.image}
                                        className='h-[170px] w-full transform transition-transform hover:scale-110 duration-1000'
                                    />
                                </div>
                            </NavLink>

                            <div className='relative p-3 min-h-[260px] text-left'>
                                <h1 className={styles.title4}>{item.title}</h1>
                                <p className='text-sm mt-4'>{item.area} build up area</p>
                                <div className='flex'>
                                    {/* <span className=''>
                                                <LocationIcon classname={'h-5 w-4 mt-[0.5px]'} />
                                            </span> */}
                                    <h1 className='text-sm text-gray-500'>{item.location}</h1>
                                </div>
                                <div className='absolute bottom-2'>
                                    <p className={styles.title4 + 'mt-3'}>{'\u20B9'} 25 Cr</p>
                                    <button
                                        onClick={() => func(item)}
                                        className={styles.btn + 'bg-green-600 hover:bg-green-700 px-4 py-1 mt-2'}>
                                        <p className='text-white'>Contact</p>
                                    </button>
                                </div>

                            </div>

                        </div>
                    )
                })}
            </Carousel>
        </div>
    );
}

export default RecentAdded;

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
