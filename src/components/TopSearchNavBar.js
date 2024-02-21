import React, { useEffect, useState } from 'react';
import Dropdown, { SearchIcon } from './svgIcons';
import homeKey from '../assets/Icons/home-key.png';
import buyIcon from '../assets/Icons/buy-buy.png';
import newProjectIcon from '../assets/Icons/bulding-project.png';
import { styles } from '../Styles/Styles';
import BHKmenu, { BudgetMenu, MoreMenu, PropertyTypeMenu } from './Dropdowns';
// import { useParams, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setFileterMenus, setPropertyListState } from '../Redux/reducer/User';
import { NavLink } from 'react-router-dom';
import useApi from '../ApiConf';
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
    { type: 'Buy', icon: buyIcon, value: 'sale', path: '/sale/property-for-sale-in-' },
    { type: 'Rent', icon: homeKey, value: 'rent', path: '/rent/property-for-rent-in-' },
    { type: 'New Projects', icon: newProjectIcon, value: 'new-projects', path: '/new-projects/new-projects-for-sale-in-' }
]


const TopSearchNavBar = () => {
    const { currLocation, propertyListState, filterMenus } = useSelector(state => state.User);
    const dispatch = useDispatch();
    const { fetchData, error } = useApi();
    useEffect(() => {

        getFileterMenus();

        // closeOnClickOutside('budget-dropdown', 'budget-menu');
        // closeOnClickOutside('bhk-dropdown', 'bhk-menu');
        // closeOnClickOutside('property-type-dropdown', 'property-type-menu');
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

    const getFileterMenus = async () => {
        let data;
        try {
            data = await fetchData('property-list-filters', 'GET');
        } catch (err) {
            console.log(err);
        }
        if (data) {
            dispatch(setFileterMenus(data.filters));
        }
    }

    return (
        <div className={styles.textMedium + 'w-screen mx-auto shadow fixed bg-white z-[1500]'}>
            <div className='relative p-2 xl:container pt-5 xl:flex gap-2 pl-[1%]'>
                <div className='flex gap-1 sm:gap-2 xl:w-full sm:max-w-[780px]'>
                    <div className='absolute top-[110px] xs:top-[65px] xl:top-0 xl:relative group'>
                        <button className='p-0 pr-0 flex w-[147px]'>
                            <img alt='' className='h-4 w-4 mt-1 mr-2' src={searchTypes[propertyListState?.propertyStatus?.index]?.icon} />
                            <p className={styles.textMedium + 'font-semibold text-gray-800'}>{propertyListState?.propertyStatus?.text}</p>
                            <Dropdown />
                        </button>
                        <div className={styles.dropdownMenu + 'p-0 pt-[0px] group-hover:block w-[170px]'}>
                            {searchTypes.map((item, index) => {
                                return (
                                    <NavLink
                                        to={item.path + currLocation?.city.toLowerCase()}
                                        key={index}
                                        onClick={() => {
                                            // setCurrSearchIndex(index);
                                            dispatch(setPropertyListState({ ...propertyListState, propertyStatus: { text: item.type, value: item.value, index: index } }));
                                        }}
                                        className='flex p-2 w-full hover:bg-gray-100'>
                                        <img alt='' className='h-4 w-4 mt-1 mr-2' src={item.icon} />
                                        <p className={styles.textMedium + 'text-gray-800'}>{item.type}</p>
                                    </NavLink>
                                )
                            })}
                        </div>
                    </div>

                    <div className='xs:flex w-full'>
                        <div>
                            <SearchIcon imageClass={'w-5 h-5 absolute left-2 top-3'} />
                        </div>
                        <input className={styles.textMedium + ' overflow-ellipsis focus:outline-none border-gray-300 rounded xs:border-r-0 rounded-r-none border-[1px] w-[100%] py-2 pl-8'} placeholder='Pick City, Location, Project/Society...' />
                        <button className='bg-orange-500 hover:bg-orange-600 rounded xs:rounded-none xs:rounded-r-full p-2 w-full xs:w-16 mt-2 xs:mt-0'>
                            <p className={styles.textMedium + 'text-white'}>Search</p>
                        </button>
                    </div>
                </div>

                <div className='flex flex-wrap flex-shrink-0 mt-1 gap-2'>
                    <div className='w-[145px] xl:hidden' />
                    <div id='bhk-dropdown' className='relative group'>
                        <button
                            // onClick={() => document.getElementById('bhk-menu').classList.toggle('hidden')}
                            id='bhk-btn' className={styles.btn + 'py-[2px] sm:py-1 '}>
                            <p className='text-sm lg:text-base'>BHK</p>
                            <Dropdown />
                        </button>
                        <BHKmenu />
                    </div>

                    <div
                        id='property-type-dropdown'
                        className='relative group'>
                        <button
                            // onClick={() => document.getElementById('property-type-menu').classList.toggle('hidden')}
                            className={styles.btn + 'py-[2px] sm:py-1 '}>
                            <p className='text-sm lg:text-base'>Property Type</p>
                            <Dropdown />
                        </button>
                        <PropertyTypeMenu />
                    </div>

                    <div id='budget-dropdown' className='relative group'>
                        <button
                            // onClick={() => {
                            //     if (document.getElementById('budget-menu')) {
                            //         document.getElementById('budget-menu').classList.toggle('hidden');
                            //     }
                            // }}
                            className={styles.btn + 'py-[2px] sm:py-1 '}>
                            <p className='text-sm lg:text-base'>Budget</p>
                            <Dropdown />
                        </button>
                        <BudgetMenu />
                    </div>
                    <div className='relative group'>
                        <button
                            // onClick={() => document.getElementById('more-menu').classList.toggle('hidden')}
                            className={styles.btn + 'py-[2px] sm:py-1 '}>
                            <p className='text-sm lg:text-base'>More</p>
                            <Dropdown />
                        </button>
                        <MoreMenu />
                    </div>
                    <div
                        id='shortBy-dropdown'
                        className='relative group'>
                        <button
                            onClick={() => document.getElementById('shortBy-menu').classList.toggle('hidden')}
                            className={styles.btn + 'py-[2px] sm:py-1 '}>
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

                    <button
                        onClick={() => dispatch(setPropertyListState({
                            propertyStatus: { text: 'Buy', value: 'sale', index: 0 },
                            BHKtype: '', propertyTypes: [],
                            priceRange: ['', ''],
                            moreStatus: { furnishingTypes: [], bathrooms: [], minArea: '', maxArea: '', newResale: '', constructionStatus: '', facing: [], amenities: [], listedBy: [] },
                            clearAll: true
                        }))}
                        className='ml-2 opacity-80 py-[2px] sm:py-1 '>
                        <i class="fa-solid fa-rotate-right mr-1 text-sm lg:text-base"></i>
                        Clear All
                    </button>

                </div>
            </div>
        </div>
    );
}

export default TopSearchNavBar;
