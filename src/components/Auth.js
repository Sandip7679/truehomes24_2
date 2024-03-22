import React, { useEffect, useState } from 'react';
import { styles } from '../Styles/Styles';
import { CrossIcon } from './svgIcons';
import loginImage from '../assets/images/login-1.png'
import { useDispatch } from 'react-redux';
import { setuser } from '../Redux/reducer/User';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { UseApi } from '../ApiConf';

const registeredAs = [
    { label: 'Register As', value: '' },
    { label: 'Individual', value: 'Individual' },
    { label: 'Builder', value: 'Builder' },
    { label: 'Agent', value: 'Agent' }
]

const Auth = ({ onClose }) => {
    const [isLogin, setIsLogin] = useState(true);
    const [isForgetPassword, setForgetPassword] = useState(false);
    const [isOtpVerification, setOtpVerification] = useState(false);
    const [loginInputDatas, setLoginInputDatas] = useState({ email: '', password: '', rememberMe: false });
    const [signupInputDatas, setSignUpInputDatas] = useState({ registeredAs: '', name: '', email: '', password: '', countryCode: '+91', mobileNum: '', term: '' });
    const [loginError, setLoginError] = useState({ username: '', password: '' });
    const [signUpErrorStatus, setSignUpErrorStatus] = useState({ registeredAs: '', name: '', email: '', password: '', countryCode: '', mobileNum: '', term: '' });
    // const [value, setValue] = useState('');
    const dispatch = useDispatch();
    const { FetchData,Request } = UseApi();

    useEffect(() => {
        let logindata = localStorage.getItem('loginData');
        console.log('logindata...', logindata);
        if (logindata) {
            logindata = JSON.parse(logindata);
            console.log('logindata2...', logindata);
            setLoginInputDatas(pre => ({ ...pre, email: logindata.username, password: logindata.password }));
        }
    }, []);

    const handleLogin = async () => {
        let inputdata = {
            // username: '',
            // password: '',
            username: loginInputDatas.email,
            password: loginInputDatas.password
        }
        let data;
        try {
            // data = await FetchData('login', 'POST', inputdata);
            // data = await LoginFetch('login', 'POST', inputdata);
            data = await Request('login', 'POST', inputdata);
        } catch (err) {
            console.log('error...', err);
            if(err.error){
                setLoginError(pre => ({ ...pre, ...err.error }));
            }
        }
        console.log('log data...', data);
        if (data?.statusCode == 200) {
            toast('Logged in successfully!', { type: 'success' });
            dispatch(setuser({}));
            localStorage.setItem('isLoggedIn', true);
            if (loginInputDatas.rememberMe) {
                localStorage.setItem('loginData', JSON.stringify(inputdata));
            } else {
                localStorage.setItem('loginData', '');
            }
            onClose();
        } else if (data?.error) {
            setLoginError(pre => ({ ...pre, ...data.error }));
        }
    }

    // const LoginFetch = async (endpoint, method, data = null) => {
    //     // setError(null);
    //     let url = 'https://api.truehomes24.com/api/' + endpoint;
    //     console.log('data.....api..', data);
    //     const formdata = new FormData();
    //     if (data && method == 'POST') {
    //         for (const name in data) {
    //             console.log('data[name]...', data[name]);
    //             formdata.append(name, data[name]);
    //             // formdata.append(name,'');
    //             console.log('formdata...', formdata);
    //         }

    //         // Object.entries(data).forEach(([key, value]) => {
    //         //   formdata.append(key, value);
    //         // });
    //         // formdata.append('data',JSON.stringify(data));
    //         console.log('formdata...', formdata);
    //     }

    //     try {
    //         var myHeaders = new Headers();
    //         // myHeaders.append("Authorization", "Bearer null");
    //         // myHeaders.append("Content-Type", 'application/json');
    //         // myHeaders.append("Content-Type", 'multipart/form-data');
    //         const response = await fetch(url, {
    //             method: method,
    //             // headers: {
    //             //     'Content-Type': 'application/json',
    //             //     // "Authorization": "Bearer "
    //             //     // Add any additional headers if needed
    //             //   },
    //             headers: myHeaders,
    //             // credentials: 'include',
    //             // mode: "no-cors",
    //             // redirect: "follow",
    //             // body: data ? JSON.stringify(data) : null,
    //             body: method == 'POST' ? formdata : data ? JSON.stringify(data) : null,
    //         });

    //         console.log('response...', response);
    //         if (!response.ok) {
    //             throw new Error('Network response was not ok');
    //         }

    //         const responseData = await response.json();
    //         // setLoading(false);
    //         return responseData;
    //     } catch (error) {

    //         console.log('err apiconfig.....', error);
    //         return error;
    //         // setError(error.message);
    //         // setLoading(false);
    //     }
    // };

    const signUp = async () => {
        if (checkSignUpValidation()) return;
        let inputdata = {
            user_type: signupInputDatas.registeredAs,
            reg_user_name: signupInputDatas.name,
            reg_email: signupInputDatas.email,
            reg_user_password: signupInputDatas.password,
            country_code: signupInputDatas.countryCode,
            contact_number: signupInputDatas.mobileNum,
            accept_term: signupInputDatas.term,
        };
        // console.log('inputdat....', inputdata);
        let data;
        try {
            data = await FetchData('registration', 'POST', inputdata);
        } catch (err) {
            console.log(err);
        }
        console.log('reg data...', data);
        if (data.statusCode == 200) {
            setOtpVerification(true);
        }
    }

    const checkSignUpValidation = () => {
        let error = false;
        if (signupInputDatas.registeredAs == '') {
            setSignUpErrorStatus(pre => ({ ...pre, registeredAs: 'Please select an option !' }));
            error = true;
        }
        if (!/^[a-zA-Z\s'-]+$/.test(signupInputDatas.name)) {
            setSignUpErrorStatus(pre => ({ ...pre, name: 'Please write a valid name !' }));
            error = true;
        }
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(signupInputDatas.email)) {
            setSignUpErrorStatus(pre => ({ ...pre, email: 'Please write a valid email !' }));
            error = true;
        }
        if (signupInputDatas.password.length < 6) {
            console.log('first')
            setSignUpErrorStatus(pre => ({ ...pre, password: 'Please enter at least 6 characters!' }));
            error = true;
        }
        if (!/^\d{7,15}$/.test(signupInputDatas.mobileNum)) {
            setSignUpErrorStatus(pre => ({ ...pre, mobileNum: 'Please write a valid contact number!' }));
            error = true;
        }
        // if (typeof signupInputDatas.mobileNum != 'number' || signupInputDatas.mobileNum.length < 8) {
        //     setSignUpErrorStatus(pre => ({ ...pre, mobileNum: 'Please write a valid contact number!' }));
        //     error = true;
        // }
        if (!signupInputDatas.term) {
            setSignUpErrorStatus(pre => ({ ...pre, term: 'You must accept accept terms & conditions!' }));
            error = true;
        }
        return error;
    }

    return (
        <div className='fixed top-0 z-[2000] flex -ml-2 w-full h-[100%] items-center justify-center bg-black bg-opacity-60'>
            <div className='relative overflow-auto min-h-[400px] max-h-screen w-[90%] sm:w-1/2 px-[3%] py-5 bg-white'>
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
                <div className={' mt-8'}>
                    {isLogin ?
                        <div className='transition-transform ease-in-out transform -translate-y-[100px] mt-[120px] py-2 duration-[1000ms] w-full md:flex md:flex-wrap'>
                            {!isForgetPassword ? <div className='w-full md:w-[55%] mb-6'>
                                <input
                                    className={styles.input + 'rounded py-2'}
                                    placeholder='Enter your email address'
                                    value={loginInputDatas.email}
                                    onChange={(e) => {
                                        setLoginInputDatas(pre => ({ ...pre, email: e.target.value }));
                                        if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e.target.value) && loginError.username) {
                                            setLoginError(pre => ({ ...pre, username: '' }));
                                        }
                                }}
                                />
                                {loginError?.username && <p className='text-red-600 text-sm'>{loginError.username}</p>}
                                <input
                                    className={styles.input + 'rounded py-2 mt-5'}
                                    placeholder='Enter your password'
                                    type='password'
                                    value={loginInputDatas.password}
                                    onChange={(e) =>{ 
                                        setLoginInputDatas(pre => ({ ...pre, password: e.target.value }));
                                        if (e.target.value.length > 5 && loginError.password) {
                                            setLoginError(pre => ({ ...pre, password: '' }));
                                        }
                                }}
                                />
                                {loginError?.password && <p className='text-red-600 text-sm'>{loginError?.password}</p>}
                                <div onClick={() => setForgetPassword(true)} className='text-end mt-2 cursor-pointer'>Forgot Password?</div>
                                <label className='flex gap-2'>
                                    <div className='mt-[2px]'>
                                        <input type='checkbox' checked={loginInputDatas.rememberMe} className='w-4 h-4'
                                            onClick={() => {
                                                setLoginInputDatas(pre => ({ ...pre, rememberMe: loginInputDatas.rememberMe ? false : true }));
                                            }}
                                        />
                                    </div>
                                    <span className='ml-3'>Remember me</span>
                                </label>
                                <button
                                    onClick={handleLogin}
                                    className={styles.btn + 'w-full hover:bg-gray-700 bg-gray-800 text-white mt-10 py-2 border-none'}>Login</button>
                            </div>
                                :
                                <div className='w-full md:w-[55%] mb-6'>
                                    <input
                                        className={styles.input + 'rounded py-2'}
                                        placeholder='Enter your email address'
                                        onChange={(e) => setLoginInputDatas(pre => ({ ...pre, email: e.target.value }))}
                                    />
                                    <div onClick={() => setForgetPassword(false)} className='text-end mt-2 cursor-pointer'>Back to login?</div>
                                    <button
                                        className={styles.btn + 'hover:bg-gray-700 w-full bg-gray-800 text-white mt-10 py-2'}>
                                        Submit
                                    </button>
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
                        :
                        <div className='mt-8 md:flex md:flex-wrap'>
                            {!isOtpVerification ?
                                <div className='w-full md:w-[55%] mb-10'>
                                    <select
                                        className={styles.input}
                                        value={signupInputDatas.registeredAs}
                                        onChange={(e) => {
                                            setSignUpInputDatas(pre => ({ ...pre, registeredAs: e.target.value }));
                                            if (signUpErrorStatus.registeredAs && e.target.value) {
                                                setSignUpErrorStatus(pre => ({ ...pre, registeredAs: '' }));
                                            }
                                        }}
                                    >
                                        {registeredAs.map((item, index) => {
                                            return (
                                                <option value={item.value}>{item.label}</option>
                                            )
                                        })}
                                    </select>
                                    {signUpErrorStatus.registeredAs && <p className='text-red-600 text-sm'>{signUpErrorStatus.registeredAs}</p>}
                                    <input className={styles.input + 'rounded py-2 mt-5'} placeholder='Your Good Name'
                                        onChange={(e) => {
                                            setSignUpInputDatas(pre => ({ ...pre, name: e.target.value }));
                                            if (/^[a-zA-Z\s'-]+$/.test(e.target.value) && signUpErrorStatus.name) {
                                                setSignUpErrorStatus(pre => ({ ...pre, name: '' }));
                                            }
                                        }}
                                    // onTouchEnd={() => {
                                    //     if (!/^[a-zA-Z\s'-]+$/.test(signupInputDatas.name)) {
                                    //         setSignUpErrorStatus(pre => ({ ...pre, name: 'Please write a valid name !' }));
                                    //     }
                                    // }}
                                    />
                                    {signUpErrorStatus.name && <p className='text-red-600 text-sm'>{signUpErrorStatus.name}</p>}
                                    <input
                                        className={styles.input + 'rounded py-2 mt-5'}
                                        placeholder='Your Email Address'
                                        onChange={(e) => {
                                            setSignUpInputDatas(pre => ({ ...pre, email: e.target.value }));
                                            if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e.target.value) && signUpErrorStatus.email) {
                                                setSignUpErrorStatus(pre => ({ ...pre, email: '' }));
                                            }
                                        }}
                                    />
                                    {signUpErrorStatus.email && <p className='text-red-600 text-sm'>{signUpErrorStatus.email}</p>}
                                    <input
                                        className={styles.input + 'rounded py-2 mt-5'}
                                        placeholder='Your Password'
                                        onChange={(e) => {
                                            setSignUpInputDatas(pre => ({ ...pre, password: e.target.value }));
                                            if (e.target.value.length > 5 && signUpErrorStatus.password) {
                                                setSignUpErrorStatus(pre => ({ ...pre, password: '' }));
                                            }
                                        }}
                                    />
                                    {signUpErrorStatus.password && <p className='text-red-600 text-sm'>{signUpErrorStatus.password}</p>}
                                    <div className='flex gap-2 mt-5'>
                                        <div className='w-[30%]'>
                                            {/* <div className={styles.btn + 'rounded-sm py-2'}>
                                            +91 (India)
                                        </div> */}
                                            <PhoneInput
                                                country={'in'}
                                                containerStyle={{ width: '100%' }}
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
                                                value={signupInputDatas.countryCode}
                                                onClick={() => {
                                                    if (signupInputDatas.countryCode == '') {
                                                        setSignUpInputDatas(pre => ({ ...pre, countryCode: '+91' }))
                                                    }
                                                }}
                                                onChange={(val) => setSignUpInputDatas(pre => ({ ...pre, countryCode: val }))}
                                            />
                                        </div>
                                        <input type='tel' className={styles.input + 'rounded py-2 w-[70%]'} placeholder='Your Contact Number'
                                            value={signupInputDatas.mobileNum}
                                            onChange={(e) => {
                                                if (/^[0-9]*$/.test(e.target.value)) {
                                                    setSignUpInputDatas(pre => ({ ...pre, mobileNum: e.target.value }));
                                                    if (/^\d{7,15}$/.test(e.target.value) && signUpErrorStatus.mobileNum) {
                                                        setSignUpErrorStatus(pre => ({ ...pre, mobileNum: '' }));
                                                    }
                                                }

                                            }} />
                                    </div>
                                    {signUpErrorStatus.mobileNum && <p className='text-red-600 text-sm'>{signUpErrorStatus.mobileNum}</p>}
                                    <label className='flex gap-2 mt-5'>
                                        <div className='mt-[2px]'>
                                            <input
                                                onClick={() => {
                                                    setSignUpInputDatas(pre => ({ ...pre, term: signupInputDatas.term ? '' : '1' }));
                                                    // console.log('e.target.checked...',e.target.checked,'signupInputDatas.term..',signupInputDatas.term)
                                                    if (signUpErrorStatus.term && !signupInputDatas.term) {
                                                        setSignUpErrorStatus(pre => ({ ...pre, term: '' }));
                                                    }
                                                }}
                                                checked={signupInputDatas.term} type='checkbox' className='w-4 h-4' />
                                        </div>
                                        <span className='ml-3'>I've read and accept terms & conditions</span>
                                    </label>
                                    {signUpErrorStatus.term && <p className='text-red-600 text-sm'>{signUpErrorStatus.term}</p>}
                                    <button
                                        onClick={signUp}
                                        className={styles.btn + 'hover:bg-gray-700 w-full bg-gray-800 text-white mt-10 py-2'}>Sign Up</button>
                                </div>
                                :
                                <div className='w-full md:w-[55%] mb-10'>
                                    <p className={styles.title4}>Verify your mobile number: {signupInputDatas.countryCode}-{signupInputDatas.mobileNum}</p>
                                    <input className={styles.input + 'rounded py-2 mt-5'} placeholder='Entear OTP received on your mobile' />
                                    <button
                                        onClick={() => {
                                            setIsLogin(true);
                                            toast('Otp verified successfully!', { type: 'success' });
                                            // handleLogin();
                                        }}
                                        className={styles.btn + 'hover:bg-gray-700 w-full bg-gray-800 text-white mt-10 py-2'}>
                                        Verify OTP
                                    </button>
                                    {/* <ToastContainer toastClassName={{}} /> */}
                                    <button
                                        // onClick={() => }
                                        className={styles.btn + 'hover:bg-gray-700 w-full bg-gray-800 text-white py-2 mt-10'}>
                                        Resend OTP
                                    </button>
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
                    }

                </div>
                {/* {!isLogin && <div>

                </div>} */}

            </div>
        </div>
    );
}

export default Auth;
