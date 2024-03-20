import React, { useEffect, useRef, useState } from 'react';
import Dropdown, { SearchIcon } from './svgIcons';
import homeKey from '../assets/Icons/home-key.png';
import buyIcon from '../assets/Icons/buy-buy.png';
import newProjectIcon from '../assets/Icons/bulding-project.png';
import { styles } from '../Styles/Styles';
import BHKmenu, { BudgetMenu, MoreMenu, PropertyTypeMenu, ShortByMenu } from './Dropdowns';
// import { useParams, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setPropertyListState, setlocation } from '../Redux/reducer/User';
import { NavLink } from 'react-router-dom';
import useApi from '../ApiConf';
// import { document } from 'postcss';



const searchTypes = [
    { type: 'Buy', icon: buyIcon, for: 'Sale', value: 'sale', path: '/sale/property-for-sale-in-' },
    { type: 'Rent', icon: homeKey, for: 'Rent', value: 'rent', path: '/rent/property-for-rent-in-' },
    { type: 'New Projects', icon: newProjectIcon, for: 'Sale', value: 'new project', path: '/new-projects/new-projects-for-sale-in-' }
]


const TopSearchNavBar = ({ pageRef }) => {
    const { currLocation, propertyListState } = useSelector(state => state.User);

    const [searchStatus, setSearchStatus] = useState({ quary: null, type: 'city', city: '', locality: '', cityName: null, localityName: null, project: '', projectName: null });
    const [searchResult, setSearchResult] = useState([]);
    const [searchHeight, setSearchHeight] = useState(32);
    const [curIndex, setCurrIndex] = useState(0);
    const [noSuggestion, setNoSuggestion] = useState(false);
    const [isInValidLocation, setIsInvalidLocation] = useState(false);
    const searchMenu = useRef();
    const searchInput = useRef();
    const searchSection = useRef(null);
    const dispatch = useDispatch();
    const { fetchData, error } = useApi();
    useEffect(() => {


        // closeOnClickOutside('budget-dropdown', 'budget-menu');
        // closeOnClickOutside('bhk-dropdown', 'bhk-menu');
        // closeOnClickOutside('property-type-dropdown', 'property-type-menu');
        closeOnClickOutside('shortBy-dropdown', 'shortBy-menu');

        pageRef?.current?.addEventListener('click', (e) => {
            if (!searchMenu?.current?.contains(e.target) && !searchInput?.current?.contains(e.target)) {
                setSearchResult([]);
                if (noSuggestion) {
                    setNoSuggestion(false);
                }
            }
        });
        // window.addEventListener('resize',()=>{
        //     if(searchHeight != searchSection.current?.offsetHeight){
        //         setSearchHeight(searchSection.current?.offsetHeight);
        //     }
        // });

    }, []);
    useEffect(() => {
        if (searchHeight != searchSection.current.offsetHeight) {
            setSearchHeight(searchSection.current.offsetHeight);
        }
    }, [searchStatus]);

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

    // useEffect(() => {
    //     if (currLocation.code != searchStatus.city && currLocation.code !== '') {
    //         setSearchStatus(pre => ({
    //             ...pre,
    //             type: 'locality', quary: '',
    //             city: currLocation.code, cityName: currLocation.city,
    //             locality: '', localityName: null,
    //             project: '', projectName: null
    //         }));
    //         if (curIndex > 0) {
    //             setCurrIndex(0);
    //         }
    //     }
    // }, [currLocation.code]);

    const closeOnClickOutside = (parentId, childId) => {
        document.addEventListener('click', (e) => {
            let dropdownElement = document.getElementById(parentId);
            let childElement = document.getElementById(childId);
            if (childElement && dropdownElement && !dropdownElement.contains(e.target)) {
                childElement.classList.add('hidden');
            }
        });
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
        if (searchStatus.localityName) {
            location = { locationName: searchStatus.localityName, city: searchStatus.cityName };
        } else if (searchStatus.cityName && currLocation.city != searchStatus.cityName) {
            location = { city: searchStatus.cityName, locationName: null };
        } else {
            location = currLocation;
        }
        let str = `${location.locationName ? ('-in-' + location.locationName.split(' ').join('-').toLowerCase()) : ''}` +
            `-in-${location.city?.split(' ').join('-').toLowerCase()}`;

        if (currPropStatus == 'rent' || currPropStatus == 'sale') {
            return `/${currPropStatus}/property-for-${currPropStatus}` + str;
        }
        else if (currPropStatus == 'new project') {
            return '/new-projects/new-projects-for-sale' + str;
        }
    }

    const onSelectPropertyStatus = (item, index) => {
        let location;
        if (searchStatus.localityName) {
            location = {
                locationName: searchStatus.localityName, location: searchStatus.locality,
                city: searchStatus.cityName, code: searchStatus.city,
                area: searchStatus.cityName,
                country: '90',
                project: '', projectName: null
            };
            if (location.locationName != currLocation.locationName) {
                localStorage.setItem('location', JSON.stringify(location));
                dispatch(setlocation(location));
            }
        } else if (searchStatus.cityName && currLocation.city != searchStatus.cityName) {
            location = { city: searchStatus.cityName, code: searchStatus.city, area: searchStatus.cityName, country: '90', location: '', locationName: null, project: '', projectName: null };
            localStorage.setItem('location', JSON.stringify(location));
            dispatch(setlocation(location));
        }
        dispatch(setPropertyListState({ ...propertyListState, propertyStatus: { text: item.type, value: item.value, for: item.for, index: index } }));

    }

    return (
        // <div className={styles.textMedium + 'w-screen mx-auto shadow fixed bg-white z-[1500]'}>
        //     <div className='relative p-2 xl:container pt-5 xl:flex gap-2 pl-[1%]'>
        //         <div className='flex gap-1 sm:gap-2 xl:w-full sm:max-w-[780px]'>
        //             <div className={(searchHeight < 50 ? 'top-[110px]' : 'top-[137px]') + ' absolute xs:top-[65px] xl:top-0 xl:relative group'}>
        //                 <button className='p-0 pr-0 flex w-[147px]'>
        //                     <img alt='' className='h-4 w-4 mt-1 mr-2' src={searchTypes[propertyListState?.propertyStatus?.index]?.icon} />
        //                     <p className={styles.textMedium + 'font-semibold text-gray-800'}>{propertyListState?.propertyStatus?.text}</p>
        //                     <Dropdown />
        //                 </button>
        //                 <div className={styles.dropdownMenu + 'p-0 pt-[0px] group-hover:block w-[170px]'}>
        //                     {searchTypes.map((item, index) => {
        //                         return (
        //                             <NavLink
        //                                 to={getPathForPropStatus(item.value)}
        //                                 key={index}
        //                                 onClick={() => onSelectPropertyStatus(item, index)}
        //                                 className='flex p-2 w-full hover:bg-gray-100'>
        //                                 <img alt='' className='h-4 w-4 mt-1 mr-2' src={item.icon} />
        //                                 <p className={styles.textMedium + 'text-gray-800'}>{item.type}</p>
        //                             </NavLink>
        //                         )
        //                     })}
        //                 </div>
        //             </div>
        //             <div className='w-full xs:flex'>
        //                 <div className='absolute top-0'>
        //                     {searchStatus.quary?.length > 0 && searchResult.length == 0 && noSuggestion && <p className='text-xs text-red-600'>No suggestions</p>}
        //                     {searchStatus.projectName && <p className='text-xs text-red-600'>You can not choose more than 3 items</p>}
        //                     {!searchStatus.city && isInValidLocation && <p className='text-xs text-red-600'>Please choose a city!</p>}
        //                 </div>
        //                 <div ref={searchSection} className='relative w-full flex gap-1 border-gray-300 rounded xs:border-r-0 rounded-r-none border-[1px]'>
        //                     <div>
        //                         <SearchIcon imageClass={'w-5 h-5 mt-3 ml-1'} />
        //                     </div>
        //                     <div className='flex flex-wrap lg:flex-nowrap  z-[500] gap-1 items-center'>
        //                         {searchStatus.cityName && <button className={' truncate flex-nowrap bg-white h-7 px-1 text-sm border-[1px] border-gray-500 flex-shrink-0 gap-1 rounded-xl'}>
        //                             {searchStatus.cityName}
        //                             <span onClick={() => setSearchStatus(pre => ({
        //                                 ...pre, cityName: null, city: '', type: 'city', localityName: null, locality: '',
        //                                 projectName: null, project: '',
        //                             }))}>
        //                                 <i class="fa-solid fa-xmark"></i>
        //                             </span>
        //                         </button>}
        //                         {searchStatus.localityName && <button className={' truncate flex-nowrap h-7 px-1 text-sm border-[1px] border-gray-500 flex-shrink-0 gap-1 rounded-xl'}>
        //                             {searchStatus.localityName}
        //                             <span onClick={() => setSearchStatus(pre => ({
        //                                 ...pre, localityName: null, locality: '',
        //                                 type: 'locality',
        //                                 projectName: null, project: '',
        //                             }))}>
        //                                 <i class="fa-solid fa-xmark"></i>
        //                             </span>
        //                         </button>}
        //                         {searchStatus.projectName && <button className={' truncate flex-nowrap h-7 px-1 text-sm border-[1px] bg-white border-gray-500 flex-shrink-0 gap-1 rounded-xl'}>
        //                             {/* <p className='text-ellipsis '>{searchStatus.projectName}</p> */}
        //                             {searchStatus.projectName}
        //                             <span onClick={() => setSearchStatus(pre => ({
        //                                 ...pre, projectName: null, project: '',
        //                                 type: 'project'
        //                             }))}>
        //                                 <i class="fa-solid fa-xmark"></i>
        //                             </span>
        //                         </button>}
        //                     </div>
        //                     {
        //                         (!searchStatus.cityName || !searchStatus.localityName || !searchStatus.projectName) &&
        //                         <input
        //                             ref={searchInput}
        //                             // className={styles.textMedium + ' overflow-ellipsis focus:outline-none border-gray-300 rounded xs:border-r-0 rounded-r-none border-[1px] w-[100%] py-2 pl-8'}
        //                             className={styles.textMedium + (!searchStatus.cityName ? ' w-full ' : '') + ' text-ellipsis focus:outline-none py-2'}
        //                             placeholder={(!searchStatus.cityName && !searchStatus.localityName && !searchStatus.projectName) && 'Pick City, Location, Project/Society...'}
        //                             value={searchStatus.quary}
        //                             onChange={(e) => setSearchStatus(pre => ({ ...pre, quary: e.target.value }))}
        //                             onKeyDown={onSearchInputKeyPress}
        //                             onClick={() => {
        //                                 if (searchStatus.quary?.length > 0) { getHomeSearchData() }
        //                                 if (isInValidLocation) { setIsInvalidLocation(false) }
        //                             }}
        //                         />}
        //                 </div>
        //                 <NavLink to={getRoutePath()}>
        //                     <button
        //                         onClick={setLocation}
        //                         className='bg-orange-500 hover:bg-orange-600 rounded xs:rounded-none xs:rounded-r-full border-orange-500 border-[1px] p-2 w-full xs:w-16 mt-2 xs:mt-0'>
        //                         <p className={styles.textMedium + 'text-white'}>Search</p>
        //                     </button>
        //                 </NavLink>

        //                 <div
        //                     ref={searchMenu} className={(searchResult.length > 0 ? 'border-[1px] border-gray-500' : '') + ' shadow-lg absolute top-16 bg-white rounded max-h-[320px] z-10 w-[300px] sm:w-[450px] overflow-auto'}>
        //                     {searchResult?.map((item, index) => {
        //                         return (
        //                             <div
        //                                 onClick={() => onClickSearchItem(item)}
        //                                 className={(index == curIndex && 'bg-gray-100') + ' flex gap-2 p-2 pl-4 hover:bg-gray-100 cursor-pointer'}>
        //                                 <div>
        //                                     <img src={item.picture} className='h-6 w-6 mt-2' />
        //                                 </div>
        //                                 <div>
        //                                     <p>{item.name}</p>
        //                                     <p className='text-xs text-gray-400'>{searchStatus.type.toUpperCase()}</p>
        //                                 </div>
        //                                 {/* <span>{item.name}</span> */}
        //                             </div>
        //                         )
        //                     })}
        //                 </div>
        //             </div>
        //         </div>

        //         <div className='flex flex-wrap flex-shrink-0 mt-1 gap-2'>
        //             <div className='w-[145px] xl:hidden' />
        //             <div id='bhk-dropdown' className='relative group'>
        //                 <button
        //                     // onClick={() => document.getElementById('bhk-menu').classList.toggle('hidden')}
        //                     id='bhk-btn' className={styles.btn + 'py-[2px] sm:py-1 '}>
        //                     <p className='text-sm lg:text-base'>BHK</p>
        //                     <Dropdown />
        //                 </button>
        //                 <BHKmenu />
        //             </div>

        //             <div
        //                 id='property-type-dropdown'
        //                 className='relative group'>
        //                 <button
        //                     // onClick={() => document.getElementById('property-type-menu').classList.toggle('hidden')}
        //                     className={styles.btn + 'py-[2px] sm:py-1 '}>
        //                     <p className='text-sm lg:text-base'>Property Type</p>
        //                     <Dropdown />
        //                 </button>
        //                 <PropertyTypeMenu />
        //             </div>

        //             <div id='budget-dropdown' className='relative group'>
        //                 <button
        //                     // onClick={() => {
        //                     //     if (document.getElementById('budget-menu')) {
        //                     //         document.getElementById('budget-menu').classList.toggle('hidden');
        //                     //     }
        //                     // }}
        //                     className={styles.btn + 'py-[2px] sm:py-1 '}>
        //                     <p className='text-sm lg:text-base'>Budget</p>
        //                     <Dropdown />
        //                 </button>
        //                 <BudgetMenu />
        //             </div>
        //             <div className='relative group'>
        //                 <button
        //                     // onClick={() => document.getElementById('more-menu').classList.toggle('hidden')}
        //                     className={styles.btn + 'py-[2px] sm:py-1 '}>
        //                     <p className='text-sm lg:text-base'>More</p>
        //                     <Dropdown />
        //                 </button>
        //                 <MoreMenu />
        //             </div>
        //             <div
        //                 id='shortBy-dropdown'
        //                 className='relative group'>
        //                 <button
        //                     // onClick={() => document.getElementById('shortBy-menu').classList.toggle('hidden')}
        //                     className={styles.btn + 'py-[2px] sm:py-1 '}>
        //                     <p className='text-sm lg:text-base'>Sort By</p>
        //                     <Dropdown />
        //                 </button>
        //                 <ShortByMenu />
        //             </div>

        //             <button
        //                 onClick={() => dispatch(setPropertyListState({
        //                     ...propertyListState,
        //                     BHKtype: '', propertyTypes: '',
        //                     priceRange: ['', ''],
        //                     moreStatus: { furnishingTypes: '', bathrooms: '', minArea: '', maxArea: '', newResale: '', constructionStatus: '', facing: '', amenities: '', listedBy: '', floor: '' },
        //                     sortBy: 'featured',
        //                     clearAll: true
        //                 }))}
        //                 className='ml-2 opacity-80 py-[2px] sm:py-1 '>
        //                 <i class="fa-solid fa-rotate-right mr-1 text-sm lg:text-base"></i>
        //                 Clear All
        //             </button>

        //         </div>
        //     </div>
        // </div>
        <div className={styles.textMedium + 'w-screen mx-auto shadow fixed bg-white z-[1500]'}>
            <div className='relative p-2 pb-1 pt-5 xl:container xl:mx-auto xl:flex gap-2 pl-[1%]'>
                <div className='flex gap-1 sm:gap-2 xl:w-full sm:max-w-[780px] xl:h-10'>
                    {/* <div className={(searchHeight < 50 ? 'top-[110px]' : 'top-[137px]') + ' absolute xs:top-[65px] xl:top-0 xl:relative group'}>
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
                                        onClick={() => onSelectPropertyStatus(item, index)}
                                        className='flex p-2 w-full hover:bg-gray-100'>
                                        <img alt='' className='h-4 w-4 mt-1 mr-2' src={item.icon} />
                                        <p className={styles.textMedium + 'text-gray-800'}>{item.type}</p>
                                    </NavLink>
                                )
                            })}
                        </div>
                    </div> */}
                    {/* <div></div> */}
                    <div className='w-full xl:ml-[145px] xs:flex'>
                        <div className='absolute top-0'>
                            {searchStatus.quary?.length > 0 && searchResult.length == 0 && noSuggestion && <p className='text-xs text-red-600'>No suggestions</p>}
                            {searchStatus.projectName && <p className='text-xs text-red-600'>You can not choose more than 3 items</p>}
                            {!searchStatus.city && isInValidLocation && <p className='text-xs text-red-600'>Please choose a city!</p>}
                        </div>
                        <div ref={searchSection} className='relative w-full flex gap-1 border-gray-300 rounded xs:border-r-0 rounded-r-none border-[1px]'>
                            <div>
                                <SearchIcon imageClass={'w-5 h-5 mt-3 ml-1'} />
                            </div>
                            <div className='flex flex-wrap lg:flex-nowrap  z-[500] gap-1 items-center'>
                                {searchStatus.cityName && <button className={' truncate flex-nowrap bg-white h-7 px-1 text-sm border-[1px] border-gray-500 flex-shrink-0 gap-1 rounded-xl'}>
                                    {searchStatus.cityName}
                                    <span onClick={() => setSearchStatus(pre => ({
                                        ...pre, cityName: null, city: '', type: 'city', localityName: null, locality: '',
                                        projectName: null, project: '',
                                    }))}>
                                        <i class="fa-solid fa-xmark"></i>
                                    </span>
                                </button>}
                                {searchStatus.localityName && <button className={' truncate flex-nowrap h-7 px-1 text-sm border-[1px] border-gray-500 flex-shrink-0 gap-1 rounded-xl'}>
                                    {searchStatus.localityName}
                                    <span onClick={() => setSearchStatus(pre => ({
                                        ...pre, localityName: null, locality: '',
                                        type: 'locality',
                                        projectName: null, project: '',
                                    }))}>
                                        <i class="fa-solid fa-xmark"></i>
                                    </span>
                                </button>}
                                {searchStatus.projectName && <button className={' truncate flex-nowrap h-7 px-1 text-sm border-[1px] bg-white border-gray-500 flex-shrink-0 gap-1 rounded-xl'}>
                                    {/* <p className='text-ellipsis '>{searchStatus.projectName}</p> */}
                                    {searchStatus.projectName}
                                    <span onClick={() => setSearchStatus(pre => ({
                                        ...pre, projectName: null, project: '',
                                        type: 'project'
                                    }))}>
                                        <i class="fa-solid fa-xmark"></i>
                                    </span>
                                </button>}
                            </div>
                            {
                                (!searchStatus.cityName || !searchStatus.localityName || !searchStatus.projectName) &&
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
                                />}
                        </div>
                        <NavLink to={getRoutePath()}>
                            <button
                                onClick={setLocation}
                                className='bg-orange-500 hover:bg-orange-600 rounded xs:rounded-none xs:rounded-r-full border-orange-500 border-[1px] h-10 flex  items-center p-2 w-full xs:w-16 mt-2 xs:mt-0'>
                                <p className={styles.textMedium + 'text-white'}>Search</p>
                            </button>
                        </NavLink>

                        <div
                            ref={searchMenu} className={(searchResult.length > 0 ? 'border-[1px] border-gray-500' : '') + ' shadow-lg absolute top-16 bg-white rounded max-h-[320px] z-10 w-[300px] sm:w-[450px] overflow-auto'}>
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
                
                <div className='flex flex-shrink-0 overflow-x-scroll xl:overflow-auto mt-1 gap-2 pb-2'>
                    {/* <div className='w-[145px] xl:hidden' /> */}
                    <div className={'xl:absolute left-0 group'}>
                        <div className='relative flex-shrink-0'>
                            <button className='p-0 pr-0 flex w-[147px]'>
                                <img alt='' className='h-4 w-4 mt-1 mr-2' src={searchTypes[propertyListState?.propertyStatus?.index]?.icon} />
                                <p className={styles.textMedium + 'font-semibold text-gray-800'}>{propertyListState?.propertyStatus?.text}</p>
                                <Dropdown />
                            </button>
                            <div className={' absolute hidden group-hover:block z-50 bg-white text-gray-800 top-5 pb-0 border-gray-300 border-[1px] shadow-sm text-sm p-0 pt-[0px] w-[170px]'}>
                                {searchTypes.map((item, index) => {
                                    return (
                                        <NavLink
                                            to={getPathForPropStatus(item.value)}
                                            key={index}
                                            onClick={() => onSelectPropertyStatus(item, index)}
                                            className='flex p-2 w-full hover:bg-gray-100'>
                                            <img alt='' className='h-4 w-4 mt-1 mr-2' src={item.icon} />
                                            <p className={styles.textMedium + 'text-gray-800'}>{item.type}</p>
                                        </NavLink>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                    <div id='bhk-dropdown' className='relative group flex-shrink-0'>
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
                        className='relative group flex-shrink-0'>
                        <button
                            // onClick={() => document.getElementById('property-type-menu').classList.toggle('hidden')}
                            className={styles.btn + 'py-[2px] sm:py-1 '}>
                            <p className='text-sm lg:text-base'>Property Type</p>
                            <Dropdown />
                        </button>
                        <PropertyTypeMenu />
                    </div>

                    <div id='budget-dropdown' className='relative group flex-shrink-0'>
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
                    <div className='relative group flex-shrink-0'>
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
                        className='relative group flex-shrink-0'>
                        <button
                            // onClick={() => document.getElementById('shortBy-menu').classList.toggle('hidden')}
                            className={styles.btn + 'py-[2px] sm:py-1 '}>
                            <p className='text-sm lg:text-base'>Sort By</p>
                            <Dropdown />
                        </button>
                        <ShortByMenu />
                    </div>

                    <button
                        onClick={() => dispatch(setPropertyListState({
                            ...propertyListState,
                            BHKtype: '', propertyTypes: '',
                            priceRange: ['', ''],
                            moreStatus: { furnishingTypes: '', bathrooms: '', minArea: '', maxArea: '', newResale: '', constructionStatus: '', facing: '', amenities: '', listedBy: '', floor: '' },
                            sortBy: 'featured',
                            clearAll: true
                        }))}
                        className='ml-2 opacity-80 py-[2px] sm:py-1 flex-shrink-0 '>
                        <i class="fa-solid fa-rotate-right mr-1 text-sm lg:text-base"></i>
                        Clear All
                    </button>

                </div>
            </div>
        </div>
    );
}

export default TopSearchNavBar;
