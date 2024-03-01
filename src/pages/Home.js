import React, { useEffect, useRef, useState } from 'react';
import Header from '../components/Header/Header';
import bgImage from '../assets/images/homecity.png';
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
import BHKmenu, { BudgetMenu, PropertyMenu, PropertyTypeMenu } from '../components/Dropdowns';
import NewsAndArticles from '../components/NewsAndArticles';
import useApi, { UseApi } from '../ApiConf';
import { useDispatch, useSelector } from 'react-redux';
import { setPropertyListState, setlocation } from '../Redux/reducer/User';
import { NavLink } from 'react-router-dom';
// import { NavLink } from 'react-router-dom';
// import ApiConf from '../ApiConf';



// const rupees = [30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80];
// const baseURL = "https://www.truehomes24.com/api/"



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
    const searchMenu = useRef();
    const searchInput = useRef();
    const homePage = useRef();
    const { fetchData, error } = useApi();
    const { FetchData } = UseApi();
    // const [featuredProperties, setFeaturedProperties] = useState([]);
    const [allProperties, setAllProperties] = useState({ featured: [], newProjects: [], recentlyAdded: [], newsAndArticle: [], topDeveloper: [] });
    const [searchStatus, setSearchStatus] = useState({ quary: null, type: 'city', city: '', locality: '', cityName: null, localityName: null, project: '', projectName: null });
    const [searchResult, setSearchResult] = useState([]);
    const { currLocation, propertyListState } = useSelector(state => state.User);
    const dispatch = useDispatch();
    const [propertyStatus, setPropertyStatus] = useState(null);
    const [propertycount, setPropertyCount] = useState(null);
    const [curIndex, setCurrIndex] = useState(0);
    const [noSuggestion, setNoSuggestion] = useState(false);
    const [isInValidLocation, setIsInvalidLocation] = useState(false);

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

        // getFeaturedProperties();


        homePage.current.addEventListener('click', (e) => {
            if (!searchMenu.current.contains(e.target) && !searchInput.current.contains(e.target)) {
                setSearchResult([]);
                setNoSuggestion(false);
            }
        });


        dispatch(setPropertyListState({
            propertyStatus: { text: 'Buy', value: 'sale', for: 'Sale', index: 0 },
            BHKtype: '',
            propertyTypes: '',
            priceRange: ['', ''],
            moreStatus: { furnishingTypes: '', bathrooms: '', minArea: '', maxArea: '', newResale: '', constructionStatus: '', facing: '', amenities: '', listedBy: '', floor: '' },
            clearAll: true
        }))
    }, []);

    useEffect(() => {
        if (searchStatus.quary != null && searchStatus.quary != '') {
            let clearTime = setTimeout(() => {
                getHomeSearchData();
            }, 300)
            return () => clearTimeout(clearTime);
        }
        else if (searchStatus.quary == '') {
            setSearchResult([]);
        }
    }, [searchStatus.quary]);

    useEffect(() => {
        if (searchStatus.quary === ''
            || propertyListState.BHKtype !== ''
            || propertyListState.propertyTypes !== ''
            || propertyStatus
            // || propertyListState.priceRange[0] !== ''
            // || propertyListState.priceRange[1] !== ''
        ) {
            getPropertyCount();
        }
    }, [propertyListState, searchStatus])
    useEffect(() => {
        if (searchStatus.quary === '' && propertyStatus == 'agent') {
            getPropertyCount();
        }
    }, [propertyStatus]);

    useEffect(()=>{
        GetAllProperties();
    },[]);

    useEffect(() => {
        console.log('currLOcation.code...', currLocation);
        if (currLocation.code != searchStatus.city && currLocation.code !== '') {
            GetAllProperties();
            setSearchStatus(pre => ({
                ...pre,
                type: 'locality', quary: '',
                city: currLocation.code, cityName: currLocation.city,
                locality: '', localityName: null,
                project: '', projectName: null
            }));
            if (curIndex > 0) {
                setCurrIndex(0);
            }
        }
    }, [currLocation.code]);

   


    const getHomeSearchData = async () => {
        let data;
        let quary = `${searchStatus.quary}` +
            `&type=${searchStatus.type}` +
            `&city=${searchStatus.city}` +
            `&locality=${searchStatus.locality}`;
        try {
            data = await FetchData('home-search?query=' + quary, 'GET');
            // console.log('data.... data...', data)
        } catch (err) {
            console.log('err... data..', err);
            setNoSuggestion(true);
        }
        if (data?.content) {
            console.log('searchdata...', data);
            setSearchResult(data.content);
            if (data.content?.length > 0 && noSuggestion) {
                setNoSuggestion(false);
            } else if (!data.content?.length && !noSuggestion) {
                setNoSuggestion(true);
            }
            setCurrIndex(0);
        }
    }
    const onClickSearchItem = (item) => {
        let type = 'city';
        let name = '';
        if (searchStatus.type == 'city') {
            type = 'locality';
            name = 'cityName';
        }
        else if (searchStatus.type == 'locality') {
            type = 'project';
            name = 'localityName';
        }
        else if (searchStatus.type == 'project') {
            type = '';
            name = 'projectName';
        }
        console.log('item...', item, 'type', type, 'name..', name);
        setSearchStatus(pre => ({ ...pre, quary: '', [searchStatus.type]: item?.id, type: type, [name]: item?.name }));
        if (curIndex > 0) {
            setCurrIndex(0);
        }
        // getPropertyCount();
    }

    const getPropertyCount = async () => {
        let countData;
        let query = `property_status=${propertyStatus ? propertyStatus : 'sale'}` +
            `&property_type=${propertyListState.propertyTypes}` +
            `&bedroom=${propertyListState?.BHKtype}` +
            // `&min_price=${propertyListState.priceRange[0]}&max_price=${propertyListState.priceRange[1]}` +
            `&min_price=${propertyListState.priceRange[0]}&max_price=100000` +
            `&city=${searchStatus.city}` + `&locality=${searchStatus.locality}`
        try {
            countData = await FetchData('get-property-count?' + query, 'GET');
            console.log('countData.... data...', countData);
        } catch (err) {
            console.log('err... countData..', err);
        }
        if (countData?.count) {
            // console.log('countData.count..', countData.count);
            setPropertyCount(countData?.count);
        }
    }
    const onSearchInputKeyPress = (event) => {
        if (event.key === 'ArrowDown') {
            event.preventDefault();
            if (curIndex < searchResult.length - 1) {
                setCurrIndex(curIndex + 1);
            }
        } else if (event.key === 'ArrowUp') {
            event.preventDefault();
            if (curIndex > 0) {
                setCurrIndex(curIndex - 1);
            }
        } else if (event.key === 'Enter') {
            if (searchResult.length > 0) {
                onClickSearchItem(searchResult[curIndex]);
            }
        }
    }

    const getRoutePath = () => {
        console.log('propertyStatus...', propertyStatus);
        if (!propertycount || propertycount == 0 || !searchStatus.city) return;
        // let propertystatus = localStorage.getItem('propertyStatus');
        let str = `${searchStatus.localityName ? ('-in-' + searchStatus.localityName.split(' ').join('-').toLowerCase()) : ''}` +
            `-in-${searchStatus.cityName ? searchStatus.cityName.split(' ').join('-').toLowerCase() : currLocation.city?.split(' ').join('-').toLowerCase()}`;

        if (propertyStatus == 'rent' || propertyStatus == 'sale') {
            return `/${propertyStatus}/property-for-${propertyStatus}` + str;
        }
        else if (propertyStatus == 'new project') {
            return '/new-projects/new-projects-for-sale' + str;
        }
        else if (propertyStatus == 'agent') {
            return `/agent/real-estate-agents` + str;
        }
        else if (!propertyStatus) {
            return `/sale/property-for-sale` + str;
        }
    }

    const setLocation = () => {
        if (!propertycount || propertycount == 0) return;
        if (!searchStatus.city) {
            setIsInvalidLocation(true);
            return;
        }
        // let propertystatus = localStorage.getItem('propertyStatus');
        let location = {
            country: '90',
            city: searchStatus.cityName ? searchStatus.cityName : currLocation.city,
            code: searchStatus.city !== '' ? searchStatus.city : currLocation.code,
            area: searchStatus.cityName ? searchStatus.cityName : currLocation.area,
            location: searchStatus.locality,
            locationName: searchStatus.localityName
        }
        localStorage.setItem('location', JSON.stringify({ ...currLocation, ...location, location: '', locationName: null }));
        dispatch(setlocation({ ...currLocation, ...location }));
    }

    // const getAllProperties = async () => {
    //     let featured
    //     try {
    //         featured = await fetchData('featured-property-slider?limit=5&page=1', 'GET');
    //         console.log('featured.... data...', featured)
    //     } catch (err) {
    //         console.log('err... featured..', err);
    //     }
    //     if (featured?.content) { featured = Object.values(featured?.content) }

    //     let newProjects
    //     try {
    //         newProjects = await fetchData('new-projects-slider?limit=5&page=1', 'GET');
    //     } catch (err) {
    //         console.log(err);
    //     }
    //     if (newProjects) { newProjects = Object.values(newProjects.content) }

    //     setAllProperties(pre => ({ ...pre, featured: featured, newProjects: newProjects }));
    // }

    const GetAllProperties = async () => {
        let featured
        try {
            featured = await FetchData(`featured-property-slider?type=1&limit=5&page=1&city=${currLocation.code}`, 'GET');
            console.log('featured.... data...', featured)
            console.log('currLOcation2.code...', currLocation);

        } catch (err) {
            console.log('err... featured..', err);
        }
        if (featured?.content) { featured = featured?.content }

        let newProjects
        try {
            newProjects = await FetchData(`featured-property-slider?type=2&limit=5&page=1&city=${currLocation.code}`, 'GET');
        } catch (err) {
            console.log(err);
        }
        if (newProjects) { newProjects = newProjects.content }

        let recentlyAdded
        try {
            recentlyAdded = await FetchData(`property-list?recently_added=1&city=${currLocation.code}&page=1&limit=8`, 'GET');
        } catch (err) {
            console.log(err);
        }
        if (recentlyAdded?.property) { recentlyAdded = recentlyAdded.property }

        let newsAndArticle
        try {
            newsAndArticle = await FetchData(`blogs?page=1&limit=8&city=${currLocation.code}`, 'GET');
        } catch (err) {
            console.log(err);
        }
        if (newsAndArticle?.content) { newsAndArticle = newsAndArticle.content }

        let topDeveloper
        try {
            topDeveloper = await FetchData(`real-estate-builders-in-${currLocation.city.toLowerCase()}?for_home=1&limit=8`, 'GET');
        } catch (err) {
            console.log(err);
        }
        if (topDeveloper?.content) { topDeveloper = topDeveloper.content }

        setAllProperties(pre => ({ ...pre, featured: featured, newProjects: newProjects, recentlyAdded: recentlyAdded, newsAndArticle: newsAndArticle, topDeveloper: topDeveloper }));
    }

    const onClickContactBtn = (item) => {
        setcontactModalStatus({ show: true, data: item });
    }
    const onCloseContact = () => {
        setcontactModalStatus({ show: false, data: null });
    }

    return (
        <div ref={homePage} className='overflow-x-hidden'>
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
                        <button
                            onClick={() => {
                                localStorage.setItem('propertyStatus', 'sale');
                                dispatch(setPropertyListState({ ...propertyListState, propertyStatus: { text: 'Buy', value: 'sale', for: 'Sale', index: 0 } }));
                                setPropertyStatus('sale');
                            }}
                            className={(propertyStatus == 'sale' ? 'bg-gray-800 text-white ' : 'bg-white ') + 'px-2 lg:px-5 py-2 border-black hover:bg-gray-800 hover:text-white border-r-0 border-[1px]'}>
                            Buy
                        </button>
                        <button
                            onClick={() => {
                                localStorage.setItem('propertyStatus', 'rent');
                                dispatch(setPropertyListState({ ...propertyListState, propertyStatus: { text: 'Rent', value: 'rent', for: 'Rent', index: 1 } }));
                                setPropertyStatus('rent');
                            }}
                            className={(propertyStatus == 'rent' ? 'bg-gray-800 text-white ' : 'bg-white ') + 'px-2 lg:px-5 py-2 border-black hover:bg-gray-800 hover:text-white border-r-0 border-[1px]'} >
                            Rent
                        </button>
                        <button
                            onClick={() => setPropertyStatus('agent')}
                            className={(propertyStatus == 'agent' ? 'bg-gray-800 text-white ' : 'bg-white ') + 'px-2 lg:px-5 py-2 border-black hover:bg-gray-800 hover:text-white border-[1px] border-r-0'}>
                            Agent Property
                        </button>
                        <button
                            onClick={() => {
                                localStorage.setItem('propertyStatus', 'new projects');
                                dispatch(setPropertyListState({ ...propertyListState, propertyStatus: { text: 'New Project', value: 'new projects', for: 'Sale', index: 2 } }));
                                setPropertyStatus('new project');
                            }}
                            className={(propertyStatus == 'new project' && 'bg-gray-800 text-white ') + 'px-2 lg:px-5 py-2 border-black bg-white hover:bg-gray-800 hover:text-white border-[1px]'}>
                            New Project
                        </button>
                    </div>
                    <div className='relative bg-white px-5 py-5 '>
                        <div className='xl:flex mt-5 lg:mt-0 bg-white justify-between  border-[1px] border-gray-300'>
                            <div className='lg:flex justify-between px-2 py-2 w-full xl:w-[90%]'>
                                <div ref={searchInput} className='flex min-w-[48%]'>
                                    <SearchIcon
                                        imageClass='w-5 h-5 mt-[6px]'
                                    />
                                    <div className='flex flex-wrap lg:flex-nowrap z-[500] gap-1 items-center'>
                                        {searchStatus.cityName && <button className={styles.btn + 'bg-white flex-shrink-0 gap-1 rounded-xl h-7 items-center'}>
                                            <p className='text-sm'>{searchStatus.cityName}</p>
                                            <span onClick={() => setSearchStatus(pre => ({ ...pre, cityName: null, city: '', type: 'city' }))}>
                                                <i class="fa-solid fa-xmark"></i>
                                            </span>
                                        </button>}
                                        {searchStatus.localityName && <button className={styles.btn + 'bg-white flex-shrink-0 gap-1 rounded-xl h-7 items-center'}>
                                            <p className='text-sm'>{searchStatus.localityName}</p>
                                            <span onClick={() => setSearchStatus(pre => ({
                                                ...pre, localityName: null, locality: '',
                                                type: searchStatus.cityName ? 'locality' : 'city'
                                            }))}>
                                                <i class="fa-solid fa-xmark"></i>
                                            </span>
                                        </button>}
                                        {searchStatus.projectName && <button className={styles.btn + 'bg-white flex-shrink-0 gap-1 h-7 items-center rounded-xl overflow-ellipsis'}>
                                            <p className='text-sm'>{searchStatus.projectName}</p>
                                            {/* {searchStatus.projectName} */}
                                            <span onClick={() => setSearchStatus(pre => ({
                                                ...pre, projectName: null, project: '',
                                                type: searchStatus.cityName ? searchStatus.localityName ? 'project' : 'locality' : 'city'
                                            }))}>
                                                <i class="fa-solid fa-xmark"></i>
                                            </span>
                                        </button>}
                                    </div>
                                    <input
                                        onKeyDown={onSearchInputKeyPress}
                                        onClick={() => {
                                            if (searchStatus.quary?.length > 0) { getHomeSearchData() }
                                            if (isInValidLocation) { setIsInvalidLocation(false) }
                                        }}
                                        placeholder={searchStatus.cityName || searchStatus.localityName || searchStatus.projectName ? '' : 'Pick City, Location, Project/Society...'}
                                        className={'pl-2 overflow-ellipsis text-sm sm:text-base focus:outline-none ' + (!searchStatus.cityName && 'w-full')}
                                        value={searchStatus.quary}
                                        onChange={(e) => setSearchStatus(pre => ({ ...pre, quary: e.target.value }))}
                                    // required
                                    />

                                </div>
                                <div className='absolute top-1 left-4 lg:relative lg:top-0 flex min-w-[300px]'>
                                    <div className='relative group z-50'>
                                        <button
                                            id='bugdet-btn'
                                            // onClick={() => document.getElementById('bugdet-menu').classList.toggle('hidden')}
                                            className={styles.btnBorderLess + 'px-[1px] hover:bg-white'}>
                                            BUGDET
                                            <Dropdown />
                                        </button>
                                        <BudgetMenu />
                                    </div>
                                    <div className='relative group z-10'>
                                        <button
                                            // onClick={() => document.getElementById('bhk-menu').classList.toggle('hidden')}
                                            id='bhk-btn'
                                            className={styles.btnBorderLess + 'px-[5px] hover:bg-white'}>
                                            BHK
                                            <Dropdown />
                                        </button>
                                        <BHKmenu />
                                        {/* <div
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
                                        </div> */}
                                    </div>
                                    <div
                                        id='property-type'
                                        className='block relative group z-10'>
                                        <button
                                            // onClick={() => document.getElementById('property-type-menu').classList.toggle('hidden')}
                                            id='property-type-btn'
                                            className={styles.btnBorderLess + 'px-[5px] hover:bg-transparent'}>
                                            PROPERTY TYPE
                                            <Dropdown />
                                        </button>
                                        <PropertyTypeMenu />
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
                            <div
                                className='items-center flex-none justify-center'>
                                <NavLink to={getRoutePath()}>
                                    <button
                                        // type='submit'
                                        onClick={setLocation}
                                        className='hover:bg-white hover:text-black border-[1px] border-gray-400 duration-500 px-4 py-2 w-full sm:min-w-[100px] sm:h-[48px] bg-black text-white items-center justify-center'>
                                        {propertycount !== null ? `View ${propertycount} Properties` : 'Search'}
                                    </button>
                                </NavLink>

                            </div>

                        </div>
                        <div className=''>
                            {searchStatus.quary?.length > 0 && searchResult.length == 0 && noSuggestion && <p className='text-xs text-red-600'>No suggestions</p>}
                            {searchStatus.projectName && <p className='text-xs text-red-600'>You can not choose more than 3 items</p>}
                            {!searchStatus.city && isInValidLocation && <p className='text-xs text-red-600'>Please choose a city!</p>}
                        </div>

                    </div>
                    <div
                        ref={searchMenu} className='absolute bg-white rounded border-[1px] border-gray-500 max-h-[320px] w-[300px] sm:w-[450px] overflow-auto'>
                        {searchResult?.map((item, index) => {
                            return (
                                <div
                                    onClick={() => onClickSearchItem(item)}
                                    className={(index == curIndex && 'bg-gray-100') + ' flex gap-2 p-2 pl-4 hover:bg-gray-100 cursor-pointer'}>
                                    <div>
                                        <img src={item.picture} className='h-6 w-6 mt-2' />
                                    </div>
                                    <div>
                                        <p>{item.name}</p>
                                        <p className='text-xs text-gray-400'>{searchStatus.type.toUpperCase()}</p>
                                    </div>
                                    {/* <span>{item.name}</span> */}
                                </div>
                            )
                        })}
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
                <PropertySlider Data={allProperties.featured} type={'Featured Properties'} />
                <div className='mt-[50px]'>
                    <PropertySlider type={'New Project'} Data={allProperties.newProjects} />
                </div>
                <div className='mt-[50px]'>
                    <RecentAdded Data={allProperties.recentlyAdded} func={onClickContactBtn} />
                </div>
                <div className='mt-5'>
                    <NewsAndArticles Data={allProperties.newsAndArticle} type={'News & Articles'} />
                </div>
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
                    <p className={styles.title2}>Top Developers in {currLocation.city}</p>
                    <div className='grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-5 justify-center mt-5'>
                        {allProperties?.topDeveloper?.length && allProperties.topDeveloper?.map((item, index) => {
                            return (
                                <div key={index} className='group border-[1px] cursor-pointer hover:bg-gray-50 border-gray-300 p-2 rounded-md shadow-md'>
                                    <div className='flex flex-col sm:flex-row items-center sm:p-2 sm:py-4 gap-5'>
                                        <div className='border-[1px] w-[120px] border-gray-300 p-2 rounded-md'>
                                            <img alt='' className='h-[100px]' src={item.image} />
                                        </div>
                                        <b className='group-hover:text-green-600 text-gray-600 mb-2'>
                                            {item.title}
                                        </b>
                                    </div>
                                    <div className='border-gray-300 sm:border-t-[1px] sm:p-2 text-sm text-center text-sky-700 font-semibold hover:underline'>
                                        <p>{item.totalProject} project by {item.title} in {currLocation.city}</p>
                                    </div>
                                </div>
                            )
                        })}

                    </div>
                    {!allProperties?.topDeveloper?.length &&
                        <div className='text-center text-red-500'>
                            Not Found !
                        </div>
                    }
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
