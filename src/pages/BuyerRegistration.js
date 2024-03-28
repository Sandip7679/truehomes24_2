import React, { useEffect, useState } from 'react';
import Header from '../components/Header/Header';
import { styles } from '../Styles/Styles';
import { ButtonList, CategoryTitle, DropdownInput, InputList } from '../components/PostProperty/PostPropertyComp';
import { NavLink } from 'react-router-dom';
import TopCItiesFilter from '../components/TopCItiesFilter';
import Footer from '../components/Footer';
import { useDispatch, useSelector } from 'react-redux';
import { setPostPropertyFormData, setuser } from '../Redux/reducer/User';
import PhoneInput from 'react-phone-input-2';
import { toast } from 'react-toastify';
import { UseApi } from '../ApiConf';

const countries = ['India', 'Singapore', 'UAE', 'United States'];
const indianStates = [
    'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh', 'Goa', 'Gujarat', 'Haryana',
    'Himachal Pradesh', 'Jharkhand', 'Karnataka', 'Kerala', 'Madhya Pradesh', 'Maharashtra', 'Manipur',
    'Meghalaya', 'Mizoram', 'Nagaland', 'Odisha', 'Punjab', 'Rajasthan', 'Sikkim', 'Tamil Nadu', 'Telangana',
    'Tripura', 'Uttar Pradesh', 'Uttarakhand', 'West Bengal', 'Andaman and Nicobar Islands', 'Chandigarh',
    'Dadra and Nagar Haveli and Daman and Diu', 'Lakshadweep', 'Delhi', 'Puducherry'
];

const Cities = ['Kolkata', 'Pune', 'Delhi']

const inputs = [
    { name: 'Interested Country', placeholder: 'Your Country', state: 'country', star: false, dropdownData: countries },
    { name: 'Interested State', placeholder: 'Your State', state: 'State', star: false, dropdownData: indianStates },
    { name: 'Interested City', placeholder: 'Your City', state: 'city', star: false, dropdownData: Cities },
    { name: 'Interested Locality', placeholder: 'Your Locality', state: 'locality', star: false, dropdownData: ['locality1'] },
    { name: 'Interested Property', placeholder: 'Your Property', state: 'Property', star: false, dropdownData: ['property1'] },
    { name: 'Min Budget', placeholder: 'Min Budget', state: 'minbudget', star: false, dropdownData: ['Rs. 1 Lac', 'Rs. 5 Lac', 'Rs. 10 Lac'] },
    { name: 'Max Budget', placeholder: 'Max Budget', state: 'Maxbudget', star: false, dropdownData: ['Rs. 1 Lac', 'Rs. 5 Lac', 'Rs. 10 Lac'] },
    { name: 'Interested in', placeholder: 'Interested in', state: 'interestedIn', star: false, dropdownData: ['1 BHK', '2 BHK', '3 BHK', '4 BHK+'] },
    { name: 'Facing Preference', placeholder: 'Facing Preference', state: 'Facing Preference', star: false, dropdownData: ['North', 'East', 'South', 'West', 'North East', 'North West', 'South West', 'South East'] },
    { name: 'Want to Buy', placeholder: 'Want to Buy', state: 'Want to Buy', star: false, dropdownData: ['Immediate', '1-3 Months', '3-6 Months', '6-12 Months'] },
    { name: 'Floor Preference', placeholder: 'Floor Preference', state: 'Floor Preference', star: false, dropdownData: ['0-5', '6-10', '>10'] },
]
const Iam = [
    { label: 'Buyer', value: 'buyer' },
    { label: 'Tenant', value: 'tenent' }
]
const BuyerRegistration = () => {

    const [animation, setAnimation] = useState(false);
    // const [generalInfoValus, setGeneralInfoValus] = useState({ name: '', email: '', countryCode: '+91', mobileNum: '', Iam: 'Individual/Owner', Otp: '' });
    // const [mobileVerification, setMobileVerification] = useState(false);
    const [inputErrorStatus, setInputErrorStatus] = useState({ name: '', email: '', countryCode: '', mobileNum: '', Otp: '' });
    const [actualOtp, setActualOtp] = useState('');
    const { postPropertyFormData, buyerRegistrationData, login_status } = useSelector(state => state.User);
    const dispatch = useDispatch();
    const { FetchData, Request } = UseApi();
    const [inputErrorState, setInputErrState] = useState();
    useEffect(() => {
        setAnimation(true);
        dispatch(setPostPropertyFormData({ ...postPropertyFormData, generalInfo: { ...postPropertyFormData.generalInfo, mobileVarification: false, completed: false, Iam: 'buyer' } }))
    }, [])

    const onClickContitue = async () => {
        if (checkInputValidation()) return;
        if (postPropertyFormData.generalInfo.completed) {
            return;
        }
        if (postPropertyFormData.generalInfo.mobileVerification) {
            if (actualOtp == postPropertyFormData.generalInfo.Otp) {
                toast('OTP verified successfully !', { type: 'success' });
                dispatch(setPostPropertyFormData({ ...postPropertyFormData, generalInfo: { ...postPropertyFormData.generalInfo, completed: true, mobileVerification: false } }));
                dispatch(setuser({}));
                localStorage.setItem('isLoggedIn', true);
            } else {
                setInputErrorStatus(pre => ({ ...pre, Otp: 'Invalid OTP !' }));
            }
        } else {
            signUp();
            // dispatch(setPostPropertyFormData({ ...postPropertyFormData, generalInfo: { ...postPropertyFormData.generalInfo, mobileVerification: true } }))
        }
    }
    const signUp = async () => {
        // if (checkSignUpValidation()) return;
        let inputdata = {
            user_type: postPropertyFormData.generalInfo.Iam,
            reg_user_name: postPropertyFormData.generalInfo.name,
            reg_email: postPropertyFormData.generalInfo.email,
            // reg_user_password: postPropertyFormData.generalInfo.password,
            country_code: postPropertyFormData.generalInfo.countryCode,
            contact_number: postPropertyFormData.generalInfo.mobileNum,
            // accept_term: signupInputDatas.term,
        };
        // console.log('inputdat....', inputdata);
        let data;
        try {
            data = await Request('registration', 'POST', inputdata);
        } catch (err) {
            console.log(err);
        }
        console.log('reg data...', data);
        if (data?.statusCode == 200) {
            toast(data.message, { type: 'success' });
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
            <Header />
            <div className={'mt-24 px-2 container mx-auto'}>
                <div className='px-2 sm:px-5 mb-16'>
                    <CategoryTitle title={'General Information :'} icon={'fa-regular fa-user mt-1'} />
                </div>
                {!postPropertyFormData.generalInfo.completed && !login_status && <div className={styles.formCard + (animation ? 'transition-transform ease-in-out transform -translate-y-10 duration-1000' : '')}>
                    {!postPropertyFormData.generalInfo.mobileVerification ?
                        <>
                            <div className='mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-8'>
                                <div>
                                    <span className={styles.textMedium}>Name<span className='text-red-500'>*</span></span>
                                    <input required placeholder='Enter Your Name' className={styles.input + 'mt-1'}
                                        value={postPropertyFormData.generalInfo.name}
                                        onChange={(e) => {
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
                                    <PhoneInput
                                        country={'in'}
                                        containerStyle={{ width: '100%', marginTop: '5px' }}
                                        inputStyle={{ width: '100%', height: '42px', borderRadius: '0px' }}
                                        placeholder='Phone*'
                                        inputProps={{
                                            name: 'phone',
                                            required: true,
                                            autoFocus: true
                                        }}
                                        value={postPropertyFormData.generalInfo.countryCode}
                                        onClick={() => {
                                            if (postPropertyFormData.generalInfo.countryCode == '') {
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
                                <ButtonList title={'I am'} btnNames={Iam} required={true}
                                    value={postPropertyFormData.generalInfo.Iam}
                                    onClick={(item) => dispatch(setPostPropertyFormData({ ...postPropertyFormData, generalInfo: { ...postPropertyFormData.generalInfo, Iam: item } }))}
                                />
                            </div>
                            <div className='mt-10 flex justify-center'>
                                <button className={styles.formBtn + styles.btnBlackHover} onClick={onClickContitue}>Continue</button>
                            </div>
                        </>
                        :
                        <div>
                            <div className='w-full max-w-[400px]'>
                                <span className={styles.textMedium}>Verify Your Mobile<span className='text-red-500'>*</span></span>
                                <input required placeholder='Enter OTP received on your mobile' className={styles.input + 'mt-1'}
                                    value={postPropertyFormData.generalInfo.Otp}
                                    onChange={(e) => {
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

                    {postPropertyFormData.generalInfo.mobileVerification && <div className='mt-8 flex justify-center gap-2'>
                        {/* {postPropertyFormData.generalInfo.mobileVerification && <button className={styles.formBtn + styles.btnBlackHover}
                            onClick={() => dispatch(setPostPropertyFormData({ ...postPropertyFormData, generalInfo: { ...postPropertyFormData.generalInfo, mobileVerification: false } }))}>
                            Back</button>} */}
                        <button className={styles.formBtn + styles.btnBlackHover} onClick={onClickContitue}>Verify OTP</button>
                        <button className={styles.formBtn + styles.btnBlackHover} onClick={sendOtp}>Resend OTP</button>
                    </div>}
                </div>}
                {(postPropertyFormData.generalInfo.completed || login_status) && <div className={styles.formCard + (animation ? 'transition-transform ease-in-out transform -translate-y-10 duration-1000' : '')}>
                    <div>
                        {/* <InputList inputs={inputs} classname={'mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'} /> */}
                        <div className='mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
                            <DropdownInput title={'Country'} options={countries} placeholder={'Select Country'} required={true}
                                value={buyerRegistrationData.country}
                                onChange={(e) => {
                                    dispatch(setPostPropertyFormData({ ...buyerRegistrationData, country: e.target.value }));
                                    if (inputErrorState.country) { setInputErrState(pre => ({ ...pre, country: '' })) };
                                }}
                            />
                            <DropdownInput title={'State'} options={Cities} placeholder={'Select State'} required={true}
                                value={buyerRegistrationData.state}
                                onChange={(e) => {
                                    dispatch(setPostPropertyFormData({ ...buyerRegistrationData, state: e.target.value }));
                                    if (inputErrorState.state) { setInputErrState(pre => ({ ...pre, state: '' })) };
                                }}
                            />
                            <DropdownInput title={'City'} options={Cities} placeholder={'Select City'} required={true}
                                value={buyerRegistrationData.city}
                                onChange={(e) => {
                                    dispatch(setPostPropertyFormData({ ...buyerRegistrationData, city: e.target.value }));
                                    if (inputErrorState.city) { setInputErrState(pre => ({ ...pre, city: '' })) };
                                }}
                            />
                            <DropdownInput title={'Interested Locality'} options={['locality1']} placeholder={'Your Locality'} required={true}
                                value={buyerRegistrationData.locality}
                                onChange={(e) => {
                                    dispatch(setPostPropertyFormData({ ...buyerRegistrationData, locality: e.target.value }));
                                    if (inputErrorState.locality) { setInputErrState(pre => ({ ...pre, locality: '' })) };
                                }}
                            />
                            <DropdownInput title={'Interested Property'} options={['property1']} placeholder={'Interested Property'} required={true}
                                value={buyerRegistrationData.interestedProperty}
                                onChange={(e) => {
                                    dispatch(setPostPropertyFormData({ ...buyerRegistrationData, interestedProperty: e.target.value }));
                                    if (inputErrorState.interestedProperty) { setInputErrState(pre => ({ ...pre, interestedProperty: '' })) };
                                }}
                            />
                            <DropdownInput title={'Min Budget'} options={['Rs. 1 Lac', 'Rs. 5 Lac', 'Rs. 10 Lac']} placeholder={'Min Budget'} required={true}
                                value={buyerRegistrationData.minBudget}
                                onChange={(e) => {
                                    dispatch(setPostPropertyFormData({ ...buyerRegistrationData, minBudget: e.target.value }));
                                    if (inputErrorState.minBudget) { setInputErrState(pre => ({ ...pre, minBudget: '' })) };
                                }}
                            />
                            <DropdownInput title={'Max Budget'} options={['Rs. 1 Lac', 'Rs. 5 Lac', 'Rs. 10 Lac']} placeholder={'Max Budget'} required={true}
                                value={buyerRegistrationData.country}
                                onChange={(e) => {
                                    dispatch(setPostPropertyFormData({ ...buyerRegistrationData, country: e.target.value }));
                                    if (inputErrorState.country) { setInputErrState(pre => ({ ...pre, country: '' })) };
                                }}
                            />
                            <DropdownInput title={'Interested In'} options={['1 BHK', '2 BHK', '3 BHK', '4 BHK+']}
                                placeholder={'Interested In'} required={true}
                                value={buyerRegistrationData.InterestedIn}
                                onChange={(e) => {
                                    dispatch(setPostPropertyFormData({ ...buyerRegistrationData, InterestedIn: e.target.value }));
                                    if (inputErrorState.InterestedIn) { setInputErrState(pre => ({ ...pre, InterestedIn: '' })) };
                                }}
                            />

                            <DropdownInput title={'Facing Preference'} options={['North', 'East', 'South', 'West', 'North East', 'North West', 'South West', 'South East']}
                                placeholder={'Facing Preference'} required={true}
                                value={buyerRegistrationData.facingPref}
                                onChange={(e) => {
                                    dispatch(setPostPropertyFormData({ ...buyerRegistrationData, facingPref: e.target.value }));
                                    if (inputErrorState.facingPref) { setInputErrState(pre => ({ ...pre, facingPref: '' })) };
                                }}
                            />
                            <DropdownInput title={'Want to Buy'} options={countries} placeholder={'Want to Buy'} required={true}
                                value={buyerRegistrationData.wantToBuy}
                                onChange={(e) => {
                                    dispatch(setPostPropertyFormData({ ...buyerRegistrationData, wantToBuy: e.target.value }));
                                    if (inputErrorState.wantToBuy) { setInputErrState(pre => ({ ...pre, wantToBuy: '' })) };
                                }}
                            />
                            <DropdownInput title={'Floor Preference'} options={countries} placeholder={'Floor Preference'} required={true}
                                value={buyerRegistrationData.floorPref}
                                onChange={(e) => {
                                    dispatch(setPostPropertyFormData({ ...buyerRegistrationData, floorPref: e.target.value }));
                                    if (inputErrorState.floorPref) { setInputErrState(pre => ({ ...pre, floorPref: '' })) };
                                }}
                            />
                        </div>
                        <div className='mt-10 flex gap-5'>
                            <NavLink to={'/'}>
                                <button className={styles.formBtn}>Back</button>
                            </NavLink>
                            <button type='submit' className={styles.formBtn}>Submit</button>
                        </div>
                    </div>
                </div>}
            </div>

            <TopCItiesFilter />
            <Footer />
        </div>

    );
}

export default BuyerRegistration;
