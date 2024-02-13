import React, { useEffect, useRef, useState } from 'react';
import Header from '../components/Header/Header';
import bgImage from '../assets/images/homecity.jpeg';
import propertyCount1 from '../assets/images/propertyCount1.png';
import propertyCount2 from '../assets/images/propertyCount2.png';
import propertyCount3 from '../assets/images/propertyCount3.png';
import { styles } from '../Styles/Styles';
import Dropdown, { SearchIcon } from '../components/svgIcons';
import PropertySlider from '../components/PropertySlider';
import TopCItiesFilter from '../components/TopCItiesFilter';
import Footer from '../components/Footer';
import RecentAdded from '../components/RecentAdded';
import Contact from '../components/Contact';
import ScrollUp from '../components/ScrollUp';
import { BudgetMenu, PropertyMenu } from '../components/Dropdowns';
import NewsAndArticles from '../components/NewsAndArticles';
import useApi from '../ApiConf';
// import { NavLink } from 'react-router-dom';
// import ApiConf from '../ApiConf';



// const rupees = [30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80];
// const baseURL = "https://www.truehomes24.com/api/"

const NewsArticlesData = [
    {
        title: 'Stamp duty and registration charges in Mumbai',
        description: 'We examine the cost that buyers have to bear as stamp duty and registration charges in Mumbai.',
        writer: 'Sunita Mishra',
        date: 'Feb 2024',
        image: "https://www.truehomes24.com/assets/properties/banner-01/6fbc57095a08783a071945a3507844fa.webp",
    },
    {
        title: 'Stamp duty and registration charges in Mumbai',
        description: 'We examine the cost that buyers have to bear as stamp duty and registration charges in Mumbai.',
        writer: 'Sunita Mishra',
        date: 'Feb 2024',
        image: "https://www.truehomes24.com/assets/properties/banner-02/6195f1a4b44efe4bd85420205df57e4a.webp",
    },
    {
        title: 'Stamp duty and registration charges in Mumbai',
        description: 'We examine the cost that buyers have to bear as stamp duty and registration charges in Mumbai.',
        writer: 'Sunita Mishra',
        date: 'Feb 2024',
        image: "https://www.truehomes24.com/assets/properties/banner-02/3fa85544ffca6abb5843dd1aeedf1c73.webp",
    },
    {
        title: 'Stamp duty and registration charges in Mumbai',
        description: 'We examine the cost that buyers have to bear as stamp duty and registration charges in Mumbai.',
        writer: 'Sunita Mishra',
        date: 'Feb 2024',
        image: "https://www.truehomes24.com/assets/properties/banner-02/93a4b41ca5c17860d1b44af1f032afa9.webp",
    },
    {
        title: 'Stamp duty and registration charges in Mumbai',
        description: 'We examine the cost that buyers have to bear as stamp duty and registration charges in Mumbai.',
        writer: 'Sunita Mishra',
        date: 'Feb 2024',
        image: "https://www.truehomes24.com/assets/properties/banner-01/6fbc57095a08783a071945a3507844fa.webp",
    },
]

const Data = [
    {
        "title": "Residential Land  for Sale  in Bhogapuram International Airport Road, Visakhapatnam",
        "link": "https://www.truehomes24.com/api/sale/residential-land-for-sale-in-bhogapuram-international-airport-road-visakhapatnam/1000-64481",
        "property_url": "/sale/residential-land-for-sale-in-bhogapuram-international-airport-road-visakhapatnam/1000-64481",
        "image": "https://www.truehomes24.com/assets/properties/banner-01/6fbc57095a08783a071945a3507844fa.webp",
        "location": "Bhogapuram International Airport Road, Visakhapatnam",
        "propertyType": "Residential Land",
        "area": "57600 sq.ft.",
        "bedroom": "",
        "possission": "",
        "price": "<i class=\"fas fa-rupee-sign\"></i> 25.60 Cr",
        "listedBy": 'RainBow Foundation Ltd[Builder]'
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
        "price": "<i class=\"fas fa-rupee-sign\"></i> 45 L",
        "listedBy": 'RainBow Foundation Ltd[Builder]'
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
        "price": "<i class=\"fas fa-rupee-sign\"></i> 45 L",
        "listedBy": 'RainBow Foundation Ltd[Builder]'
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
        "price": "<i class=\"fas fa-rupee-sign\"></i> 45 L",
        "listedBy": 'RainBow Foundation Ltd[Builder]'
    },
    // {
    //     "title": "Residential Land  for Sale  in Bhogapuram International Airport Road, Visakhapatnam",
    //     "link": "https://www.truehomes24.com/api/sale/residential-land-for-sale-in-bhogapuram-international-airport-road-visakhapatnam/1000-64481",
    //     "property_url": "/sale/residential-land-for-sale-in-bhogapuram-international-airport-road-visakhapatnam/1000-64481",
    //     "image": "https://www.truehomes24.com/assets/properties/banner-02/bfa1673f343a2fe32d1b31e3f202a402.jpg",
    //     "location": "Bhogapuram International Airport Road, Visakhapatnam",
    //     "propertyType": "Residential Land",
    //     "area": "57600 sq.ft.",
    //     "bedroom": "",
    //     "possission": "",
    //     "price": "<i class=\"fas fa-rupee-sign\"></i> 25.60 Cr",
    //     "listedBy":'RainBow Foundation Ltd[Builder]'
    // },
]


// const propertyTypes = [
//     { type: 'Apartment' },
//     { type: 'Independent House/Villa' },
//     { type: 'Residential Land' },
//     { type: 'Warehouse' },
//     { type: 'Builder Floor' },
//     { type: 'Office Space' },
//     { type: 'Shop/Showroom' },
//     { type: 'Serviced' },
// ]

const TopDevelopersData = [
    { name: 'Adani Realty', project: '15', icon: 'https://static.squareyards.com/resources/images/developerlogo/adani-realty-4.jpg' },
    { name: 'Adani Realty', project: '15', icon: 'https://static.squareyards.com/resources/images/developerlogo/adani-realty-4.jpg' },
    { name: 'Adani Realty', project: '15', icon: 'https://static.squareyards.com/resources/images/developerlogo/adani-realty-4.jpg' },
    { name: 'Adani Realty', project: '15', icon: 'https://static.squareyards.com/resources/images/developerlogo/adani-realty-4.jpg' },
    { name: 'Adani Realty', project: '15', icon: 'https://static.squareyards.com/resources/images/developerlogo/adani-realty-4.jpg' },
    { name: 'Adani Realty', project: '15', icon: 'https://static.squareyards.com/resources/images/developerlogo/adani-realty-4.jpg' },
];
const topLocalities = [
    { name: 'Chandkheda', projectNum: '190', locality: 'in Chandkheda, Ahmedabad', forSale: '90', forRent: '90' },
    { name: 'Chandkheda', projectNum: '190', locality: 'in Chandkheda, Ahmedabad', forSale: '90', forRent: '90' },
    { name: 'Chandkheda', projectNum: '190', locality: 'in Chandkheda, Ahmedabad', forSale: '90', forRent: '90' },
    { name: 'Chandkheda', projectNum: '190', locality: 'in Chandkheda, Ahmedabad', forSale: '90', forRent: '90' },
    { name: 'Chandkheda', projectNum: '190', locality: 'in Chandkheda, Ahmedabad', forSale: '90', forRent: '90' },
];

const propertyCount = [
    { image: propertyCount1, count: '4,34,125', title: 'Properties & Counting...' },
    { image: propertyCount2, count: '4,125', title: 'Properties Listed' },
    { image: propertyCount3, count: '6,125', title: 'Sellers Contacted' }
];
const Home = () => {

    // const [propertyData, setPropertyData] = useState(null);
    const [contactModalStatus, setcontactModalStatus] = useState({ show: false, data: {} });
    const propertyElement = useRef();
    const { fetchData, loading, error } = useApi();
    const [featuredProperties, setFeaturedProperties] = useState([]);

    useEffect(() => {

        // document.getElementById('bugdet-btn').addEventListener('blur', () => {
        //     document.getElementById('bugdet-menu').classList.add('hidden');
        // });

        // document.getElementById('bhk-btn').addEventListener('blur', () => {
        //     document.getElementById('bhk-menu').classList.add('hidden');
        // });
        // document.getElementById('property-type-btn').addEventListener('blur', () => {
        //     document.getElementById('property-type-menu').classList.add('hidden');
        // });

        // let url = baseURL + 'featured-property-slider?limit=5&page=1';
        // fetch(url).then((res) => res.json()).then((res) => {
        //     console.log('res properties....', res.content);
        //     setPropertyData(res.content);
        // })
        //  getProperties('featured-property-slider');
        getFeaturedProperties();
    }, [])

    // const getProperties = async (endpoint)=>{
    //     let res = await ApiConf(endpoint);
    //     console.log('res....',res);
    // }

    const getFeaturedProperties = async () => {
        let data;
        try {
            data = await fetchData('featured-property-slider?limit=5&page=1', 'GET');
        } catch (err) {
            console.log(err);
        }
        if (data) {
            setFeaturedProperties(Object.values(data.content));
        }
    }


    const onClickContactBtn = (item) => {
        setcontactModalStatus({ show: true, data: item });
    }
    const onCloseContact = () => {
        setcontactModalStatus({ show: false, data: null });
    }

    return (
        <div className='overflow-x-hidden'>
            <Header />

            <main
                className="h-screen flex items-center justify-center bg-cover bg-center"
                style={{
                    // backgroundImage: `url(${'https://www.truehomes24.com//assets/dynamic/banner/8ab1ae7e567ccaf7704650ac82f6c16d.jpg'})`
                    // backgroundImage: `url(${'https://images.unsplash.com/photo-1445264918150-66a2371142a2'})`,
                    backgroundImage: `url(${bgImage})`,
                }}
            >
                <div className='container px-2 mx-auto sm:px-[10%]'>
                    <div className='sm:flex border-black '>
                        <button className='px-2 lg:px-5 py-2 border-black bg-white hover:bg-gray-800 hover:text-white border-r-0 border-[1px]'>
                            Buy
                        </button>
                        <button className='px-2 lg:px-5 py-2 border-black bg-white hover:bg-gray-800 hover:text-white border-r-0 border-[1px]' >
                            Rent
                        </button>
                        <button className='px-2 lg:px-5 py-2 border-black bg-white hover:bg-gray-800 hover:text-white border-[1px] border-r-0'>
                            Agent Property
                        </button>
                        <button className='px-2 lg:px-5 py-2 border-black bg-white hover:bg-gray-800 hover:text-white border-[1px]'>
                            New Project
                        </button>
                    </div>
                    <div className='relative bg-white px-5 py-5 '>
                        <div className='sm:flex mt-5 lg:mt-0 bg-white justify-between  border-[1px] border-gray-300'>
                            <div className='lg:flex justify-between px-2 py-2 w-[90%]'>
                                <div className='flex min-w-[48%]'>
                                    <SearchIcon
                                        imageClass='w-5 h-5 mt-[6px]'
                                    />
                                    <input placeholder='Pick City, Location, Project/Society...' className='pl-2 overflow-ellipsis text-sm sm:text-base w-full focus:outline-none' />
                                </div>
                                <div className='absolute top-1 left-4 lg:relative flex min-w-[320px]'>
                                    <div className='relative group z-10'>
                                        <button
                                            id='bugdet-btn'
                                            // onClick={() => document.getElementById('bugdet-menu').classList.toggle('hidden')}
                                            className={styles.btnBorderLess + 'px-[5px]'}>
                                            BUGDET
                                            <Dropdown />
                                        </button>
                                        <BudgetMenu />
                                    </div>
                                    <div className='relative group z-10'>
                                        <button
                                            // onClick={() => document.getElementById('bhk-menu').classList.toggle('hidden')}
                                            id='bhk-btn'
                                            className={styles.btnBorderLess + 'px-[5px]'}>
                                            BHK
                                            <Dropdown />
                                        </button>
                                        {/* <BHKmenu/> */}
                                        <div
                                            id='bhk-menu'
                                            // className='absolute hidden top-[50px] w-[200px] md:w-[300px] border-[1px] p-3 border-gray-700 bg-white'
                                            className={`${styles.dropdownMenu} w-[260px] p-2 py-4`}
                                        >
                                            <div className='flex gap-2 flex-wrap justify-between pb-2'>
                                                <button className='p-1 px-2 rounded-lg border-[1px] border-gray-500 hover:border-orange-500 hover:text-orange-500'>
                                                    <p>1 RK</p>
                                                </button>
                                                <button className='p-1 rounded-lg border-[1px] border-gray-500 hover:border-orange-500 hover:text-orange-500'>
                                                    <p>1 BHK</p>
                                                </button>
                                                <button className='p-1 rounded-lg border-[1px] border-gray-500 hover:border-orange-500 hover:text-orange-500'>
                                                    <p>2 BHK</p>
                                                </button>
                                                <button className='p-1 rounded-lg border-[1px] border-gray-500 hover:border-orange-500 hover:text-orange-500'>
                                                    <p>3 BHK</p>
                                                </button>
                                                <button className='p-1 rounded-lg border-[1px] border-gray-500 hover:border-orange-500 hover:text-orange-500'>
                                                    <p>4 BHK+</p>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        id='property-type'
                                        className='block relative group z-10'>
                                        <button
                                            // onClick={() => document.getElementById('property-type-menu').classList.toggle('hidden')}
                                            id='property-type-btn'
                                            className={styles.btnBorderLess + 'px-[5px]'}>
                                            PROPERTY TYPE
                                            <Dropdown />
                                        </button>
                                        <PropertyMenu />
                                        {/* <div
                                            // onClick={() => document.getElementById('property-type-menu').classList.toggle('hidden')}
                                            id='property-type-menu'
                                            className={`${styles.dropdownMenu} w-[260px] group-hover:block`}>
                                            <div class="space-y-2 max-h-[400px] overflow-y-scroll">
                                                {propertyTypes.map((item, index) => {
                                                    return (
                                                        <label class={styles.dropdownItem + 'py-1'}>
                                                            <input type="checkbox" class="form-checkbox mt-1 h-4 w-4 text-blue-500" />
                                                            <span class="ml-2">{item.type}</span>
                                                        </label>
                                                    )
                                                })}

                                            </div>
                                        </div> */}
                                    </div>

                                </div>

                            </div>
                            <div className='items-center h-full justify-center'>
                                <button className='hover:bg-white hover:text-black border-[1px] border-gray-400 duration-500 px-4 py-2 w-full sm:w-[100px] sm:h-[48px] bg-black text-white items-center justify-center'>
                                    Search
                                </button>
                            </div>

                        </div>
                    </div>

                </div>
            </main>

            <div className="container mx-auto px-2 mt-4 py-5">
                <h1 className={styles.title1}>Truehomes24 - Among The best Real Estate Websites in India</h1>
                <div className="">
                    <p className={styles.paragraph}>
                        Truehomes is counted among the Best real estate websites in India
                        and a modest host for all those who are looking to invest in
                        top-notch residential and commercial properties. With a huge catalog
                        of only authentic properties and the best real estate agents at your
                        service - you are most likely to make the most suitable choice with
                        truehomes. By its clients, Truehomes24 is entitled to be among those
                        rare property websites in India, that have the most relevant results
                        even for precise searches.
                    </p>
                </div>
            </div>

            <div ref={propertyElement} id="properties" className='container mx-auto px-[3%] xl:px-10'>
                <PropertySlider Data={Data} type={'Featured Properties'} />
                <div className='my-10 mt-[50px]'>
                    <PropertySlider type={'New Project'} Data={Data} />
                </div>
                <div className='my-10 mt-[50px] px-5'>
                    <RecentAdded Data={Data} func={onClickContactBtn} />
                </div>
                <NewsAndArticles Data={NewsArticlesData} type={'News & Articles'} />
                <div className='mt-10'>
                    <p className={styles.title2}>Our Property Stats</p>
                    <div className='mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'>
                        {propertyCount.map((item, index) => {
                            return (
                                <div className='text-center mb-5'>
                                    <img src={item.image} className='mx-auto w-[150px] h-[100px] md:h-[150px] md:w-[180px]' />
                                    <p className='text-2xl md:text-3xl'>{item.count}</p>
                                    <p className='text-gray-500 text-lg md:text-xl'>{item.title}</p>
                                    {index > 0 && <p className='text-xs opacity-70 text-gray-600'>in the last 24 hours</p>}
                                </div>
                            )
                        })}
                    </div>
                </div>

                <div className='mb-16 mt-10 px-2 sm:px-5'>
                    <p className={styles.title2}>Top Developers in Ahmedabad</p>
                    <div className='grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-5 justify-center mt-5'>
                        {TopDevelopersData.map((item, index) => {
                            return (
                                <div key={index} className='group border-[1px] cursor-pointer hover:bg-gray-50 border-gray-300 p-2 rounded-md shadow-md'>
                                    <div className='flex flex-col sm:flex-row items-center sm:p-2 sm:py-4 gap-5'>
                                        <div className='border-[1px] w-[120px] border-gray-300 p-2 rounded-md'>
                                            <img alt='' className='h-[100px]' src={item.icon} />
                                        </div>
                                        <b className='group-hover:text-green-600 text-gray-600 mb-2'>
                                            {item.name}
                                        </b>
                                    </div>
                                    <div className='border-gray-300 sm:border-t-[1px] sm:p-2 text-sm text-center text-sky-700 font-semibold hover:underline'>
                                        <p>{item.project} project by {item.name} in Ahmedabad</p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>

                <div className='mb-16 mt-5 px-2 sm:px-5'>
                    <p className={styles.title2}>Top Localities in Ahmedabad</p>
                    <div className='mt-5 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-2 sm:gap-5'>
                        {topLocalities.map((item, index) => {
                            return (
                                <div key={index} className='shadow-md rounded-md border-[1px] border-gray-300'>
                                    <div className='flex gap-[2%] group p-2 border-b-gray-300 border-b-[1px]'>
                                        <img alt='' className='rounded-md w-[90px] h-[50px] cursor-pointer'
                                            src="https://static.squareyards.com/cdn-cgi/image/width=81,height=49,quality=80,fit=crop,gravity=auto,format=webp/localitymap-thumnail/chandkheda-ahmedabad.png"
                                        />
                                        <div className=''>
                                            <p className='font-semibold text-sm'>{item.name}</p>
                                            <p className='text-xs font-semibold text-blue-800 hover:underline cursor-pointer '>{item.projectNum} projects</p>
                                            <p className='text-xs font-semibold text-blue-800 hover:underline cursor-pointer'>{item.locality}</p>
                                        </div>
                                    </div>
                                    <div className='flex flex-wrap justify-between gap-1 p-2 py-3'>
                                        <div className='mb-1'>
                                            <p className='text-sm font-semibold'>{item.forSale} Properties for Sale </p>
                                            <p className='text-xs'>{item.locality}</p>
                                        </div>
                                        <div className='mb-1'>
                                            <p className='text-sm font-semibold'>{item.forRent} Properties for Rent</p>
                                            <p className='text-xs'>{item.locality}</p>
                                        </div>
                                        {/* <div>
                                            <span className='text-sm font-semibold'>{item.forSale} Properties for Sale </span>
                                            <span className='text-sm'>{item.locality}</span>
                                        </div> */}
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>

                <div className=''>
                    {contactModalStatus.show && <Contact Data={contactModalStatus.data} func={onCloseContact} />}
                </div>
                {/* <div className='px-2 md:px-10 mt-[80px] w-full items-center'>
                </div> */}
            </div>
            <TopCItiesFilter />
            <ScrollUp targetElement={propertyElement} />
            <div className=''>
                <Footer />
            </div>

        </div>
    );
}

export default Home;
