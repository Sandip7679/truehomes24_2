import React, { useEffect, useRef, useState } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCoffee } from '@fortawesome/free-solid-svg-icons';

import interiorDesiginStudio from '../../assets/Icons/interiorDesiginStudio.png';
import homeLoan from '../../assets/Icons/homeLoan.png';
import postPropertyPerDay from '../../assets/Icons/post-property-per-day.png';

import cityIcon from '../../assets/Icons/amedabad.jpg';
import  {Dropdown, MenuIcon, SearchIcon } from '../svgIcons';
import { styles } from '../../Styles/Styles';
import { NavLink } from 'react-router-dom';
import Auth from '../Auth';
import MobileMenu from './MobileMenu';
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

const Header = () => {

    const cityRef = useRef(null);

    const [showLoginPopup, setShowLoginPopup] = useState(false);

    useEffect(() => {
        // document.getElementById('dropdown-city').addEventListener('blur', () => {
        //     document.getElementById('city-menu').classList.add('hidden');
        // });
        // document.addEventListener('click', (e) => {
        //     if (!document.getElementById('dropdown-city').contains(e.target)) {
        //         document.getElementById('city-menu').classList.add('hidden');
        //     }
        // });
        closeOnClickOutside('dropdown-city', 'city-menu');
        document.getElementById('mobile-menu-button').addEventListener('blur', () => {
            document.getElementById('mobile-menu').classList.add('hidden');
        });

        document.getElementById('more-services-btn').addEventListener('blur', () => {
            document.getElementById('more-services-menu').classList.add('hidden');
        });
        document.getElementById('post-property-btn').addEventListener('blur', () => {
            document.getElementById('post-property-menu').classList.add('hidden');
        });

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

    const onCloseLoginPopup = () => {
        setShowLoginPopup(false);
    }


    return (
        <nav className="bg-gray-800 fixed top-0 z-[2000] p-2 w-screen">
            <div className="flex justify-between">
                <div className="flex items-center space-x-2">
                    <div class="lg:hidden z-[200] group">
                        <button id="mobile-menu-button" class="text-white focus:outline-none h-6 w-6 sm:h-8 sm:w-8" onClick={() => document.getElementById('mobile-menu').classList.toggle('hidden')}>
                            <MenuIcon />
                        </button>
                        <div id="mobile-menu" className="hidden fixed group-hover:block lg:hidden inset-0 top-[52px] shadow border-r-[1px] bg-gray-50 z-5 w-[80%] max-w-[300px]">
                            <MobileMenu />
                        </div>
                    </div>
                    <NavLink to={'/'}>
                        <img src='https://www.truehomes24.com/assets/dynamic/logo/3231ba59af210a5c3273fb2440e10cd6.jpg' alt="Logo" className="h-9 w-12 sm:w-16 ml-1 sm:ml-2" /> {/* Adjust the size as needed */}
                    </NavLink>
                    <div ref={cityRef}
                        id='dropdown-city'
                        className="relative group z-10">
                        <button id='city-btn' className={styles.dropdown + 'opacity-95'}
                            onClick={() => document.getElementById('city-menu').classList.toggle('hidden')}
                        >
                            City
                            <Dropdown classname={'text-white'} />
                        </button>
                        <div
                            id='city-menu'
                            className="absolute hidden bg-white p-2 pt-2 w-[180px] overflow-auto max-h-[500px] md:w-[335px] lg:w-[460px] space-y-2 -ml-[100px] sm:ml-0 text-gray-800 top-10 border-gray-300 border-[1px] "
                        >
                            <div className='flex flex-wrap gap-2 mt-2'>
                                {cities.map((item) => {
                                    return (
                                        <NavLink to="/property-list" className="px-2 py-4 rounded-md w-[47%] hover:bg-gray-100 max-w-[100px] flex flex-col border-[1px] shadow-lg items-center justify-center">
                                            <img src={cityIcon} className='h-5 w-6' />
                                            <span className='text-xs'>{item.city}</span>
                                        </NavLink>
                                    )
                                })}
                            </div>
                            <div className='w-[100%]'>
                                <SearchIcon imageClass={'w-5 h-5 absolute left-2 top-7'} />
                                <input placeholder='Search City...' className='bg-gray-100 border-[1px] pl-8 py-1 w-[100%] mt-5 focus:outline-none rounded-md' />
                            </div>
                            <div>
                                <div className='text-left mt-5'>Top Cities</div>
                                <div className='flex flex-wrap gap-2 mt-4'>
                                    {cities.map((item) => {
                                        return (
                                            <a href="#" className="px-2 py-4 rounded-md w-[47%] hover:bg-gray-100 max-w-[100px] flex flex-col border-[1px] shadow-lg items-center justify-center">
                                                <img src={cityIcon} className='h-5 w-6' />
                                                <span className='text-xs'>{item.city}</span>
                                            </a>
                                        )
                                    })}
                                </div>
                            </div>

                            <div className='w-[100%]'>
                                <div className='text-left pl-1'>Other Cities</div>
                                <div className='w-[100%] pl-5'>
                                    {otherCities.map((item) => {
                                        return (
                                            <a href="#" className="px-2 -mt-5 -pt-5  text-left">
                                                <div className='text-sm -mt-3 hover:bg-gray-100 w-[100%] pt-0 border-b-[0.5px]'>{item.city}</div>
                                            </a>
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
                        <a href="#" className="text-gray-100 hover:text-gray-400">Buy</a>
                        <a href="#" className="text-gray-100 hover:text-gray-400">Rent</a>
                        <a href="#" className="text-gray-100 hover:text-gray-400">New Project</a>
                        <NavLink to="/agents" className="text-gray-100 hover:text-gray-400">Agents</NavLink>
                        <NavLink to="/builders" className="text-gray-100 hover:text-gray-400">Builders</NavLink>
                        <div className='relative group z-10'>
                            <button
                                id='more-services-btn'
                                onClick={() => document.getElementById('more-services-menu').classList.toggle('hidden')}
                                className={styles.dropdown + 'text-gray-50 opacity-95'}>
                                More Services
                                <Dropdown classname={'text-white mt-[4px]'} />
                            </button>
                            <div id='more-services-menu' className={styles.dropdownMenu + ' w-[200px]'}>
                                <a href="#" class={styles.dropdownItem}>
                                    <img src={interiorDesiginStudio} className='h-5 w-6 mr-3 ' />
                                    <span className=''>
                                        Interior Design Studio
                                    </span>
                                </a>
                                <a href="#" class='text-black p-2 hover:bg-gray-100 border-gray-100 flex'>
                                    <span>
                                        <img src={homeLoan} className='h-5 w-6 mr-3' />
                                    </span>
                                    Home Loan
                                </a>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="hidden lg:flex justify-between items-center">
                    <button className={styles.btn + 'border-green-500 px-4 hover:bg-gray-700 text-white opacity-95'}>
                        Buyer/Tenant Registration
                    </button>
                    <div className='relative group z-10'>
                        <button
                            id='post-property-btn'
                            onClick={() => document.getElementById('post-property-menu').classList.toggle('hidden')}
                            className={styles.dropdownBtn + 'text-gray-50 opacity-95'}>
                            Post Property
                            <Dropdown classname={'text-white opacity-95'} />
                        </button>
                        <div id='post-property-menu' className={styles.dropdownMenu + 'w-[250px]'}>
                            <a href="#" class={styles.dropdownItem}>
                                <img src={postPropertyPerDay} className='h-5 w-6 mr-5 ' />
                                <span className=''>
                                    Post-Property-Rs 10/day
                                </span>
                            </a>
                            <a href="#" class={styles.dropdownItem}>
                                <img src={postPropertyPerDay} className='h-5 w-6 mr-5 ' />
                                <span className=''>
                                    Featured-Property-Rs 100/day
                                </span>
                            </a>
                            <a href="#" class='text-black p-2 text-sm hover:bg-gray-100 border-gray-100 flex'>
                                <span>
                                    <img src={postPropertyPerDay} className='h-5 w-6 mr-5' />
                                </span>
                                New Property-Rs 100/day
                            </a>
                        </div>
                    </div>
                </div>
                <div className='pr-2 md:pr-5'>
                    <button
                        onClick={() => setShowLoginPopup(true)}
                        className={styles.textMedium + 'text-white px-2 sm:px-4 py-1 rounded-md ml-4 bg-gray-600  hover:bg-gray-500'}>
                        Register/Login
                    </button>
                </div>

            </div>

            {showLoginPopup && <Auth onClose={onCloseLoginPopup} />}
        </nav>

    );
}

export default Header;
