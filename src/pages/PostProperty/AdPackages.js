import React, { useEffect } from 'react';
import Header from '../../components/Header/Header';
import { styles } from '../../Styles/Styles';
import TopCItiesFilter from '../../components/TopCItiesFilter';
import Footer from '../../components/Footer';

let days = [];
for (let i = 0; i <= 170; i++) {
    days[i] = 10 + i;
}

const AdPackages = () => {

    useEffect(() => {

    }, []);

    return (
        <div>
            <Header />
            <div className='mt-[80px] mx-[5%] xl:mx-[10%]'>
                <div className='p-1 border-b-[1px] border-b-gray-200'>
                    <p className={styles.title2}>Add Packages</p>
                    <span className='text-sm'><span>Home</span> / Ad Package</span>
                </div>
                <div className='mt-10 mb-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-6'>
                    {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((item, index) => {
                        return (
                            <div key={index} className='mt-2 border-2 border-red-200 rounded py-2 text-base sm:text-lg'>
                                <div className='mt-2 bg-orange-600 text-white text-lg font-bold py-4 mx-2 flex items-center justify-center'>
                                    GOLD
                                </div>
                                <div className='mt-5 text-center'>Ad cost/day - <span className='font-bold'>Rs. 5</span></div>
                                <div className='mt-5 flex flex-wrap gap-2 p-2 px-4 justify-center'>
                                    <p>No. of Days Ad Required - </p>
                                    <select className=' border-[1px] outline-none border-gray-500 w-[70%]'>
                                        {days.map((item, index) => {
                                            return (
                                                <option key={index}>{item}</option>
                                            )
                                        })}
                                    </select>
                                </div>
                                <div className='flex justify-center'>
                                    <button className='mt-5 bg-gray-600 opacity-90 px-4 py-1 border-[1px] text-white rounded-md cursor-pointer hover:bg-white hover:text-black hover:border-[1px] hover:border-black duration-500'>Pay Rs. 50</button>
                                </div>
                                <div className='p-4 mt-5 border-y-[1px] border-x-gray-300 flex items-center justify-center gap-2'>
                                    Visible to
                                    <span className='relative z-10 p-1 rounded-full border-2 border-green-500'>
                                        <span className='z-50 bg-green-200 rounded-full p-1 taext-lg font-bold h-10 w-10 flex justify-center items-center'>
                                            85%
                                        </span>
                                        <span className='absolute -z-10 top-0 bg-white h-4 w-4 rounded-full'></span>
                                    </span>
                                    buyer
                                </div>
                                <div className='px-2 pl-4 py-4'>
                                    <div className='flex mt-4'>
                                        <span className='bg-gray-100 rounded-full p-1 flex justify-center items-center'>
                                            <i class="fa-solid fa-check opacity-70"></i>
                                        </span>
                                        <span className='ml-5 tracking-wider'>No of Listing - <b>1</b></span>
                                    </div>
                                    <div className='flex mt-4'>
                                        <span className='bg-gray-100 rounded-full p-1 flex justify-center items-center'>
                                            <i class="fa-solid fa-check opacity-70"></i>
                                        </span>
                                        <span className='ml-5 tracking-wider'>Mobile number of all responser</span>
                                    </div>
                                    <div className='flex mt-4'>
                                        <span className='bg-gray-100 rounded-full p-1 flex justify-center items-center'>
                                            <i class="fa-solid fa-check opacity-70"></i>
                                        </span>
                                        <span className='ml-5 tracking-wider'><b>5</b> Photos of Property</span>
                                    </div>
                                    <div className='flex mt-4'>
                                        <span className='bg-gray-100 rounded-full p-1 flex justify-center items-center'>
                                            <i class="fa-solid fa-check opacity-70"></i>
                                        </span>
                                        <span className='ml-5 tracking-wider'><b>1</b> Video</span>
                                    </div>
                                </div>
                            </div>
                        )
                    })}

                </div>
            </div>
            <TopCItiesFilter/>
            <Footer/>

        </div>
    );
}

export default AdPackages;
