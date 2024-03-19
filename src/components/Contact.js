import React, { useEffect, useState } from 'react';
import { CrossIcon, MenuIcon, UserIcon } from './svgIcons';
import { styles } from '../Styles/Styles';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css'
// import userIcon from '../assets/images/user.svg'


const Contact = ({ Data, func }) => {
    const [value, setValue] = useState('');
    const [currFormState, setCurrFormState] = useState({ showContactForm: true, showGenerateOtp: false, showOtpVerify: false, showResponse: false });

    useEffect(() => {
        console.log('data contact....', Data);
    }, []);
    return (
        <div className='fixed top-0 z-[2000] flex left-0 w-screen h-screen items-center justify-center bg-black bg-opacity-60'>
            <div className='relative bg-white shadow-lg border-[1px] p-4 w-[90%] sm:w-[85%] max-w-[360px]'>
                <button
                    onClick={() => func()}
                    className='absolute top-2 right-2'>
                    <CrossIcon />
                </button>
                <div className='flex gap-5'>
                    <img alt=''
                        src={Data.icon}
                        className='h-[50px] w-[50px] md:h-[70px] md:w-[70px]' />
                    <div className='text-gray-900 mt-2'>
                        <div className='flex gap-3'>
                            <UserIcon classname={'h-5 w-5 mt-[2px]'} />
                            {Data.owner}
                        </div>
                        <div className='flex gap-3'>
                            <div className='h-5 w-5 mt-[1px]'>
                                <MenuIcon />
                            </div>
                            {Data.type}
                        </div>
                    </div>
                </div>
                <div className='mt-5'>
                    {currFormState.showContactForm && <div>
                        <input placeholder='Enter your name' className={styles.input + ' py-1 border-gray-300 pl-4'} />
                        <input placeholder='Enter your Email' className={styles.input + ' py-1 border-gray-300 pl-4 mt-3'} />
                        <div className='flex gap-2 mt-4'>
                            {/* <div className='min-w-[105px] w-[30%]'>
                            <div className={styles.btn + 'rounded-none flex py-2 gap-[1px] border-gray-300'}>
                                <img alt='' src='https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/1280px-Flag_of_India.svg.png' className='w-4 h-3 mt-[4px] sm:mt-[6px]' />
                                +91 India
                            </div>
                        </div> */}
                            <PhoneInput
                                country={'in'}
                                containerStyle={{ width: '30%' }}
                                inputStyle={{ width: '100%', height: '42px', borderRadius: '0px' }}
                                // buttonStyle={{width:'50%'}}
                                // containerClass='w-full'
                                // inputClass='py-2'
                                placeholder='Phone*'
                                inputProps={{
                                    name: 'phone',
                                    required: true,
                                    autoFocus: true
                                }}
                                // buttonClass='w-[100px]'
                                value={value}
                                onClick={() => {
                                    if (value == '') {
                                        setValue('+91')
                                    }
                                }}
                            // onChange={val => setValue(val)}
                            />
                            <input placeholder='Contact Number' className={styles.input + 'w-[65%] mt-0 border-gray-300 pl-[15px]'} />
                        </div>
                        <textarea
                            placeholder='Description'
                            className='w-full h-20 mt-5 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-gray-500'>
                        </textarea>
                        <label className='flex gap-2 mt-3'>
                            <input type='checkbox' className='' />
                            <p className='text-gray-500 text-sm'>I agree to Truehomes24.com Terms of use</p>
                        </label>
                        <button
                            onClick={() => setCurrFormState(pre => ({ ...pre, showContactForm: false, showGenerateOtp: true }))}
                            className={styles.btn + 'bg-black py-[6px] w-full text-white mt-5'}>
                            Submit
                        </button>
                    </div>}
                    {(currFormState.showGenerateOtp || currFormState.showOtpVerify) && <p className={styles.title4}>Verify your mobile number:+91- 0123456789 </p>}
                    {currFormState.showGenerateOtp && <div>
                        <button
                            onClick={() => setCurrFormState(pre => ({ ...pre, showGenerateOtp: false, showOtpVerify: true }))}
                            className={styles.btn + 'bg-black py-[6px] w-full text-white mt-5'}>
                            Generate OTP
                        </button>
                    </div>}
                    {currFormState.showOtpVerify && <div className='text-center mt-5'>
                        <input placeholder='Enter OTP received on your mobile' className={styles.input + ' py-1 border-gray-300 pl-4'} />
                        <button
                            onClick={() => setCurrFormState(pre => ({ ...pre, showOtpVerify: false, showResponse: true }))}
                            className={styles.btn + 'bg-black py-[6px] w-full text-white mt-5'}>
                            Verify OTP
                        </button>
                        <p className='text-gray-500 mt-5'>You will receive OTP via sms within 1 minute.</p>
                        <p className='text-gray-500 mt-5'>Did not get verification code?</p>
                        <p className='text-gray-500 mt-5 underline cursor-pointer'>Resend OTP</p>
                    </div>}
                    {currFormState.showResponse && <div className='mt-5'>
                        <p className={styles.title3+' text-center pb-3'}> 3 BHK Apartment for Rent in Teynampet, Chennai</p>
                        <div className='border-t-[1px] border-b-gray-500 p-1 text-center'>
                            <p className={styles.title3}>Thank You...</p>
                        </div>
                        <div className={'flex justify-center mt-2 text-center border-[1px] border-gray-300 py-1'}>
                            Seller Contact: <p className='font-semibold text-sm ml-1 mt-1'> +91-0123456789</p>
                        </div>
                        <div className='mt-5 p-1 border-gray-300 border-[1px]'>
                            <div className='border-b-[1px] border-b-gray-300 pb-1 text-center'>
                                <p className={styles.title4}>Advertise your properties for less then</p><span className='text-orange-600 font-semibold'><i className='fa-solid fa-indian-rupee-sign text-sm'></i> 10/day</span>
                            </div>
                            <div className='mt-2'>
                                <div className='flex mt-2'>
                                    <div className=' flex-none'><i class="fa-solid fa-check bg-gray-100 text-gray-700 p-1 mt-1 rounded-full"></i></div>
                                    <p className='ml-2'>Get certified agents for 3 Months, at Rs. 10000</p>
                                </div>
                                <div className='flex mt-2'>
                                    <div className=' flex-none'><i class="fa-solid fa-check text-gray-700 bg-gray-100 p-1 mt-1 rounded-full"></i></div>
                                    <p className='ml-2'>Visibility above owner listing</p>
                                </div>
                                <div className='flex mt-2'>
                                    <div className=' flex-none'><i class="fa-solid fa-check text-gray-700 bg-gray-100 p-1 mt-1 rounded-full"></i></div>
                                    <p className='ml-2'>Unlimited responses</p>
                                </div>
                            </div>
                        </div>

                    </div>}
                </div>
            </div>
        </div>
    );
}

export default Contact;
