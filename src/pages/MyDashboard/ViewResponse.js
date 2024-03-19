import React, { useState } from 'react';
import Header from '../../components/Header/Header';
import TopCItiesFilter from '../../components/TopCItiesFilter';
import Footer from '../../components/Footer';
import { styles } from '../../Styles/Styles';

const ViewResponse = () => {
    const [showDetails, setShowDetails] = useState(false);

    return (
        <div className=''>
            <Header />
            <div className='mt-20 container mx-auto px-2'>
                <div className='overflow-x-auto'>
                    <p className={styles.title2}>View Responses (1)</p>
                    <table className='table-auto min-w-full mt-8 text-center'>
                        <tr className='font-semibold'>
                            <td className="border px-4 py-2 w-[20%]">Name</td>
                            <td className="border px-4  py-2 w-[40%]">Property Detail</td>
                            <td className="border px-4 py-2 w-[20%]">Date/Time</td>
                            <td className="border px-4 py-2 w-[15%]">Action</td>
                        </tr>
                        <tr>
                            <td className="border px-4 py-4">Name</td>
                            <td className="border px-4 py-4">1.5 BHK Apartment For Sale In Jaymua</td>
                            <td className="border px-4 py-4">March 19, 2024 12:24 PM</td>
                            <td className="border px-4 py-4">
                                <button
                                    onClick={() => setShowDetails(true)}
                                    className={styles.btn + 'bg-black py-[6px] w-full text-white'}>View Detail</button>
                            </td>
                        </tr>
                    </table>
                </div>

                {showDetails && <div className='fixed top-0 z-[2000] flex left-0 w-screen h-screen items-center justify-center bg-black bg-opacity-60 '>
                    <div className='relative bg-gray-100 shadow-lg border-[1px] p-4 w-[90%] sm:w-[85%] max-w-[420px] '>
                        <div className='text-lg font-semibold'>Contact Details</div>
                        <button
                            onClick={() => setShowDetails(false)}
                            className='absolute top-2 right-2'>
                            {/* <CrossIcon /> */}
                            <i class="fa-solid fa-xmark text-lg"></i>
                        </button>
                        <div className='border-[1px] mt-3 bg-white shadow rounded border-gray-400 p-2'>
                            <div><span className='font-semibold'>Username: </span><span> name</span></div>
                            <div><span className='font-semibold'>Email: </span><span> example@gmail.com</span><span className='text-white bg-red-500 text-xs  px-2 py-[2px] ml-5'>NOT VERIFIED</span></div>
                            <div><span className='font-semibold'>Contact No:: </span><span> +91-0123456789</span></div>
                            <div><span className='font-semibold'>Message: </span><span>Hello, I am interested</span></div>
                        </div>
                        <div className='flex justify-center'>
                            <button onClick={() => setShowDetails(false)}
                                className='bg-red-600 px-2 py-1 text-white rounded mt-5'>Close</button>
                        </div>
                    </div>
                </div>}

            </div>
            <div className='mt-10'>
                <TopCItiesFilter />
                <Footer />
            </div>

        </div>
    );
}

export default ViewResponse;
