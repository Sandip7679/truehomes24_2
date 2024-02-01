import React from 'react';
import Header from '../../components/Header/Header';
import { NavLink } from 'react-router-dom';
import { styles } from '../../Styles/Styles';
import userBackImage from '../../assets/images/user.svg'


const ManageProfile = () => {
    return (
        <div>
            <Header />
            <div className='mt-16'>
                <div className='py-5 ml-[8%] border-b-[1px] border-green-300]'>
                    <p className={styles.title2}>Profile Details</p>
                    <div className='text-sm text-gray-700'><NavLink to={'/'}>Home</NavLink>{'/'}<span>Profile Details</span></div>
                </div>
                <div className='flex flex-wrap gap-[15%] pt-8 py-14 pl-[10%]'>
                    <div className='flex flex-col items-center mb-5'>
                        <div className='p-2 border-[1px] w-[190px] border-gray-300'>
                            <img alt='' src={userBackImage} className='h-[200px] w-[200px]' />
                        </div>
                    </div>
                    <div className='w-[320px]'>
                        <p className={styles.textMedium + ''}>User As: Individual</p>
                        <p className={styles.textMedium + 'mt-2'}>Business Title: N/A</p>
                        <p className={styles.textMedium + 'mt-2'}>Country: India</p>
                        <p className={styles.textMedium + 'mt-2'}>State: Tamil Nadu</p>
                        <p className={styles.textMedium + 'mt-2'}>City: Chennai</p>
                        <p className={styles.textMedium + 'mt-2'}>Business Address: N/A</p>
                        <p className={styles.textMedium + 'mt-2'}>Mobile : +1234567890</p>
                        <p className={styles.textMedium + 'mt-2'}>Mobile Verified: No</p>
                        <p className={styles.textMedium + 'mt-2'}>Email : emailexample@gmail.com</p>
                        <p className={styles.textMedium + 'mt-2'}>Email Verified: No</p>
                        <NavLink to={'/dashboard/edit-profile'}>
                            <button className={styles.formBtn+styles.btnBlackHover+'mt-8'}>Edit Profile</button>
                        </NavLink>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default ManageProfile;
