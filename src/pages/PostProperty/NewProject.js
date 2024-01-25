import React from 'react';
import Header from '../../components/Header/Header';
import FormCatagories, { ButtonList, InputList } from '../../components/PostPropertyComp';
import { styles } from '../../Styles/Styles';

const formCatagories = ['New Project Info','Gallery','Unit Configuration'];
const countries = ['India', 'Singapore', 'UAE', 'United States'];
const indianStates = [
    'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh', 'Goa', 'Gujarat', 'Haryana',
    'Himachal Pradesh', 'Jharkhand', 'Karnataka', 'Kerala', 'Madhya Pradesh', 'Maharashtra', 'Manipur',
    'Meghalaya', 'Mizoram', 'Nagaland', 'Odisha', 'Punjab', 'Rajasthan', 'Sikkim', 'Tamil Nadu', 'Telangana',
    'Tripura', 'Uttar Pradesh', 'Uttarakhand', 'West Bengal', 'Andaman and Nicobar Islands', 'Chandigarh',
    'Dadra and Nagar Haveli and Daman and Diu', 'Lakshadweep', 'Delhi', 'Puducherry'
];

const Cities = ['Kolkata', 'Pune', 'Delhi'];
const propTypesDropdownData = ['Apartment','Independent House/Villa','Shop/Showroom'];
const inputs = [
    { name: 'Country', placeholder: 'Select Country', state: 'country', star: true, dropdownData: countries },
    { name: 'State', placeholder: 'Select State', state: 'state', star: true, dropdownData: indianStates },
    { name: 'City', placeholder: 'Select City', state: 'city', star: true, dropdownData: Cities },
    { name: 'Locality', placeholder: 'Select Locality', state: 'locality', star: true, dropdownData: null },
    { name: 'Sub Locality', placeholder: 'Select Sub Locality', state: 'subLocality', star: false, dropdownData: null },
    { name: 'Society Name', placeholder: 'Select Society Name', state: 'Society Name', star: true, dropdownData: null },
    { name: 'Property Type', placeholder: 'Select Property Type', state: 'Property Type', star: false, dropdownData:propTypesDropdownData },
    { name: 'Bedroom from (Ex. 1BHK)', placeholder: 'Enter Bedroom from', state: 'Bedroom from', star: false, dropdownData: null },
    { name: 'Bedroom to (Ex. 1BHK)', placeholder: 'Enter Bedroom to', state: 'Bedroom to', star: false, dropdownData: null },
    { name: 'No. of Bathrooms from', placeholder: 'Enter starting Bathroom number', state: 'No. of Bathrooms from', star: false, dropdownData: null },
    { name: 'No. of Bathrooms to', placeholder: 'Enter highest Bathroom number', state: 'No. of Bathrooms to', star: false, dropdownData: null },
    { name: 'Total Floor', placeholder: 'Enter total floor', state: 'totalFloor', star: false, dropdownData: null },
]

const amenities = ['24by7 Water','CCTV Camera','Gated Society','Gym','Internet Connectivity',
 'Jogging Track','Kids Play Area','Kids Play Pool','Large Open Space','Laundry Services','Lift','Maintenance Staff',
 'Multipurpose Hall','Power Backup','RainWater Harvesting','Security','Swimming Pool','Visitor Parking','Waste Disposal'
]

const NewProject = () => {
    return (
        <div>
            <Header />
            <div className='mt-[80px]'>
                <div className={styles.postpropTitle}>New Projects</div>
                <div className='mt-5 px-[5%] sm:px-[8%]'>
                   <FormCatagories catagories={formCatagories}/>
                   <div className={styles.formCard}>
                      <InputList inputs={inputs}/>
                      <ButtonList title={'Amenities'} btnNames={amenities} initialName={''} classname={'mt-5'} required={true}/>
                      <ButtonList title={'Furnishing Type '} btnNames={['Furnished','Semi Furnished','Unfurnished',]} initialName={''} classname={'mt-5'}/>
                      {/* <input placeholder={item.placeholder} className={styles.input + 'mt-1'} /> */}
                   </div>
                </div>
            </div>
        </div>
    );
}

export default NewProject;
