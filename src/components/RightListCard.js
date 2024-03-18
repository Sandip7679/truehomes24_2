import React from 'react';
import { styles } from '../Styles/Styles';
import { LocationIcon } from './svgIcons';
import { NavLink } from 'react-router-dom';

const RightListCard = ({ title, data }) => {
    return (
        <div className='px-2 mt-10 bg-white py-5 pb-2 shadow-sm sm:min-w-[280px] lg:min-w-[350]'>
            <h1 className={styles.title2 + 'text-gray-700'}>{title}</h1>
            <div>
                {data?.length>0 && data?.map((item, index) => {
                    return (
                        <div key={index} className='flex gap-3 mt-5'>
                            <NavLink to={`/${item.url}`} className='w-[25%] min-w-[85px] max-h-[105px] relative p-1 border-[1px] border-gray-300'>
                                <img alt='' src={item.image} className='h-[95px] w-full' />
                                {title !== 'Recent Blog' && <button className={styles.labelBtn + 'absolute right-2 top-2 rounded bg-orange-600'}>
                                    Sale
                                </button>}
                            </NavLink>
                            {title === 'Recent Blog' ? <div className='w-[75%]'>
                                <NavLink to={`/${item.url}`} className={'font-semibold line-clamp-2'}>{item.title}</NavLink>
                                {/* <p className='text-gray-500'>{item.description}</p> */}
                                <div className='line-clamp-2 text-gray-500' dangerouslySetInnerHTML={{__html:item.description}}/>
                            </div>
                                :
                                <div className='w-[75%]'>
                                    <NavLink to={`/${item.url}`} className={'font-semibold line-clamp-2'}>{item.title}</NavLink>
                                    <div className='flex mt-1'>
                                        <LocationIcon classname={'h-4 w-4 mt-1'} />
                                        <p className='ml-1 text-gray-500'>{item.location}</p>
                                    </div>
                                    {/* <p className={'text-sm font-semibold ml-1'}>{'\u20B9'} {item.price}</p> */}
                                    <div className='text-sm font-semibold ml-1' dangerouslySetInnerHTML={{__html:item.price}}/>
                                </div>}
                        </div>
                    )

                })}
            </div>
        </div>
    );
}

export default RightListCard;
