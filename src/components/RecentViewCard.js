import React from 'react';
import { styles } from '../Styles/Styles';
import { LocationIcon } from './svgIcons';
import Carousel from 'react-multi-carousel';

const RecentViewCard = ({ title, Data }) => {
    return (
        <div className='px-[1%] bg-white py-5 pb-2 shadow-sm sm:min-w-[280px] lg:min-w-[350] cursor-pointer'>
            <h1 className={styles.title2 + 'text-gray-700 pl-2 sm:pl-5'}>{title}</h1>
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
            // customButtonGroup={<div></div>}
            // customLeftArrow={
            //     <button className='absolute  -left-[2%] md:-left-5'>
            //         <ArrowLeft />
            //     </button>
            // }
            // customRightArrow={
            //     <button className='absolute -right-[2%] md:-right-5'>
            //         <ArrowRight />
            //     </button>
            // }
            >
                {Data.map((item, index) => {
                    return (
                        <div className='p-2 sm:p-5'>
                            <div className='relative items-center border-gray-300 border-[1px] rounded-xl overflow-hidden  hover:cursor-pointer'>
                                <img alt='' src={item.image}
                                    className='w-full h-[240px] transform transition-transform hover:scale-110 duration-1000'
                                />
                                <div className='flex absolute gap-2 top-5 right-5'>
                                    <button className={styles.labelBtn + 'bg-green-600'}>
                                        Featured
                                    </button>
                                    <button className={styles.labelBtn + 'bg-orange-600'}>
                                        For Sale
                                    </button>
                                </div>
                            </div>
                            <div className='mt-5 pl-2'>
                                <p className={styles.textMedium + 'text-gray-700'}>{item.title}</p>
                                <div className='flex mt-2'>
                                    <LocationIcon classname={'h-4 w-4 mt-1'} />
                                    <p className='ml-1 text-gray-500'>{item.location}</p>
                                </div>
                                <p className={styles.textMedium + 'font-semibold ml-1 mt-8'}>{'\u20B9'} {item.price}</p>
                            </div>
                        </div>
                    )
                })}
            </Carousel>

        </div>
    );
}

const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 1200 },
        items: 1,
    },
    desktop: {
        breakpoint: { max: 1200, min: 1024 },
        items: 1,
    },
    tablet: {
        breakpoint: { max: 1024, min: 764 },
        items: 1,
    },
    mobile: {
        breakpoint: { max: 764, min: 0 },
        items: 1,
    },
};

export default RecentViewCard;
