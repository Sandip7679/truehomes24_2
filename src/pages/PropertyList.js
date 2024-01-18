import React, { useState } from 'react';
import Header from '../components/Header/Header';
import TopSearchNavBar from '../components/TopSearchNavBar';
import { styles } from '../Styles/Styles';
import PropertyListCard from '../components/PropertyListCard';
import RecentViewCard from '../components/RecentViewCard';
import FAQs from '../components/FAQs';
import Footer from '../components/Footer';
import TopCItiesFilter from '../components/TopCItiesFilter';
import userIcon from '../assets/images/user.svg'
import { CrossIcon, MenuIcon, UserIcon } from '../components/svgIcons';
import { NavLink } from 'react-router-dom';
import PropertyForSlides from '../components/PropertyForSlides';

const Localities = [
    { location: 'Shela (40)' },
    { location: 'Prahlad Nagar (30)' },
    { location: 'Sanathal (15)' },
    { location: 'Gota (11)' },
    { location: 'south Bhopal (9)' },
    { location: 'south Bhopal (9)' },
    { location: 'south Bhopal (9)' },
    { location: 'south Bhopal (9)' },
    { location: 'south Bhopal (9)' },
    { location: 'Shela (40)' },
    { location: 'Shela (40)' },
    { location: 'Shela (40)' },
    { location: 'Shela (40)' },
    { location: 'Shela (40)' },
]
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

const rightSectionData = [
    {
        "title": "Apartment form Sale in Lagacy",
        "link": "https://www.truehomes24.com/assets/properties/banner-02/bfa1673f343a2fe32d1b31e3f202a402.jpg",
        "property_url": "/sale/2-bhk-apartment-for-sale-in-rainbow-ekanta-perambur-chennai/1000-57163",
        "image": "https://www.truehomes24.com/assets/properties/banner-02/6195f1a4b44efe4bd85420205df57e4a.webp",
        "location": "Perambur, Chennai",
        "area": "650 sq.ft.",
        "price": "90 L - 1.5Cr",
    },
    {
        "title": "Apartment form Sale in Lagacy",
        "link": "https://www.truehomes24.com/api/sale/2-bhk-apartment-for-sale-in-rainbow-ekanta-perambur-chennai/1000-57163",
        "property_url": "/sale/2-bhk-apartment-for-sale-in-rainbow-ekanta-perambur-chennai/1000-57163",
        "image": "https://www.truehomes24.com/assets/properties/banner-02/93a4b41ca5c17860d1b44af1f032afa9.webp",
        "location": "Perambur, Chennai",
        "area": "650 sq.ft.",
        "price": "90 L - 1.5Cr",
    },
    {
        "title": "Apartment form Sale in Lagacy",
        "link": "https://www.truehomes24.com/api/sale/1-bhk-apartment-for-sale-in-rainbow-chetna-perambur-chennai/1000-57159",
        "property_url": "/sale/2-bhk-apartment-for-sale-in-rainbow-ekanta-perambur-chennai/1000-57163",
        "image": "https://www.truehomes24.com/assets/properties/banner-02/3fa85544ffca6abb5843dd1aeedf1c73.webp",
        "location": "Perambur, Chennai",
        "area": "650 sq.ft.",
        "price": "90 L - 1.5Cr",
    },
    {
        "title": "Apartment form Sale in Lagacy",
        "link": "https://www.truehomes24.com/api/sale/2-bhk-apartment-for-sale-in-rainbow-ekanta-perambur-chennai/1000-57163",
        "property_url": "/sale/2-bhk-apartment-for-sale-in-rainbow-ekanta-perambur-chennai/1000-57163",
        "image": "https://www.truehomes24.com/assets/properties/banner-02/6195f1a4b44efe4bd85420205df57e4a.webp",
        "location": "Perambur, Chennai",
        "area": "650 sq.ft.",
        "price": "90 L - 1.5Cr",
    },
]



const PropertyList = () => {
    const [contactModalStatus, setcontactModalStatus] = useState({ show: false, data: {} });
    const [propertyType, setPropertyType] = useState('localities');
    // const [moreBestBudget,setMoreBestBudget] = useState(false);

    const onClickContactBtn = (item) => {
        setcontactModalStatus({ show: true, data: item });
    }
    return (
        <div className='' >
            <Header />
            <div className={'mt-[50px]'}>
                <TopSearchNavBar />
                <div className='px-[2%] py-5'>
                    <div className={styles.textMedium}>
                        <NavLink to="/">Home</NavLink> {'> '}
                        Property for Sale in Ahmedabad</div>
                    <div className=' md:flex gap-5'>
                        <div className='mt-5 tracking-wide'>
                            <p className={styles.textMedium}>Showing 1-25 of 356 property for Sale</p>
                            <p className={styles.title3 + 'mt-1'}>Property for Sale in Ahmedabad</p>
                            <div className='flex gap-2 border-b-[1px] mt-2 border-b-gray-200'>
                                <button
                                    onClick={() => setPropertyType('localities')}
                                    className={(propertyType == 'localities' ? 'border-b-[1px]' : '') + ' hover:border-b-[1px] border-b-gray-700 pb-1 mr-3'}>
                                    <p className={styles.textMedium + ''}>Localities</p>
                                </button>
                                <button
                                    onClick={() => setPropertyType('status')}
                                    className={(propertyType == 'status' ? 'border-b-[1px]' : '') + ' hover:border-b-[1px] border-b-gray-700 pb-1 mx-3'}>
                                    <p className={styles.textMedium}>Property Status</p>
                                </button>
                                <button
                                    onClick={() => setPropertyType('budget')}
                                    className={(propertyType == 'budget' ? 'border-b-[1px]' : '') + ' hover:border-b-[1px] border-b-gray-700 pb-1 mx-3'}>
                                    <p className={styles.textMedium}>Budget</p>
                                </button>
                            </div>
                            <div className='shadow-sm rounded flex flex-wrap max-h-[140px] border-[1px] border-gray-200 mt-5 mx-2 overflow-y-scroll p-2'>
                                {Localities.map((item, index) => {
                                    return (
                                        <button className={styles.btn + 'm-1 hover:bg-orange-50 border-orange-500'}>
                                            <p className='text-sm'> {item.location}</p>
                                        </button>
                                    )
                                })}
                            </div>
                            <div>
                                {Data.map((item, index) => {
                                    return (
                                        <NavLink to={'/project_details'}><PropertyListCard func={onClickContactBtn} Data={item} /></NavLink>
                                    )
                                })}
                            </div>
                        </div>

                        <div className='sm:w-[35%] bg-slate-50 py-4 px-1'>
                            <div>
                                <RecentViewCard title={'Recent View Property'} Data={rightSectionData} />
                            </div>
                            <div className='mt-10'>
                                <RecentViewCard title={'New Project Property'} Data={rightSectionData} />
                            </div>
                        </div>
                    </div>
                    <div className='mt-10'>
                        <FAQs />
                    </div>
                </div>
                <div className='px-[2%] py-5'>
                    <p className={styles.title1 + 'mb-8 text-left'}>Property In Ahmedabad For Sale</p>
                    <PropertyForSlides />
                </div>
            </div>
            {contactModalStatus.show && <div className='fixed bg-white shadow-lg border-[1px] top-[70px] z-[1500] p-4 right-[4%] lg:right-[10%] w-[90%] sm:w-[85%] max-w-[360px]'>
                <button
                    onClick={() => setcontactModalStatus({ show: false, data: {} })}
                    className='absolute top-2 right-2'>
                    <CrossIcon />
                </button>
                <div className='flex gap-5'>
                    <img src={userIcon} className='h-[50px] w-[50px] md:h-[70px] md:w-[70px]' />
                    <div className='text-gray-900 mt-2'>
                        <div className='flex gap-3'>
                            <UserIcon classname={'h-5 w-5 mt-[2px]'} />
                            {contactModalStatus.data.owner}
                        </div>
                        <div className='flex gap-3'>
                            <div className='h-5 w-5 mt-1'>
                                <MenuIcon />
                            </div>
                            Individual
                        </div>
                    </div>
                </div>
                <div className='mt-5'>
                    <input placeholder='Enter your name' className={styles.input + ' py-1 border-gray-300 pl-4'} />
                    <input placeholder='Enter your Email' className={styles.input + ' py-1 border-gray-300 pl-4 mt-3'} />
                    <div className='flex justify-between mt-4'>
                        <div className='min-w-[105px] w-[30%]'>
                            <div className={styles.btn + 'rounded-none flex py-2 gap-[1px] border-gray-300'}>
                                <img src='https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/1280px-Flag_of_India.svg.png' className='w-4 h-3 mt-[4px] sm:mt-[6px]'/>
                                +91 India
                            </div>
                        </div>
                        <input placeholder='Contact Number' className={styles.input + 'w-[65%] mt-0 border-gray-300 pl-[15px]'} />
                    </div>
                    <textarea placeholder='Description' className='w-full h-20 mt-5 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-gray-500'>
                    </textarea>
                    <label className='flex gap-2 mt-3'>
                        <input type='checkbox' className='' />
                        <p className='text-gray-500 text-sm'>I agree to Truehomes24.com Terms of use</p>
                    </label>
                    <button className={styles.btn + 'bg-black py-[6px] w-full text-white mt-5'}>
                        Submit
                    </button>
                </div>
            </div>}
            <TopCItiesFilter />
            <Footer />
        </div>
    );
}

export default PropertyList;
