import React from 'react';
import Header from '../components/Header/Header';
import { styles } from '../Styles/Styles';
import { InputList } from '../components/PostProperty/PostPropertyComp';
import { NavLink } from 'react-router-dom';
import TopCItiesFilter from '../components/TopCItiesFilter';
import Footer from '../components/Footer';

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
const BuyerRegistration = () => {
    return (
        <div>
            <Header />
            <div className='mt-[80px]'>
                <div className='mt-5 px-[5%] sm:px-[8%]'>
                    <div className='flex my-5 text-gray-700 bg-gray-50 p-3 -mx-[1.6%]'>
                        <i class="fa-regular fa-user mt-[1px] mr-2 text-lg"></i>
                        <span className={styles.title3}>General Information :</span>
                    </div>
                    <div>
                        <InputList inputs={inputs} classname={'mt-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'} />
                    </div>
                    <div className='mt-10 flex gap-5'>
                        <NavLink to={'/'}>
                           <button className={styles.formBtn}>Back</button> 
                        </NavLink>
                        <button type='submit' className={styles.formBtn}>Submit</button>
                    </div>
                </div>
            </div>
            <TopCItiesFilter/>
            <Footer/>
        </div>
    );
}

export default BuyerRegistration;
