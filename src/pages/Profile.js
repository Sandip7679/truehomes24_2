import React, { useEffect, useRef, useState } from 'react';
import Header from '../components/Header/Header';
import { styles } from '../Styles/Styles';
import { NavLink } from 'react-router-dom';
import userBackImage from '../assets/images/user.svg'
import PropertyListCard from '../components/PropertyListCard';
import Footer from '../components/Footer';
import RightListCard from '../components/RightListCard';
import Contact from '../components/Contact';
import BHKmenu, { BudgetMenu, FurnishingTypeMenu, MoreMenu, PropertyMenu, ShortByMenu } from '../components/Dropdowns';

const Data = [
    {
        "title": "1 BHK Apartment  for Sale  in Rainbow Chetna, Perambur, Chennai",
        "link": "https://www.truehomes24.com/api/sale/1-bhk-apartment-for-sale-in-rainbow-chetna-perambur-chennai/1000-57159",
        "property_url": "/sale/1-bhk-apartment-for-sale-in-rainbow-chetna-perambur-chennai/1000-57159",
        "image": "https://www.truehomes24.com/assets/properties/banner-02/93a4b41ca5c17860d1b44af1f032afa9.webp",
        "location": "Perambur, Chennai",
        "propertyType": "Apartment",
        "area": "650 sq.ft.",
        "bedroom": "1 Bedroom(s)",
        "possission": "Possession By: Jun 2025",
        "price": "45 L",
        "owner": 'Owner-36787'
    },
    {
        "title": "2 BHK Apartment  for Sale  in Rainbow Ekanta, Perambur, Chennai",
        "link": "https://www.truehomes24.com/api/sale/2-bhk-apartment-for-sale-in-rainbow-ekanta-perambur-chennai/1000-57163",
        "property_url": "/sale/2-bhk-apartment-for-sale-in-rainbow-ekanta-perambur-chennai/1000-57163",
        "image": "https://www.truehomes24.com/assets/properties/banner-02/6195f1a4b44efe4bd85420205df57e4a.webp",
        "location": "Perambur, Chennai",
        "propertyType": "Apartment",
        "area": "650 sq.ft.",
        "bedroom": "2 Bedroom(s)",
        "possission": "Possession By: Nov 2024",
        "price": "45 L",
        "owner": 'Owner-67587'
    },
    {
        "title": "1 BHK Apartment  for Sale  in Rainbow Ekanta, Perambur, Chennai",
        "link": "https://www.truehomes24.com/api/sale/1-bhk-apartment-for-sale-in-rainbow-ekanta-perambur-chennai/1000-57162",
        "property_url": "/sale/1-bhk-apartment-for-sale-in-rainbow-ekanta-perambur-chennai/1000-57162",
        "image": "https://www.truehomes24.com/assets/properties/banner-02/3fa85544ffca6abb5843dd1aeedf1c73.webp",
        "location": "Perambur, Chennai",
        "propertyType": "Apartment",
        "area": "650 sq.ft.",
        "bedroom": "1 Bedroom(s)",
        "possission": "Possession By: Nov 2024",
        "price": null,
        "owner": 'Owner-57587'
    },
    {
        "title": "1 BHK Apartment  for Sale  in Rainbow Chetna, Perambur, Chennai",
        "link": "https://www.truehomes24.com/api/sale/1-bhk-apartment-for-sale-in-rainbow-chetna-perambur-chennai/1000-57159",
        "property_url": "/sale/1-bhk-apartment-for-sale-in-rainbow-chetna-perambur-chennai/1000-57159",
        "image": "https://www.truehomes24.com/assets/properties/banner-02/93a4b41ca5c17860d1b44af1f032afa9.webp",
        "location": "Perambur, Chennai",
        "propertyType": "Apartment",
        "area": "650 sq.ft.",
        "bedroom": "1 Bedroom(s)",
        "possission": "Possession By: Jun 2025",
        "price": "45 L",
        "owner": 'Owner-36787'
    },
    {
        "title": "Residential Land  for Sale  in Bhogapuram International Airport Road, Visakhapatnam",
        "link": "https://www.truehomes24.com/api/sale/residential-land-for-sale-in-bhogapuram-international-airport-road-visakhapatnam/1000-64481",
        "property_url": "/sale/residential-land-for-sale-in-bhogapuram-international-airport-road-visakhapatnam/1000-64481",
        "image": "https://www.truehomes24.com/assets/properties/banner-02/bfa1673f343a2fe32d1b31e3f202a402.jpg",
        "location": "Bhogapuram International Airport Road, Visakhapatnam",
        "propertyType": "Residential Land",
        "area": "57600 sq.ft.",
        "bedroom": "",
        "possission": "",
        "price": "25.60 Cr",
        "owner": 'Owner-67587'
    },
]

const Profile = () => {

    const [contactModalStatus, setcontactModalStatus] = useState({ show: false, data: {} });
    const [navClassState, setNavClassState] = useState('');
    const listElement = useRef();

    const onClickContactBtn = (item) => {
        setcontactModalStatus({ show: true, data: item });
    }
    const onCloseContact = () => {
        setcontactModalStatus({ show: false, data: null });
    }

    useEffect(() => {
        // window.onscroll = ()=>{
        //     console.log(document.body.scrollTop);
        // };
        ovserveIntersection();
    }, []);

    const ovserveIntersection = () => {
        let observer = new IntersectionObserver((entries) => {
            if (!entries[0].isIntersecting) {
                setNavClassState('fixed -top-5 w-full shadow-md z-[1500] left-0 pr-[10%] bg-white');
            }
            else {
                setNavClassState('');
            }
        }, {
            root: null,
            rootMargin: '200px',
            threshold: 0
        });
        observer.observe(listElement.current);
    }

    return (
        <div>
            {navClassState == '' && <Header />}
            <div className='mt-16'>
                <div className='py-5 ml-[8%] mt-[100px] border-b-[1px] border-green-300]'>
                    <p className={styles.title2}>Agent Profile - VYBHAV KUMAR</p>
                    <div className='text-sm text-gray-700'><NavLink to={'/'}>Home</NavLink>{'/'}<span>Agent Profile</span></div>
                </div>
                <div className='md:flex'>
                    <div className='w-[95%] md:w-[63%] pl-[8%] mb-10'>
                        <div className='flex flex-wrap gap-[15%] py-14 pl-[10%]'>
                            <div className='flex flex-col items-center'>
                                <div className='p-2 border-[1px] w-[190px] border-gray-300'>
                                    <img src={userBackImage} className='h-[180px] w-[180px]' />
                                </div>
                                <div className='text-sm text-gray-700 mt-4 text-center'>
                                    <p>0 Sale Properties</p>
                                    <p>2 Operational Localities</p>
                                </div>
                            </div>
                            <div className='w-[200px]'>
                                <p className={styles.textMedium + ''}>User Role: Agent</p>
                                <p className={styles.textMedium + 'mt-2'}>Business Title: N/A</p>
                                <p className={styles.textMedium + 'mt-2'}>Country: India</p>
                                <p className={styles.textMedium + 'mt-2'}>State: Tamil Nadu</p>
                                <p className={styles.textMedium + 'mt-2'}>City: Chennai</p>
                                <p className={styles.textMedium + 'mt-2'}>Business Address: N/A</p>
                                <p className={styles.textMedium + 'mt-2'}>Mobile Verified: No</p>
                            </div>
                        </div>
                        <div>
                            <p ref={listElement} className={styles.title2}>VYBHAV KUMAR's Listing(s)</p>
                            <div className={navClassState}>
                                <div className={(navClassState != '' ? 'transition-transform ease-in-out transform translate-x-[8%] pb-2 -mt-5 duration-[1500ms] ' : '') + 'flex flex-wrap items-center text-xs text-gray-700 font-semibold mt-5'}>
                                    <div className='flex border-[1px] mt-3 justify-center items-center border-gray-300'>
                                        <span className='bg-gray-900 rounded-r-full text-white py-[8.5px] px-4'>
                                            FILTER
                                        </span>
                                        <div className='relative group'>
                                            <button className={'px-1 py-2'}>
                                                BUDGET
                                                <i class={styles.dropdownIcon}></i>
                                            </button>
                                            <BudgetMenu classname={''}/>
                                        </div>
                                    </div>
                                    <div className='mt-3 relative group'>
                                        <button className={'p-2 border-[1px] border-gray-300'}>
                                            BHK
                                            <i class={styles.dropdownIcon}></i>
                                        </button>
                                        <BHKmenu classname={''}/>
                                    </div>
                                    <div className='mt-3 relative group'>
                                        <button className={'p-2 border-[1px] border-gray-300'}>
                                            PROPERTY TYPE
                                            <i class={styles.dropdownIcon}></i>
                                        </button>
                                        <PropertyMenu classname={''}/>
                                    </div>
                                    <div className='mt-3 relative group'>
                                        <button className={'p-2 border-[1px] border-gray-300'}>
                                            FURNISHING TYPE
                                            <i class={styles.dropdownIcon}></i>
                                        </button>
                                        <FurnishingTypeMenu/>
                                    </div>
                                    <div className='mt-3 relative group'>
                                        <button className={'p-2 border-[1px] border-gray-300'}>
                                            MORE
                                            <i class={styles.dropdownIcon}></i>
                                        </button>
                                        <MoreMenu classname={''}/>
                                    </div>
                                    <div className='mt-3'>
                                        <button className={'p-2 py-[8.5px] border-[1px] border-gray-300'}>
                                            RESET
                                        </button>
                                    </div>
                                    <div className='mt-3 relative group'>
                                        <button className={'p-2 border-[1px] border-gray-300'}>
                                            SHORT BY FEATURED
                                            <i class={styles.dropdownIcon}></i>
                                        </button>
                                        <ShortByMenu classname={'text-gray-500'}/>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div >
                            {Data.map((item, index) => {
                                return (
                                    <PropertyListCard func={onClickContactBtn} Data={item} />
                                )
                            })}
                        </div>

                    </div>

                    <div className='w-[95%] bg-gray-100 md:w-[37%]'>
                        <div className='w-[95%] md:w-[80%] md:mx-[5%]'>
                            <RightListCard title={'Featured Property'} data={Data} />
                        </div>
                    </div>
                </div>
                <div className=''>
                    {contactModalStatus.show && <Contact Data={contactModalStatus.data} func={onCloseContact} />}
                </div>
                <Footer />
            </div>
        </div>
    );
}

export default Profile;
