import React, { useEffect, useState } from 'react';
import Header from '../components/Header/Header';
import bgImage from '../assets/images/homecity.jpeg'
import { styles } from '../Styles/Styles';
import Dropdown, { SearchIcon } from '../components/svgIcons';
import PropertySlider from '../components/PropertySlider';
import TopCItiesFilter from '../components/TopCItiesFilter';
import Footer from '../components/Footer';
// import ApiConf from '../ApiConf';



const rupees = [30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80];
const baseURL = "https://www.truehomes24.com/api/"



const Data = [
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
        "price": "<i class=\"fas fa-rupee-sign\"></i> 25.60 Cr"
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
        "price": "<i class=\"fas fa-rupee-sign\"></i> 45 L"
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
        "price": "<i class=\"fas fa-rupee-sign\"></i> 45 L"
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
        "price": "<i class=\"fas fa-rupee-sign\"></i> 45 L"
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
    //     "price": "<i class=\"fas fa-rupee-sign\"></i> 25.60 Cr"
    // },
]

const Home = () => {

    const [propertyData, setPropertyData] = useState(null);

    useEffect(() => {

        document.getElementById('bugdet-btn').addEventListener('blur', () => {
            document.getElementById('bugdet-menu').classList.add('hidden');
        });

        let url = baseURL + 'featured-property-slider?limit=5&page=1';
        fetch(url).then((res) => res.json()).then((res) => {
            console.log('res properties....', res.content);
            setPropertyData(res.content);
        })
        //  getProperties('featured-property-slider');
    }, [])

    // const getProperties = async (endpoint)=>{
    //     let res = await ApiConf(endpoint);
    //     console.log('res....',res);
    // }


    return (
        <div>
            <Header />

            <main
                className="h-screen flex items-center justify-center bg-cover bg-center"
                style={{
                    // backgroundImage: `url(${'https://www.truehomes24.com//assets/dynamic/banner/8ab1ae7e567ccaf7704650ac82f6c16d.jpg'})`
                    // backgroundImage: `url(${'https://images.unsplash.com/photo-1445264918150-66a2371142a2'})`,
                    backgroundImage: `url(${bgImage})`,
                }}
            >
                <div className='min-w-[70%]'>
                    <div className='sm:flex border-black '>
                        <button className='px-2 lg:px-5 py-2 border-black bg-white hover:bg-gray-100 border-r-0 border-[1px]'>
                            Buy
                        </button>
                        <button className='px-2 lg:px-5 py-2 border-black bg-white hover:bg-gray-100 border-r-0 border-[1px]' >
                            Rent
                        </button>
                        <button className='px-2 lg:px-5 py-2 border-black bg-white hover:bg-gray-100 border-[1px] border-r-0'>
                            Agent Property
                        </button>
                        <button className='px-2 lg:px-5 py-2 border-black bg-white hover:bg-gray-100 border-[1px]'>
                            New Project
                        </button>
                    </div>
                    <div className='bg-white px-5 py-5 '>
                        <div className='sm:flex bg-white justify-between  border-[1px] border-gray-300'>
                            <div className='lg:flex px-2 py-2 justify-between w-[90%]'>
                                <SearchIcon
                                    imageClass='w-5 h-5 absolute left-2 top-[1px]  md:top-2'
                                />
                                <input placeholder='Pick City, Location, Project/Society...' className='pl-7 min-w-[60%] focus:outline-none' />
                                <div className='hidden lg:flex'>
                                    <div className='relative group z-10'>
                                        <button
                                            id='bugdet-btn'
                                            onClick={() => document.getElementById('bugdet-menu').classList.toggle('hidden')}
                                            className={styles.btnBorderLess}>
                                            BUGDET
                                            <Dropdown />
                                        </button>
                                        <div
                                            id='bugdet-menu'
                                            className={styles.dropdownContainer}>
                                            <div className='flex gap-5'>
                                                <div className='relative'>
                                                    <span className='absolute top-6 left-5'>{'\u20B9'}</span>
                                                    <input placeholder='Min' className={styles.input} />
                                                </div>
                                                <div className='relative'>
                                                    <span className='absolute top-6 left-5'>{'\u20B9'}</span>
                                                    <input placeholder='Max' className={styles.input} />
                                                </div>
                                            </div>
                                            <div>
                                                {rupees.map((item, index) => {
                                                    return (
                                                        <div className='flex gap-5 mt-2'>
                                                            <div className='flex-1 text-left font-semibold text-lg ml-2'>{'\u20B9'} 20 Lacs</div>
                                                            <div className='flex-1 text-left font-semibold text-lg ml-2'> {'\u20B9'} 20 Lacs</div>
                                                        </div>
                                                    )
                                                })}
                                            </div>

                                        </div>
                                    </div>

                                    <button className={styles.btnBorderLess}>
                                        BHK
                                        <Dropdown />
                                    </button>
                                    <button className={styles.btnBorderLess}>
                                        PROPERTY TYPE
                                        <Dropdown />
                                    </button>
                                </div>

                            </div>
                            <div className='px-4 py-2 bg-black text-white items-center justify-center'>
                                Search
                            </div>
                        </div>
                    </div>

                </div>
            </main>

            <div className="items-center bg-center mt-4 py-5">
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

            <div id="properties" className=''>
                <h1 className={styles.title1}>Featured Properties</h1>
                <PropertySlider Data={Data} />
                <div className='my-10 mt-[50px]'>
                    <h1 className={styles.title1}>New Project</h1>
                    <PropertySlider Data={Data} />
                </div>
                <div className='px-10 mt-[80px] w-full items-center'>
                    <h1 className={styles.title1}>Browse Residential Projects In Top Cities</h1>
                    <TopCItiesFilter/>
                </div>
            </div>
            <div className=''>
                <Footer/>
            </div>

        </div>
    );
}

export default Home;
