import React from 'react';
import Header from '../../components/Header/Header';
import { styles } from '../../Styles/Styles';
import userBackImage from '../../assets/images/user.svg'
import { InputList } from '../../components/PostProperty/PostPropertyComp';
import TopCItiesFilter from '../../components/TopCItiesFilter';
import Footer from '../../components/Footer';

const passwordInputs = [
    { name: 'Old Password', placeholder: 'Enter your old password', state: 'oldpassword', star: false, dropdownData: null },
    { name: 'New Password', placeholder: 'Enter your new password', state: 'newpassword', star: false, dropdownData: null },
    { name: 'Confirm new Password', placeholder: 'Enter your confirm password', state: 'confiempassword', star: false, dropdownData: null },
]

const countries = ['India', 'Singapore', 'UAE', 'United States'];
const indianStates = [
    'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh', 'Goa', 'Gujarat', 'Haryana',
    'Himachal Pradesh', 'Jharkhand', 'Karnataka', 'Kerala', 'Madhya Pradesh', 'Maharashtra', 'Manipur',
    'Meghalaya', 'Mizoram', 'Nagaland', 'Odisha', 'Punjab', 'Rajasthan', 'Sikkim', 'Tamil Nadu', 'Telangana',
    'Tripura', 'Uttar Pradesh', 'Uttarakhand', 'West Bengal', 'Andaman and Nicobar Islands', 'Chandigarh',
    'Dadra and Nagar Haveli and Daman and Diu', 'Lakshadweep', 'Delhi', 'Puducherry'
];

const Cities = ['Kolkata', 'Pune', 'Delhi']

const personalInputs = [
    { name: 'Good Name', placeholder: 'sandip', state: 'name', star: false, dropdownData: null },
    { name: 'Register As', placeholder: 'Individual', state: 'registerAs', star: false, dropdownData: ['Register As', 'Individual', 'Builder', 'Agent'] },
    { name: 'Business Title', placeholder: 'Enter your business title', state: 'business title', star: false, dropdownData: null },
    { name: 'Country', placeholder: 'Your Country', state: 'business title', star: false, dropdownData: countries },
    { name: 'Country', placeholder: 'Your State', state: 'state', star: false, dropdownData: indianStates },
    { name: 'Country', placeholder: 'Your City', state: 'city', star: false, dropdownData: Cities },

]


const EditProfile = () => {
    return (
        <div>
            <Header />
            <div className='my-16 container mx-auto px-2'>
                <p className={styles.title3}>Eidt Profile:</p>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                    <div className='p-2 border-gray-300 mx-auto'>
                        <img alt='' src={userBackImage} className=' h-[100%] w-[100%]' />
                        <div className='text-gray-400 flex flex-col items-center justify-center py-2 text-cente mt-2'>
                            <input accept='image/*'  type='file'  className='w-[80%] absolute opacity-0 py-14 cursor-pointer' />
                            <button className='border-[1px] border-gray-500 px-2 py-1 rounded-xl text-gray-700'>Upload Photo</button>
                        </div>
                    </div>
                    <div>
                        <p className={styles.title4}>Change Password:</p>
                        <div>
                            <InputList inputs={passwordInputs} classname={'mt-5 grid grid-cols-1 gap-3'} />
                            <button className={styles.btnBlackHover + styles.formBtn + ' mt-5'}>Change Password</button>
                        </div>
                    </div>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mt-6'>
                    <div className='mt-5'>
                        <InputList inputs={personalInputs} classname={'mt-5 grid grid-cols-1 gap-6'} />
                        <button className={styles.btnBlackHover + styles.formBtn + ' mt-5'}>Update Profile</button>
                    </div>
                    <div>
                        <div className='mt-9'>
                            <p className={styles.textMedium}>Email Id</p>
                            <input readOnly placeholder='fakeemail@gmail.com' className={styles.input + ' mt-2 bg-gray-50'} />
                        </div>
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mt-5'>
                            <div>
                                <p className={styles.textMedium}>Mobile</p>
                                <input readOnly placeholder='+91' className={styles.input + ' mt-2 bg-gray-50'} />
                            </div>
                            <div className='mt-8'>
                                <input placeholder='1234567890' className={styles.input + ''} />
                            </div>
                        </div>
                        <button className={styles.btnBlackHover + styles.formBtn + ' mt-5'}>Update Mobile</button>
                        <div className='mt-5'>
                            <p className='text-gray-500 text-sm sm:text-base'>Changing mobile number needs OTP verification.
                                After updating number, generate an OTP and verify. Once you verify OTP,
                                your mobile number will be updated to our record.</p>
                        </div>
                    </div>
                </div>
            </div>
            <TopCItiesFilter />
            <Footer />
        </div>
    );
}

export default EditProfile;
