import React, { useEffect, useState } from 'react';
import Header from '../components/Header/Header';
import { styles } from '../Styles/Styles';
import { NavLink } from 'react-router-dom';
import userBackImage from '../assets/images/user.svg'
import PropertyListCard from '../components/PropertyListCard';
import Footer from '../components/Footer';
import RightListCard from '../components/RightListCard';
import Contact from '../components/Contact';

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

    const onClickContactBtn = (item) => {
        setcontactModalStatus({ show: true, data: item });
    }
    const onCloseContact = () => {
        setcontactModalStatus({ show: false, data: null });
    }

    // useEffect(()=>{
    //     window.onscroll = ()=>{
    //         console.log(document.body.scrollTop);
    //     };
    // },[]);

    return (
        <div>
            <Header />
            <div className='mt-16'>
                <div className='py-5 ml-[8%] mt-[100px] border-b-[1px] border-green-300]'>
                    <p className={styles.title2}>Agent Profile - VYBHAV KUMAR</p>
                    <div className='text-sm text-gray-700'><NavLink to={'/'}>Home</NavLink>{'/'}<span>Agent Profile</span></div>
                </div>
                <div className='md:flex'>
                    <div className='w-[95%] md:w-[63%] pl-[8%] mb-10'>
                        <div className='flex flex-wrap gap-[15%] py-14 pl-[10%]'>
                            <div>
                                <p className={styles.title2}>VYBHAV KUMAR's Listing(s)</p>
                                <div className='flex flex-wrap border-[1px] border-gray-300'>
                                     
                                </div>
                            </div>
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
                            <div>
                                {Data.map((item, index) => {
                                    return (
                                        <PropertyListCard func={onClickContactBtn} Data={item} />
                                    )
                                })}
                            </div>
                        </div>

                    </div>

                    <div className='w-[95%] bg-gray-100 md:w-[37%]'>
                        <div className='w-[95%] md:w-[80%] md:mx-[5%]'>
                            <RightListCard title={'Featured Property'} data={Data} />
                        </div>
                    </div>
                </div>
                <div className=''>
                    {contactModalStatus.show && <Contact Data = {contactModalStatus.data}  func={onCloseContact}/>} 
                </div>
                <Footer />
            </div>
        </div>
    );
}

export default Profile;
