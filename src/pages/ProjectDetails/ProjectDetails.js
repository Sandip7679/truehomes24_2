import React, { useState } from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer';
import TopCItiesFilter from '../../components/TopCItiesFilter';
import { styles } from '../../Styles/Styles';
import { LocationIcon, MenuIcon } from '../../components/svgIcons';
import userIcon from '../../assets/images/user.svg'
import RecentViewCard from '../../components/RecentViewCard';

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
const PropertyBarNames = [
    'Details', 'Description', 'About', 'Builder', 'Gallery', 'Nearby'
];

const propertyBrief = 'Creek Vistas Grande at Sobha Hartland is a newly launched high-rise development that features luxury 1, 2 and 3 bedroom apartments by Sobha Group and size ranging from 745-1647sq.ft. Price ranging from AED 1.32 M -2.96M. This exclusive modern class venture is the last tower facing the views of Downtown Burj Khalifa, the Dubai Canal, which will attract a lot. The ideal address within the MBR City, Dubai, will provide you with easy access to the famous key destinations. Set in a metropolitan centre point and encompassed by rich green arranged environmental elements, you live next to the Ras Al Khor Wildlife Sanctuary, Dubai Creek and many such. This modern high-rise pinnacle is designed with cutting-edge technology and engineering alongside luxury crafted residences that will make you live in the midst of outright solace. The residence within the high-rise tower presents a premium class, where you are offered a serene lifestyle with outstanding neighbourhood views Amenities & NeighbourhoodView Swimming pool, Kids Play Area, Barbeque Area, Health Club, Changing rooms, Pilates Studio, Spin Class, Studio ,Yoga Studio, Multipurpose Hall, Pentanque, Boules Lawn, Tai che Terrace Outdoor Gym . Sobha Realty is an international luxury developer committed to redefining the art of living through sustainable communities. Established in 1976 as an interior decoration firm in Oman by PNC Menon – a visionary entrepreneur, the company has grown its presence with developments and investments in the UAE, Oman, Bahrain, Brunei and India. Over the last four decades, Sobha Realty has also redefined the real estate value chain by leveraging its inherent in-house capabilities of conceptualisation, design and development. Sobha Realty is currently developing Sobha Hartland, a luxurious freehold community spread across eight million square feet in the heart of Dubai, as part of the Mohammed Bin Rashid Al Maktoum City master development. Connectivity- 08 Minutes from Meydan Racecourse, 11 Minutes fro Ras al khor Wildlife Sanctuary, 13 Minutesto Burj khalifa / Downtown, 14 Mins to Dubai International Financial Centre (DIFC), 17 Mins to Palm Jumeirah, 20 Mins to Dubai Marina, 20 Mins to Dubai International Airport,'

const Amenities = [
    { name: 'Lift' },
    { name: 'Security' },
    { name: 'CCTV Camera' },
    { name: 'Maintenance Staff' },
    { name: 'Swimming Pool' },
    { name: 'Gym' },
    { name: 'Visitor Parking' },
    { name: 'Jogging Track' },
    { name: 'Kids Play Area' },
    { name: 'Kids Play Pool' },
    { name: 'Power Backup' },
    { name: 'Large Open Space' },
    { name: 'nternet Connectivity' },
    { name: '24by7 Water' },
    { name: 'Waste Disposal' },
    { name: 'RainWater Harvesting' },
    { name: 'Gated Society' },
    { name: 'Laundry Services' },
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
     {key:'Address',val:'MBR City'},
     {key:'City',val:'Dubai'},
     {key:'State',val:'Dubai'},
     {key:'Country',val:'UAE'},
]

const ProjectDetails = () => {
    const [propDetailsTypeInd, setPropDetailsTypeInd] = useState(0);
    return (
        <div>
            <Header />
            <div className='bg-gray-50'>
                <div className='bg-white h-[100px]'>
                </div>
                <div className='mt-5 px-[8%] '>
                    <div className='text-sm text-gray-500'> <span>Home</span>{' > '}<span> Property for Rent in Bangalore</span>{' > '}<span>Property for Rent in Jakkur</span>
                        {' > '}<span className='text-base'>Residential Land for Rent in Jakkur, Bangalore</span>
                    </div>
                    <div className='bg-white py-5 px-[2%] mt-1 shadow w-full md:flex md:gap-5'>
                        <div className='relative w-full md:w-[65%]'>
                            <img src='https://www.truehomes24.com/assets/properties/banner-01/6fbc57095a08783a071945a3507844fa.webp' className='h-[380px] w-full rounded-xl' />
                            <div className='absolute top-[60%] pl-5 py-2 w-[80%] bg-black bg-opacity-10'>
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
                                <button className={styles.btnFull + 'bg-green-600 mt-5'}>ASK FOR PRICE</button>
                                <button className={styles.btnFull + 'bg-green-600 mt-3'}>Request Contact</button>
                            </div>
                        </div>
                    </div>

                    <div className='md:flex gap-5 mt-10'>
                        <div className='w-[70%]'>
                            <div className='bg-white shadow-md px-[2%] py-5 w-full'>
                                <div className='flex flex-wrap gap-2 border-b-gray-300 border-b-[1px] px-[2%] -mx-[2%]'>
                                    {PropertyBarNames.map((item, index) => {
                                        return (
                                            <button
                                                onClick={() => setPropDetailsTypeInd(index)}
                                                className={(propDetailsTypeInd == index ? 'border-b-[1px] animated-border border-black ' : '') + 'px-1 py-2'}>
                                                {item}
                                            </button>
                                        )
                                    })}
                                </div>
                                <div className=''>
                                    <p className={styles.title3 + 'mt-5'}>Property Details</p>
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
                                    <p className={styles.title3 + 'ml-1'}>Amnetities</p>
                                    <div className='flex gap-2 flex-wrap mt-2'>
                                        {Amenities.map((item, index) => {
                                            return (
                                                <div className='flex flex-wrap w-full gap-2 sm:w-[50%] md:w-[30%] px-2'>
                                                    <MenuIcon classname={'h-4 w-4 mt-1'} />
                                                    {item.name}
                                                </div>
                                            )
                                        })}
                                    </div>
                                </div>
                            </div>
                            <div className='mt-10'>
                                <p className={styles.title3}>Property Brief</p>
                                <p className='mt-2 text-[0.9rem] text-gray-700'>{propertyBrief}</p>
                                <div className='mt-2'>
                                    <p className={styles.title3}>Map Location</p>
                                    <div className='flex flex-wrap gap-2'>
                                      {mapLocations.map((item,index)=>{
                                        return(
                                            <span className='px-2 w-[150px]'>{item.key} : {item.val}</span>
                                        )
                                      })} 
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='sm:w-[30%]'>
                            <RecentViewCard title={'Featured Property'} Data={rightSectionData} />
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
