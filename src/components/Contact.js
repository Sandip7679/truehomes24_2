import React from 'react';
import { CrossIcon, MenuIcon, UserIcon } from './svgIcons';
import { styles } from '../Styles/Styles';
import userIcon from '../assets/images/user.svg'


const Contact = ({Data,func}) => {
    return (
        <div className='fixed top-0 z-[2000] flex -ml-2 w-full h-[100%] items-center justify-center bg-black bg-opacity-60'>
            <div className='relative bg-white shadow-lg border-[1px] p-4 w-[90%] sm:w-[85%] max-w-[360px]'>
                <button
                    onClick={() => func()}
                    className='absolute top-2 right-2'>
                    <CrossIcon />
                </button>
                <div className='flex gap-5'>
                    <img alt='' src={userIcon} className='h-[50px] w-[50px] md:h-[70px] md:w-[70px]' />
                    <div className='text-gray-900 mt-2'>
                        <div className='flex gap-3'>
                            <UserIcon classname={'h-5 w-5 mt-[2px]'} />
                            {Data.owner}
                        </div>
                        <div className='flex gap-3'>
                            <div className='h-5 w-5 mt-1'>
                                <MenuIcon />
                            </div>
                            Individual
                        </div>
                    </div>
                </div>
                <div className='mt-5'>
                    <input placeholder='Enter your name' className={styles.input + ' py-1 border-gray-300 pl-4'} />
                    <input placeholder='Enter your Email' className={styles.input + ' py-1 border-gray-300 pl-4 mt-3'} />
                    <div className='flex justify-between mt-4'>
                        <div className='min-w-[105px] w-[30%]'>
                            <div className={styles.btn + 'rounded-none flex py-2 gap-[1px] border-gray-300'}>
                                <img alt='' src='https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/1280px-Flag_of_India.svg.png' className='w-4 h-3 mt-[4px] sm:mt-[6px]' />
                                +91 India
                            </div>
                        </div>
                        <input placeholder='Contact Number' className={styles.input + 'w-[65%] mt-0 border-gray-300 pl-[15px]'} />
                    </div>
                    <textarea placeholder='Description' className='w-full h-20 mt-5 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-gray-500'>
                    </textarea>
                    <label className='flex gap-2 mt-3'>
                        <input type='checkbox' className='' />
                        <p className='text-gray-500 text-sm'>I agree to Truehomes24.com Terms of use</p>
                    </label>
                    <button className={styles.btn + 'bg-black py-[6px] w-full text-white mt-5'}>
                        Submit
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Contact;
