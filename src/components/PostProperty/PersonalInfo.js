import React, { useState } from 'react';
import { setPostPropertyFormData } from '../../Redux/reducer/User';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { styles } from '../../Styles/Styles';
import PhoneInput from 'react-phone-input-2';
import { CategoryTitle } from './PostPropertyComp';

const Iam = ['Individual/Owner', 'Builder/Developer', 'Agent/Dealer']
const PersonalInfo = ({ setCurrCategory, category,title }) => {
    const [inputErrorStatus, setInputErrorStatus] = useState({ name: '', email: '', countryCode: '', mobileNum: '', Otp: '' });
    const [actualOtp, setActualOtp] = useState('');
    const { postPropertyFormData } = useSelector(state => state.User);
    const dispatch = useDispatch();

    const onClickContitue = async () => {
        if (checkInputValidation()) return;
        if (postPropertyFormData.generalInfo.completed) {
            if (category) {
                setCurrCategory(category);
            }
            return;
        }
        if (postPropertyFormData.generalInfo.mobileVerification) {
            if (actualOtp == postPropertyFormData.generalInfo.Otp) {
                toast('OTP verified successfully !', { type: 'success' });
                if (category) {
                    setCurrCategory(category);
                }
                dispatch(setPostPropertyFormData({ ...postPropertyFormData, generalInfo: { ...postPropertyFormData.generalInfo, completed: true, mobileVerification: false } }))
            } else {
                setInputErrorStatus(pre => ({ ...pre, Otp: 'Invalid OTP !' }));
            }
        } else {
            dispatch(setPostPropertyFormData({ ...postPropertyFormData, generalInfo: { ...postPropertyFormData.generalInfo, mobileVerification: true } }))
        }
    }

    const sendOtp = () => {
        setInputErrorStatus(pre => ({ ...pre, Otp: '' }));
    }

    const checkInputValidation = () => {
        let error = false;
        if (!/^[a-zA-Z\s'-]+$/.test(postPropertyFormData.generalInfo.name)) {
            setInputErrorStatus(pre => ({ ...pre, name: 'Please write a valid name !' }));
            error = true;
        }
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(postPropertyFormData.generalInfo.email)) {
            setInputErrorStatus(pre => ({ ...pre, email: 'Please write a valid email !' }));
            error = true;
        }

        if (!/^\d{7,15}$/.test(postPropertyFormData.generalInfo.mobileNum)) {
            setInputErrorStatus(pre => ({ ...pre, mobileNum: 'Please write a valid contact number!' }));
            error = true;
        }
        return error;
    }
    return (
        <div>
            <CategoryTitle title={title} icon={'fa-regular fa-user mt-2'} />
            {!postPropertyFormData.generalInfo.mobileVerification ?
                <>
                    <div className='mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-8'>
                        <div>
                            <span className={styles.textMedium}>Name<span className='text-red-500'>*</span></span>
                            <input required placeholder='Enter Your Name' className={styles.input + 'mt-1'}
                                value={postPropertyFormData.generalInfo.name}
                                onChange={(e) => {
                                    // setGeneralInfoValus(pre => ({ ...pre, name: e.target.value }));
                                    dispatch(setPostPropertyFormData({ ...postPropertyFormData, generalInfo: { ...postPropertyFormData.generalInfo, name: e.target.value } }))
                                    if (/^[a-zA-Z\s'-]+$/.test(e.target.value) && inputErrorStatus.name) {
                                        setInputErrorStatus(pre => ({ ...pre, name: '' }));
                                    }
                                }}
                            />
                            {inputErrorStatus.name && <p className='text-red-600 text-sm'>{inputErrorStatus.name}</p>}
                        </div>
                        <div>
                            <span className={styles.textMedium}>Email<span className='text-red-500'>*</span></span>
                            <input required placeholder='Enter Your Email' className={styles.input + 'mt-1'}
                                value={postPropertyFormData.generalInfo.email}
                                onChange={(e) => {
                                    // setGeneralInfoValus(pre => ({ ...pre, email: e.target.value }));
                                    dispatch(setPostPropertyFormData({ ...postPropertyFormData, generalInfo: { ...postPropertyFormData.generalInfo, email: e.target.value } }))
                                    if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e.target.value) && inputErrorStatus.email) {
                                        setInputErrorStatus(pre => ({ ...pre, email: '' }));
                                    }
                                }}
                            />
                            {inputErrorStatus.email && <p className='text-red-600 text-sm'>{inputErrorStatus.email}</p>}
                        </div>
                        <div className=''>
                            <span className={styles.textMedium}>Country Code<span className='text-red-500'>*</span></span>
                            {/* <input required placeholder='+ 91 (India)' readOnly className={styles.input + 'mt-1'} /> */}
                            <PhoneInput
                                country={'in'}
                                containerStyle={{ width: '100%', marginTop: '5px' }}
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
                                value={postPropertyFormData.generalInfo.countryCode}
                                onClick={() => {
                                    if (postPropertyFormData.generalInfo.countryCode == '') {
                                        // setGeneralInfoValus(pre => ({ ...pre, countryCode: '+91' }));
                                        dispatch(setPostPropertyFormData({ ...postPropertyFormData, generalInfo: { ...postPropertyFormData.generalInfo, countryCode: '+91' } }))
                                    }
                                }}
                                onChange={(val) => dispatch(
                                    setPostPropertyFormData({
                                        ...postPropertyFormData,
                                        generalInfo: { ...postPropertyFormData.generalInfo, countryCode: val, completed: false }
                                    }))}
                            />
                        </div>
                        <div>
                            <span className={styles.textMedium}>Mobile<span className='text-red-500'>*</span></span>
                            <input required placeholder='Enter Your Mobile No' className={styles.input + 'mt-1'}
                                value={postPropertyFormData.generalInfo.mobileNum}
                                onChange={(e) => {
                                    if (/^[0-9]*$/.test(e.target.value)) {
                                        // setGeneralInfoValus(pre => ({ ...pre, mobileNum: e.target.value }));
                                        dispatch(setPostPropertyFormData({ ...postPropertyFormData, generalInfo: { ...postPropertyFormData.generalInfo, mobileNum: e.target.value, completed: false } }))
                                        if (/^\d{7,15}$/.test(e.target.value) && inputErrorStatus.mobileNum) {
                                            setInputErrorStatus(pre => ({ ...pre, mobileNum: '' }));
                                        }
                                    }
                                }}
                            />
                            {inputErrorStatus.mobileNum && <p className='text-red-600 text-sm'>{inputErrorStatus.mobileNum}</p>}
                        </div>
                    </div>
                    <div className='mt-8'>
                        <div className={''}>
                            <span>I Am <span className='text-red-600'>*</span></span>
                            <div className='flex flex-wrap gap-2 mt-2 text-sm'>
                                {Iam.map((item, index) => {
                                    return (
                                        <button key={index}
                                            onClick={() => dispatch(setPostPropertyFormData({ ...postPropertyFormData, generalInfo: { ...postPropertyFormData.generalInfo, Iam: item } }))}
                                            className={(postPropertyFormData.generalInfo.Iam === item ? 'border-orange-600 text-orange-600' : 'border-gray-400 text-gray-400') + ' hover:border-orange-600 hover:text-orange-600 border-[1px] px-3 py-1 rounded-xl '}>
                                            {item}
                                        </button>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </>
                :
                <div>
                    <div className='w-full max-w-[400px]'>
                        <span className={styles.textMedium}>Verify Your Mobile<span className='text-red-500'>*</span></span>
                        <input required placeholder='Enter OTP received on your mobile' className={styles.input + 'mt-1'}
                            value={postPropertyFormData.generalInfo.Otp}
                            onChange={(e) => {
                                // setGeneralInfoValus(pre => ({ ...pre, Otp: e.target.value }));
                                dispatch(setPostPropertyFormData({ ...postPropertyFormData, generalInfo: { ...postPropertyFormData.generalInfo, Otp: e.target.value } }))
                                if (inputErrorStatus.Otp) {
                                    setInputErrorStatus(pre => ({ ...pre, Otp: '' }));
                                }
                            }}
                        />
                        {inputErrorStatus.Otp && <p className='text-red-600 text-sm'>{inputErrorStatus.Otp}</p>}
                    </div>
                </div>
            }
            <div className='mt-8 flex justify-center gap-2'>
                {postPropertyFormData.generalInfo.mobileVerification && <button className={styles.formBtn + styles.btnBlackHover}
                    onClick={() => dispatch(setPostPropertyFormData({ ...postPropertyFormData, generalInfo: { ...postPropertyFormData.generalInfo, mobileVerification: false } }))}>
                    Back</button>}
                <button className={styles.formBtn + styles.btnBlackHover} onClick={onClickContitue}>Continue</button>
                {postPropertyFormData.generalInfo.mobileVerification && <button className={styles.formBtn + styles.btnBlackHover} onClick={sendOtp}>Resend OTP</button>}
            </div>
        </div>
    );
}

export default PersonalInfo;
