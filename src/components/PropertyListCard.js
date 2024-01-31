import React from 'react';
import { Apartment, Bedroom, FavouriteIcon, LandArea, LocationIcon } from './svgIcons';
import { styles } from '../Styles/Styles';
import possession2 from '../assets/Icons/possession2.png'
import userIcon from '../assets/images/user.svg'
import { NavLink } from 'react-router-dom';



const PropertyListCard = ({ Data, func }) => {

    return (
        <div className='rounded-xl flex flex-wrap lg:flex-nowrap shadow-lg border-[1px] h-full mt-6 mx-2 group'>
            <NavLink to={'/project_details'} className='items-center relative border-gray-300 w-[100%] md:min-w-[220px]  h-full border-[1px] rounded-xl overflow-hidden  hover:cursor-pointer'>
                <img alt='' src={Data.image}
                    className='w-full h-[240px] transform transition-transform hover:scale-110 duration-1000'
                />
                <div className='h-[70px] flex justify-between items-center p-2 bg-gradient-to-b from-gray-100 to-gray-400 
                  group-hover:bg-gradient-to-b group-hover:form-gray-300 group-hover:to-black'>
                    <div className='flex gap-1'>
                        <img alt='' src={userIcon} className='h-10 w-10 hidden group-hover:block' />
                        <p className='text-base hidden group-hover:block text-white mt-2'>{Data.owner}</p>
                    </div>

                    <div className=' hidden group-hover:block rounded-full p-1 bg-black bg-opacity-60'>
                        <FavouriteIcon classname={'text-white'} />
                    </div>
                </div>
                <div className='flex absolute gap-2 top-5 right-5'>
                    <button className={styles.labelBtn + 'bg-green-600'}>
                        Featured
                    </button>
                    <button className={styles.labelBtn + 'bg-orange-600'}>
                        Sale
                    </button>
                </div>
            </NavLink>

            <div className='p-3 pb-0 min-w-[65%] text-left h-full ml-[2%]'>
                <div className='min-h-[205px]'>
                    <div className='flex justify-between'>
                        <p className={styles.title4 + 'cursor-pointer hover:text-gray-500'}>{Data.title}</p>
                        <img alt='' src='https://www.truehomes24.com/assets/front_end/images/property/checkmark.svg' className='h-8 w-8 ml-2' />
                    </div>
                    <div className='flex mt-3'>
                        <span className=''>
                            <LocationIcon classname={'h-5 w-4 mt-[0.5px]'} />
                        </span>
                        <h1 className='text-base text-gray-500 ml-1'><p className={styles.textMedium + 'text-gray-500 font-medium inline-block'}>Society: </p>
                            {' '}{Data.location}
                        </h1>
                    </div>
                    <div className='flex flex-wrap mt-1'>
                        <div className='flex w-1/2 mt-2'>
                            <span className=''>
                                <Apartment classname={'h-5 w-4 mt-[1px] opacity-80'} />
                            </span>
                            <h1 className='text-sm ml-2'>{Data.propertyType}</h1>
                        </div>
                        <div className='flex w-1/2 mt-2'>
                            <span className=''>
                                <LandArea classname={'h-5 w-4 mt-[1px]'} />
                            </span>
                            <h1 className='text-sm ml-2'>{Data.area}</h1>
                        </div>
                        <div className='flex w-1/2 mt-2'>
                            <span className=''>
                                <Apartment classname={'h-5 w-4 mt-[1px] opacity-80'} />
                            </span>
                            <h1 className='text-sm ml-2'>{Data.area}</h1>
                        </div>
                        {Data.bedroom && <div className='flex w-1/2 mt-2'>
                            <span className=''>
                                <Bedroom classname={'h-5 w-4 mt-[1px] opacity-80'} />
                            </span>
                            <h1 className='text-sm ml-2'>{Data.bedroom}</h1>
                        </div>}
                        {Data.possission && <div className='flex w-1/2 mt-2'>
                            <span className=''>
                                <img alt='' src={possession2} className='h-5 w-4 mt-[1px] opacity-70' />
                            </span>
                            <h1 className='text-sm ml-2'>{Data.possission}</h1>
                        </div>}
                    </div>
                </div>

                <div className='border-t-[1px] mt-2 flex justify-between p-2 pt-1 pb-1'>
                    <div>
                        {Data.price ? <p className={styles.title3}>{'\u20B9'} {Data.price}</p>
                            :
                            <button
                                onClick={() => func(Data)}
                                className={styles.btn + 'bg-green-600 px-4 my-2 text-white hover:bg-green-700'}>
                                ASK FOR PRICE
                            </button>
                        }

                        <p className='text-sm text-gray-600'>Individual: {Data.owner}</p>
                    </div>
                    <div className='mt-2'>
                        <button
                            onClick={() => func(Data)}
                            className={styles.btn + 'bg-green-600 hover:bg-green-700 px-4 py-1'}>
                            <p className='text-white'>Contact</p>
                        </button>
                    </div>
                </div>

            </div>

        </div>
    );
}

export default PropertyListCard;
