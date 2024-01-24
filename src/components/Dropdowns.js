import React from 'react';
import { styles } from '../Styles/Styles';

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
    {type:'Furnished'},
    {type:'Semi Furnished'},
    {type:'Unfurnnished'},
];
const shortByItems = [
    { type: 'Short By Newest' },
    { type: 'Short By Oldest' },
    { type: 'Short By Featured' },
    { type: 'Short By Price (Low to Hogh)' },
    { type: 'Short By Price (HIgh to Low)' },
]
const rupees = [30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80];

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


const BHKmenu = ({ classname }) => {
    return (
        <div className={styles.dropdownMenu + 'w-[120px] group-hover:block ' + classname}>
            {BHKtype.map((item, index) => {
                return (
                    <label
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
                    <label class="flex hover:cursor-pointer hover:bg-gray-100 py-1 pl-2 items-center">
                        <input type="checkbox" class="form-checkbox mt-1 h-4 w-4 text-blue-500" />
                        <span class={"ml-2 font-semibold"}>{item.type}</span>
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
                    <label class="flex hover:cursor-pointer hover:bg-gray-100 p-2 items-center">
                        <input type="checkbox" class="form-checkbox mt-1 h-4 w-4 text-blue-500" />
                        <span class={"ml-2"}>{item.type}</span>
                    </label>
                )
            })}
        </div>
    )
}

export const BudgetMenu = ({ classname }) => {
    return (
        <div
            className={styles.dropdownContainer + '-left-[100px] group-hover:block ' + classname}>
            <div className='flex gap-5 mt-5'>
                <div className='relative'>
                    <span className='absolute top-2 left-2'>{'\u20B9'}</span>
                    <input placeholder='Min' className={styles.input + ' pl-5 rounded-md'} />
                </div>
                <div className='relative'>
                    <span className='absolute top-2 left-2'>{'\u20B9'}</span>
                    <input placeholder='Max' className={styles.input + 'pl-5 rounded-md'} />
                </div>
            </div>
            <div>
                {rupees.map((item, index) => {
                    return (
                        <div className='flex gap-5 mt-2 cursor-pointer'>
                            <div className={styles.textMedium + 'flex-1 text-left font-semibold ml-2'}>{'\u20B9'} {item} Lacs</div>
                            <div className={styles.textMedium + 'flex-1 text-left font-semibold ml-2'}> {'\u20B9'} {item} Lacs</div>
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
                            <label className='flex gap-2 hover:bg-gray-100'>
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
                            <label className='flex gap-2 hover:bg-gray-100'>
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
                            <label className='flex gap-2 hover:bg-gray-100'>
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
                            <label className='flex gap-2 hover:bg-gray-100'>
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
                            <label className='flex gap-2 mt-0 hover:bg-gray-100'>
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

export const ShortByMenu = ({classname}) => {
    return (
        <div className={styles.dropdownMenu + 'w-[220px] group-hover:block sm:-ml-[95px] '+classname}>
            {shortByItems.map((item, index) => {
                return (
                    <label
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
