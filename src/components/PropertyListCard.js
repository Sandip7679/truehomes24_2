import React from 'react';
import { Apartment, Bedroom, FavouriteIcon, LandArea, LocationIcon } from './svgIcons';
import { styles } from '../Styles/Styles';
// import possession2 from '../assets/Icons/possession2.png'
import userIcon from '../assets/images/user.svg'
import { NavLink } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';



const PropertyListCard = ({ Data, func }) => {
    // const { propertyListState } = useSelector(state => state.User);
    // const dispatch = useDispatch();

    // const getPath = () => {
    //     let arr = Data?.details?.split('/');
    //     if (!arr?.length) return;
    //     let lastIndex = arr.length - 1;
    //     return `/${arr[lastIndex - 2]}/${arr[lastIndex - 1]}/${arr[lastIndex]}`;
    // }

    return (
        <div className='rounded-xl flex flex-wrap md:flex-nowrap  lg:flex-wrap xl:flex-nowrap shadow-lg border-[1px] h-full mt-6 mx-2 group'>
            <div className='items-center relative border-gray-300 w-full  md:min-w-[33%]  h-full border-[1px] rounded-xl overflow-hidden  hover:cursor-pointer'>
                <NavLink to={`/${Data.details}`}>
                    <img alt='' src={Data.image}
                        className='w-full h-[240px] transform transition-transform hover:scale-110 duration-1000'
                    />
                </NavLink>
                <div className='h-[70px] flex justify-between items-center p-2 bg-gradient-to-b from-gray-100 to-gray-400 
                  group-hover:bg-gradient-to-b group-hover:form-gray-300 group-hover:to-black'>
                    <NavLink to={`/${Data?.userDetails?.link}`}
                        onClick={() => window.scrollTo({ top: 0 })}
                        className='flex gap-1 z-50'>
                        <img alt='' src={Data.userDetails?.image ? Data.userDetails?.image : userIcon} className='h-10 w-10 hidden group-hover:block' />
                        <p className='text-sm hidden group-hover:block text-white mt-2 '>{Data.userDetails?.name}</p>
                    </NavLink>

                    <div className=' hidden group-hover:block rounded-full p-1 bg-black bg-opacity-60'>
                        <FavouriteIcon classname={'text-white'} />
                    </div>
                </div>
                <div className='flex absolute gap-2 top-5 right-5'>
                    {(Data.projectName || Data.featured != '') && <button className={styles.labelBtn + (Data.featured == '' ? ' bg-orange-600' : ' bg-green-600')}>
                        {Data.projectName ? 'New Project' : Data.featured}
                    </button>}
                    <button className={styles.labelBtn + 'bg-orange-600'}>
                        {Data.listedFor}
                    </button>
                </div>
            </div>

            <div className='p-3 pb-0 text-left h-full w-full md:min-w-[62%] ml-[2%]'>
                <div className='min-h-[205px]'>
                    <div className='flex justify-between'>
                        <NavLink to={`/${Data.details}`}><p className={styles.title4 + 'cursor-pointer hover:text-gray-500'}>{Data.projectName ? Data.projectName : Data.title}</p></NavLink>
                        {Data.projectName ? Data.price ? <p className={styles.title4}><i className={Data.currency + ' text-base'}></i> {Data.price}</p> : null : Data.isVerified == 'Y' && <img alt='' src='https://www.truehomes24.com/assets/front_end/images/property/checkmark.svg' className='h-8 w-8 ml-2' />}
                    </div>
                    <div className='flex mt-3'>
                        <span className=''>
                            <LocationIcon classname={'h-5 w-4 mt-[0.5px]'} />
                        </span>
                        <h1 className='text-sm text-gray-700 ml-1'><p className={styles.textMedium + 'text-gray-500 font-medium inline-block'}>{Data.society ? 'Society:' : ''} </p>
                            {' '}{Data.localityName}, {Data.cityName}, {Data.stateName ? (Data.stateName + ', ') : ''}{Data.countryName}
                        </h1>
                    </div>
                    {Data.projectName && <div className='text-sm mt-1'>
                        <span className='opacity-80'>By</span> <span>{Data.userDetails?.name}</span>
                        {Data.possession && Data.possession != '' && <div className='font-semibold text-base tracking-wider mt-1'>
                            {/* <span className='text-gray-600'>Possession By</span> */}
                            <span className='text-gray-700'>{Data.possession}</span>
                        </div>}
                    </div>}

                    {Data.unitConfig ?
                        <div className='mt-5 font-medium text-sm overflow-y-auto max-h-20'>
                            {Data.unitConfig?.map((item, index) => {
                                return (
                                    <div className='grid grid-cols-3 gap-1 mt-1 text-gray-500'>
                                        {item.showUnitField != 0 && <div>{item.unit}</div>}
                                        {item.showBuiltUpField && <div>{item.unitBuiltUpArea}</div>}
                                        {/* <div>{'\u20B9'} 2.5 Cr</div> */}
                                        {item.unitPrice && <div><i className={Data.currency + ' text-sm'}></i> {item.unitPrice}</div>}
                                    </div>
                                )
                            })}
                        </div>
                        :
                        <div className='flex flex-wrap mt-1'>
                            {/* <div className='flex w-1/2 mt-2'>
                                <span className=''>
                                    <Apartment classname={'h-5 w-4 mt-[1px] opacity-80'} />
                                </span>
                                <h1 className='text-sm ml-2'>{Data.propertyType}</h1>
                            </div> */}
                            {/* {(Data.builtUpArea && Data.builtUpArea != '') && <div className='flex w-1/2 mt-2'>
                                <span className=''>
                                    <LandArea classname={'h-5 w-4 mt-[1px]'} />
                                </span>
                                <h1 className='text-sm ml-2'>{Data.builtUpArea} {Data.buildUnit}</h1>
                            </div>} */}
                            {Data.totalArea && <div className='flex w-1/2 mt-2'>
                                <span className=''>
                                    <LandArea classname={'h-5 w-4 mt-[1px]'} />
                                </span>
                                <h1 className='text-sm ml-2'>{Data.totalArea} {Data.measurement}</h1>
                            </div>}
                            {Data.totalFloor && Data.totalFloor != '0' && <div className='flex w-1/2 mt-2'>
                                <span className=''>
                                    <Apartment classname={'h-5 w-4 mt-[1px] opacity-80'} />
                                </span>
                                <h1 className='text-sm ml-2'>{Data.totalFloor} Floor</h1>
                            </div>}
                            {Data.bathrooms && Data.bathroom != '' && <div className='flex w-1/2 mt-2'>
                                <span className=''>
                                    <i class="fa-solid fa-toilet text-sm opacity-70"></i>
                                </span>
                                <h1 className='text-sm ml-2 mt-[2px]'>{Data.bathrooms} {Data.bathrooms > 1 ? 'Bathrooms' : 'Bathroom'}</h1>
                            </div>}
                            {Data.bedroom && <div className='flex w-1/2 mt-2'>
                                <span className=''>
                                    <Bedroom classname={'h-5 w-4 mt-[1px] opacity-80'} />
                                </span>
                                <h1 className='text-sm ml-2'>{Data.bedroom}</h1>
                            </div>}
                            {Data.reservedParking && Data.reservedParking != '' && <div className='flex w-1/2 mt-2'>
                                <span className=''>
                                    <i class="fa-solid fa-square-parking opacity-70"></i>
                                </span>
                                <h1 className='text-sm ml-2'>{Data.reservedParking}</h1>
                            </div>}
                            {Data.availableFor && <div className='flex w-1/2 mt-2'>
                                <span className=''>
                                    <i class="fa-solid fa-bars opacity-70 text-sm"></i>
                                </span>
                                <h1 className='text-sm ml-2 mt-[2px]'>{Data.availableFor}</h1>
                            </div>}
                            {Data.availability && Data.availability != '' && <div className='flex w-1/2 mt-2'>
                                <span className=''>
                                    <i class="fa-solid fa-bars opacity-70"></i>
                                </span>
                                <h1 className='text-sm ml-2'>{Data.availability}</h1>
                            </div>}
                            {Data.totalFloor && Data.totalFloor != '0' && <div className='flex w-1/2 mt-2'>
                                <span className=''>
                                    <i class="fa-solid fa-bars opacity-70"></i>
                                </span>
                                <h1 className='text-sm ml-2'>{Data.totalFloor} Floor</h1>
                            </div>}
                        </div>}
                    {Data.furnishing && Data.furnishing != '' && <div className='mt-2'>
                        <span className='bg-gray-700 px-2 py-[2px] rounded text-white text-sm'>
                            {Data.furnishing}
                        </span>
                    </div>}
                </div>
                {/* + (Data.projectName ? 'justify-end' : 'justify-between') */}
                <div className={'border-t-[1px] mt-2 flex py-1 justify-between '}>
                    <div>
                        {Data.expectedPrice && Data.expectedPrice != '0' ? <p className={styles.title3}><i className={Data.currency + ' text-base text-gray-600'}></i> {Data.convertedExpectedPrice}</p>
                            :
                            <>
                               {(!Data.price || !Data.unitConfig) && <button
                                    onClick={() => func(Data)}
                                    className={styles.btn + 'bg-green-600 px-4 my-2 text-white hover:bg-green-700'}>
                                    ASK FOR PRICE
                                </button>}
                            </>

                        }

                        {!Data.projectName && <p className='text-sm text-gray-600'>{Data.userAs}: {Data.userDetails?.name}</p>}
                    </div>
                    {/* !Data.projectName && */}
                    { <div className='mt-2'>
                        <button
                            onClick={() => func(Data)}
                            className={styles.btn + 'bg-green-600 hover:bg-green-700 px-4 py-1'}>
                            <p className='text-white'>Contact</p>
                        </button>
                    </div>}
                </div>

            </div>

        </div>
    );
}

export default PropertyListCard;
