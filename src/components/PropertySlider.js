import React, { useEffect, useState } from 'react';
import { styles } from '../Styles/Styles';
import { Apartment, ArrowLeft, ArrowRight, Bedroom, LandArea, LocationIcon, Possession } from './svgIcons';
import possession2 from '../assets/Icons/possession2.png'
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";



let count = 0;
const PropertySlider = ({Data}) => {

    const [slides, setSlides] = useState([]);
    const [currIndex, setCurrIndex] = useState(0);

    useEffect(() => {

        // setInterval(() => {
        //     count++;
        //     // let arr = [];
        //     // for(let i = 0; i < 4; i++){
        //     //   arr[i] = Data[(count+i)%Data.length]
        //     // }
        //     // setSlides(arr);
        //     setCurrIndex(count % Data.length);
        // }, 5000);

        // for (let i = 0; i < 4; i++) {
        //     arr[i] = Data[(count + i) % Data.length]
        // }
        // setSlides(arr);
    })

    // const nextSlide = ()=>{

    // }
    // const ButtonGroup = ({ next, previous, goToSlide, ...rest }) => {
    //     const { carouselState: { currentSlide } } = rest;
    //     return (
    //         <div className="absolute flex justify-between"> 
    //             <ArrowLeft onClick={() => previous()} />
    //             <ArrowRight onClick={() => next()} />
    //             {/* <ButtonThree onClick={() => goToSlide(currentSlide + 1)}> Go to any slide </ButtonThree> */}
    //         </div>
    //     );
    // };

    return (
        <div>
            <div className='w-full mb-10'>
                <div className='mt-10 px-11'>
                    <Carousel
                        swipeable={true}
                        draggable={false}
                        responsive={responsive}
                        // ssr={true}
                        infinite={true}
                        autoPlay={true}
                        autoPlaySpeed={2000}
                        keyBoardControl={true}
                        transitionDuration={1000}
                        // customButtonGroup={<ButtonGroup/>}
                    >
                        {Data.map((item, index) => {
                            return (
                                <div className='rounded-xl shadow-lg border-[1px] h-full mx-5'>
                                    <div className='items-center h-[200]'>
                                        <img src={item.image} className='rounded-xl h-[220px] w-full' />
                                    </div>
                                    <div className='p-3 text-left'>
                                        <h1 className={styles.title2}>{item.title}</h1>
                                        <div className='flex mt-5'>
                                            <span className=''>
                                                <LocationIcon classname={'h-5 w-4 mt-[0.5px]'} />
                                            </span>
                                            <h1 className='text-base text-gray-500 ml-1'>{item.location}</h1>
                                        </div>

                                        <div className='flex mt-4'>
                                            <span className=''>
                                                <Apartment classname={'h-5 w-4 mt-[1px] opacity-80'} />
                                            </span>
                                            <h1 className='text-sm ml-2'>{item.propertyType}</h1>
                                        </div>
                                        <div className='flex mt-1'>
                                            <span className=''>
                                                <LandArea classname={'h-5 w-4 mt-[1px]'} />
                                            </span>
                                            <h1 className='text-sm ml-2'>{item.area}</h1>
                                        </div>
                                        <div className='flex mt-1'>
                                            <span className=''>
                                                <Apartment classname={'h-5 w-4 mt-[1px] opacity-80'} />
                                            </span>
                                            <h1 className='text-sm ml-2'>{item.area}</h1>
                                        </div>
                                        {item.bedroom && <div className='flex mt-1'>
                                            <span className=''>
                                                <Bedroom classname={'h-5 w-4 mt-[1px] opacity-80'} />
                                            </span>
                                            <h1 className='text-sm ml-2'>{item.bedroom}</h1>
                                        </div>}
                                        {item.possission && <div className='flex mt-1'>
                                            <span className=''>
                                                <img src={possession2} className='h-5 w-4 mt-[1px] opacity-70' />
                                            </span>
                                            <h1 className='text-sm ml-2'>{item.possission}</h1>
                                        </div>}

                                    </div>
                                </div>
                            )
                        })}
                    </Carousel>
                </div>

                {/* <div className='flex justify-between gap-5 my-5 mt-10 overflow-hidden'>
                    <button className='h-full mr-5' onClick={()=>{
                        if(currIndex>0){
                            setCurrIndex(currIndex-1);
                        }
                    }}>
                        <ArrowLeft />
                    </button>
                    {Data.map((item, index) => {
                        return (
                            <>
                                {(index == currIndex || index == (currIndex+1)%Data.length || index == (currIndex+2)%Data.length || index == (currIndex+3)%Data.length) &&
                                    
                                    <div key={index} className='rounded-xl shadow-lg border-[1px] flex-1'>
                                    <div className='items-center'>
                                        <img src={item.image} className='rounded-xl h-[200px] w-[100%]' />
                                    </div>
                                    <div className='p-3 text-left'>
                                        <h1 className={styles.title2}>{item.title}</h1>
                                        <div className='flex mt-5'>
                                            <span className=''>
                                                <LocationIcon classname={'h-5 w-4 mt-[0.5px]'} />
                                            </span>
                                            <h1 className='text-base text-gray-500 ml-1'>{item.location}</h1>
                                        </div>

                                        <div className='flex mt-4'>
                                            <span className=''>
                                                <Apartment classname={'h-5 w-4 mt-[1px] opacity-80'} />
                                            </span>
                                            <h1 className='text-sm ml-2'>{item.propertyType}</h1>
                                        </div>
                                        <div className='flex mt-1'>
                                            <span className=''>
                                                <LandArea classname={'h-5 w-4 mt-[1px]'} />
                                            </span>
                                            <h1 className='text-sm ml-2'>{item.area}</h1>
                                        </div>
                                        <div className='flex mt-1'>
                                            <span className=''>
                                                <Apartment classname={'h-5 w-4 mt-[1px] opacity-80'} />
                                            </span>
                                            <h1 className='text-sm ml-2'>{item.area}</h1>
                                        </div>
                                        {item.bedroom && <div className='flex mt-1'>
                                            <span className=''>
                                                <Bedroom classname={'h-5 w-4 mt-[1px] opacity-80'} />
                                            </span>
                                            <h1 className='text-sm ml-2'>{item.bedroom}</h1>
                                        </div>}
                                        {item.possission && <div className='flex mt-1'>
                                            <span className=''>
                                                <img src={possession2} className='h-5 w-4 mt-[1px] opacity-70' />
                                            </span>
                                            <h1 className='text-sm ml-2'>{item.possission}</h1>
                                        </div>}

                                    </div>
                                </div>}
                            </>
                        )
                    })}
                    <button className='h-full ml-5' onClick={()=>{
                        if(currIndex<Data.length-1){
                            setCurrIndex(currIndex+1);
                        }
                    }}>
                        <ArrowRight />
                    </button>
                </div> */}
            </div>
        </div>
    );
}

const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 1200 },
        items: 4,
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

export default PropertySlider;
