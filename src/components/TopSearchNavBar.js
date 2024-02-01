import React, { useEffect, useState } from 'react';
import Dropdown, { SearchIcon } from './svgIcons';
import homeKey from '../assets/Icons/home-key.png';
import buyIcon from '../assets/Icons/buy-buy.png';
import newProjectIcon from '../assets/Icons/bulding-project.png';
import { styles } from '../Styles/Styles';
import { BudgetMenu } from './Dropdowns';
// import { document } from 'postcss';


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

const searchTypes = [
    { type: 'Buy', icon: buyIcon },
    { type: 'Rent', icon: homeKey },
    { type: 'New Projects', icon: newProjectIcon }
]


const TopSearchNavBar = () => {

    // const [selectedBHK, setSelectedBHK] = useState(null);
    const [currSearchIndex, setCurrSearchIndex] = useState(0);

    useEffect(() => {
        closeOnClickOutside('budget-dropdown', 'budget-menu');
        closeOnClickOutside('bhk-dropdown', 'bhk-menu');
        closeOnClickOutside('property-type-dropdown', 'property-type-menu');
        closeOnClickOutside('shortBy-dropdown', 'shortBy-menu');

    }, []);

    const closeOnClickOutside = (parentId, childId) => {
        document.addEventListener('click', (e) => {
            let dropdownElement = document.getElementById(parentId);
            let childElement = document.getElementById(childId);
            if (childElement && dropdownElement && !dropdownElement.contains(e.target)) {
                childElement.classList.add('hidden');
            }
        });
    }

    return (
        <div className='p-2 w-full pt-5 flex gap-2 flex-wrap shadow pl-[1%]'>
            <div className='relative group'>
                <button className='p-0 pr-0 flex w-[147px]'>
                    <img alt='' className='h-4 w-4 mt-1 mr-2' src={searchTypes[currSearchIndex].icon} />
                    <p className={styles.textMedium + 'font-bold text-gray-800'}>{searchTypes[currSearchIndex].type}</p>
                    <Dropdown />
                </button>
                <div className={styles.dropdownMenu + 'p-0 pt-[0px] group-hover:block w-[170px]'}>
                    {searchTypes.map((item, index) => {
                        return (
                            <button key={index}
                                onClick={() => setCurrSearchIndex(index)}
                                className='flex p-2 w-full hover:bg-gray-100'>
                                <img alt='' className='h-4 w-4 mt-1 mr-2' src={item.icon} />
                                <p className={styles.textMedium + 'text-gray-800'}>{item.type}</p>
                            </button>
                        )
                    })}
                </div>
            </div>

            <div className='flex h-10 w-[98%] sm:w-[80%] lg:max-w-[25%] xl:max-w-[35%]'>
                <div>
                    <SearchIcon imageClass={'w-5 h-5 absolute left-2 top-3'} />
                </div>
                <input className={styles.textMedium + '  focus:outline-none border-gray-300 rounded border-r-0 rounded-r-none border-[1px] w-[100%] pl-8'} placeholder='Pick City, Location, Project/Society...' />
                <button className='bg-orange-500 hover:bg-orange-600 hover: rounded-r-full p-2'>
                    <p className={styles.textMedium + 'text-white'}>Search</p>
                </button>
            </div>
            <div className='flex flex-wrap mt-1 gap-1'>
                <div id='bhk-dropdown' className='relative group'>
                    <button
                        onClick={() => document.getElementById('bhk-menu').classList.toggle('hidden')}
                        id='bhk-btn' className={styles.btn + 'mx-1'}>
                        <p className='text-sm lg:text-base'>BHK</p>
                        <Dropdown />
                    </button>
                    <div id='bhk-menu' className={styles.dropdownMenu + 'w-[120px] group-hover:block'}>
                        {BHKtype.map((item, index) => {
                            return (
                                <label key={index}
                                    // onClick={() => setSelectedBHK(index)}
                                    className={styles.dropdownItem}>
                                    <input id={`radioBtn-${index}`} className='mt-[0.5px]' type='radio' />
                                    <p className='ml-1'>{item.type}</p>
                                </label>
                            )
                        })}
                        <p className={styles.textMedium + 'text-center mt-2'}>Clear All</p>
                    </div>
                </div>

                <div
                    id='property-type-dropdown'
                    className='relative group'>
                    <button
                        onClick={() => document.getElementById('property-type-menu').classList.toggle('hidden')}
                        className={styles.btn + 'mx-1'}>
                        <p className='text-sm lg:text-base'>Property Type</p>
                        <Dropdown />
                    </button>
                    <div
                        id='property-type-menu'
                        className={`${styles.dropdownMenu} w-[260px] group-hover:block`}>
                        <div class="space-y-2 max-h-[400px] overflow-y-scroll">
                            {propertyTypes.map((item, index) => {
                                return (
                                    <label key={index} class="flex hover:cursor-pointer hover:bg-gray-100 pl-2 items-center">
                                        <input type="checkbox" class="form-checkbox mt-1 h-4 w-4 text-blue-500" />
                                        <span class={styles.textMedium + "ml-2"}>{item.type}</span>
                                    </label>
                                )
                            })}
                        </div>
                    </div>
                </div>

                <div id='budget-dropdown' className='relative group'>
                    <button
                        onClick={() => {
                            if (document.getElementById('budget-menu')) {
                                document.getElementById('budget-menu').classList.toggle('hidden');
                            }
                        }}
                        className={styles.btn + 'mx-1'}>
                        <p className='text-sm lg:text-base'>Budget</p>
                        <Dropdown />
                    </button>
                    {/* <div
                        id='bugdet-menu'
                        className={`${styles.dropdownContainer} -left-[200px] group-hover:block`}>
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
                                    <div className='flex gap-5 mt-2'>
                                        <div className={styles.textMedium + 'flex-1 text-left font-semibold ml-2'}>{'\u20B9'} {item} Lacs</div>
                                        <div className={styles.textMedium + 'flex-1 text-left font-semibold ml-2'}> {'\u20B9'} {item} Lacs</div>
                                    </div>
                                )
                            })}
                        </div>

                    </div> */}
                    <BudgetMenu/>
                </div>
                <div className='relative group'>
                    <button
                        onClick={() => document.getElementById('more-menu').classList.toggle('hidden')}
                        className={styles.btn + 'mx-1'}>
                        <p className='text-sm lg:text-base'>More</p>
                        <Dropdown />
                    </button>
                    <div id='more-menu' className={styles.dropdownContainer + 'group-hover:block sm:-left-[200px] sm:pl-5'}>
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
                </div>

                <div
                    id='shortBy-dropdown'
                    className='relative group'>
                    <button
                        onClick={() => document.getElementById('shortBy-menu').classList.toggle('hidden')}
                        className={styles.btn + 'mx-1'}>
                        <p className='text-sm lg:text-base'>Short By</p>
                        <Dropdown />
                    </button>
                    <div id='shortBy-menu' className={styles.dropdownMenu + 'w-[220px] group-hover:block sm:-ml-[95px]'}>
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
                        <p className={styles.textMedium + 'text-center mt-2'}>Clear All</p>
                    </div>
                </div>

                <button className='ml-2 opacity-80'>
                    <i class="fa-solid fa-rotate-right mr-1 text-sm lg:text-base"></i>
                    Clear All
                </button>

            </div>
        </div>
    );
}

export default TopSearchNavBar;
