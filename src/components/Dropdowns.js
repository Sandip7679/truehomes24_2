import React, { useEffect, useState } from 'react';
import { styles } from '../Styles/Styles';
import { NavLink } from 'react-router-dom';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import { useDispatch, useSelector } from 'react-redux';
import { setPropertyListState } from '../Redux/reducer/User';

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
    const { filterMenus, propertyListState } = useSelector(state => state.User);
    const dispatch = useDispatch();

    return (
        <div className={styles.dropdownMenu + 'w-[120px] group-hover:block ' + classname}>
            {filterMenus?.bhk && filterMenus?.bhk.map((item, index) => {
                return (
                    <label key={index}
                        onClick={() => dispatch(setPropertyListState({ ...propertyListState, BHKtype: item.value }))}
                        className={styles.dropdownItem + 'cursor-pointer'}>
                        <input checked={propertyListState.BHKtype === item.value} className='mt-[0.5px]' type='radio' />
                        <p className='ml-1'>{item.label}</p>
                    </label>
                )
            })}
            <div
                onClick={() => dispatch(setPropertyListState({ ...propertyListState, BHKtype: '1-2-3' }))}
                className={styles.textMedium + 'text-center my-2 cursor-pointer'}>Clear All</div>
        </div>
    );
}

export const PropertyMenu = ({ classname }) => {
    const { filterMenus } = useSelector(state => state.User);
    return (
        <div class={styles.dropdownMenu + "pt-2  w-[260px] group-hover:block space-y-2 max-h-[400px] overflow-y-scroll " + classname}>
            {filterMenus?.propertyType && filterMenus?.propertyType.map((item, index) => {
                return (
                    <label key={index} class="flex hover:cursor-pointer hover:bg-gray-100 py-1 pl-2 items-center">
                        <input type="checkbox" class="form-checkbox mt-1 h-4 w-4 text-blue-500" />
                        <span class={"ml-2 text-gray-600 font-semibold"}>{item.type}</span>
                    </label>
                )
            })}
            {/* <div
                onClick={() => dispatch(setPropertyListState({ ...propertyListState, BHKtype: '1-2-3' }))}
                className={styles.textMedium + 'text-center my-2 cursor-pointer'}>
                Clear All
            </div> */}
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
export const PropertyTypeMenu = ({ classname }) => {
    const { filterMenus, propertyListState } = useSelector(state => state.User);
    const dispatch = useDispatch();
    const [checkedItems, setCheckedItems] = useState([]);
    const handleOnCheckedItem = (e, index, value) => {
        let arr = [...checkedItems];
        if (e.target.checked) {
            arr[index] = value;
        } else {
            arr[index] = false;
        }
        setCheckedItems(arr);
        dispatch(setPropertyListState({ ...propertyListState, propertyTypes: arr }));
    }
    return (
        <div
            className={`${styles.dropdownMenu} w-[260px] group-hover:block`}>
            <div class="space-y-2 max-h-[300px] py-3 overflow-y-auto">
                {filterMenus?.propertyType && filterMenus?.propertyType.map((item, index) => {

                    return (
                        <label key={index} class="flex hover:cursor-pointer hover:bg-gray-100 pl-2 items-center">
                            <input onChange={(e) => handleOnCheckedItem(e, index, item.value)} type="checkbox" class="form-checkbox mt-1 h-4 w-4 text-blue-500" />
                            <span class={styles.textMedium + "ml-2"}>{item.label}</span>
                        </label>
                    )
                })}
                <div
                    onClick={() => dispatch(setPropertyListState({ ...propertyListState, propertyTypes: [] }))}
                    className={styles.textMedium + 'text-center my-2 cursor-pointer'}>
                    Clear All
                </div>
            </div>
        </div>
        // <div class={styles.dropdownMenu + " w-[260px] group-hover:block max-h-[400px] overflow-y-auto " + classname}>
        //     {filterMenus?.more?.propertyType && filterMenus?.more?.propertyType.map((item, index) => {
        //         return (
        //             <label key={index} class="flex hover:cursor-pointer hover:bg-gray-100 p-2 items-center">
        //                 <input type="checkbox" class="form-checkbox mt-1 h-4 w-4 text-blue-500" />
        //                 <span class={"ml-2"}>{item.label}</span>
        //             </label>
        //         )
        //     })}
        // </div>
    )
}


let max = 10000;
export const BudgetMenu = ({ classname }) => {
    const { filterMenus, propertyListState } = useSelector(state => state.User);
    const [priceRange, setPriceRange] = useState([0, 100000000]);
    const [maxPrice, setMaxPrice] = useState(100); // Initial price range
    const [menus, setMenus] = useState([]);
    const dispatch = useDispatch();
    useEffect(() => {
        if (filterMenus?.rentBudget && propertyListState?.propertyStatus?.value == 'rent') {
            let rents = filterMenus?.rentBudget;
            setMenus(rents);
            // setPriceRange([rents[0].value, rents[rents.length - 1].value]);
            // setMaxPrice(Number(rents[rents.length - 1].value));
            // max = Number(rents[rents.length - 1].value);
        } else if (filterMenus?.saleBudget) {
            let sales = filterMenus?.saleBudget;
            setMenus(sales);
            // setPriceRange([sales[0].value, sales[sales.length - 1].value]);
            // setMaxPrice(Number(sales[sales.length - 1].value));
            // max = Number(sales[sales.length - 1].value);
        }
    }, [propertyListState.propertyStatus, filterMenus]);

    useEffect(() => {
        if (priceRange != [0, 100000000]) {
            let clearTime = setTimeout(() => {
                dispatch(setPropertyListState({ ...propertyListState, priceRange: [priceRange[0], priceRange[1]] }));
            }, 600)
            // console.log('priceRange cleartime.....',priceRange)
            return () => clearTimeout(clearTime);
        }

    }, [priceRange])

    const getMaxPrice = () => {
        if (filterMenus?.rentBudget && propertyListState?.propertyStatus?.value == 'rent') {
            let rents = filterMenus?.rentBudget;
            return Number(rents[rents.length - 1].value);
        } else if (filterMenus?.saleBudget) {
            let sales = filterMenus?.saleBudget;
            return Number(sales[sales.length - 1].value);
        }
    }

    const handlePriceChange = (value) => {
        setPriceRange(value);
    };

    return (
        <div
            className={styles.dropdownContainer + '-ml-[10px] w-[280px] group-hover:block overflow-hidden ' + classname}>
            <div className='pr-3 mt-3 pl-2'>
                <div className=''>
                    {filterMenus && <Slider
                        range
                        min={0}
                        max={100000000}
                        // defaultValue={priceRange}
                        value={priceRange}
                        onChange={handlePriceChange}
                        trackStyle={{ backgroundColor: '#ED8936' }}
                        handleStyle={{ borderColor: '#ED8936' }}
                    />}
                    <div className='flex justify-between text-sm text-gray-500 mt-1'>
                        <span>{'\u20B9'} Min</span>
                        <span>{'\u20B9'} Max</span>
                    </div>
                </div>

            </div>
            <div className='flex gap-5 mt-5'>
                <div className='relative'>
                    <span className='absolute top-3 left-2 text-sm'>{'\u20B9'}</span>
                    <input placeholder='Min'
                        className={styles.input + ' pl-5 rounded-md'}
                        value={priceRange[0]}
                        onChange={(e) => setPriceRange([e.target.value, priceRange[1]])
                        }
                    />
                </div>
                <div className='relative'>
                    <span className='absolute top-3 left-2 text-sm'>{'\u20B9'}</span>
                    <input placeholder='Max'
                        className={styles.input + 'pl-5 rounded-md'}
                        value={priceRange[1]}
                        onChange={(e) => setPriceRange([priceRange[0], e.target.value])}
                    />
                </div>
            </div>
            <div className='mt-1 max-h-[200px] overflow-y-auto -mr-4 pt-5 pb-[100px]'>
                {menus && menus.length > 0 && menus.map((item, index) => {
                    return (
                        <div key={index} className='flex gap-5 cursor-pointer'>
                            <div className={styles.textMedium + 'flex-1 text-left font-semibold p-2 cursor-pointer hover:bg-gray-100'} onClick={() => setPriceRange([item.value, priceRange[1]])} >{'\u20B9'} {item.label}</div>
                            <div className={styles.textMedium + 'flex-1 text-left font-semibold p-2 cursor-pointer hover:bg-gray-100'} onClick={() => setPriceRange([priceRange[0], item.value])} > {'\u20B9'} {item.label}</div>
                        </div>
                    )
                })}
            </div>
            <div
                onClick={() => dispatch(setPropertyListState({ ...propertyListState, priceRange: ['', ''] }))}
                className={styles.textMedium + 'text-center my-2 cursor-pointer'}>
                Clear All
            </div>

        </div>
    )
}
export const MoreMenu = ({ classname }) => {
    const { filterMenus, propertyListState } = useSelector(state => state.User);
    const [checkedItems, setCheckedItems] = useState([]);
    const dispatch = useDispatch();
    const handleOnCheckedItem = (e, index, value, type) => {
        let arr = [];
        if(checkedItems.length > 0){
             arr = [...checkedItems];
        }
        if (e.target.checked) {
            arr[index] = value;
        }
        else {
            arr[index] = false;
        }
        setCheckedItems(arr);
        dispatch(setPropertyListState({ ...propertyListState, moreStatus: { ...propertyListState.moreStatus, [type]: arr } }));
    }

    return (
        <div className={styles.dropdownContainer + ' text-sm group-hover:block sm:-left-[200px] sm:pl-5 ' + classname}>
            <div>
                <p className='text-sm font-semibold'>FURNISHING TYPE</p>
                <div className='flex flex-wrap gap-4 mt-2'>
                    {filterMenus?.more?.furnish && filterMenus?.more?.furnish.map((item, index) => {
                        return (
                            <label key={index} className='flex gap-2 hover:bg-gray-100'>
                                <input
                                    onChange={(e) => handleOnCheckedItem(e, index, item.value, 'furnishingTypes')}
                                    type='checkbox' className='h-4 w-4 mt-1' />
                                <p className='text-gray-600'>{item.label}</p>
                            </label>
                        )
                    })}
                </div>
            </div>

            <div className='mt-4'>
                <p className='text-sm font-semibold'>BATHROOM</p>
                <div className='flex flex-wrap gap-4 mt-2'>
                    {filterMenus?.more?.bathroom && filterMenus?.more?.bathroom.map((item, index) => {
                        return (
                            <label key={index} className='flex gap-2 hover:bg-gray-100'>
                                <input onChange={(e) => handleOnCheckedItem(e, index, item.value, 'bathrooms')} type='checkbox' className='h-4 w-4 mt-1' />
                                <p className=''>{item.label}</p>
                            </label>
                        )
                    })}
                </div>
            </div>

            <div className='mt-4'>
                <p className='text-sm font-semibold'>PROPERTY AREA</p>
                <p className='mt-2 text-sm font-medium text-gray-500'>Select area size Sq ft</p>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mt-2'>
                    <div>
                        <select
                            onClick={(e) => dispatch(setPropertyListState({ ...propertyListState, moreStatus: { ...propertyListState.moreStatus, minArea: e.target.value } }))}
                            className={styles.input + ' py-[4px] mt-1 text-gray-500 '}>
                            <option value={''} className=''>Select Min Area</option>
                            {filterMenus?.more?.area && filterMenus?.more?.area.map((item, index) => {
                                return (
                                    <option
                                        value={item.value}
                                        key={index} className=''>
                                        {item.label}
                                    </option>
                                )
                            })}
                        </select>
                    </div>
                    <div>
                        <select
                            onChange={(e) => dispatch(setPropertyListState({ ...propertyListState, moreStatus: { ...propertyListState.moreStatus, maxArea: e.target.value } }))}
                            className={styles.input + 'py-[4px] mt-1 text-gray-500 '}>
                            <option value={''}>Select Max Area</option>
                            {filterMenus?.more?.area && filterMenus?.more?.area.map((item, index) => {
                                return (
                                    <option
                                        value={item.value}
                                        key={index} className=''>
                                        {item.label}
                                    </option>
                                )
                            })}
                        </select>
                    </div>
                </div>
            </div>


            <div className='mt-4'>
                <p className='text-sm font-semibold'>NEW/RESALE</p>
                <div className='flex flex-wrap gap-4 mt-2'>
                    {filterMenus?.more?.newResale && filterMenus?.more?.newResale.map((item, index) => {
                        return (
                            <label
                                onClick={() => dispatch(setPropertyListState({ ...propertyListState, moreStatus: { ...propertyListState.moreStatus, newResale: item.value } }))}
                                key={index} className='flex gap-2 hover:bg-gray-100'>
                                <input type='radio' checked={propertyListState.moreStatus.newResale == item.value} className='h-4 w-4 mt-1' />
                                <p className=''>{item.label}</p>
                            </label>
                        )
                    })}
                </div>
            </div>

            <div className='mt-4'>
                <p className='text-sm font-semibold'>CONSTRUCTION STATUS</p>
                <div className='flex flex-wrap gap-4 mt-2'>
                    {filterMenus?.more?.ConstructionStatus && filterMenus?.more?.ConstructionStatus.map((item, index) => {
                        return (
                            <label
                                onClick={() => dispatch(setPropertyListState({ ...propertyListState, moreStatus: { ...propertyListState.moreStatus, constructionStatus: item.value } }))}
                                key={index} className='flex gap-2 hover:bg-gray-100'>
                                <input type='radio' className='h-4 w-4 mt-1' />
                                <p className=''>{item.label}</p>
                            </label>
                        )
                    })}
                </div>
            </div>

            <div className='mt-4'>
                <p className='text-sm font-semibold'>FACING</p>
                <div className='flex flex-wrap gap-2 mt-2'>
                    {filterMenus?.more?.facing && filterMenus?.more?.facing.map((item, index) => {
                        return (
                            <label
                                onChange={(e) => handleOnCheckedItem(e, index, item.value, 'facing')}
                                key={index} className='flex gap-2 mt-0 hover:bg-gray-100'>
                                <input type='radio' className='h-4 w-4 mt-1' />
                                <p className=''>{item.label}</p>
                            </label>
                        )
                    })}
                </div>
            </div>

            <div className='mt-4'>
                <p className='text-sm font-semibold'>FLOOR</p>
                <div className='flex flex-wrap gap-2 mt-2'>
                    {filterMenus?.more?.floor && filterMenus?.more?.floor.map((item, index) => {
                        return (
                            <label key={index} className='flex gap-2 mt-0 hover:bg-gray-100'>
                                <input type='checkbox' className='h-4 w-4 mt-1' />
                                <p className=''>{item.label}</p>
                            </label>
                        )
                    })}
                </div>
            </div>

            <div className='mt-4'>
                <p className='text-sm font-semibold'>AMENITIES</p>
                <div className='flex flex-wrap gap-2 mt-2'>
                    {filterMenus?.more?.amenities && filterMenus?.more?.amenities.map((item, index) => {
                        return (
                            <label
                                onChange={(e) => handleOnCheckedItem(e, index, item.value, 'amenities')}
                                key={index} className='flex gap-2 mt-0 hover:bg-gray-100'>
                                <input type='checkbox' className='h-4 w-4 mt-1' />
                                <p className=''>{item.label}</p>
                            </label>
                        )
                    })}
                </div>
            </div>

            <div className='mt-4'>
                <p className='text-sm font-semibold'>LISTED BY</p>
                <div className='my-2'>
                    {filterMenus?.more?.userTypes && filterMenus?.more?.userTypes.map((item, index) => {
                        return (
                            <label
                                onChange={(e) => handleOnCheckedItem(e, index, item.value, 'listedBy')}
                                key={index} className='flex gap-2 mt-1 hover:bg-gray-100'>
                                <input type='checkbox' className='h-4 w-4 mt-1' />
                                <p className=''>{item.label}</p>
                            </label>
                        )
                    })}
                </div>
            </div>
            {/* <div
                onClick={() => dispatch(setPropertyListState({
                    ...propertyListState,
                    moreStatus: { furnishingTypes: [], bathrooms: [], minArea: '', maxArea: '', newResale: '', constructionStatus: '', facing: [], amenities: [], listedBy: [] }
                }))}
                className={styles.textMedium + 'text-center my-2 cursor-pointer'}>
                Clear All
            </div> */}
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
