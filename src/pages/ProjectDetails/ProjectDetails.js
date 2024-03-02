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
import { NavLink, useLocation } from 'react-router-dom';
import FAQs from '../../components/FAQs';
import Contact from '../../components/Contact';
// import ImageGallery from "react-image-gallery";
// import "react-image-gallery/styles/css/image-gallery.css";

// import LightGallery from 'lightgallery/react';

// // import styles
// import 'lightgallery/css/lightgallery.css';
// import 'lightgallery/css/lg-zoom.css';
// import 'lightgallery/css/lg-thumbnail.css';

// import lgThumbnail from 'lightgallery/plugins/thumbnail';
// import lgZoom from 'lightgallery/plugins/zoom';

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import Download from "yet-another-react-lightbox/plugins/download";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import useApi from '../../ApiConf';
import PropertySlider from '../../components/PropertySlider';

// const images = [
//   {
//     original: "https://picsum.photos/id/1018/1000/600/",
//     thumbnail: "https://picsum.photos/id/1018/250/150/",
//   },
//   {
//     original: "https://picsum.photos/id/1015/1000/600/",
//     thumbnail: "https://picsum.photos/id/1015/250/150/",
//   },
//   {
//     original: "https://picsum.photos/id/1019/1000/600/",
//     thumbnail: "https://picsum.photos/id/1019/250/150/",
//   },
// ];

const whatsNearbyData = [
    // { item: 'Hospital: 2', icon: 'fa-solid fa-house-chimney-medical' },
    { item: 'Hospital: 2', icon: 'fas fa-hospital' },
    // { item: 'ATM: 1', icon: 'fa-solid fa-credit-card' },
    { item: 'ATM: 1', icon: 'fas fa-credit-card' },
    // { item: 'School: 2', icon: 'fa-solid fa-school' },
    { item: 'School: 2', icon: 'fas fa-school' },
    { item: 'Bank: 2', icon: 'fa-sharp fa-solid fa-building-columns' },
    { item: 'Restaurant: 1', icon: 'fa-solid fa-utensils' },
    { item: 'Spa Beauty Salon: 2', icon: 'fa-solid fa-spa' },
];

const PropertyBarNames = [
    'Details', 'Description', 'About Builder', 'Gallery', 'Nearby', 'FAQ'
];
// const htmlString = "<i class=\"fas fa-life-ring\"></i> Lift";
const Amenities = [
    // { name: 'Lift', icon: 'fa-solid fa-elevator' },
    { name: 'Lift', icon: 'fas fa-life-ring' },
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


const ProjectDetails = () => {
    const [propDetailsTypeInd, setPropDetailsTypeInd] = useState(0);
    const [navClassState, setNavClassState] = useState('');
    const [contactModalStatus, setcontactModalStatus] = useState({ show: false, data: {} });
    const [open, setOpen] = useState(false);
    const [currSlide, setCurrSlide] = useState(1);
    const observerElement = useRef();
    const routePath = useLocation();
    const { fetchData } = useApi();
    const [AllData, setAllData] = useState({ breadcrumb: [], gallery: [], data: null, featuredProperty: [], recentlyAddedProperty: [], recentBlogs: null, similarListing: [] });
    const [galleryImages, setGalleryImges] = useState({ images: [], tabName: null });

    useEffect(() => {
        ovserveIntersection();
        getProjectDetails();
    }, []);

    const getProjectDetails = async () => {
        let data;
        try {
            data = await fetchData(`${routePath.pathname}`, 'GET');
        } catch (err) {
            console.log(err);
        }
        if (data) {
            setAllData({
                breadcrumb: data?.breadcrumb,
                gallery: data.data?.galleryTab,
                data: data.data,
                featuredProperty: data.featuredProperty,
                recentlyAddedProperty: data.recentlyAddedProperty,
                recentBlogs: data.recentBlogs,
                similarListing: data.similarListing
            });
            data.data.galleryTab.images ? setGalleryImges({ images: data.data.galleryTab.images, tabName: null }) : setGalleryImges({ images: data.data.galleryTab.PropertyImages, tabName: 'PropertyImages' });
        }
    }

    const ovserveIntersection = () => {
        let observer = new IntersectionObserver((entries) => {
            if (!entries[0].isIntersecting) {
                setNavClassState('fixed top-0 left-0 w-screen  shadow-md z-[1500] pr-[10%] bg-white');
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

    const onClickContactBtn = () => {
        setcontactModalStatus({
            show: true, data: {
                owner: AllData.data?.userDetails?.name,
                type: AllData.data?.btnParams[2],
                icon: AllData.data?.userDetails?.image
            }
        });
    }
    const onCloseContact = () => {
        setcontactModalStatus({ show: false, data: null });
    }

    // const getScrollPosition = () => {
    //     document.addEventListener("DOMContentLoaded", ()=> {
    //         const handleScroll = ()=>{
    //             var scrollPosition = window.scrollY;
    //             console.log("Scroll Position:", scrollPosition);
    //         }
    //         window.addEventListener("scroll", handleScroll);
    //     });
    // }

    return (
        <div>
            {navClassState === '' && <Header />}
            <div className='bg-gray-50 py-5'>
                {/* <div className='bg-white h-[100px]'>
                </div> */}
                <div className='mt-14 container mx-auto'>
                    <div className='text-sm px-2 text-gray-500'> <NavLink to={'/'}>Home</NavLink>{' > '}<span>{AllData?.breadcrumb[1]?.title}</span>{' > '}<span>{AllData.breadcrumb[2]?.title}</span>
                        {AllData?.breadcrumb[3]?.title && ' > '}<span className='text-base'>{AllData?.breadcrumb[3]?.title}</span>
                    </div>
                    <div className='bg-white py-5 px-[2%] mt-1 shadow w-full md:flex md:gap-5'>
                        <div className=' w-full md:w-[65%]'>
                            <div className='relative'>
                                <img alt=''
                                    // src='https://www.truehomes24.com/assets/properties/banner-01/6fbc57095a08783a071945a3507844fa.webp'
                                    src={AllData.data?.banner}
                                    className='h-[300px] sm:h-[350px] lg:h-[400px] w-full rounded-xl' />
                                <div ref={observerElement} className='absolute bottom-16 pl-5 py-2 w-[80%] bg-black bg-opacity-10'>
                                    <p className='text-white text-xl sm:text-3xl'>{AllData.data?.bannerTitle}</p>
                                </div>
                            </div>
                            <div className='xs:flex my-5'>
                                {AllData.data?.bannerFooter && AllData.data?.bannerFooter.map((item, index) => {
                                    return (
                                        <div className={'mt-1 text-center px-2 xs:w-[32%] ' + (index == 1 ? 'border-y-[1px] xs:border-y-0 xs:border-x-2 xs:border-gray-300' : '')}>
                                            <p className='font-semibold'>{item.value}</p>
                                            <p className='text-sm'>{item.label}</p>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                        <div className='p-2 relative px-2 w-full md:w-[35%]'>
                            <span className={styles.title2 + 'mr-2'}>{AllData.data?.propTitle}</span>
                            <span className=''><button className='cursor-text mt-1 px-2 py-[2px] bg-orange-600 text-xs font-medium opacity-90 text-white mr-2'>{AllData.data?.listedFor?.toUpperCase()}</button></span>
                            <span className=''><button className='cursor-text mt-1 px-2 py-[2px] bg-cyan-600 text-xs font-medium text-white mr-2'>{AllData.data?.subTypeName?.toUpperCase()}</button></span>
                            <span className=''><button className='cursor-text mt-1 px-2 py-[2px] bg-cyan-600 text-xs font-medium text-white'>PROPERTY ID: {AllData.data?.propId}</button></span>
                            <div className='mt-1'>
                                <div className='flex mt-5'>
                                    <span className=''>
                                        <LocationIcon classname={'h-5 w-4 mt-[0.5px]'} />
                                    </span>
                                    <span className='text-base text-gray-800 ml-1'>
                                        {/* <p className={styles.textMedium + 'text-gray-500 font-medium inline-block'}>Society: </p> */}
                                        {' '}{AllData.data?.location}
                                    </span>
                                </div>
                                <div className='flex gap-1 mt-2'>
                                    <img alt='' src={AllData.data?.userDetails?.image} className='h-8 w-8' />
                                    <p className='text-sm text-gray-500 mt-2'>{AllData.data?.userDetails?.name} {`(${AllData.data?.btnParams[2]})`} </p>
                                </div>
                                <div className=' w-full'>
                                    <button onClick={onClickContactBtn} className={styles.btnFull + 'bg-green-600 hover:bg-green-700 mt-5'}>ASK FOR PRICE</button>
                                    <button className={styles.btnFull + 'bg-green-600 hover:bg-green-700 mt-3'}>Request Contact</button>
                                    <div className='mt-2 text-sm'>
                                        <span>RERA ID: </span><span className='text-cyan-600'>PR/GJ/AHMEDABAD/AHMEDABAD CITY/AUDA/MAA12019/280623</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className=''>
                        {contactModalStatus.show && <Contact Data={contactModalStatus.data} func={onCloseContact} />}
                    </div>

                    <div className='lg:flex justify-between mt-10'>
                        <div className='w-full lg:w-[65%]'>
                            <div className='bg-white shadow-md px-[2%] py-5 w-full'>
                                <div className={navClassState}>
                                    <div className={(navClassState !== '' ? 'transition-transform ease-in-out transform translate-x-[8%] py-2 duration-[1500ms] border-b-0 ' : ' border-b-[1px]') + ' flex flex-wrap gap-2 border-b-gray-300  px-[2%] -mx-[2%]'}>
                                        {PropertyBarNames.map((item, index) => {
                                            return (
                                                <a key={index} href={`#${index}`}
                                                    onClick={() => setPropDetailsTypeInd(index)}
                                                    className={(propDetailsTypeInd === index ? 'border-b-[1px] animated-border border-black ' : '') + ' px-1 py-2'}>
                                                    {item}
                                                </a>
                                            )
                                        })}
                                    </div>
                                </div>

                                <div id='0' className='scroll-mt-20'>
                                    <p className={styles.title4 + 'mt-8'}>{AllData.data?.scoietyName ? `${AllData.data?.scoietyName} Info` : 'Property Details'}</p>
                                    <div className='flex justify-between flex-wrap'>
                                        <div className='w-[50%] sm:w-[30%] mt-2'>
                                            {AllData.data?.detailsTab?.length && AllData.data?.detailsTab?.map((item, index) => {
                                                return (
                                                    <>
                                                        {index % 3 == 0 && item.label != 'Project Link' && <div key={index} className='mt-1' >
                                                            <span className=''>{item.label}: </span>
                                                            {/* <span className='text-gray-500 '>{item.value}</span> */}
                                                            <span className='text-gray-500 prose ' dangerouslySetInnerHTML={{ __html: item.value }} />
                                                        </div>}
                                                    </>
                                                )
                                            })}
                                        </div>

                                        <div className='w-[50%] sm:w-[30%] mt-2'>
                                            {AllData.data?.detailsTab?.length && AllData.data?.detailsTab?.map((item, index) => {
                                                return (
                                                    <>
                                                        {(index + 1) % 3 == 0 && index < 6 && <div key={index} className='mt-1'>
                                                            <span className=''>{item.label}: </span>
                                                            {/* <span className='text-gray-500 '>{item.value}</span> */}
                                                            <span className='text-gray-500 prose ' dangerouslySetInnerHTML={{ __html: item.value }} />
                                                        </div>}
                                                    </>
                                                )
                                            })}
                                        </div>
                                        <div className='w-[50%] sm:w-[30%] mt-2'>
                                            {AllData.data?.detailsTab?.length && AllData.data?.detailsTab?.map((item, index) => {
                                                return (
                                                    <>
                                                        {(index + 2) % 3 == 0 && <div key={index} className='mt-1'>
                                                            <span className=''>{item.label}: </span>
                                                            {/* <span className='text-gray-500 '>{item.value}</span> */}
                                                            <span className='text-gray-500 prose ' dangerouslySetInnerHTML={{ __html: item.value }} />
                                                        </div>}
                                                    </>
                                                )
                                            })}
                                        </div>
                                    </div>
                                </div>
                                <div className='mt-5 pb-5'>
                                    <p className={styles.title4 + 'ml-1'}>Amenities</p>
                                    <div className='flex flex-wrap justify-between mt-4'>
                                        {/* AllData.data?.detailsTab?.amenitiesItems? */}
                                        {Amenities.map((item, index) => {
                                            return (
                                                // <div className='prose flex w-[50%] min-w-[180px] sm:w-[30%]' dangerouslySetInnerHTML={{__html:item}}/>
                                                <div key={index} className='flex w-[50%] min-w-[180px] sm:w-[30%]'>
                                                    <button className='w-8 h-8 p-1 flex justify-center -mt-1'> {item.icon === '' ? <MenuIcon classname={'h-4 w-4 mt-1'} />
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
                                <p className={styles.title4}>{AllData.data?.scoietyName ? `About ${AllData.data?.scoietyName}` : 'Property Brief'}</p>
                                <div className='mt-1 prose min-w-full' dangerouslySetInnerHTML={{ __html: AllData.data?.descriptionTab?.description }} />
                                {/* <p className='mt-2 text-[0.9rem] text-gray-700 whitespace-pre-line'>{AllData.data?.descriptionTab?.description}</p> */}
                                <div className='mt-5'>
                                    <p className={styles.title4}>Map Location</p>
                                    <div className='flex flex-wrap gap-2 mt-2 items-start w-[80%]'>
                                        {AllData.data?.descriptionTab?.address?.map((item, index) => {
                                            return (
                                                <span key={index} className='w-[250px]'>{item.label} : <span className='text-gray-500 text-[0.9rem] font-semibold'>{item.value}</span></span>
                                            )
                                        })}
                                    </div>
                                </div>
                            </div>

                            {AllData.data?.descriptionTab?.aboutBuilder && <div id='2' className='bg-white shadow-md px-[2%] py-5 mt-10 scroll-mt-20'>
                                <p className={styles.title4}>About {AllData.data?.userDetails?.name}</p>
                                {/* <p className='mt-2 text-[0.9rem] text-gray-700'>{aboutBuilder}</p> */}
                                <div className='mt-2 prose prose-sm sm:prose-base min-w-[100%]' dangerouslySetInnerHTML={{ __html: AllData.data?.descriptionTab?.aboutBuilder }} />
                            </div>}
                            {AllData.data?.unitConfigurationTab?.length > 0 && <div className='bg-white shadow-md px-[2%] py-5 mt-10'>
                                <p className={styles.title4}>{AllData.data?.scoietyName} Configuration</p>
                                <div className='mt-5 flex justify-between gap-2 bg-gray-800 text-white text-sm font-semibold p-2'>
                                    <div className='w-full text-center'>Unit Types</div>
                                    <div className='w-full text-center'>Built-Up Area</div>
                                    <div className='w-full text-center'>Price</div>
                                    <div className='w-full text-center'>Floor Plans</div>
                                    <div className='w-full text-center'>Live-in Tour</div>
                                </div>
                                {AllData.data?.unitConfigurationTab.map((item, index) => {
                                    return (
                                        <div className='flex justify-between gap-2 text-sm text-gray-600 p-2'>
                                            <div className='w-full'>
                                                <p>{item.unit}</p>
                                                <p className='text-gray-500'>Availabity: {item.unitAvailability}</p>
                                            </div>
                                            <div className='w-full'>
                                                <p className='text-center'>{item.unitBuiltUpArea}</p>
                                            </div>
                                            <div className='w-full'>
                                                <div className='min-w-[100%] text-center' dangerouslySetInnerHTML={{ __html: item.unitPrice }} />
                                                {/* <p className='text-center'>{item.unitBuiltUpArea}</p> */}
                                            </div>
                                            <div className='w-full'>
                                                <p className='text-center'>{item.catpetArea}</p>
                                            </div>
                                            <div className='w-full'>
                                                <p className='text-center'>{'NA'}</p>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>}

                            <div id='3' className={(AllData.data?.galleryTab?.images ? 'bg-white' : 'bg-gray-800 text-white') + ' mt-10  shadow-md px-[2%] py-5 w-full scroll-mt-20'}>
                                {AllData.data?.galleryTab?.images ? <p className={styles.title3 + 'mb-5'}>Gallery</p>
                                    :
                                    <div className='flex flex-wrap gap-2 font-semibold border-b-[1px] border-b-white mb-5'>
                                        {AllData.data?.galleryTab?.PropertyImages && <button
                                            onClick={() => setGalleryImges({ images: AllData.data?.galleryTab?.PropertyImages, tabName: 'PropertyImages' })}
                                            className={(galleryImages.tabName == 'PropertyImages' ? 'border-b-orange-600 border-b-2 -mb-[1px]' : '') + ' p-2'}>
                                            Gallery
                                        </button>}
                                        {AllData.data?.galleryTab?.MasterPlanImages && <button
                                            onClick={() => setGalleryImges({ images: AllData.data?.galleryTab?.MasterPlanImages, tabName: 'MasterPlanImages' })}
                                            className={(galleryImages.tabName == 'MasterPlanImages' ? 'border-b-orange-600 border-b-2 -mb-[1px]' : '') + ' p-2'}>
                                            Master Plan
                                        </button>}
                                        {AllData.data?.galleryTab?.FloorPlanImages && <button
                                            onClick={() => setGalleryImges({ images: AllData.data?.galleryTab?.FloorPlanImages, tabName: 'FloorPlanImages' })}
                                            className={(galleryImages.tabName == 'FloorPlanImages' ? 'border-b-orange-600 border-b-2 -mb-[1px]' : '') + ' p-2'}>
                                            Floor Plan
                                        </button>}
                                        {AllData.data?.galleryTab?.RouteMapImages && <button
                                            onClick={() => setGalleryImges({ images: AllData.data?.galleryTab?.RouteMapImages, tabName: 'RouteMapImages' })}
                                            className={(galleryImages.tabName == 'RouteMapImages' ? 'border-b-orange-600 border-b-2 -mb-[1px]' : '') + ' p-2'}>
                                            Route Map
                                        </button>}
                                    </div>
                                }
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
                                    afterChange={(Ind) => {
                                        setCurrSlide(Ind - 1)
                                    }}
                                >
                                    {galleryImages.images?.map((item, index) => {
                                        return (
                                            <div onClick={() => setOpen(true)} key={index} className='p-2 hover:cursor-pointer'>
                                                <img alt='' src={item} className='h-[450px] w-full rounded-xl' />
                                            </div>
                                        )
                                    })}
                                </Carousel>
                                <div className='flex justify-end mr-2'>
                                    <p className='text-gray-800 font-semibold'>{currSlide}/{galleryImages.images?.length}</p>
                                </div>
                                {/* <ImageGallery
                                    items={AllData.gallery?.map((item, index) => {
                                        return {
                                            original: item.image,
                                            thumbnail:item.image,
                                            thumbnailHeight:'80'
                                        }
                                    })}
                                    autoPlay
                                    showBullets
                                /> */}

                                <Lightbox
                                    open={open}
                                    plugins={[Thumbnails, Download, Fullscreen, Zoom]}
                                    close={() => setOpen(false)}
                                    slides={galleryImages.images?.map((item, index) => {
                                        return { src: item }
                                    })}
                                // slides={[
                                //     {
                                //         src: rightSectionData[0].image,
                                //         width: 3840,
                                //         height: 2560,
                                //         srcSet: rightSectionData.map((item, index) => {
                                //             return { src: item.image }
                                //         })
                                //     }
                                // ]}

                                />
                                {/* <LightGallery
                                 speed = {500}
                                 pligins={[lgThumbnail]}
                                >
                                     {rightSectionData.map((item, index) => {
                                        return (
                                            <a href={item.image} >
                                                <img alt='' src={item.image} />
                                            </a>
                                        )
                                    })}

                                </LightGallery> */}

                            </div>
                            <div id='4' className='mt-10 bg-white shadow-md px-5 py-5 mb-10 scroll-mt-20'>
                                <p className={styles.title3}>What's Nearby?</p>
                                <div className='mt-5'>
                                    {AllData.data?.nearByTab?.nearby?.map((item, index) => {
                                        return (
                                            <div key={index} className={styles.title5 + 'mt-3'}>
                                                <button className='mr-4 h-7 w-7 opacity-85 bg-orange-500 rounded-md' ><i class={item.icon + ' text-white text-sm'}></i></button>
                                                <span>{item.name} - {item.quantity}</span>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                            {(AllData.data?.faqtab?.length || AllData.data?.faqtab?.faqs.length) && <div id='5' className='mt-10 bg-white shadow-md px-5 py-5 mb-10 scroll-mt-20'>
                                <FAQs Data={AllData.data?.faqtab?.length ? AllData.data?.faqtab : AllData.data?.faqtab?.faqs} />
                            </div>}
                        </div>

                        <div className='w-full lg:w-[33%] xl:max-w-[400px]'>
                            <RecentViewCard title={'Featured Property'} Data={AllData.featuredProperty} />
                            <RightListCard title={'Recently Added Property'} data={AllData.recentlyAddedProperty} />
                            <RightListCard title={'Recent Blog'} data={AllData.recentBlogs} />
                        </div>
                    </div>
                    <div className='mt-[50px]'>
                        <PropertySlider type={'Similar Listings'} Data={AllData.similarListing} />
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
