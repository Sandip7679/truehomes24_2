import React, { useEffect, useState } from 'react';
import { styles } from '../Styles/Styles';
import { NavLink, useLocation } from 'react-router-dom';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import { useDispatch, useSelector } from 'react-redux';
import { setPropertyListState } from '../Redux/reducer/User';



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
    const [bhkType, setBhkType] = useState('');
    useEffect(() => {
        if (propertyListState.clearAll) {
            // dispatch(setPropertyListState({ ...propertyListState, BHKtype: '' }));
            setBhkType('');
        }
    }, [propertyListState.clearAll]);

    return (
        <div className={styles.dropdownMenu + 'w-[120px] group-hover:block ' + classname}>
            {filterMenus?.bhk && filterMenus?.bhk.map((item, index) => {
                return (
                    <label key={index}
                        onClick={() => {
                            dispatch(setPropertyListState({ ...propertyListState, clearAll: false, BHKtype: item.value }));
                            setBhkType(item.value);
                        }}
                        className={styles.dropdownItem + 'cursor-pointer'}>
                        <input checked={bhkType === item.value} className='mt-[0.5px]' type='radio' />
                        <p className='ml-1'>{item.label}</p>
                    </label>
                )
            })}
            <div
                onClick={() => {
                    dispatch(setPropertyListState({ ...propertyListState, BHKtype: '' }));
                    setBhkType('');
                }}
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
    const { propertyListState, filterMenus } = useSelector(state => state.User);
    const [checkedItems, setCheckedItems] = useState([]);
    const dispatch = useDispatch();

    const handleOnCheckedItem = (e, index, value) => {
        console.log('e.target.checked..', e.target.checked);
        let arr = [...checkedItems];
        if (arr[index] && arr[index] !== '0') {
            arr[index] = false;
        } else {
            arr[index] = value;
        }
        setCheckedItems(arr);
        dispatch(setPropertyListState({ ...propertyListState, clearAll: false, moreStatus: { ...propertyListState.moreStatus, furnishingTypes: arr.filter(it => it).join('-') } }));
    }
    return (
        <div class={styles.dropdownMenu + " w-[260px] group-hover:block max-h-[400px] overflow-y-auto " + classname}>
            {filterMenus?.more?.furnish && filterMenus?.more?.furnish.map((item, index) => {
                return (
                    <label key={index} class="flex hover:cursor-pointer hover:bg-gray-100 p-2 items-center">
                        <input type="checkbox" class="form-checkbox mt-1 h-4 w-4 text-blue-500"
                            onClick={(e) => handleOnCheckedItem(e, index, item.value)}
                            checked={item.value == checkedItems[index]}
                        />
                        <span class={"ml-2 mt-1"}>{item.label}</span>
                    </label>
                )
            })}
        </div>
    )
}
export const PropertyTypeMenu = ({ classname }) => {
    const { filterMenus, propertyListState } = useSelector(state => state.User);
    const dispatch = useDispatch();
    // const routePath = useLocation();
    const [checkedItems, setCheckedItems] = useState([]);

    const handleOnCheckedItem = (e, index, value) => {
        console.log('e.target.checked..', e.target.checked);
        let arr = [...checkedItems];
        // if (routePath.pathname == '/') {
        // arr[index] = !arr[index];
        // if (e.target.checked) {
        //     arr[index] = false;
        // } else {
        //     arr[index] = value;
        // }
        // }
        // else {
        // if (e.target.checked) {
        //     arr[index] = value;
        // } else {
        //     arr[index] = false;
        // }
        // }
        if (arr[index] && arr[index] !== '0') {
            arr[index] = false;
        } else {
            arr[index] = value;
        }
        setCheckedItems(arr);
        dispatch(setPropertyListState({ ...propertyListState, clearAll: false, propertyTypes: arr.filter(it => it).join('-') }));
    }

    useEffect(() => {
        if (propertyListState.clearAll) {
            setCheckedItems([]);
        }
    }, [propertyListState.clearAll]);

    return (
        <div
            className={`${styles.dropdownMenu} w-[260px] group-hover:block ` + classname}>
            <div class="space-y-2 max-h-[300px] py-3 overflow-y-auto">
                {filterMenus?.propertyType && filterMenus?.propertyType.map((item, index) => {
                    return (
                        <label
                            key={index} class="flex hover:cursor-pointer hover:bg-gray-100 pl-2 items-center">
                            <input
                                // onChange={(e) => handleOnCheckedItem(e, index, item.value)}
                                onClick={(e) => handleOnCheckedItem(e, index, item.value)}
                                checked={item.value == checkedItems[index]}
                                //|| propertyListState.propertyTypes?.includes(item.value)
                                type="checkbox" class="form-checkbox mt-1 h-4 w-4 text-blue-500"
                            />
                            <span class={styles.textMedium + "ml-2"}>{item.label}</span>
                        </label>
                    )
                })}
                <div
                    onClick={() => {
                        dispatch(setPropertyListState({ ...propertyListState, propertyTypes: [] }));
                        setCheckedItems([]);
                    }}
                    className={styles.textMedium + 'text-center my-2 cursor-pointer'}>
                    Clear All
                </div>
            </div>
        </div>
    )
}


export const BudgetMenu = ({ classname }) => {
    const { filterMenus, propertyListState } = useSelector(state => state.User);
    const [priceRange, setPriceRange] = useState([0, 100000000]);
    // const [maxPrice, setMaxPrice] = useState(100); // Initial price range
    const [menus, setMenus] = useState([]);
    const dispatch = useDispatch();
    useEffect(() => {
        if (filterMenus?.rentBudget && propertyListState?.propertyStatus?.value == 'rent') {
            let rents = filterMenus?.rentBudget;
            setMenus(rents);
            setPriceRange([0, Number(rents[rents.length - 2].value)]);
            // setMaxPrice(Number(rents[rents.length - 2].value));
            // max = Number(rents[rents.length - 1].value);
        } else if (filterMenus?.saleBudget) {
            let sales = filterMenus?.saleBudget;
            setMenus(sales);
            setPriceRange([0, Number(sales[sales.length - 2].value)]);
            // setMaxPrice(Number(sales[sales.length - 2].value));
            // max = Number(sales[sales.length - 1].value);
        }
    }, [propertyListState.propertyStatus, filterMenus]);

    useEffect(() => {
        if (priceRange[0] != 0 || priceRange[1] != 100000000) {
            let clearTime = setTimeout(() => {
                if (priceRange[1] < getMaxPrice()) {
                    dispatch(setPropertyListState({ ...propertyListState, priceRange: [priceRange[0], priceRange[1]] }));
                } else if (propertyListState.priceRange[0] != '' || propertyListState.priceRange[1] != '') {
                    dispatch(setPropertyListState({ ...propertyListState, priceRange: ['', ''] }));
                }
            }, 600)
            return () => clearTimeout(clearTime);
        }

    }, [priceRange]);

    useEffect(() => {
        if (priceRange[0] != propertyListState.priceRange[0] || priceRange[1] != propertyListState.priceRange[1]) {
            if (propertyListState.priceRange[0] != '' || propertyListState.priceRange[1] != '')
                setPriceRange([propertyListState.priceRange[0], propertyListState.priceRange[1]]);
            else {
                setPriceRange([0, getMaxPrice()]);
            }
        }
        console.log('price range change...');
    }, [propertyListState.priceRange]);

    useEffect(() => {
        if (propertyListState.clearAll) {
            setPriceRange([0, getMaxPrice()]);
        }
    }, [propertyListState.clearAll]);

    const getMaxPrice = () => {
        if (filterMenus?.rentBudget && propertyListState?.propertyStatus?.value == 'rent') {
            let rents = filterMenus?.rentBudget;
            return Number(rents[rents.length - 2].value);
        } else if (filterMenus?.saleBudget) {
            let sales = filterMenus?.saleBudget;
            return Number(sales[sales.length - 2].value);
        }
    }

    return (
        <div
            className={styles.dropdownContainer + '-ml-[10px] w-[280px] group-hover:block overflow-hidden ' + classname}>
            <div className='pr-3 mt-3 pl-2'>
                <div className=''>
                    {filterMenus && <Slider
                        step={5000}
                        range
                        min={0}
                        max={getMaxPrice()}
                        // min={Number(priceRange[0])}
                        // max={Number(priceRange[1])}
                        // defaultValue={priceRange}
                        value={priceRange}
                        onChange={(value) => setPriceRange(value)}
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
                onClick={() => {
                    dispatch(setPropertyListState({ ...propertyListState, priceRange: ['', ''] }));
                    setPriceRange([0, getMaxPrice()]);
                }}
                className={styles.textMedium + 'text-center my-2 cursor-pointer'}>
                Clear All
            </div>

        </div>
    )
}
export const MoreMenu = ({ classname }) => {
    const { filterMenus, propertyListState } = useSelector(state => state.User);
    const [checkedItems, setCheckedItems] = useState(
        { furnishingTypes: [], bathrooms: [], minArea: '', maxArea: '', newResale: '', constructionStatus: '', facing: [], amenities: [], listedBy: [], floor: [] }
    );
    const dispatch = useDispatch();
    const handleOnCheckedItem = (e, index, value, type) => {
        let arr = [...checkedItems[type]];
        console.log('e.target.checked...', e.target.checked)
        // if (e.target.checked) {
        //     arr[index] = false;
        // }
        // else {
        //     arr[index] = value;
        // }
        if (arr[index] && arr[index] !== '0') {
            arr[index] = false;
        } else {
            arr[index] = value;
        }
        setCheckedItems({ ...checkedItems, [type]: arr });
        dispatch(setPropertyListState({ ...propertyListState, clearAll: false, moreStatus: { ...propertyListState.moreStatus, [type]: arr.filter(it => it).join('-') } }));
    }
    useEffect(() => {
        if (propertyListState.clearAll) {
            console.log('allClear....');
            setCheckedItems(
                { furnishingTypes: [], bathrooms: [], minArea: '', maxArea: '', newResale: '', constructionStatus: '', facing: [], amenities: [], listedBy: [], floor: [] }
            );
        }
    }, [propertyListState.clearAll]);

    return (
        <div className={styles.dropdownContainer + ' text-sm group-hover:block sm:-left-[200px] sm:pl-5 ' + classname}>
            <div>
                <p className='text-sm font-semibold'>FURNISHING TYPE</p>
                <div className='flex flex-wrap gap-4 mt-2'>
                    {filterMenus?.more?.furnish && filterMenus?.more?.furnish.map((item, index) => {
                        return (
                            <label key={index} className='flex gap-2 hover:bg-gray-100'>
                                <input
                                    checked={item.value == checkedItems.furnishingTypes[index]}
                                    // onChange={(e) => handleOnCheckedItem(e, index, item.value, 'furnishingTypes')}
                                    onClick={(e) => handleOnCheckedItem(e, index, item.value, 'furnishingTypes')}
                                    type='checkbox' className='h-4 w-4 mt-1' />
                                <p className='text-gray-600 mt-[2px]'>{item.label}</p>
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
                                <input
                                    checked={item.value == checkedItems.bathrooms[index]}
                                    // onChange={(e) => handleOnCheckedItem(e, index, item.value, 'bathrooms')} type='checkbox' className='h-4 w-4 mt-1' />
                                    onClick={(e) => handleOnCheckedItem(e, index, item.value, 'bathrooms')} type='checkbox' className='h-4 w-4 mt-1' />
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
                            value={propertyListState.moreStatus.minArea}
                            onChange={(e) => dispatch(setPropertyListState({
                                ...propertyListState, clearAll: false,
                                moreStatus: { ...propertyListState.moreStatus, minArea: e.target.value }
                            }))}
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
                            value={propertyListState.moreStatus.maxArea}
                            onChange={(e) => dispatch(setPropertyListState({
                                ...propertyListState, clearAll: false,
                                moreStatus: { ...propertyListState.moreStatus, maxArea: e.target.value }
                            }))}
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
                                onClick={() => dispatch(setPropertyListState({
                                    ...propertyListState, clearAll: false,
                                    moreStatus: { ...propertyListState.moreStatus, newResale: item.value }
                                }))}
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
                                onClick={() => dispatch(setPropertyListState({
                                    ...propertyListState, clearAll: false,
                                    moreStatus: { ...propertyListState.moreStatus, constructionStatus: item.value }
                                }))}
                                key={index} className='flex gap-2 hover:bg-gray-100'>
                                <input type='radio' className='h-4 w-4 mt-1' checked={propertyListState.moreStatus.constructionStatus == item.value} />
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
                                key={index} className='flex gap-2 mt-0 hover:bg-gray-100'>
                                <input
                                    checked={item.value == checkedItems.facing[index]}
                                    // onChange={(e) => handleOnCheckedItem(e, index, item.value, 'facing')}
                                    onClick={(e) => handleOnCheckedItem(e, index, item.value, 'facing')}
                                    type='checkbox' className='h-4 w-4 mt-1' />
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
                                <input
                                    type='checkbox'
                                    className='h-4 w-4 mt-1'
                                    checked={item.value == checkedItems.floor[index]}
                                    onClick={(e) => handleOnCheckedItem(e, index, item.value, 'floor')}
                                />
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
                                key={index} className='flex gap-2 mt-0 hover:bg-gray-100'>
                                <input
                                    // onChange={(e) => handleOnCheckedItem(e, index, item.value, 'amenities')}
                                    onClick={(e) => handleOnCheckedItem(e, index, item.value, 'amenities')}
                                    checked={item.value == checkedItems.amenities[index]}
                                    type='checkbox' className='h-4 w-4 mt-1' />
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
                                key={index} className='flex gap-2 mt-1 hover:bg-gray-100'>
                                <input
                                    // onChange={(e) => handleOnCheckedItem(e, index, item.value, 'listedBy')}
                                    onClick={(e) => handleOnCheckedItem(e, index, item.value, 'listedBy')}
                                    checked={item.value == checkedItems.listedBy[index]}
                                    type='checkbox' className='h-4 w-4 mt-1' />
                                <p className=''>{item.label}</p>
                            </label>
                        )
                    })}
                </div>
            </div>
            <div
                onClick={() => {
                    let initialState = { furnishingTypes: [], bathrooms: [], minArea: '', maxArea: '', newResale: '', constructionStatus: '', facing: [], amenities: [], listedBy: [], floor: [] };
                    dispatch(setPropertyListState({
                        ...propertyListState,
                        moreStatus: { ...initialState }
                    }));
                    setCheckedItems({ ...initialState });
                }}
                className={styles.textMedium + 'text-center my-2 cursor-pointer'}>
                Clear All
            </div>
        </div>
    )
}

export const ShortByMenu = ({ classname }) => {
    // const [selectedItem,setSelectedItem] = useState(null);
    const { propertyListState, filterMenus } = useSelector(state => state.User);
    const [currIndex, setCurrIndex] = useState(2);
    const dispatch = useDispatch();
    useEffect(() => {
        if (propertyListState.clearAll) {
             clearShortBy();
            // setBhkType('');
        }
    }, [propertyListState.clearAll]);

    const clearShortBy = () => {
        dispatch(setPropertyListState({ ...propertyListState, sortBy: 'featured' }));
        setCurrIndex(2);
    }
    return (
        <div className={styles.dropdownMenu + 'w-[220px] group-hover:block sm:-ml-[95px] ' + classname}>
            {/* {console.log('filterMenus...',filterMenus)} */}
            {filterMenus?.sortBy?.map((item, index) => {
                return (
                    <label key={index}
                        onClick={() => {
                            setCurrIndex(index);
                            dispatch(setPropertyListState({ ...propertyListState, sortBy: item.value,clearAll:false }));
                        }}
                        // onClick={() => setSelectedItem(item.type)}
                        className={styles.dropdownItem}>
                        {/* <input id={`radioBtn-${index}`} className='mt-[0.5px]' type='radio' checked={currIndex == index}/> */}
                        <input className='mt-[0.5px]' type='radio'
                            checked={currIndex == index} />
                        <p className='ml-1'>{item.label}</p>
                    </label>
                )
            })}
            {/* <div
                className='text-center cursor-pointer py-2'
                onClick={() => clearShortBy()}>
                <p className={'text-center mt-2'}>Clear All</p>
            </div> */}
        </div>
    )
}
// export const BudgetMenu = ()=>{
//     return(

//     )
// }

export default BHKmenu;
