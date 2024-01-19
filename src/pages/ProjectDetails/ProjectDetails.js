import React, { useEffect, useRef, useState } from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer';
import TopCItiesFilter from '../../components/TopCItiesFilter';
import { styles } from '../../Styles/Styles';
import { LocationIcon, MenuIcon } from '../../components/svgIcons';
import userIcon from '../../assets/images/user.svg'
import RecentViewCard from '../../components/RecentViewCard';
import Carousel from 'react-multi-carousel';
import RightListCard from '../../components/RightListCard';
import { NavLink } from 'react-router-dom';
import FAQs from '../../components/FAQs';


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
const recentBlogsData = [
    {
        title: 'Important RERA Rajasthan Facts for Home Buyers', image: 'https://www.truehomes24.com/assets/properties/banner-02/3fa85544ffca6abb5843dd1aeedf1c73.webp',
        description: 'Important RERA Rajasthan Facts for Home Buyers ....'
    },
    {
        title: 'What documnetation i...', image: 'https://www.truehomes24.com/assets/properties/banner-02/3fa85544ffca6abb5843dd1aeedf1c73.webp',
        description: 'what documentation is required before a ...'
    },
    {
        title: 'What documnetation i...', image: 'https://www.truehomes24.com/assets/properties/banner-02/3fa85544ffca6abb5843dd1aeedf1c73.webp',
        description: 'what documentation is required before a ...'
    },
    {
        title: 'What documnetation i...', image: 'https://www.truehomes24.com/assets/properties/banner-02/3fa85544ffca6abb5843dd1aeedf1c73.webp',
        description: 'what documentation is required before a ...'
    },
    {
        title: 'What documnetation i...', image: 'https://www.truehomes24.com/assets/properties/banner-02/3fa85544ffca6abb5843dd1aeedf1c73.webp',
        description: 'what documentation is required before a ...'
    },
];

const whatsNearbyData = [
    { item: 'Hospital: 2', icon: 'fa-solid fa-house-chimney-medical' },
    { item: 'ATM: 1', icon: 'fa-solid fa-credit-card' },
    { item: 'School: 2', icon: 'fa-solid fa-school' },
    { item: 'Bank: 2', icon: 'fa-sharp fa-solid fa-building-columns' },
    { item: 'Restaurant: 1', icon: 'fa-solid fa-utensils' },
    { item: 'Spa Beauty Salon: 2', icon: 'fa-solid fa-spa' },
];

const PropertyBarNames = [
    'Details', 'Description', 'About Builder', 'Gallery', 'Nearby','FAQ'
];

const propertyBrief = 'Creek Vistas Grande at Sobha Hartland is a newly launched high-rise development that features luxury 1, 2 and 3 bedroom apartments by Sobha Group and size ranging from 745-1647sq.ft. Price ranging from AED 1.32 M -2.96M. This exclusive modern class venture is the last tower facing the views of Downtown Burj Khalifa, the Dubai Canal, which will attract a lot. The ideal address within the MBR City, Dubai, will provide you with easy access to the famous key destinations. Set in a metropolitan centre point and encompassed by rich green arranged environmental elements, you live next to the Ras Al Khor Wildlife Sanctuary, Dubai Creek and many such. This modern high-rise pinnacle is designed with cutting-edge technology and engineering alongside luxury crafted residences that will make you live in the midst of outright solace. The residence within the high-rise tower presents a premium class, where you are offered a serene lifestyle with outstanding neighbourhood views Amenities & NeighbourhoodView Swimming pool, Kids Play Area, Barbeque Area, Health Club, Changing rooms, Pilates Studio, Spin Class, Studio ,Yoga Studio, Multipurpose Hall, Pentanque, Boules Lawn, Tai che Terrace Outdoor Gym . Sobha Realty is an international luxury developer committed to redefining the art of living through sustainable communities. Established in 1976 as an interior decoration firm in Oman by PNC Menon – a visionary entrepreneur, the company has grown its presence with developments and investments in the UAE, Oman, Bahrain, Brunei and India. Over the last four decades, Sobha Realty has also redefined the real estate value chain by leveraging its inherent in-house capabilities of conceptualisation, design and development. Sobha Realty is currently developing Sobha Hartland, a luxurious freehold community spread across eight million square feet in the heart of Dubai, as part of the Mohammed Bin Rashid Al Maktoum City master development. Connectivity- 08 Minutes from Meydan Racecourse, 11 Minutes fro Ras al khor Wildlife Sanctuary, 13 Minutesto Burj khalifa / Downtown, 14 Mins to Dubai International Financial Centre (DIFC), 17 Mins to Palm Jumeirah, 20 Mins to Dubai Marina, 20 Mins to Dubai International Airport,'
const aboutBuilder = 'With a 26-year legacy based on unwavering reliability and unflinching values, Goodwill Developers, a Top Real Estate Company in Navi Mumbai, have successfully created a community of 2200+ happy customers who are cherishing the joy of abundance every day.';

const Amenities = [
    { name: 'Lift', icon: 'fa-solid fa-elevator' },
    { name: 'Security', icon: 'fa-solid fa-shield-halved' },
    { name: 'CCTV Camera', icon: 'fa-solid fa-video' },
    // { name: 'Maintenance Staff',icon:'fa-solid fa-staff' },
    { name: 'Swimming Pool', icon: 'fa-solid fa-water-ladder' },
    { name: 'Gym', icon: 'fa-solid fa-dumbbell' },
    { name: 'Visitor Parking', icon: 'fa-solid fa-square-parking' },
    { name: 'Jogging Track', icon: 'fas fa-running' },
    // { name: 'Kids Play Area',icon:'fa-solid fa-bench-tree' },
    // { name: 'Kids Play Pool',icon:'fa-solid fa-bench-tree' },
    { name: 'Power Backup', icon: 'fa-solid fa-power-off' },
    { name: 'Large Open Space', icon: '' },
    { name: 'Internet Connectivity', icon: '' },
    { name: '24by7 Water', icon: '' },
    { name: 'Waste Disposal', icon: '' },
    { name: 'RainWater Harvesting', icon: '' },
    { name: 'Gated Society', icon: '' },
    { name: 'Laundry Services', icon: '' },
]

const PropertyDetailsData = [
    { key: 'Property Type', val: 'Residential Land' },
    { key: 'Security Deposite', val: '0' },
    { key: 'Month Of Notice', val: '0 Month(s)' },
    { key: 'Property Status', val: 'For Rent' },
    { key: 'Duration Of Rent Agreement', val: '0 Month(s)' },
    { key: 'Ownership', val: 'Freehold' },
    { key: 'Rent Expected', val: '0/month' },
    { key: 'Total Area', val: '1acres' },
    { key: 'AvailableFor', val: 'New' },
];

const mapLocations = [
    { key: 'Address', val: 'MBR City' },
    { key: 'City', val: 'Dubai' },
    { key: 'State', val: 'Dubai' },
    { key: 'Country', val: 'UAE' },
]



const ProjectDetails = () => {
    const [propDetailsTypeInd, setPropDetailsTypeInd] = useState(0);
    const [navClassState, setNavClassState] = useState('');
    const observerElement = useRef();

    useEffect(() => {
        ovserveIntersection();
    }, []);

    const ovserveIntersection = () => {
        let observer = new IntersectionObserver((entries) => {
            if (!entries[0].isIntersecting) {
                setNavClassState('fixed top-0 w-full shadow-md z-[1500] -ml-[9%] pr-[10%] mx-0 bg-white');
            }
            else {
                setNavClassState('');
            }
        }, {
            root: null,
            rootMargin: '0px',
            threshold: 0
        });
        observer.observe(observerElement.current);
    }

    return (
        <div>
            {navClassState == '' && <Header />}
            <div className='bg-gray-50 pb-5'>
                <div className='bg-white h-[100px]'>
                </div>
                <div className='mt-5 px-[8%] '>
                    <div className='text-sm text-gray-500'> <NavLink to={'/'}>Home</NavLink>{' > '}<span> Property for Rent in Bangalore</span>{' > '}<span>Property for Rent in Jakkur</span>
                        {' > '}<span className='text-base'>Residential Land for Rent in Jakkur, Bangalore</span>
                    </div>
                    <div className='bg-white py-5 px-[2%] mt-1 shadow w-full md:flex md:gap-5'>
                        <div className='relative w-full md:w-[65%]'>
                            <img src='https://www.truehomes24.com/assets/properties/banner-01/6fbc57095a08783a071945a3507844fa.webp' className='h-[380px] w-full rounded-xl' />
                            <div ref={observerElement} className='absolute top-[60%] pl-5 py-2 w-[80%] bg-black bg-opacity-10'>
                                <p className='text-white text-xl sm:text-3xl'>Jakkur, Bangalore</p>
                            </div>
                            <div className='sm:flex mt-5 '>
                                <div className=' sm:w-[30%] mt-1 text-center'>
                                    <p className='font-semibold'>Residential Land</p>
                                    <p className='text-sm'>Property Type</p>
                                </div>
                                <div className='sm:w-[30%] sm:border-x-2 sm:border-gray-300 mt-1 text-center'>

                                </div>
                                <div className='sm:w-[30%] mt-1 text-center'>
                                    <p className='font-semibold'>1 Sq. Ft</p>
                                    <p className='text-sm'>(Total Area)</p>
                                </div>
                            </div>
                        </div>
                        <div className='p-2 px-2 w-full md:w-[35%]'>
                            <span className={styles.title2 + 'mr-2'}>Residential Land for Rent in Jakkur, Bangalore</span>
                            <span className=''><button className='cursor-text mt-1 px-2 py-[2px] bg-orange-600 text-xs font-medium opacity-90 text-white mr-2'>FOR RENT</button></span>
                            <span className=''><button className='cursor-text mt-1 px-2 py-[2px] bg-cyan-600 text-xs font-medium text-white mr-2'>RESIDENTIAL LAND</button></span>
                            <span className=''><button className='cursor-text mt-1 px-2 py-[2px] bg-cyan-600 text-xs font-medium text-white'>PROPERTY ID: 1000 - 65139</button></span>
                            <div className='mt-1'>
                                <div className='flex mt-5'>
                                    <span className=''>
                                        <LocationIcon classname={'h-5 w-4 mt-[0.5px]'} />
                                    </span>
                                    <span className='text-base text-gray-800 ml-1'>
                                        {/* <p className={styles.textMedium + 'text-gray-500 font-medium inline-block'}>Society: </p> */}
                                        {' '}Jakkur Bangalore, Karnataka, India
                                    </span>
                                </div>
                                <div className='flex gap-1 mt-2'>
                                    <img src={userIcon} className='h-8 w-8' />
                                    <p className='text-sm text-gray-500 mt-2'>Owner-314422 ( Individual )</p>
                                </div>
                                <button className={styles.btnFull + 'bg-green-600 hover:bg-green-700 mt-5'}>ASK FOR PRICE</button>
                                <button className={styles.btnFull + 'bg-green-600 hover:bg-green-700 mt-3'}>Request Contact</button>
                            </div>
                        </div>
                    </div>

                    <div className='md:flex gap-5 mt-10'>
                        <div className='w-full md:w-[70%]'>
                            <div className='bg-white shadow-md px-[2%] py-5 w-full'>
                                <div className={navClassState}>
                                    <div className={(navClassState != ''? 'transition-transform ease-in-out transform translate-x-[8%] py-2 duration-[1500ms]':'')+' flex flex-wrap gap-2 border-b-gray-300 border-b-[1px] px-[2%] -mx-[2%]'}>
                                        {PropertyBarNames.map((item, index) => {
                                            return (
                                                <a href={`#${index}`}
                                                    onClick={() => setPropDetailsTypeInd(index)}
                                                    className={(propDetailsTypeInd == index ? 'border-b-[1px] animated-border border-black ' : '') + 'px-1 py-2'}>
                                                    {item}
                                                </a>
                                            )
                                        })}
                                    </div>
                                </div>
                                

                                <div id='0' className='scroll-mt-20'>
                                    <p className={styles.title4 + 'mt-5'}>Property Details</p>
                                    <div className='mt-5 flex justify-between flex-wrap'>
                                        {PropertyDetailsData.map((item, index) => {
                                            return (
                                                <div className='w-[50%] sm:w-[30%] mt-2'>
                                                    <span className=''>{item.key}: </span>
                                                    <span className='text-gray-500 '>{item.val}</span>
                                                </div>
                                            )
                                        })}
                                    </div>
                                </div>
                                <div className='mt-5'>
                                    <p className={styles.title4 + 'ml-1'}>Amnetities</p>
                                    <div className='flex flex-wrap gap-2 px-2 mt-2'>
                                        {Amenities.map((item, index) => {
                                            return (
                                                <div className='flex w-[45%] min-w-[180px] md:w-[30%]'>
                                                    <button className='w-8 h-8 p-1 flex justify-center -mt-1'> {item.icon == '' ? <MenuIcon classname={'h-4 w-4 mt-1'} />
                                                        : <i class={item.icon + ' text-gray-600 text-sm'}></i>
                                                    }
                                                    </button>
                                                    <span className='text-gray-700'>{item.name}</span>
                                                </div>
                                            )
                                        })}
                                    </div>
                                </div>
                            </div>
                            <div id='1' className='bg-white shadow-md px-[2%] py-5 mt-10 scroll-mt-20'>
                                <p className={styles.title4}>Property Brief</p>
                                <p className='mt-2 text-[0.9rem] text-gray-700'>{propertyBrief}</p>
                                <div className='mt-2'>
                                    <p className={styles.title4}>Map Location</p>
                                    <div className='flex flex-wrap gap-2 mt-2 items-start md:w-[50%]'>
                                        {mapLocations.map((item, index) => {
                                            return (
                                                <span className='w-[150px]'>{item.key} : <span className='text-gray-500 text-[0.9rem] font-semibold'>{item.val}</span></span>
                                            )
                                        })}
                                    </div>
                                </div>
                            </div>

                            <div id='2' className='bg-white shadow-md px-[2%] py-5 mt-10 scroll-mt-20'>
                                <p className={styles.title4}>About Builder</p>
                                <p className='mt-2 text-[0.9rem] text-gray-700'>{aboutBuilder}</p>
                            </div>

                            <div id='3' className='mt-10 bg-white shadow-md px-[2%] py-5 w-full scroll-mt-20'>
                                <p className={styles.title3}>Gallery</p>
                                <Carousel
                                    swipeable={true}
                                    draggable={false}
                                    responsive={responsive}
                                    // ssr={true}
                                    infinite={true}
                                    autoPlay={true}
                                    autoPlaySpeed={2000}
                                    keyBoardControl={true}
                                    transitionDuration={2000}
                                >
                                    {rightSectionData.map((item, index) => {
                                        return (
                                            <div className='p-2'>
                                                <img src={item.image} className='h-[450px] w-full rounded-xl' />
                                            </div>
                                        )
                                    })}
                                </Carousel>
                                <div className='flex justify-end mr-2'>
                                    <p className='text-gray-800 font-semibold'>1/4</p>
                                </div>

                            </div>
                            <div id='4' className='mt-10 bg-white shadow-md px-5 py-5 mb-10 scroll-mt-20'>
                                <p className={styles.title3}>What's Nearby?</p>
                                <div className='mt-5'>
                                    {whatsNearbyData.map((item, index) => {
                                        return (
                                            <div className={styles.title5 + 'mt-3'}>
                                                <button className='mr-4 h-7 w-7 opacity-85 bg-orange-500 rounded-md' ><i class={item.icon + ' text-white text-sm'}></i></button>
                                                <span>{item.item}</span>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                            <div id='5' className='mt-10 bg-white shadow-md px-5 py-5 mb-10 scroll-mt-20'>
                                <FAQs />
                            </div>

                        </div>

                        <div className='w-full md:w-[30%]'>
                            <RecentViewCard title={'Featured Property'} Data={rightSectionData} />
                            <RightListCard title={'Recently Added Property'} data={Data} />
                            <RightListCard title={'Recent Blog'} data={recentBlogsData} />
                        </div>
                    </div>

                </div>

            </div>
            <TopCItiesFilter />
            <Footer />
        </div>
    );
}

export default ProjectDetails;

const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 1200 },
        items: 1,
    },
    desktop: {
        breakpoint: { max: 1200, min: 1024 },
        items: 1,
    },
    tablet: {
        breakpoint: { max: 1024, min: 764 },
        items: 1,
    },
    mobile: {
        breakpoint: { max: 764, min: 0 },
        items: 1,
    },
};
