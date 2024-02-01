import React, { useEffect, useState } from 'react';
import { styles } from '../Styles/Styles';
import { NavLink } from 'react-router-dom';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

let BHKtype = [
    { type: '1 RK' },
    { type: '1 BHK' },
    { type: '2 BHK' },
    { type: '3 BHK' },
    { type: '4 BHK' }
];
const propertyTypes = [
    { type: 'Apartment' },
    { type: 'Independent House/Villa' },
    { type: 'Residential Land' },
    { type: 'Warehouse' },
    { type: 'Builder Floor' },
    { type: 'Office Space' },
    { type: 'Shop/Showroom' },
    { type: 'Serviced' },
]
const furnishingType = [
    { type: 'Furnished' },
    { type: 'Semi Furnished' },
    { type: 'Unfurnnished' },
];
const shortByItems = [
    { type: 'Short By Newest' },
    { type: 'Short By Oldest' },
    { type: 'Short By Featured' },
    { type: 'Short By Price (Low to Hogh)' },
    { type: 'Short By Price (HIgh to Low)' },
]
const rupees = [5, 10, 15, 20, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80];

const moreDatas = {
    furnishingType: ['Furnished', 'Semi Furnished', 'Unfurnished'],
    new: ['Both', 'New', 'Resale'],
    constructionStatus: ['All', 'Under Construction', 'Ready To Move', 'Upcoming'],
    facing: ['North', 'East', 'South', 'West', 'North East', 'North West', 'South East', 'South West'],
    floor: ['1-3', '4-6', '7-10', '11-15', '15+'],
    Amenities: ['24by7Water', 'CCTV Camera', 'Gated Society', 'Gym', 'Internet Connectivity', 'Jogging Track', 'Kid Play Area', 'Kid Play Pool']
}

// const searchTypes = [
//     { type: 'Buy', icon: buyIcon },
//     { type: 'Rent', icon: homeKey },
//     { type: 'New Projects', icon: newProjectIcon }
// ]

export const DropdownHover = ({ Items, ItemClass, MenuClass }) => {
    return (
        <div className={styles.dropdownMenu + (MenuClass ? MenuClass : ' w-[250px]')}>
            {Items.map((item, index) => {
                return (
                    <NavLink key={index} to={item.endpoint} onClick={item.onClick} >
                        <div class={styles.dropdownItem + ItemClass}>
                            {item.imgSrc && <img alt='' src={item.imgSrc} className='h-5 w-6 mr-5 ' />}
                            <span className=''>
                                {item.name}
                            </span>
                        </div>
                    </NavLink>
                )
            })}

        </div>
    )
}

const BHKmenu = ({ classname }) => {
    return (
        <div className={styles.dropdownMenu + 'w-[120px] group-hover:block ' + classname}>
            {BHKtype.map((item, index) => {
                return (
                    <label key={index}
                        // onClick={() => setSelectedBHK(index)}
                        className={styles.dropdownItem + 'cursor-pointer'}>
                        <input id={`radioBtn-${index}`} className='mt-[0.5px]' type='radio' />
                        <p className='ml-1'>{item.type}</p>
                    </label>
                )
            })}
            <p className={styles.textMedium + 'text-center mt-2'}>Clear All</p>
        </div>
    );
}

export const PropertyMenu = ({ classname }) => {
    return (
        <div class={styles.dropdownMenu + "pt-2  w-[260px] group-hover:block space-y-2 max-h-[400px] overflow-y-scroll " + classname}>
            {propertyTypes.map((item, index) => {
                return (
                    <label key={index} class="flex hover:cursor-pointer hover:bg-gray-100 py-1 pl-2 items-center">
                        <input type="checkbox" class="form-checkbox mt-1 h-4 w-4 text-blue-500" />
                        <span class={"ml-2 text-gray-600 font-semibold"}>{item.type}</span>
                    </label>
                )
            })}
        </div>
    )
}
export const FurnishingTypeMenu = ({ classname }) => {
    return (
        <div class={styles.dropdownMenu + " w-[260px] group-hover:block max-h-[400px] overflow-y-scroll " + classname}>
            {furnishingType.map((item, index) => {
                return (
                    <label key={index} class="flex hover:cursor-pointer hover:bg-gray-100 p-2 items-center">
                        <input type="checkbox" class="form-checkbox mt-1 h-4 w-4 text-blue-500" />
                        <span class={"ml-2"}>{item.type}</span>
                    </label>
                )
            })}
        </div>
    )
}

export const BudgetMenu = ({ classname }) => {
    // const [minPrice, setMinPrice] = useState(null);
    // const [maxPrice, setMaxPrice] = useState(null);


    // const [isResizing, setIsResizing] = useState(false);
    // const [width, setWidth] = useState(300); // Initial width of the section

    // const handleMouseDown = () => {
    //     setIsResizing(true);
    // };

    // const handleMouseMove = (e) => {
    //     if (isResizing) {
    //         setWidth(e.clientX);
    //         console.log('e.clientX..',e.clientX);
    //     }
    // };

    // const handleMouseUp = () => {
    //     setIsResizing(false);
    // };

    const [priceRange, setPriceRange] = useState([5, 100]); // Initial price range

    const handlePriceChange = (value) => {
        setPriceRange(value);
    };

    return (
        <div
            className={styles.dropdownContainer + '-ml-[10px] w-[280px] group-hover:block overflow-hidden ' + classname}>
            <div>
                {/* <input type='range'/> */}
                {/* <div
                    className="flex border-black border-[1px]"
                    style={{ width: `${width}px` }}
                    onMouseMove={handleMouseMove}
                    onMouseUp={handleMouseUp}
                >
                    <div className="w-64 bg-gray-300 p-4">
                    </div>
                    <div
                        className="resize-handle w-2 bg-black cursorew-resize"
                        onMouseDown={handleMouseDown}
                    />
                </div> */}

                <div className='pr-3 mt-3 pl-2'>
                    <Slider
                        range
                        min={5}
                        max={100}
                        // defaultValue={priceRange}
                        value={priceRange}
                        onChange={handlePriceChange}
                        trackStyle={{backgroundColor:'#ED8936'}}
                        handleStyle={{borderColor:'#ED8936'}}
                    />
                    <div className='flex justify-between text-sm text-gray-500 mt-1'>
                        <span>{'\u20B9'} Min</span>
                        <span>{'\u20B9'} Max</span>
                    </div>
                </div>
            </div>
            <div className='flex gap-5 mt-5'>
                <div className='relative'>
                    <span className='absolute top-3 left-2 text-sm'>{'\u20B9'}</span>
                    <input placeholder='Min' value={priceRange[0]*100000} onChange={(e) => setPriceRange([e.target.value, priceRange[1]])} className={styles.input + ' pl-5 rounded-md'} />
                </div>
                <div className='relative'>
                    <span className='absolute top-3 left-2 text-sm'>{'\u20B9'}</span>
                    <input placeholder='Max' value={priceRange[1]*100000} onChange={(e) => setPriceRange([priceRange[0], e.target.value])} className={styles.input + 'pl-5 rounded-md'} />
                </div>
            </div>
            <div className='mt-1 max-h-[300px] overflow-y-auto -mr-4 pt-5 pb-[100px]'>
                {rupees.map((item, index) => {
                    return (
                        <div key={index} className='flex gap-5 cursor-pointer'>
                            <div className={styles.textMedium + 'flex-1 text-left font-semibold p-2 cursor-pointer hover:bg-gray-100'} onClick={() => setPriceRange([item,priceRange[1]])} >{'\u20B9'} {item} Lacs</div>
                            <div className={styles.textMedium + 'flex-1 text-left font-semibold p-2 cursor-pointer hover:bg-gray-100'} onClick={() => setPriceRange([priceRange[0],item])} > {'\u20B9'} {item} Lacs</div>
                        </div>
                    )
                })}
            </div>

        </div>
    )
}
export const MoreMenu = ({ classname }) => {
    return (
        <div className={styles.dropdownContainer + ' text-sm group-hover:block sm:-left-[200px] sm:pl-5 ' + classname}>
            <div>
                <p className='text-sm font-semibold'>FURNISHING TYPE</p>
                <div className='flex flex-wrap gap-4 mt-2'>
                    {moreDatas.furnishingType.map((item, index) => {
                        return (
                            <label key={index} className='flex gap-2 hover:bg-gray-100'>
                                <input type='checkbox' className='h-4 w-4 mt-1' />
                                <p className='text-gray-600'>{item}</p>
                            </label>
                        )
                    })}
                </div>
            </div>

            <div className='mt-4'>
                <p className='text-sm font-semibold'>BATHROOM</p>
                <div className='flex flex-wrap gap-4 mt-2'>
                    {['1', '2', '3', '4+'].map((item, index) => {
                        return (
                            <label key={index} className='flex gap-2 hover:bg-gray-100'>
                                <input type='checkbox' className='h-4 w-4 mt-1' />
                                <p className=''>{item}</p>
                            </label>
                        )
                    })}
                </div>
            </div>

            <div className='mt-4'>
                <p className='text-sm font-semibold'>NEW/RESALE</p>
                <div className='flex flex-wrap gap-4 mt-2'>
                    {moreDatas.new.map((item, index) => {
                        return (
                            <label key={index} className='flex gap-2 hover:bg-gray-100'>
                                <input type='radio' className='h-4 w-4 mt-1' />
                                <p className=''>{item}</p>
                            </label>
                        )
                    })}
                </div>
            </div>

            <div className='mt-4'>
                <p className='text-sm font-semibold'>CONSTRUCTION STATUS</p>
                <div className='flex flex-wrap gap-4 mt-2'>
                    {moreDatas.constructionStatus.map((item, index) => {
                        return (
                            <label key={index} className='flex gap-2 hover:bg-gray-100'>
                                <input type='radio' className='h-4 w-4 mt-1' />
                                <p className=''>{item}</p>
                            </label>
                        )
                    })}
                </div>
            </div>

            <div className='mt-4'>
                <p className='text-sm font-semibold'>FACING</p>
                <div className='flex flex-wrap gap-2 mt-2'>
                    {moreDatas.facing.map((item, index) => {
                        return (
                            <label key={index} className='flex gap-2 mt-0 hover:bg-gray-100'>
                                <input type='radio' className='h-4 w-4 mt-1' />
                                <p className=''>{item}</p>
                            </label>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export const ShortByMenu = ({ classname }) => {
    return (
        <div className={styles.dropdownMenu + 'w-[220px] group-hover:block sm:-ml-[95px] ' + classname}>
            {shortByItems.map((item, index) => {
                return (
                    <label key={index}
                        // onClick={() => setSelectedBHK(index)}
                        className={styles.dropdownItem}>
                        <input id={`radioBtn-${index}`} className='mt-[0.5px]' type='radio' />
                        <p className='ml-1'>{item.type}</p>
                    </label>
                )
            })}
            <p className={'text-center mt-2'}>Clear All</p>
        </div>
    )
}
// export const BudgetMenu = ()=>{
//     return(

//     )
// }

export default BHKmenu;
