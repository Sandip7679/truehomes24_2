import React, { useEffect, useState } from 'react';
import Header from '../components/Header/Header';
import TopSearchNavBar from '../components/TopSearchNavBar';
import { styles } from '../Styles/Styles';
import PropertyListCard from '../components/PropertyListCard';
import RecentViewCard from '../components/RecentViewCard';
import FAQs from '../components/FAQs';
import Footer from '../components/Footer';
import TopCItiesFilter from '../components/TopCItiesFilter';
import { NavLink } from 'react-router-dom';
import PropertyForSlides from '../components/PropertyForSlides';
import Contact from '../components/Contact';
import { useDispatch, useSelector } from 'react-redux';
import useApi from '../ApiConf';
import Pagenation from '../components/Pagenation';

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
// const Data = [
//     {
//         "title": "1 BHK Apartment  for Sale  in Rainbow Chetna, Perambur, Chennai",
//         "link": "https://www.truehomes24.com/api/sale/1-bhk-apartment-for-sale-in-rainbow-chetna-perambur-chennai/1000-57159",
//         "property_url": "/sale/1-bhk-apartment-for-sale-in-rainbow-chetna-perambur-chennai/1000-57159",
//         "image": "https://www.truehomes24.com/assets/properties/banner-02/93a4b41ca5c17860d1b44af1f032afa9.webp",
//         "location": "Perambur, Chennai",
//         "propertyType": "Apartment",
//         "area": "650 sq.ft.",
//         "bedroom": "1 Bedroom(s)",
//         "possission": "Possession By: Jun 2025",
//         "price": "45 L",
//         "owner": 'Owner-36787'
//     },
//     {
//         "title": "2 BHK Apartment  for Sale  in Rainbow Ekanta, Perambur, Chennai",
//         "link": "https://www.truehomes24.com/api/sale/2-bhk-apartment-for-sale-in-rainbow-ekanta-perambur-chennai/1000-57163",
//         "property_url": "/sale/2-bhk-apartment-for-sale-in-rainbow-ekanta-perambur-chennai/1000-57163",
//         "image": "https://www.truehomes24.com/assets/properties/banner-02/6195f1a4b44efe4bd85420205df57e4a.webp",
//         "location": "Perambur, Chennai",
//         "propertyType": "Apartment",
//         "area": "650 sq.ft.",
//         "bedroom": "2 Bedroom(s)",
//         "possission": "Possession By: Nov 2024",
//         "price": "45 L",
//         "owner": 'Owner-67587'
//     },
//     {
//         "title": "1 BHK Apartment  for Sale  in Rainbow Ekanta, Perambur, Chennai",
//         "link": "https://www.truehomes24.com/api/sale/1-bhk-apartment-for-sale-in-rainbow-ekanta-perambur-chennai/1000-57162",
//         "property_url": "/sale/1-bhk-apartment-for-sale-in-rainbow-ekanta-perambur-chennai/1000-57162",
//         "image": "https://www.truehomes24.com/assets/properties/banner-02/3fa85544ffca6abb5843dd1aeedf1c73.webp",
//         "location": "Perambur, Chennai",
//         "propertyType": "Apartment",
//         "area": "650 sq.ft.",
//         "bedroom": "1 Bedroom(s)",
//         "possission": "Possession By: Nov 2024",
//         "price": null,
//         "owner": 'Owner-57587'
//     },
//     {
//         "title": "1 BHK Apartment  for Sale  in Rainbow Chetna, Perambur, Chennai",
//         "link": "https://www.truehomes24.com/api/sale/1-bhk-apartment-for-sale-in-rainbow-chetna-perambur-chennai/1000-57159",
//         "property_url": "/sale/1-bhk-apartment-for-sale-in-rainbow-chetna-perambur-chennai/1000-57159",
//         "image": "https://www.truehomes24.com/assets/properties/banner-02/93a4b41ca5c17860d1b44af1f032afa9.webp",
//         "location": "Perambur, Chennai",
//         "propertyType": "Apartment",
//         "area": "650 sq.ft.",
//         "bedroom": "1 Bedroom(s)",
//         "possission": "Possession By: Jun 2025",
//         "price": "45 L",
//         "owner": 'Owner-36787'
//     },
//     {
//         "title": "Residential Land  for Sale  in Bhogapuram International Airport Road, Visakhapatnam",
//         "link": "https://www.truehomes24.com/api/sale/residential-land-for-sale-in-bhogapuram-international-airport-road-visakhapatnam/1000-64481",
//         "property_url": "/sale/residential-land-for-sale-in-bhogapuram-international-airport-road-visakhapatnam/1000-64481",
//         "image": "https://www.truehomes24.com/assets/properties/banner-02/bfa1673f343a2fe32d1b31e3f202a402.jpg",
//         "location": "Bhogapuram International Airport Road, Visakhapatnam",
//         "propertyType": "Residential Land",
//         "area": "57600 sq.ft.",
//         "bedroom": "",
//         "possission": "",
//         "price": "25.60 Cr",
//         "owner": 'Owner-67587'
//     },
// ]

// const rightSectionData = [
//     {
//         "title": "Apartment form Sale in Lagacy",
//         "link": "https://www.truehomes24.com/assets/properties/banner-02/bfa1673f343a2fe32d1b31e3f202a402.jpg",
//         "property_url": "/sale/2-bhk-apartment-for-sale-in-rainbow-ekanta-perambur-chennai/1000-57163",
//         "image": "https://www.truehomes24.com/assets/properties/banner-02/6195f1a4b44efe4bd85420205df57e4a.webp",
//         "location": "Perambur, Chennai",
//         "area": "650 sq.ft.",
//         "price": "90 L - 1.5Cr",
//     },
//     {
//         "title": "Apartment form Sale in Lagacy",
//         "link": "https://www.truehomes24.com/api/sale/2-bhk-apartment-for-sale-in-rainbow-ekanta-perambur-chennai/1000-57163",
//         "property_url": "/sale/2-bhk-apartment-for-sale-in-rainbow-ekanta-perambur-chennai/1000-57163",
//         "image": "https://www.truehomes24.com/assets/properties/banner-02/93a4b41ca5c17860d1b44af1f032afa9.webp",
//         "location": "Perambur, Chennai",
//         "area": "650 sq.ft.",
//         "price": "90 L - 1.5Cr",
//     },
//     {
//         "title": "Apartment form Sale in Lagacy",
//         "link": "https://www.truehomes24.com/api/sale/1-bhk-apartment-for-sale-in-rainbow-chetna-perambur-chennai/1000-57159",
//         "property_url": "/sale/2-bhk-apartment-for-sale-in-rainbow-ekanta-perambur-chennai/1000-57163",
//         "image": "https://www.truehomes24.com/assets/properties/banner-02/3fa85544ffca6abb5843dd1aeedf1c73.webp",
//         "location": "Perambur, Chennai",
//         "area": "650 sq.ft.",
//         "price": "90 L - 1.5Cr",
//     },
//     {
//         "title": "Apartment form Sale in Lagacy",
//         "link": "https://www.truehomes24.com/api/sale/2-bhk-apartment-for-sale-in-rainbow-ekanta-perambur-chennai/1000-57163",
//         "property_url": "/sale/2-bhk-apartment-for-sale-in-rainbow-ekanta-perambur-chennai/1000-57163",
//         "image": "https://www.truehomes24.com/assets/properties/banner-02/6195f1a4b44efe4bd85420205df57e4a.webp",
//         "location": "Perambur, Chennai",
//         "area": "650 sq.ft.",
//         "price": "90 L - 1.5Cr",
//     },
// ]

const propertyTypes = ['Localities', 'Property Status', 'Budget'];

const PropertyList = () => {
    const [contactModalStatus, setcontactModalStatus] = useState({ show: false, data: {} });
    const [propertyType, setPropertyType] = useState('Localities');
    const { fetchData, loading, error } = useApi();
    const { login_status, currLocation, propertyListState, currPage } = useSelector(state => state.User);
    const [propertyListData, setPropertyListData] = useState({ currPage: 1, totalProperty: null, lastPage: null, propertyList: [] });
    const [rightListData,setRightListData] = useState({recentView:[],newProject:[]});

    useEffect(() => {
        getPropertyList();
    }, [propertyListState, currLocation, currPage]);

    useEffect(() => {
        getRightListData();
    }, [currLocation]);


    const getRightListData = async () => {
        let data;
        try {
            data = await fetchData(`listing-right-side-content?city=${currLocation.code}`, 'GET');
        } catch (err) {
            console.log(err);
        }
        if (data) {
            // console.log('rightlistdata....', data);
            setRightListData({recentView:data.recentView,newProject:data.newProjcts});
        }
    }


    const onClickContactBtn = (item) => {
        setcontactModalStatus({ show: true, data: item });
    }
    const onCloseContact = () => {
        setcontactModalStatus({ show: false, data: null });
    }
    const getStatusString = (statusArr) => {
        console.log('statusAr..', statusArr);
        if (statusArr.length > 0) {
            return statusArr.filter(it => it).join('-');
        } else {
            return '';
        }
    }

    const getPropertyList = async () => {
        let data;
        // console.log('propertyListState.propertyTypes...',propertyListState.propertyTypes?.filter(it => it).join('-'))
        // console.log('propertyListState.moreStatus.amenities...',propertyListState.moreStatus.amenities)
        console.log('currpage...',currPage);
        let quary = `property_status=${propertyListState?.propertyStatus?.value == 'new projects' ? 'new project' : propertyListState?.propertyStatus?.value}` +
            `&country=${currLocation.country}&city=${currLocation.code}&locality=` +
            `&bedroom=${propertyListState?.BHKtype}` +
            // `&property_type=${propertyListState.propertyTypes.length>0? propertyListState.propertyTypes?.filter(it => it).join('-'):''}` +
            `&property_type=${getStatusString(propertyListState.propertyTypes)}` +
            `&min_price=${propertyListState.priceRange[0]}&max_price=${propertyListState.priceRange[1]}` +
            // `&furnishing=${propertyListState.moreStatus.furnishingTypes.length>0 ? propertyListState.moreStatus.furnishingTypes?.filter(it => it).join('-'):''}` +
            `&furnishing=${getStatusString(propertyListState.moreStatus.furnishingTypes)}` +
            // `&bathroom=${propertyListState.moreStatus.bathrooms?.filter(it => it).join('-')}` +
            `&bathroom=${getStatusString(propertyListState.moreStatus.bathrooms)}` +
            `&min_area=${propertyListState.moreStatus.minArea}&max_area=${propertyListState.moreStatus.maxArea}` +
            `&availableFor=${propertyListState.moreStatus.newResale}` +
            `&availability=${propertyListState.moreStatus.constructionStatus}` +
            '&facing=&floor=' +
            // `&amenities=` +
            // `&amenities=${propertyListState.moreStatus.amenities?.filter(it => it).join('-')}`+
            `&amenities=${getStatusString(propertyListState.moreStatus.amenities)}` +
            // `&listed_by=${propertyListState.moreStatus.listedBy?.filter(it => it).join('-')}`+
            `&listed_by=${getStatusString(propertyListState.moreStatus.listedBy)}` +
            `&verified=&page=${currPage}`
        let endpoint = 'property-list?' + quary;

        try {
            data = await fetchData(endpoint, 'GET');
            console.log('data...', data);
        } catch (err) {
            console.log('err fetching propertylist...', err);
        }
        if (data) {
            console.log('data.totalProperty..', data.totalProperty)
            let lastpage = Math.floor(data.totalProperty / 25) + 1;
            setPropertyListData({ currPage: data.page, totalProperty: data.totalProperty, lastPage: lastpage, propertyList: data.property });
        }
    }

    return (
        <div className='mx-auto' >
            <Header />
            <div className={'mt-[50px]'}>
                <TopSearchNavBar />
                <div className='px-[2%] pt-24 container mx-auto py-5'>
                    <div className={styles.textMedium}>
                        <NavLink className={'hover:opacity-70'} to="/">Home</NavLink> {'> '}
                        Property for Sale in {currLocation.city}</div>
                    <div className='lg:flex gap-5'>
                        <div className='mt-5 tracking-wide'>
                            <p className={styles.textMedium}>Showing 1-25 of 356 property for Sale</p>
                            <p className={styles.title3 + 'mt-1'}>Property for Sale in {currLocation.city}</p>
                            <div className='flex gap-2 border-b-[1px] mt-2 border-b-gray-200'>
                                {propertyTypes.map((item, index) => {
                                    return (
                                        <button key={index}
                                            onClick={() => setPropertyType(item)}
                                            className={(propertyType === item ? 'border-b-[1px]' : '') + ' hover:border-b-[1px] border-b-gray-700 pb-1 mr-3'}>
                                            <p className={styles.textMedium + ''}>{item}</p>
                                        </button>
                                    )
                                })}

                            </div>
                            <div className='shadow-sm rounded flex flex-wrap max-h-[140px] border-[1px] border-gray-200 mt-5 mx-2 overflow-y-auto p-2'>
                                {Localities.map((item, index) => {
                                    return (
                                        <button key={index} className={styles.btn + 'm-1 hover:bg-orange-50 border-orange-500'}>
                                            <p className='text-sm'> {item.location}</p>
                                        </button>
                                    )
                                })}
                            </div>
                            <div>
                                {propertyListData?.propertyList?.map((item, index) => {
                                    return (
                                        <PropertyListCard key={index} func={onClickContactBtn} Data={item} />
                                    )
                                })}
                            </div>
                            <div>
                                <Pagenation lastPage={propertyListData.lastPage} />
                            </div>
                            <div className='mt-10'>
                                <FAQs />
                            </div>
                        </div>

                        <div className='w-full lg:w-[35%] bg-slate-50 py-4 px-1'>
                            <div>
                                <RecentViewCard title={'Recent View Property'} Data={rightListData.recentView} />
                            </div>
                            <div className='mt-10'>
                                <RecentViewCard title={'New Project Property'} Data={rightListData.newProject} />
                            </div>
                        </div>
                    </div>

                </div>
                <div className='px-[2%] py-5'>
                    <p className={styles.title1 + 'mb-8 text-left'}>Property In Ahmedabad For Sale</p>
                    <PropertyForSlides />
                </div>
            </div>
            {contactModalStatus.show && <Contact Data={contactModalStatus.data} func={onCloseContact} />}
            <TopCItiesFilter />
            <Footer />
        </div>
    );
}

export default PropertyList;
