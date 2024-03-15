import React, { useEffect, useRef, useState } from 'react';
import Header from '../../components/Header/Header';
import { styles } from '../../Styles/Styles';
import { NavLink, useLocation } from 'react-router-dom';
// import userBackImage from '../../assets/images/user.svg'
import PropertyListCard from '../../components/PropertyListCard';
import Footer from '../../components/Footer';
import Contact from '../../components/Contact';
import BHKmenu, { BudgetMenu, FurnishingTypeMenu, MoreMenu, PropertyMenu, PropertyTypeMenu, ShortByMenu } from '../../components/Dropdowns';
import loader from '../../assets/Icons/loader.gif';
import { UseApi } from '../../ApiConf';
import { useDispatch, useSelector } from 'react-redux';
import Pagenation from '../../components/Pagenation';
import { setPropertyListState } from '../../Redux/reducer/User';
import ProfileRightSection from '../../components/ProfileRightSection';
import TopCItiesFilter from '../../components/TopCItiesFilter';


const Profile = () => {
    const { FetchData } = UseApi();
    const { currLocation, propertyListState } = useSelector(state => state.User);
    const [currPage, setCurrPage] = useState(1);
    const [propertyListData, setPropertyListData] = useState({ currPage: 1, totalProperty: null, lastPage: null, propertyList: [] });
    const [propertyNumber,setPropertyNumber] = useState(null);
    const [featuredProperties, setFeaturedProperties] = useState([]);
    const [contactModalStatus, setcontactModalStatus] = useState({ show: false, data: {} });
    const [navClassState, setNavClassState] = useState('');
    const [profileData, setProfileData] = useState(null);
    const [loading, setLoading] = useState(true);
    const dispatch = useDispatch();
    const listElement = useRef();
    const location = useLocation();
    const onClickContactBtn = (item) => {
        setcontactModalStatus({
            show: true, data: {
                owner: item.userDetails?.name,
                type: item.userAs,
                icon: item.userDetails?.image
            }
        });
    }
    const onCloseContact = () => {
        setcontactModalStatus({ show: false, data: null });
    }

    useEffect(() => {
        // window.onscroll = ()=>{
        //     console.log(document.body.scrollTop);
        // };
        let arr = location.pathname.split('/');
        // const queryParams = new URLSearchParams(location.search);
        // const queryParamsObj = {};
        // for (const [key, value] of queryParams.entries()) {
        //     queryParamsObj[key] = value;
        // }
        // console.log('queryParamsObj..',queryParamsObj);
        // console.log('queryParams', queryParams);
        // setLoading(true);
        if (arr.length > 4) {
            getAgentProfileData(arr[3]);
        } else {
            getBuilderProfileData(arr[3]);
        }
        getFeaturedProperties();
        ovserveIntersection();
    }, []);

    useEffect(() => {
        let arr = location.pathname.split('/');
        getPropertyList(arr[3], arr.length == 5);
    }, [propertyListState, currPage]);

    const getBuilderProfileData = async (builderId) => {
        let data;
        try {
            data = await FetchData(`real-estate-builders?is_profile=1&builder_id=${builderId}`, 'GET');
        } catch (err) {
            console.log(err);
            setLoading(false);
        }
        if (data.builder_details) {
            setProfileData(data.builder_details);
            setLoading(false);
        }
    }
    const getAgentProfileData = async (agentId) => {
        let data;
        try {
            data = await FetchData(`agent?type=1&agent_id=${agentId}`, 'GET');
        } catch (err) {
            console.log(err);
            setLoading(false);
        }
        if (data.agent_details) {
            setProfileData(data.agent_details);
            setLoading(false);
        }
    }

    const getPropertyList = async (userId, isAgent) => {
        setLoading(true);
        let data;
        // console.log('propertyListState...', propertyListState);
        // console.log('currLocation...', currLocation);
        let quary = `property_status=${isAgent ? '' : 'new project'}` +
            // `&country=${currLocation.country}&city=${currLocation.code}&locality=${currLocation.location}` +
            `&country=&city=&locality=` +
            `&bedroom=${propertyListState?.BHKtype}` +
            `&property_type=${propertyListState.propertyTypes}` +
            `&min_price=${propertyListState.priceRange[0]}&max_price=${propertyListState.priceRange[1]}` +
            `&furnishing=${propertyListState.moreStatus.furnishingTypes}` +
            `&bathroom=${propertyListState.moreStatus.bathrooms}` +
            `&min_area=${propertyListState.moreStatus.minArea}&max_area=${propertyListState.moreStatus.maxArea}` +
            `&availableFor=${propertyListState.moreStatus.newResale}` +
            `&availability=${propertyListState.moreStatus.constructionStatus}` +
            `&facing=${propertyListState.moreStatus.facing}` +
            `&floor=${propertyListState.moreStatus.floor}` +
            `&amenities=${propertyListState.moreStatus.amenities}` +
            `&listed_by=${propertyListState.moreStatus.listedBy}` +
            `&verified=&page=${currPage}` +
            `&builder=${isAgent ? '' : userId}` +
            `&agent=${isAgent ? userId : ''}`+
            `&order_by=${propertyListState.sortBy}`

        let endpoint = (isAgent?'property-list?':'real-estate-builders?is_property_list=1&') + quary;

        try {
            data = await FetchData(endpoint, 'GET');
        } catch (err) {
            console.log('err fetching propertylist...', err);
            setLoading(false);
        }
        if (data) {
            let lastpage = Math.floor(data.totalProperty / 25) + 1;
            console.log('data...', data, 'isAgent...', isAgent);
            setPropertyListData({ currPage: data.page, totalProperty: data.totalProperty, lastPage: lastpage, propertyList: data.property });
            if(!propertyNumber){
                setPropertyNumber(data.totalProperty);
            }
            setLoading(false);
        }
        if (!data.property.length) {
            window.scrollTo({ top: 100, behavior: 'smooth' });
        }
    }

    const getFeaturedProperties = async () => {
        let data;
        try {
            data = await FetchData(`featured-property-slider?type=3&limit=5&page=1&city=`, 'GET');
        } catch (err) {
            console.log(err);
        }
        if (data.content) {
            setFeaturedProperties(data.content);
        }
    }

    const ovserveIntersection = () => {
        let observer = new IntersectionObserver((entries) => {
            if (!entries[0].isIntersecting) {
                setNavClassState('fixed -top-5 w-full shadow-md z-[1500] left-0 pr-[10%] bg-white');
            }
            else {
                setNavClassState('');
            }
        }, {
            root: null,
            rootMargin: '200px',
            threshold: 0
        });
        observer.observe(listElement.current);
    }

    return (
        <div>
            {navClassState === '' && <Header />}
            <div className={'mt-16 ' + (loading && 'opacity-70')}>
                <div className='py-5 mt-[100px] border-b-[1px] container mx-auto pl-2 sm:pl-10'>
                    <p className={styles.title2}>{profileData?.userRole} Profile - {profileData?.name}</p>
                    <div className='text-sm text-gray-700'><NavLink to={'/'}>Home</NavLink>{' / '}<span>{profileData?.userRole} Profile</span></div>
                </div>
                {loading && <div className="fixed top-[200px] right-1/2 flex justify-center items-center mt-16">
                    <img alt="Please wait.." title="Please wait.." src={loader} />
                </div>}

                <div className='lg:flex bg-gray-50 container mx-auto'>
                    <div className='w-full lg:w-[63%] pb-10 bg-white pl-2 sm:pl-10'>
                        <div className='flex flex-wrap gap-[15%] py-14 pl-[10%]'>
                            <div className='flex flex-col items-center'>
                                <div className='p-2 border-[1px] w-[190px] border-gray-300'>
                                    <img alt='' src={profileData?.imageLink} className={(profileData?.userRole == 'Builder' ? ' h-[100px]' : 'h-[180px]') + ' w-[180px] '} />
                                </div>
                                {profileData?.userRole == 'Agent' ? <div className='text-sm text-gray-700 mt-4 text-center'>
                                    <p>{profileData?.saleProperty} Sale Properties</p>
                                    <p>{profileData?.operationalLocalities} Operational Localities</p>
                                </div>
                                    :
                                    <div>
                                        <p className='text-sm text-gray-700 mt-4 text-center'>{propertyNumber} New Projects</p>
                                    </div>
                                }
                            </div>
                            <div className='w-[200px]'>
                                <p className={styles.textMedium + ''}>User Role: {profileData?.userRole}</p>
                                <p className={styles.textMedium + 'mt-2'}>Business Title: {profileData?.businessTitle}</p>
                                <p className={styles.textMedium + 'mt-2'}>Country: {profileData?.countryName}</p>
                                <p className={styles.textMedium + 'mt-2'}>State: {profileData?.stateName}</p>
                                <p className={styles.textMedium + 'mt-2'}>City: {profileData?.cityName}</p>
                                <p className={styles.textMedium + 'mt-2'}>Business Address: {profileData?.businessAddress}</p>
                                <p className={styles.textMedium + 'mt-2'}>Mobile Verified: {profileData?.mobileVerified}</p>
                            </div>
                        </div>
                        <div>
                            <p ref={listElement} className={styles.title2}>{profileData?.name}'s Listing(s)</p>
                            <div className={navClassState}>
                                <div className={(navClassState !== '' ? 'transition-transform ease-in-out transform translate-x-[8%] pb-2 -mt-5 duration-[1500ms] ' : '') + 'flex flex-wrap items-center text-xs text-gray-700 mt-5'}>
                                    <div className='flex border-[1px] mt-3 justify-center items-center border-gray-300'>
                                        <span className='bg-gray-900 rounded-r-full text-white px-4 font-semibold py-[12.5px]'>
                                            <i class="fa-solid fa-filter text-white mr-2"></i>
                                            FILTER
                                        </span>
                                        <div className='relative group'>
                                            <button className={'px-1 font-semibold py-3'}>
                                                BUDGET
                                                <i class={styles.dropdownIcon}></i>
                                            </button>
                                            <BudgetMenu classname={' -ml-[91px] top-10'} />
                                        </div>
                                    </div>
                                    <div className='mt-3 relative group'>
                                        <button className={'p-2 border-[1px] border-gray-300 font-semibold py-3'}>
                                            BHK
                                            <i class={styles.dropdownIcon}></i>
                                        </button>
                                        <BHKmenu classname={'top-10'} />
                                    </div>
                                    <div className='mt-3 relative group'>
                                        <button className={'p-2 border-[1px] border-gray-300 font-semibold py-3'}>
                                            PROPERTY TYPE
                                            <i class={styles.dropdownIcon}></i>
                                        </button>
                                        {/* <PropertyMenu classname={''}/> */}
                                        <PropertyTypeMenu classname={' top-10'} />
                                    </div>
                                    <div className='mt-3 relative group'>
                                        <button className={'p-2 border-[1px] border-gray-300 font-semibold py-3'}>
                                            FURNISHING TYPE
                                            <i class={styles.dropdownIcon}></i>
                                        </button>
                                        <FurnishingTypeMenu classname={'top-10'} />
                                    </div>
                                    <div className='mt-3 relative group'>
                                        <button className={'p-2 border-[1px] border-gray-300 font-semibold py-3'}>
                                            MORE
                                            <i class={styles.dropdownIcon}></i>
                                        </button>
                                        <MoreMenu classname={'top-10'} />
                                    </div>
                                    <div className='mt-3'>
                                        <button
                                            className={'p-2 border-[1px] border-gray-300 font-semibold py-[12.7px]'}
                                            onClick={() => {
                                                localStorage.setItem('propertyStatus', 'new project');
                                                dispatch(setPropertyListState({
                                                    ...propertyListState,
                                                    BHKtype: '', propertyTypes: '',
                                                    priceRange: ['', ''],
                                                    moreStatus: { furnishingTypes: '', bathrooms: '', minArea: '', maxArea: '', newResale: '', constructionStatus: '', facing: '', amenities: '', listedBy: '', floor: '' },
                                                    sortBy: 'featured',
                                                    clearAll: true
                                                }));
                                            }}
                                        >
                                            RESET
                                        </button>
                                    </div>
                                    <div className='mt-3 relative group'>
                                        <button className={'p-2 border-[1px] border-gray-300 font-semibold py-3'}>
                                            SHORT BY FEATURED
                                            <i class={styles.dropdownIcon}></i>
                                        </button>
                                        <ShortByMenu classname={'text-gray-500 top-10'} />
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className='pr-2'>
                            <div className='mt-2 p-2 pl-0 border-b-[1px] border-b-gray-300'>
                                <span className='p-[10px] border-b-[1px] border-b-gray-500'>
                                    All Property {`( ${propertyListData.totalProperty} )`}
                                </span>
                            </div>
                            {propertyListData?.propertyList?.map((item, index) => {
                                return (
                                    <PropertyListCard func={onClickContactBtn} Data={item} />
                                )
                            })}
                            {(!loading && propertyListData?.propertyList?.length == 0) && <div className={styles.noDataFound}>
                                No Data Available, Please try again.
                            </div>}
                        </div>

                        {propertyListData?.propertyList?.length != 0 && <div>
                            <Pagenation lastPage={propertyListData.lastPage} changeCurrPage={(pageNum) => setCurrPage(pageNum)} />
                        </div>}

                    </div>

                    <div className='w-[95%]  lg:w-[37%] pb-10'>
                        <div className='w-[95%] lg:w-[80%] lg:mx-[5%] bg-white'>
                            <ProfileRightSection title={'Featured Property'} data={featuredProperties} />
                        </div>
                    </div>
                </div>
                <div className=''>
                    {contactModalStatus.show && <Contact Data={contactModalStatus.data} func={onCloseContact} />}
                </div>
                {profileData?.userRole == 'Builder' && <TopCItiesFilter />}
                <Footer />
            </div>
        </div>
    );
}

export default Profile;
