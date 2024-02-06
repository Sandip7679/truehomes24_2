import React, { useRef, useState } from 'react';
import Header from '../../components/Header/Header';
import { styles } from '../../Styles/Styles';
import TopCItiesFilter from '../../components/TopCItiesFilter';
import Footer from '../../components/Footer';
import { NavLink } from 'react-router-dom';

const ManageProperty = () => {
    const [showPopup, setShowPopup] = useState(false);
    const popupContainer = useRef(null);

    const closePopup = (event) => {
        if(event.target === popupContainer.current){
            setShowPopup(false);
        }
    }
    return (
        <div>
            <Header />
            <div className='mt-[80px] px-[10%] mb-10'>
                <div className={styles.postpropTitle + 'text-start pl-5'}>Hey sandip, Welcome to your dashboard</div>
                <div className='mt-10 pb-5 border-b-2 border-gray-300'>
                    <p className={styles.title2}>My Property Listings (1)</p>
                    <div className='mt-8 flex flex-wrap gap-5'>
                        <div className='relative p-1 rounded border-[1px] border-gray-300'>
                            <img
                                alt=''
                                src='https://www.truehomes24.com/assets/properties/banner-01/6fbc57095a08783a071945a3507844fa.webp'
                                className='h-[100px] w-[200px] lg:h-[160px] lg:w-[120px]'
                            />
                            <span className='absolute top-1 right-1 px-1 text-sm text-white opacity-90 bg-orange-600'>For Sale</span>
                        </div>
                        <div>
                            <div className='flex flex-wrap gap-10'>
                                <span className='sm:text-lg'>2.5 BHK Apartment for Sale in A p r farm, fs</span>
                                <span className='flex flex-wrap gap-2'>
                                    <b className='text-gray-600'>Property ID: 66153</b>
                                    <b>|</b>
                                    <b className='text-gray-600'>Post valid till: N/A</b>
                                </span>

                            </div>
                            <div className='flex flex-wrap gap-5 text-gray-600'>
                                <div className='flex gap-2 mt-2 w-[50%]'>
                                    <i class="fa-solid fa-location-dot mt-1 "></i>
                                    <p className='text-gray-600'> A p r farm 1849 , Al Madinah al Munawwarah, Saudi Arabia</p>
                                </div>
                                <div className='flex flex-wrap gap-5'>
                                    <b className='text-sm mt-2'>Payment Not Received</b>
                                    <span className='mt-1'><span className='text-gray-500 text-sm'>Starts From /</span><b className={styles.textMedium}> 3,534</b></span>
                                </div>
                            </div>
                            <div className='mt-2 flex flex-wrap gap-2'>
                                <span className='px-2 bg-sky-600 text-white rounded-md'>Apartment</span>
                                <span className='px-2 bg-orange-300 rounded'>
                                    <i class="fa-solid fa-calendar text-sm"></i>
                                    <span className=' ml-1'>January 30, 2024 06:11 PM</span>
                                </span>
                            </div>
                            <div className='mt-5 flex flex-wrap gap-5'>
                                <div className='flex gap-2'>
                                    <button className={styles.formBtn + styles.btnBlackHover}>Edit Listing</button>
                                    <button className='border-black border-[1px] px-2 py-1 hover:text-white hover:bg-gray-600 duration-500 rounded'>Deactivate</button>
                                </div>
                                <div className='flex flex-wrap gap-5'>
                                    <span className='underline cursor-pointer'>
                                        <i class="fa-regular fa-eye mr-1"></i>
                                        Preview Listing
                                    </span>
                                    <span
                                        onClick={() => setShowPopup(true)}
                                        className='underline cursor-pointer'>
                                        <i class="fa-solid fa-rotate-right mr-1"></i>
                                        Renew Listing
                                    </span>
                                    <span className=''>
                                        Listing Status: Pending
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='mt-8 grid gap-2 sm:gap-5 grid-cols-1 md:grid-cols-2 xl:grid-cols-3'>
                        <div className='relative border-[1px] border-black rounded-md p-2'>
                            <span className='absolute top-0 left-0 rounded-sm text-xs py-[2px] px-2 bg-black text-white opacity-80'>NEW</span>
                            <div className='flex gap-2 mt-2'>
                                <img className='h-10 w-10 mt-2' src='https://www.truehomes24.com/assets/front_end/images/user-visibility.svg' />
                                <div className='px-2'>
                                    <p className={styles.title4}>Your Profile Visibility</p>
                                    <div className='flex'><p>Visible to</p> <p className='text-sm font-semibold mt-1 ml-1'> 28% Buyers</p></div>
                                    <div className='mt-2 h-[5px] w-full bg-orange-200 rounded-md'>
                                        <div className='h-[5px] w-[28%] rounded-md bg-orange-700'></div>
                                    </div>
                                </div>
                            </div>
                            <p className='mt-8 font-semibold text-sm'>Increase your Visibility. Take Your next steps now.</p>
                            <div className='flex flex-wrap gap-2 mt-5'>
                                <button className='bg-gray-100 py-1 px-2 flex gap-2 rounded-md hover:opacity-70 text-sm'>
                                    <p>Get Verified</p>
                                    <i class="fa-solid fa-chevron-right mt-1"></i>
                                </button>
                                <NavLink to={'/membership'}>
                                    <button className='bg-gray-100 py-1 px-2 flex gap-2 rounded-md hover:opacity-70 text-sm'>
                                        <p>Upgrade to Paid Package</p>
                                        <i class="fa-solid fa-chevron-right mt-1"></i>
                                    </button>
                                </NavLink>

                            </div>
                        </div>
                        <div className='border-[1px] border-black rounded-md p-2'>
                            <div className='flex gap-2'>
                                <img className='h-10 w-10 mt-2' src="https://www.truehomes24.com/assets/front_end/images/buyre.svg" alt="sss" />
                                <p className={styles.title4}>Buyers Looking for a Property like Yours</p>
                            </div>
                            <p className='mt-8 text-sm font-semibold'>Currently we are unable to find a matching buyer for your property. But stay tuned, as more & more buyers are joining us daily.</p>

                        </div>
                    </div>
                </div>
            </div>
           { showPopup && <div
                onClick={closePopup}
                ref={popupContainer}
                className='fixed top-0 z-[5000] flex justify-center items-center h-screen w-screen bg-opacity-40 bg-black'>
                <div className='bg-white rounded-md p-4 w-[90%] min-w-[320px] sm:w-[60%] lg:w-[40%]'>
                    <div className='flex justify-between border-b-[1px] border-gray-200 pb-2'>
                        <p className={styles.title4}>Refreshing Property For Sale</p>
                        <button onClick={()=>setShowPopup(false)}>
                            <i class="fa-solid fa-xmark text-lg text-gray-700"></i>
                        </button>
                    </div>
                    <div className='mt-2 text-sm sm:text-base '>
                        <div className='flex gap-2 mt-1'><p className='opacity-90 font-semibold'>ID: </p><p>66154</p></div>
                        <div className='flex gap-2 mt-2'><p className='opacity-90 font-semibold'>Posted: </p><p> February 1, 2024 04:49 PM</p></div>
                        <div className='text-red-700 flex gap-2 mt-2'><p className='font-semibold'>Expiry:</p><p>N/A</p></div>
                        <p className='text-gray-500 mt-5'>N/A, Guwahati, Assam, India</p>
                        <div className='mt-5'>
                            <p className='text-sm font-semibold'>Select Listing Package</p>
                            <select className={styles.input + 'w-full mt-2'}>
                                <option>Select</option>
                                <option>Gold - Rs. 5 / Day (5 Images)</option>
                                <option>Gold - Rs. 5 / Day (5 Images)</option>
                                <option>Platinum - Rs. 8 / Day (10 Images)</option>
                            </select>
                        </div>
                    </div>
                    <div className='flex items-center justify-center mt-5'>
                        <NavLink to={'/membership'} className={styles.formBtn + styles.btnBlackHover}>Continue to Refresh</NavLink>
                    </div>
                </div>
            </div>}
            <TopCItiesFilter />
            <Footer />
        </div>
    );
}

export default ManageProperty;
