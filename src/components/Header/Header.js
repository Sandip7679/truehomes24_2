import React, { useEffect, useRef, useState } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCoffee } from '@fortawesome/free-solid-svg-icons';

import interiorDesiginStudio from '../../assets/Icons/interiorDesiginStudio.png';
import homeLoan from '../../assets/Icons/homeLoan.png';
import postPropertyPerDay from '../../assets/Icons/post-property-per-day.png';

import cityIcon from '../../assets/Icons/amedabad.jpg';
import { Dropdown, MenuIcon, SearchIcon } from '../svgIcons';
import { styles } from '../../Styles/Styles';
import { NavLink } from 'react-router-dom';
import Auth from '../Auth';
import MobileMenu from './MobileMenu';
import { DropdownHover } from '../Dropdowns';
const cities = [
    { city: 'Dubai' },
    { city: 'Toronto' },
    { city: 'Hong Kong' },
    { city: 'Singapore' },
    { city: 'New York City' },
]

const otherCities = [
    { city: 'Kolkata' },
    { city: 'Patna' },
    { city: 'Delhi' },
    { city: 'Gujrat' },
    { city: 'Mumbai' },
    { city: 'Pune' },
    { city: 'Chennai' },
    { city: 'Chennai' },
    { city: 'Chennai' },
    { city: 'Chennai' },
    { city: 'Chennai' },
    { city: 'Chennai' },
    { city: 'Chennai' },
]

const postPropertyItems = [
    { name: 'Post-Property-Rs 10/day', imgSrc: postPropertyPerDay, endpoint: '/post-property' },
    { name: 'Featured-Property-Rs 100/day', imgSrc: postPropertyPerDay, endpoint: '/post-property' },
    { name: 'New Property-Rs 100/day', imgSrc: postPropertyPerDay, endpoint: '/post-property/new-project' },
];
const moreServicesItem = [
    { name: ' Interior Design Studio', imgSrc: interiorDesiginStudio, endpoint: null },
    { name: ' Home Loan', imgSrc: homeLoan, endpoint: null },
]


let myDashboardItems = [];

const Header = () => {

    const cityRef = useRef(null);

    const [showLoginPopup, setShowLoginPopup] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        // document.getElementById('dropdown-city').addEventListener('blur', () => {
        //     document.getElementById('city-menu').classList.add('hidden');
        // });
        // document.addEventListener('click', (e) => {
        //     if (!document.getElementById('dropdown-city').contains(e.target)) {
        //         document.getElementById('city-menu').classList.add('hidden');
        //     }
        // });
         myDashboardItems = [
            { name: 'View Response', endpoint: null },
            { name: 'Manage Property', endpoint: '/manage-property' },
            { name: 'My Order', endpoint: null },
            { name: 'Manage Profile', endpoint: '/dashboard/my-profile' },
            { name: 'Sign Out', endpoint: '/',onClick:logout},
        
        ];
        closeOnClickOutside('dropdown-city', 'city-menu');
        document.getElementById('mobile-menu-button').addEventListener('blur', () => {
            document.getElementById('mobile-menu').classList.add('hidden');
        });

        // document.getElementById('more-services-btn').addEventListener('blur', () => {
        //     document.getElementById('more-services-menu').classList.add('hidden');
        // });
        // document.getElementById('post-property-btn').addEventListener('blur', () => {
        //     document.getElementById('post-property-menu').classList.add('hidden');
        // });

         if(localStorage.getItem('isLoggedIn')==='true'){
            setIsLoggedIn(true);
         }

    }, []);

    const logout = ()=>{
        localStorage.setItem('isLoggedIn',false);
        setIsLoggedIn(false);
    }
    const closeOnClickOutside = (parentId, childId) => {
        document.addEventListener('click', (e) => {
            let dropdownElement = document.getElementById(parentId);
            let childElement = document.getElementById(childId);
            if (childElement && dropdownElement && !dropdownElement.contains(e.target)) {
                childElement.classList.add('hidden');
            }
        });
    }

    const onCloseLoginPopup = () => {
        setShowLoginPopup(false);
    }
    const onLoggedIn = ()=>{
        setIsLoggedIn(true);
        localStorage.setItem('isLoggedIn',true);
    }

    return (
        <nav className="bg-gray-800 fixed top-0 z-[2000] p-2 w-screen">
            <div className="flex justify-between">
                <div className="flex">
                    <div class="xl:hidden z-[200] group">
                        <button id="mobile-menu-button" class="text-white focus:outline-none h-6 w-6 sm:h-8 sm:w-8" onClick={() => document.getElementById('mobile-menu').classList.toggle('hidden')}>
                            <MenuIcon />
                        </button>
                        <div id="mobile-menu" className="hidden fixed group-hover:block lg:hidden inset-0 top-[52px] shadow border-r-[1px] bg-gray-50 z-5 w-[80%] max-w-[300px]">
                            <MobileMenu />
                        </div>
                    </div>
                    <NavLink to={'/'}>
                        <img src='https://www.truehomes24.com/assets/dynamic/logo/3231ba59af210a5c3273fb2440e10cd6.jpg' alt="Logo" className="h-9 w-12 sm:w-14 ml-1 sm:ml-2" /> {/* Adjust the size as needed */}
                    </NavLink>
                    <div ref={cityRef}
                        id='dropdown-city'
                        className="relative group z-10 ml-2">
                        <button id='city-btn' className={styles.dropdown + 'opacity-95 mr-[2px] lg:mr-4 xl:mr-8'}
                            onClick={() => document.getElementById('city-menu').classList.toggle('hidden')}
                        >
                            City
                            <Dropdown classname={'text-white'} />
                        </button>
                        <div
                            id='city-menu'
                            className="absolute hidden bg-white p-2 pt-2 w-[280px] overflow-auto h-[500px] pb-10 md:w-[335px] lg:w-[430px] space-y-2 -ml-[90px] sm:ml-0 text-gray-800 top-9 border-gray-300 border-[1px] rounded-md"
                        >
                            <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 mt-2'>
                                {cities.map((item,index) => {
                                    return (
                                        <NavLink key={index} to="/property-list" className="px-2 py-4 rounded-md hover:bg-gray-100 flex flex-col border-[1px] shadow-lg items-center justify-center">
                                            <img alt='' src={cityIcon} className='h-5 w-6' />
                                            <span className='text-xs text-center'>{item.city}</span>
                                        </NavLink>
                                    )
                                })}
                                {/* {cities.map((item) => {
                                    return (
                                        <NavLink to="/property-list" className="px-2 py-4 rounded-md w-[47%] hover:bg-gray-100 max-w-[90px] flex flex-col border-[1px] shadow-lg items-center justify-center">
                                            <img alt='' src={cityIcon} className='h-5 w-6' />
                                            <span className='text-xs text-center'>{item.city}</span>
                                        </NavLink>
                                    )
                                })} */}
                            </div>
                            <div className='w-[100%]'>
                                <SearchIcon imageClass={'w-5 h-5 absolute left-2 top-7'} />
                                <input placeholder='Search City...' className='bg-gray-100 border-[1px] pl-8 py-1 w-[100%] mt-5 focus:outline-none rounded-md' />
                            </div>
                            <div className=''>
                                <div className='text-left mt-5'>Top Cities</div>
                                <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 mt-4'>
                                    {cities.map((item,index) => {
                                        return (
                                            <button key={index} className="px-2 py-4 rounded-md hover:bg-gray-100 max-w-[100px] flex flex-col border-[1px] shadow-lg items-center justify-center">
                                                <img alt='' src={cityIcon} className='h-5 w-6' />
                                                <span className='text-xs'>{item.city}</span>
                                            </button>
                                        )
                                    })}
                                </div>
                            </div>

                            <div className='mt-5 w-[100%]'>
                                <div className='text-left pl-1'>Other Cities</div>
                                <div className='w-[100%] pl-2'>
                                    {otherCities.map((item,index) => {
                                        return (
                                            <span key={index} className="px-2 -mt-5 -pt-5  text-left">
                                                <div className='text-sm -mt-3 hover:bg-gray-100 w-[100%] pt-0 border-b-[0.5px]'>{item.city}</div>
                                            </span>
                                        )
                                    })}
                                </div>
                            </div>

                        </div>
                        {/* <div className='rounded border-gray-500 bg-white p-8'>
                            <div>
                                Delhi
                            </div>
                        </div> */}
                    </div>
                    <div className='hidden lg:flex space-x-4'>
                        <div className='hidden xl:flex md:gap-5'>
                            <span className="text-gray-100 hover:text-gray-400">Buy</span>
                            <span className="text-gray-100 hover:text-gray-400">Rent</span>
                            <span className="text-gray-100 hover:text-gray-400">New Project</span>
                        </div>

                        <NavLink to="/agents" className="text-gray-100 hover:text-gray-400">Agents</NavLink>
                        <NavLink to="/builders" className="text-gray-100 hover:text-gray-400">Builders</NavLink>
                        <div className='relative group z-10'>
                            <button
                                id='more-services-btn'
                                // onClick={() => document.getElementById('more-services-menu').classList.toggle('hidden')}
                                className={styles.dropdown + 'text-gray-50 opacity-95 mr-[2px]'}>
                                More Services
                                <Dropdown classname={'text-white mt-[4px]'} />
                            </button>
                            <DropdownHover Items={moreServicesItem} />
                            {/* <div id='more-services-menu' className={styles.dropdownMenu + 'top-[24px] w-[200px]'}>
                                <a href="#" class={styles.dropdownItem}>
                                    <img alt='' src={interiorDesiginStudio} className='h-5 w-6 mr-3 ' />
                                    <span className=''>
                                        Interior Design Studio
                                    </span>
                                </a>
                                <a href="#" class='text-black p-2 hover:bg-gray-100 border-gray-100 flex'>
                                    <span>
                                        <img alt='' src={homeLoan} className='h-5 w-6 mr-3' />
                                    </span>
                                    Home Loan
                                </a>
                            </div> */}
                        </div>

                    </div>
                </div>
                <div className='flex'>
                    <div className="hidden md:flex">
                        <NavLink to={'/buyer-registration'}>
                            <button className={styles.btn + 'border-green-500 px-4 hover:bg-gray-700 text-white opacity-95'}>
                                Buyer/Tenant Registration
                            </button>
                        </NavLink>

                        <div className='relative group z-10'>
                            <button
                                id='post-property-btn'
                                // onClick={() => document.getElementById('post-property-menu').classList.toggle('hidden')}
                                className={styles.dropdownBtn + ' text-gray-50 opacity-95'}>
                                Post Property
                                <Dropdown classname={'text-white opacity-95'} />
                            </button>
                            <DropdownHover Items={postPropertyItems} />
                        </div>
                    </div>
                    <div className='pr-2 md:pr-5'>
                        {!isLoggedIn ? <button
                            onClick={() => setShowLoginPopup(true)}
                            className={styles.textMedium + 'text-white px-2 sm:px-4 py-1 rounded-md ml-4 bg-gray-600  hover:bg-gray-500'}>
                            Register/Login
                        </button>
                            :
                            <div className='relative group z-10'>
                                <button
                                    className={styles.dropdownBtn + ' text-gray-50 opacity-95'}>
                                    My Dashboard
                                    <Dropdown classname={'text-white opacity-95'} />
                                </button>
                                <DropdownHover Items={myDashboardItems} MenuClass={'w-[180px]'} ItemClass={'border-b-[0px]'}/>
                            </div>
                        }
                    </div>
                </div>


            </div>

            {showLoginPopup && <Auth login={onLoggedIn} onClose={onCloseLoginPopup} />}
        </nav>

    );
}

export default Header;
