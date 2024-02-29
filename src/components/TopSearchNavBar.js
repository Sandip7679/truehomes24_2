import React, { useEffect, useRef, useState } from 'react';
import Dropdown, { SearchIcon } from './svgIcons';
import homeKey from '../assets/Icons/home-key.png';
import buyIcon from '../assets/Icons/buy-buy.png';
import newProjectIcon from '../assets/Icons/bulding-project.png';
import { styles } from '../Styles/Styles';
import BHKmenu, { BudgetMenu, MoreMenu, PropertyTypeMenu, ShortByMenu } from './Dropdowns';
// import { useParams, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setFileterMenus, setPropertyListState, setlocation } from '../Redux/reducer/User';
import { NavLink } from 'react-router-dom';
import useApi from '../ApiConf';
// import { document } from 'postcss';


let BHKtype = [
    { type: '1 RK' },
    { type: '1 BHK' },
    { type: '2 BHK' },
    { type: '3 BHK' },
    { type: '4 BHK' }
];
const propertyTypes = [
    { type: 'Apartment' },
    { type: 'Independent House/Villa' },
    { type: 'Residential Land' },
    { type: 'Warehouse' },
    { type: 'Builder Floor' },
    { type: 'Office Space' },
    { type: 'Shop/Showroom' },
    { type: 'Serviced' },
]
const shortByItems = [
    { type: 'Short By Newest' },
    { type: 'Short By Oldest' },
    { type: 'Short By Featured' },
    { type: 'Short By Price (Low to Hogh)' },
    { type: 'Short By Price (HIgh to Low)' },
]
const rupees = [30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80];

const moreDatas = {
    furnishingType: ['Furnished', 'Semi Furnished', 'Unfurnished'],
    new: ['Both', 'New', 'Resale'],
    constructionStatus: ['All', 'Under Construction', 'Ready To Move', 'Upcoming'],
    facing: ['North', 'East', 'South', 'West', 'North East', 'North West', 'South East', 'South West'],
    floor: ['1-3', '4-6', '7-10', '11-15', '15+'],
    Amenities: ['24by7Water', 'CCTV Camera', 'Gated Society', 'Gym', 'Internet Connectivity', 'Jogging Track', 'Kid Play Area', 'Kid Play Pool']
}

const searchTypes = [
    { type: 'Buy', icon: buyIcon,for:'Sale', value: 'sale', path: '/sale/property-for-sale-in-' },
    { type: 'Rent', icon: homeKey,for:'Rent', value: 'rent', path: '/rent/property-for-rent-in-' },
    { type: 'New Projects', icon: newProjectIcon,for:'Sale', value: 'new project', path: '/new-projects/new-projects-for-sale-in-' }
]


const TopSearchNavBar = ({ pageRef }) => {
    const { currLocation, propertyListState, filterMenus } = useSelector(state => state.User);

    const [searchStatus, setSearchStatus] = useState({ quary: null, type: 'city', city: '', locality: '', cityName: null, localityName: null, project: '', projectName: null });
    const [searchResult, setSearchResult] = useState([]);
    const [curIndex, setCurrIndex] = useState(0);
    const [noSuggestion, setNoSuggestion] = useState(false);
    const [isInValidLocation, setIsInvalidLocation] = useState(false);
    const searchMenu = useRef();
    const searchInput = useRef();
    const dispatch = useDispatch();
    const { fetchData, error } = useApi();
    useEffect(() => {

        getFileterMenus();

        // closeOnClickOutside('budget-dropdown', 'budget-menu');
        // closeOnClickOutside('bhk-dropdown', 'bhk-menu');
        // closeOnClickOutside('property-type-dropdown', 'property-type-menu');
        closeOnClickOutside('shortBy-dropdown', 'shortBy-menu');

        pageRef.current.addEventListener('click', (e) => {
            if (!searchMenu.current.contains(e.target) && !searchInput.current.contains(e.target)) {
                setSearchResult([]);
                if (noSuggestion) {
                    setNoSuggestion(false);
                }
            }
        });
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
        if (currLocation.code != searchStatus.city && currLocation.code !== '') {
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

    const closeOnClickOutside = (parentId, childId) => {
        document.addEventListener('click', (e) => {
            let dropdownElement = document.getElementById(parentId);
            let childElement = document.getElementById(childId);
            if (childElement && dropdownElement && !dropdownElement.contains(e.target)) {
                childElement.classList.add('hidden');
            }
        });
    }

    const getFileterMenus = async () => {
        let data;
        try {
            data = await fetchData('property-list-filters', 'GET');
        } catch (err) {
            console.log(err);
        }
        if (data) {
            dispatch(setFileterMenus(data.filters));
        }
    }

    const getHomeSearchData = async () => {
        let data;
        let quary = `${searchStatus.quary}` +
            `&type=${searchStatus.type}` +
            `&city=${searchStatus.city}` +
            `&locality=${searchStatus.locality}`;
        try {
            data = await fetchData('home-search?query=' + quary, 'GET');
            // console.log('data.... data...', data)
        } catch (err) {
            console.log('err... data..', err);
            setNoSuggestion(true);
        }
        if (data?.content) {
            console.log('searchdata...', data);
            setSearchResult(data.content);
            setCurrIndex(0);
            if (data.content?.length > 0 && noSuggestion) {
                setNoSuggestion(false);
            } else if (!data.content?.length && !noSuggestion) {
                setNoSuggestion(true);
            }
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
    const setLocation = () => {
        // if (!propertycount || propertycount == 0) return;
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
        localStorage.setItem('location', JSON.stringify({ ...currLocation, ...location, location: '', localityName: null }));
        dispatch(setlocation({ ...currLocation, ...location }));
    }

    const getRoutePath = () => {

        // let propertystatus = localStorage.getItem('propertyStatus');
        if (!searchStatus.city) return;
        let str = `${searchStatus.localityName ? ('-in-' + searchStatus.localityName.split(' ').join('-').toLowerCase()) : ''}` +
            `-in-${searchStatus.cityName ? searchStatus.cityName.split(' ').join('-').toLowerCase() : currLocation.city?.split(' ').join('-').toLowerCase()}`;
        if (propertyListState.propertyStatus.value == 'rent' || propertyListState.propertyStatus.value == 'sale') {
            return `/${propertyListState.propertyStatus.value}/property-for-${propertyListState.propertyStatus.value}` + str;
        }
        else if (propertyListState.propertyStatus.value == 'new project') {
            return '/new-projects/new-projects-for-sale' + str;
        }
    }
    const getPathForPropStatus = (currPropStatus) => {

        // let propertystatus = localStorage.getItem('propertyStatus');
        let location;
        if(searchStatus.localityName){
           location = {locationName:searchStatus.localityName,location:searchStatus.locality,city:searchStatus.cityName,code:searchStatus.city,area:searchStatus.cityName};
           if(location.locationName != currLocation.locationName){
               dispatch(setlocation({...currLocation,...location}));
           }
        }else if(searchStatus.cityName && currLocation.city != searchStatus.cityName ){
            location = {...currLocation ,city:searchStatus.cityName,code:searchStatus.city,area:searchStatus.cityName,country:'90',location: '',locationName:null,project:'',projectName:null,};
            dispatch(setlocation(location));
        } else {
            location = currLocation;

        }
        let str = `${currLocation.locationName ? ('-in-' + currLocation.locationName.split(' ').join('-').toLowerCase()) : ''}` +
            `-in-${currLocation.city?.split(' ').join('-').toLowerCase()}`;

        if (currPropStatus == 'rent' || currPropStatus == 'sale') {
            return `/${currPropStatus}/property-for-${currPropStatus}` + str;
        }
        else if (currPropStatus == 'new project') {
            return '/new-projects/new-projects-for-sale' + str;
        }
    }

    return (
        <div className={styles.textMedium + 'w-screen mx-auto shadow fixed bg-white z-[1500]'}>
            <div className='relative p-2 xl:container pt-5 xl:flex gap-2 pl-[1%]'>
                <div className='flex gap-1 sm:gap-2 xl:w-full sm:max-w-[780px]'>
                    <div className='absolute top-[110px] xs:top-[65px] xl:top-0 xl:relative group'>
                        <button className='p-0 pr-0 flex w-[147px]'>
                            <img alt='' className='h-4 w-4 mt-1 mr-2' src={searchTypes[propertyListState?.propertyStatus?.index]?.icon} />
                            <p className={styles.textMedium + 'font-semibold text-gray-800'}>{propertyListState?.propertyStatus?.text}</p>
                            <Dropdown />
                        </button>

                        <div className={styles.dropdownMenu + 'p-0 pt-[0px] group-hover:block w-[170px]'}>
                            {searchTypes.map((item, index) => {
                                return (
                                    <NavLink
                                        to={getPathForPropStatus(item.value)}
                                        key={index}
                                        onClick={() => {
                                            // setCurrSearchIndex(index);
                                            dispatch(setPropertyListState({ ...propertyListState, propertyStatus: { text: item.type, value: item.value,for:item.for, index: index } }));
                                        }}
                                        className='flex p-2 w-full hover:bg-gray-100'>
                                        <img alt='' className='h-4 w-4 mt-1 mr-2' src={item.icon} />
                                        <p className={styles.textMedium + 'text-gray-800'}>{item.type}</p>
                                    </NavLink>
                                )
                            })}
                        </div>
                    </div>
                    <div className='w-full xs:flex'>
                        <div className='absolute top-0'>
                            {searchStatus.quary?.length > 0 && searchResult.length == 0 && noSuggestion && <p className='text-xs text-red-600'>No suggestions</p>}
                            {searchStatus.projectName && <p className='text-xs text-red-600'>You can not choose more than 3 items</p>}
                            {!searchStatus.city && isInValidLocation && <p className='text-xs text-red-600'>Please choose a city!</p>}
                        </div>
                        <div className='relative w-full xs:flex gap-1 border-gray-300 rounded xs:border-r-0 rounded-r-none border-[1px]'>
                            <div>
                                {/* <SearchIcon imageClass={'w-5 h-5 absolute left-2 top-3'} /> */}
                                <SearchIcon imageClass={'w-5 h-5 mt-3 ml-1'} />
                            </div>
                            <div className='flex lg:flex-nowrap  z-[500] gap-1 items-center'>
                                {searchStatus.cityName && <button className={' flex-nowrap bg-white h-7 px-1 text-sm border-[1px] border-gray-500 flex-shrink-0 gap-1 rounded-xl'}>
                                    {searchStatus.cityName}
                                    <span onClick={() => setSearchStatus(pre => ({ ...pre, cityName: null, city: '', type: 'city' }))}>
                                        <i class="fa-solid fa-xmark"></i>
                                    </span>
                                </button>}
                                {searchStatus.localityName && <button className={'flex-nowrap h-7 px-1 text-sm border-[1px] border-gray-500 flex-shrink-0 gap-1 rounded-xl'}>
                                    {searchStatus.localityName}
                                    <span onClick={() => setSearchStatus(pre => ({
                                        ...pre, localityName: null, locality: '',
                                        type: searchStatus.cityName ? 'locality' : 'city'
                                    }))}>
                                        <i class="fa-solid fa-xmark"></i>
                                    </span>
                                </button>}
                                {searchStatus.projectName && <button className={'flex-nowrap h-7 px-1 text-sm border-[1px] bg-white border-gray-500 flex-shrink-0 gap-1 rounded-xl'}>
                                    {/* <p className='text-ellipsis '>{searchStatus.projectName}</p> */}
                                    {searchStatus.projectName}
                                    <span onClick={() => setSearchStatus(pre => ({
                                        ...pre, projectName: null, project: '',
                                        type: searchStatus.cityName ? searchStatus.localityName ? 'project' : 'locality' : 'city'
                                    }))}>
                                        <i class="fa-solid fa-xmark"></i>
                                    </span>
                                </button>}
                            </div>
                            <input
                                ref={searchInput}
                                // className={styles.textMedium + ' overflow-ellipsis focus:outline-none border-gray-300 rounded xs:border-r-0 rounded-r-none border-[1px] w-[100%] py-2 pl-8'}
                                className={styles.textMedium + (!searchStatus.cityName ? ' w-full ' : '') + ' text-ellipsis focus:outline-none py-2'}
                                placeholder={(!searchStatus.cityName && !searchStatus.localityName && !searchStatus.projectName) && 'Pick City, Location, Project/Society...'}
                                value={searchStatus.quary}
                                onChange={(e) => setSearchStatus(pre => ({ ...pre, quary: e.target.value }))}
                                onKeyDown={onSearchInputKeyPress}
                                onClick={() => {
                                    if (searchStatus.quary?.length > 0) { getHomeSearchData() }
                                    if (isInValidLocation) { setIsInvalidLocation(false) }
                                }}
                            />
                        </div>
                        <NavLink to={getRoutePath()}>
                            <button
                                onClick={setLocation}
                                className='bg-orange-500 hover:bg-orange-600 rounded xs:rounded-none xs:rounded-r-full border-orange-500 border-[1px] p-2 w-full xs:w-16 mt-2 xs:mt-0'>
                                <p className={styles.textMedium + 'text-white'}>Search</p>
                            </button>
                        </NavLink>

                        <div
                            ref={searchMenu} className={(searchResult.length > 0 ? 'border-[1px] border-gray-500' : '') + ' shadow-lg absolute top-16 bg-white rounded max-h-[320px] w-[300px] sm:w-[450px] overflow-auto'}>
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
                </div>

                <div className='flex flex-wrap flex-shrink-0 mt-1 gap-2'>
                    <div className='w-[145px] xl:hidden' />
                    <div id='bhk-dropdown' className='relative group'>
                        <button
                            // onClick={() => document.getElementById('bhk-menu').classList.toggle('hidden')}
                            id='bhk-btn' className={styles.btn + 'py-[2px] sm:py-1 '}>
                            <p className='text-sm lg:text-base'>BHK</p>
                            <Dropdown />
                        </button>
                        <BHKmenu />
                    </div>

                    <div
                        id='property-type-dropdown'
                        className='relative group'>
                        <button
                            // onClick={() => document.getElementById('property-type-menu').classList.toggle('hidden')}
                            className={styles.btn + 'py-[2px] sm:py-1 '}>
                            <p className='text-sm lg:text-base'>Property Type</p>
                            <Dropdown />
                        </button>
                        <PropertyTypeMenu />
                    </div>

                    <div id='budget-dropdown' className='relative group'>
                        <button
                            // onClick={() => {
                            //     if (document.getElementById('budget-menu')) {
                            //         document.getElementById('budget-menu').classList.toggle('hidden');
                            //     }
                            // }}
                            className={styles.btn + 'py-[2px] sm:py-1 '}>
                            <p className='text-sm lg:text-base'>Budget</p>
                            <Dropdown />
                        </button>
                        <BudgetMenu />
                    </div>
                    <div className='relative group'>
                        <button
                            // onClick={() => document.getElementById('more-menu').classList.toggle('hidden')}
                            className={styles.btn + 'py-[2px] sm:py-1 '}>
                            <p className='text-sm lg:text-base'>More</p>
                            <Dropdown />
                        </button>
                        <MoreMenu />
                    </div>
                    <div
                        id='shortBy-dropdown'
                        className='relative group'>
                        <button
                            onClick={() => document.getElementById('shortBy-menu').classList.toggle('hidden')}
                            className={styles.btn + 'py-[2px] sm:py-1 '}>
                            <p className='text-sm lg:text-base'>Short By</p>
                            <Dropdown />
                        </button>
                        <ShortByMenu/>
                        {/* <div id='shortBy-menu' className={styles.dropdownMenu + 'w-[220px] group-hover:block sm:-ml-[95px]'}>
                            {shortByItems.map((item, index) => {
                                return (
                                    <label key={index}
                                        // onClick={() => setSelectedBHK(index)}
                                        className={styles.dropdownItem}>
                                        <input id={`radioBtn-${index}`} className='mt-[0.5px]' type='radio' />
                                        <p className='ml-1'>{item.type}</p>
                                    </label>
                                )
                            })}
                            <p className={styles.textMedium + 'text-center mt-2'}>Clear All</p>
                        </div> */}
                    </div>

                    <button
                        onClick={() => dispatch(setPropertyListState({
                            propertyStatus: { text: 'Buy', value: 'sale', index: 0 },
                            BHKtype: '', propertyTypes: [],
                            priceRange: ['', ''],
                            moreStatus: { furnishingTypes: '', bathrooms: '', minArea: '', maxArea: '', newResale: '', constructionStatus: '', facing: '', amenities: '', listedBy: '',floor:'' },
                            clearAll: true
                        }))}
                        className='ml-2 opacity-80 py-[2px] sm:py-1 '>
                        <i class="fa-solid fa-rotate-right mr-1 text-sm lg:text-base"></i>
                        Clear All
                    </button>

                </div>
            </div>
        </div>
    );
}

export default TopSearchNavBar;
