import React from 'react';
import { styles } from '../../Styles/Styles';
import { AreaInputs, ButtonList, CategoryTitle, DropdownInput, InputList } from './PostPropertyComp';


const propertyTypes = [
    'Apartment', 'Independent House/Villa', 'Residential Land', 'Warehouse', 'Builder Floor',
    'Office Space', 'Shop/Showroom', 'Serviced Apartment/PG', 'Agricultural/Farm Land', 'Farm House', 'Commercial Land',
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

const inputs = [
    { name: 'Country', placeholder: 'Select Country', state: 'country', star: true, dropdownData: countries },
    { name: 'State', placeholder: 'Select State', state: 'state', star: true, dropdownData: indianStates },
    { name: 'City', placeholder: 'Select City', state: 'city', star: true, dropdownData: Cities },
    { name: 'Locality', placeholder: 'Select Locality', state: 'locality', star: true, dropdownData: null },
    { name: 'Sub Locality', placeholder: 'Select Sub Locality', state: 'subLocality', star: false, dropdownData: null },
    { name: 'Project/Society', placeholder: 'Select Project/Society', state: 'Project/Society', star: true, dropdownData: null },
    { name: 'Bedrooms', placeholder: '0', state: 'Bedrooms', star: true, dropdownData: null },
    { name: 'Balconies', placeholder: '0', state: 'Balconies', star: true, dropdownData: null },
    { name: 'Bathrooms', placeholder: 'Select Bathrooms', state: 'Bathrooms', star: true, dropdownData: null },
    { name: 'Property On Floor', placeholder: 'Numbers only', state: 'propertyOnFloor', star: false, dropdownData: null },
    { name: 'No. Of Floor', placeholder: 'Numbers only', state: 'noOfFloor', star: false, dropdownData: null },
]

const areasInputs = [
    { name: 'BuiltUp Area', star: true },
    { name: 'Carapet Area', star: false }
]

const propertyStatus = ['Under Construction', 'Ready to move', 'Upcoming', 'Sold Out'];
const nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
const months = nums.map((item,index)=>`${index} Month`);
const years = nums.map((item,index)=>`${index} Year`);

const PropertyInfo = () => {
    return (
        <div>
            <form className={styles.formCard}>
                <CategoryTitle title={'Property Information :'} icon={'fa-regular fa-building'}/>
                <div className='md:flex gap-[5%]'>
                    <div className='mb-5 flex-none'>
                        <ButtonList title={'Listed For'} btnNames={['Sale', 'Rent']} initialName={'Sale'} required={true} />
                    </div>
                    <ButtonList title={'Property Type'} btnNames={propertyTypes} initialName={'Apartment'} required={true} />
                </div>
                <InputList inputs={inputs} />
                <AreaInputs inputDatas={areasInputs} />

                <div className='mt-5 sm:flex  gap-[5%]'>
                    <ButtonList title={'Status'} btnNames={propertyStatus}
                        initialName={'Under Construction'} required={true} classname={'w-[40%] mt-3'} />
                    <div className='sm:w-[55%] mt-3'>
                        <p>Available From</p>
                        <div className='sm:flex gap-[4%] '>
                            <DropdownInput options={months} placeholder={'Month'} inputClass={'w-[100%] max-w-[200px] mt-2'} />
                            <DropdownInput options={years} placeholder={'Year'} inputClass={'w-[100%] max-w-[200px] mt-2'} />
                        </div>
                    </div>
                </div>
                <div className='mt-5 sm:flex sm:gap-5'>
                    <div className='sm:w-[40%]'>
                        <p>Main Image<span className='text-red-500'>*</span></p>
                        <input required type='file' className={styles.input + 'text-gray-500 text-sm mt-2 py-[5px]'} />
                        <p className='text-gray-500 text-sm mt-2'>Allowed File type: jpg | png | jpeg | gif | bmp</p>
                        <p className='text-gray-500 text-sm'>Max Size Limit: 5 MB.</p>
                    </div>
                    <div className='sm:w-[55%]'>
                        <p>RERA Id<span className='text-red-500'>*</span></p>
                        <input required placeholder='RERA Id' className={styles.input + 'mt-2 pl-5'} />
                    </div>
                </div>
                <div className='mt-5 flex gap-5'>
                    <button className={styles.formBtn}>Back</button>
                    <button type='submit' className={styles.formBtn}>Save & Next</button>
                </div>
            </form>

        </div>
    );
}

export default PropertyInfo;
