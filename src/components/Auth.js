import React, { useState } from 'react';
import { styles } from '../Styles/Styles';
import { CrossIcon } from './svgIcons';
import loginImage from '../assets/images/login-1.png'

const Auth = ({ onClose,login }) => {
    const [isLogin, setIsLogin] = useState(true);
    return (
        <div className='fixed top-0 z-[2000] flex -ml-2 w-full h-[100%] items-center justify-center bg-black bg-opacity-60'>
            <div className='relative overflow-auto min-h-[560px] max-h-screen w-[90%] sm:w-1/2 px-[3%] py-5 bg-white'>
                <button
                    onClick={() => onClose()}
                    className='absolute top-2 right-2'>
                    <CrossIcon />
                </button>
                <div className='flex gap-5'>
                    <button
                        onClick={() => setIsLogin(true)}
                        className={(isLogin ? 'text-orange-600 border-b-[1px] border-orange-600' : '') + ' font-semibold text-lg'}>LOGIN</button>
                    <button
                        onClick={() => setIsLogin(false)}
                        className={(!isLogin ? 'text-orange-600 border-b-[1px] border-orange-600' : '') + ' font-semibold text-lg'}>REGISTER</button>
                </div>
                <div className='mt-8 md:flex md:flex-wrap'>
                    {isLogin ? <div className='transition-transform ease-in-out transform -translate-y-[200px] mt-[200px] py-2 duration-[1500ms] w-full md:w-[55%]'>
                        <input className={styles.input + 'rounded py-2'} placeholder='Enter your email address' />
                        <input className={styles.input + 'rounded py-2 mt-5'} placeholder='Enter your password' />
                        <div className='text-end mt-2 cursor-pointer'>Forgot Password?</div>
                        <label className='flex gap-2'>
                            <div className='mt-[2px]'>
                                <input type='checkbox' className='w-4 h-4' />
                            </div>
                            <span className='ml-3'>Remember me</span>
                        </label>
                        <button 
                        onClick={()=>{
                          onClose();
                          login();
                        }} 
                        className={styles.btn + 'w-full hover:bg-gray-700 bg-gray-800 text-white mt-10 py-2 border-none'}>Login</button>
                    </div>
                        :
                        <div className='w-full md:w-[55%] mb-10'>
                            <input className={styles.input + 'rounded py-2'} placeholder='Register As' />
                            <input className={styles.input + 'rounded py-2 mt-5'} placeholder='Your Good Name' />
                            <input className={styles.input + 'rounded py-2 mt-5'} placeholder='Your Email Address' />
                            <input className={styles.input + 'rounded py-2 mt-5'} placeholder='Your Password' />
                            <div className='flex gap-2 mt-5'>
                                <div className='w-[50%]'>
                                    <div className={styles.btn + 'rounded-sm py-2'}>
                                        +91 (India)
                                    </div>
                                </div>
                                <input className={styles.input + 'rounded py-2 w-[50%]'} placeholder='Your Contact Number' />
                            </div>
                            <label className='flex gap-2 mt-5'>
                                <div className='mt-[2px]'>
                                    <input type='checkbox' className='w-4 h-4' />
                                </div>
                                <span className='ml-3'>I've read and accept terms & conditions</span>
                            </label>
                            <button className={styles.btn + 'hover:bg-gray-700 w-full bg-gray-800 text-white mt-10 py-2'}>Sign Up</button>
                        </div>
                    }
                    <div className='items-center pl-[10%] w-full md:w-[45%]'>
                        <img alt='' className='w-[60%] md:w-[90%]' src={loginImage} />
                        <p className='text-gray-500 mt-2'>
                            {isLogin ?
                                'Welcome Back! Please login to your account now.'
                                : 'Create an account to find the best Property for you.'
                            }
                        </p>
                    </div>
                </div>
                {/* {!isLogin && <div>

                </div>} */}

            </div>
        </div>
    );
}

export default Auth;
