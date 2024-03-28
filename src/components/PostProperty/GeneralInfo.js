import React, { useEffect, useState } from 'react';
import { ButtonList, CategoryTitle } from './PostPropertyComp';
import { styles } from '../../Styles/Styles';
import PhoneInput from 'react-phone-input-2';
import { useDispatch, useSelector } from 'react-redux';
import { setPostPropertyFormData } from '../../Redux/reducer/User';
import { toast } from 'react-toastify';
import PersonalInfo from './PersonalInfo';
// import { type } from '@testing-library/user-event/dist/type';


const Iam = ['Individual/Owner', 'Builder/Developer', 'Agent/Dealer']
const GeneralInfo = ({ setCurrCategory }) => {
    const [animation, setAnimation] = useState(false);
    // const [generalInfoValus, setGeneralInfoValus] = useState({ name: '', email: '', countryCode: '+91', mobileNum: '', Iam: 'Individual/Owner', Otp: '' });
    // const [mobileVerification, setMobileVerification] = useState(false);
    const [inputErrorStatus, setInputErrorStatus] = useState({ name: '', email: '', countryCode: '', mobileNum: '', Otp: '' });
    const [actualOtp, setActualOtp] = useState('');
    const { postPropertyFormData } = useSelector(state => state.User);
    const dispatch = useDispatch();
    useEffect(() => {
        setAnimation(true);
    }, [])

    const onClickContitue = async () => {
        if (checkInputValidation()) return;
        if (postPropertyFormData.generalInfo.completed) {
            setCurrCategory('Property Info');
            return;
        }
        if (postPropertyFormData.generalInfo.mobileVerification) {
            if (actualOtp == postPropertyFormData.generalInfo.Otp) {
                toast('OTP verified successfully !', { type: 'success' });
                setCurrCategory('Property Info');
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
        <div className={'mt-16 ' + (animation ? 'transition-transform ease-in-out transform -translate-y-10 duration-1000' : '')}>
            <PersonalInfo setCurrCategory={setCurrCategory} category={'Property Info'} title={'General Information :'} />
        </div>
    );
}

export default GeneralInfo;
