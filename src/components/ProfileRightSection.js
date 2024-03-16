import React from 'react';
import { styles } from '../Styles/Styles';
import { LocationIcon } from './svgIcons';
import { NavLink } from 'react-router-dom';

const ProfileRightSection = ({ title, data }) => {
    return (
        <div className='px-2 mt-10 bg-white py-5 pb-2 shadow-sm sm:min-w-[280px] lg:min-w-[350]'>
            <h1 className={styles.title2 + 'text-gray-700'}>{title}</h1>
            <div>
                {data?.length > 0 && data?.map((item, index) => {
                    return (
                        <div key={index} className='flex gap-3 mt-5'>
                            <NavLink to={`/${item.detailLink}`} className='w-[25%] min-w-[85px] max-h-[105px] relative p-1 border-[1px] border-gray-300'>
                                <img alt='' src={item.imageLink} className='h-[95px] w-full' />
                                <button className={styles.labelBtn + 'absolute right-2 top-2 rounded bg-orange-600'}>
                                    Sale
                                </button>

                            </NavLink>
                            <div className='w-[75%]'>
                                <NavLink to={`/${item.detailLink}`} className={'font-semibold line-clamp-2'}>{item.title}</NavLink>
                                <div className='flex mt-1'>
                                    <LocationIcon classname={'h-4 w-4 mt-1'} />
                                    <p className='ml-1 text-gray-500'>{item.address}</p>
                                </div>
                                <p className={'text-sm font-semibold ml-1'}><i className={item.currency}></i> {item.price}</p>
                            </div>
                        </div>
                    )

                })}
            </div>
        </div>
    );
}

export default ProfileRightSection;
