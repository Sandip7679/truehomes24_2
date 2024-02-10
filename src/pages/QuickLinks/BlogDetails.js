import React from 'react';
import Header from '../../components/Header/Header';
import BgImage from '../../assets/images/buildersBg.jpg'
import { NavLink } from 'react-router-dom';
import { styles } from '../../Styles/Styles';
import TopCItiesFilter from '../../components/TopCItiesFilter';
import Footer from '../../components/Footer';
import RightListCard from '../../components/RightListCard';

const blogData = {
    title: 'What documentation is required before approving a home loan?',
    type: 'Projects',
    postedOn: 'September 24, 2022 02:35 PM',
    image: "https://www.truehomes24.com/assets/properties/banner-01/6fbc57095a08783a071945a3507844fa.webp",
    about: [
        {
            title: 'What documentation is required before approving a home loan?',
            description: "Because of the introduction of simple home loan policies, purchasing a house property has become a simple thing in today's scenario. The Pradhan Mantri Awaas Yojna (PMAY) is a government of India initiative to provide affordable housing to the urban poor. With the implementation of this initiative, many Indian citizens are demonstrating their ability to purchase homes and become actual homeowners. Credit-linked subsidy schemes allow loan borrowers to pay lower EMIs while also receiving a variety of benefits. It is important to note, however, that not everyone is eligible for a loan."
        },
        {
            title: "The applicant's verification",
            description: "During this verification, the bank records the applicant's income and assets in order to determine his repayment capacity. Furthermore, the concerned bank officer meets the applicant in person and asks him a series of questions in order to assess his intentions and repayment ability. Witnesses are sometimes verified and questioned as well."
        },
        {
            title: "Legal confirmation",
            description: "Any legal issues should be avoided in order for the property investment to be successful. The bank sends a team of legal experts or certified lawyers to examine all original property-related documents, including title deeds, sale deeds, no-objection certificates (NOCs), and other ownership papers, for verification."
        },
        {
            title: "Technical validation",
            description: "During this process, the bank hires a team to inspect the physical condition of the property for which the loan is being applied. The building specifications, such as the map of the property, carpet area, and physical condition, are examined by the technical experts, who then assign a market value to the property. Based on that, the team decides how much money to offer for the property."
        },
    ]
};

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

const BlogDetails = () => {
    return (
        <div className='container mx-auto'>
            <Header />
            <div >
                <div className=' fixed left-0 top-0 h-screen w-screen'>
                    <img alt='' src={BgImage} className='h-full' />
                </div>
                <div className='fixed left-0 h-full mb-2 w-full bg-black bg-opacity-50 overflow-y-scroll'>
                    <div>
                        <div className='mt-[150px] h-[100px] z-[200] text-center text-white tracking-widest'>
                            <p className={'text-center text-2xl sm:text-3xl text-white font-semibold tracking-wider md:text-3xl'}>Blog Details</p>
                            <div className='mt-5 text-xs lg:text-sm'>
                                <NavLink to={'/'}>HOME</NavLink> / <NavLink to={'/blogs'}>BLOGS</NavLink> / <span>BLOG DETAILS</span>
                            </div>
                        </div>
                        <div className='mt-10 min-h-[500px] bg-gray-50'>
                            <div className='lg:flex gap-10'>
                                <div className='w-full lg:w-[65%] lg:bg-white py-5'>
                                    <div className='pt-10 px-2 sm:px-[10%]'>
                                        <p className={styles.title3 + 'my-2'}>{blogData.title}</p>
                                        <div className='my-8 flex justify-between'>
                                            <span>{blogData.type}</span>
                                            <span>Posted On: {blogData.postedOn}</span>
                                        </div>
                                        <div className='w-full'>
                                            <img src={blogData.image} className='h-[400px] w-full' />
                                        </div>
                                        <div>
                                            {blogData.about.map((item, index) => {
                                                return (
                                                    <div className='mt-5'>
                                                        <p className='font-semibold my-2'>{item.title}</p>
                                                        <p className={styles.textMedium + 'text-gray-700'}>{item.description}</p>
                                                    </div>
                                                )
                                            })}
                                        </div>
                                        <div className='mt-5'>
                                            <p className='font-semibold my-2'>{blogData.about[0].title}</p>
                                            <p className={styles.textMedium + 'text-gray-700'}>{blogData.about[0].description}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='w-full lg:bg-gray-50 lg:px-2 lg:w-[28%]'>
                                    <div className='px-2 sm:px-[10%] lg:px-5'>
                                        <RightListCard title={'Recent Blog'} data={recentBlogsData} />
                                        <RightListCard title={'Recently Added Property'} data={Data} />
                                    </div>

                                </div>
                            </div>
                            <TopCItiesFilter />
                            <Footer />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BlogDetails;
