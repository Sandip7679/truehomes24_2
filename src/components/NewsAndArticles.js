import React from 'react';
import Carousel from 'react-multi-carousel';
import { ArrowLeft, ArrowRight } from './svgIcons';
import { styles } from '../Styles/Styles';
import { NavLink } from 'react-router-dom';

const NewsAndArticles = ({ Data, type }) => {
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
                            <div key={index} className=' rounded-md shadow-lg border-[1px] h-full mx-4 group'>
                                <NavLink to={''}>
                                    <div className='relative items-center rounded-t-md overflow-hidden hover:cursor-pointer'>
                                        <img alt='' src={item.cover_url}
                                            className='h-[170px] w-full transform transition-transform hover:scale-110 duration-1000'
                                        />
                                    </div>
                                </NavLink>

                                <div className='relative p-3 text-left border-b-[1px] border-gray-300'>
                                    <p className={styles.title4}>{item.title}</p>
                                    <p className='text-sm text-gray-600 '>{item.about}</p>
                                </div>
                                <div className='px-3 pb-3 pt-1 flex justify-between text-sm text-gray-600'>
                                    <p>{item.writer}</p>
                                    <p>{item.posted_on}</p>
                                </div>
                            </div>
                        )
                    })}
                </Carousel>
                {!Data.length &&
                    <div className='text-center text-red-500'>
                        Not Found !
                    </div>
                }
            </div>
        </div>
    );
}

export default NewsAndArticles;

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
