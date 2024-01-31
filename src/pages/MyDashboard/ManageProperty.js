import React from 'react';
import Header from '../../components/Header/Header';
import { styles } from '../../Styles/Styles';

const ManageProperty = () => {
    return (
        <div>
            <Header />
            <div className='mt-[80px] px-[10%]'>
                <div className={styles.postpropTitle + 'text-start pl-5'}>Hey sandip, Welcome to your dashboard</div>
                <div className='mt-10'>
                    <p className={styles.title2}>My Property Listings (1)</p>
                    <div className='mt-8 flex flex-wrap gap-5'>
                        <div className='relative p-1 rounded border-[1px] border-gray-300'>
                            <img
                                alt=''  
                                src='https://www.truehomes24.com/assets/properties/banner-01/6fbc57095a08783a071945a3507844fa.webp'
                                className='h-[160px] w-[120px]'
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
                            <div className='mt-5 flex gap-5'>
                                <div className='flex gap-2'>
                                    <button className={styles.formBtn + styles.btnBlackHover}>Edit Listing</button>
                                    <button className='border-black border-[1px] px-2 py-1 hover:text-white hover:bg-gray-600 duration-500 rounded'>Deactivate</button>
                                </div>
                                <div className='flex gap-5'>
                                    <span className='underline cursor-pointer'>
                                        <i class="fa-regular fa-eye mr-1"></i>
                                        Preview Listing
                                    </span>
                                    <span className='underline cursor-pointer'>
                                        <i class="fa-solid fa-rotate-right mr-1"></i>
                                        Preview Listing
                                    </span>
                                    <span className=''>
                                        Listing Status: Pending
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                   <div className='flex flex-wrap'>
                      
                   </div> 
                </div>
            </div>
        </div>
    );
}

export default ManageProperty;
