import React from 'react';
import { styles } from '../Styles/Styles';

const GetCallBack = () => {
    return (
        <div className='shadow-xl rounded-sm border-[1px] bg-white pb-8 px-4 w-[90%] max-w-[360px] md:w-[30%] py-1'>
            <div className='text-center py-2'>
                 <p className='text-gray-400'>We will take care of</p>
                 <p className={styles.title2+'text-orange-500'}>SEARCH</p>
            </div>
            <div className='mt-5'>
                <input placeholder='Enter your name' className={styles.input + 'py-[5px]  border-gray-300 pl-4'} />
                <input placeholder='Enter your Email' className={styles.input + 'py-[5px]  border-gray-300 pl-4 mt-3'} />
                <div className='flex justify-between mt-4'>
                    <div className='min-w-[105px] w-[30%]'>
                        <div className={styles.btn + 'rounded-none flex py-[5px] gap-[1px] border-gray-300'}>
                            <img alt='' src='https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/1280px-Flag_of_India.svg.png' className='w-4 h-3 mt-[4px] sm:mt-[6px]' />
                            +91 India
                        </div>
                    </div>
                    <input placeholder='Contact Number' className={styles.input + 'py-[5px] w-[65%] mt-0 border-gray-300 pl-[15px]'} />
                </div>
                <textarea placeholder='Description' className='w-full h-20 mt-5 px-3 py-2 border border-gray-300 focus:outline-none focus:border-gray-500'>
                </textarea>
                <label className='flex gap-2 mt-3'>
                    <input type='checkbox' className='' />
                    <p className='text-gray-500 text-sm'>I agree to Truehomes24.com Terms of use</p>
                </label>
                <button className={styles.btn + 'hover:bg-orange-700 bg-orange-600 py-[6px] opacity-90 w-full text-white mt-5'}>
                    GET CALL BACK
                </button>
            </div>
        </div>
    );
}

export default GetCallBack;
