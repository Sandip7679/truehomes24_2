import React, { useEffect, useState } from 'react';
import { styles } from '../../Styles/Styles';
import { AreaInputs, ButtonList, CategoryTitle, DropdownInput, InputList } from './PostPropertyComp';
import { useDispatch, useSelector } from 'react-redux';
import { setPostPropertyFormData } from '../../Redux/reducer/User';

const listedFor = [
    { label: 'Sale', value: 'Sale' },
    { label: 'Rent', value: 'Rent' },
]
const propertyTypes = [
    { label: 'Apartment', value: 'Apartment' },
    { label: 'Independent House/Villa', value: 'Independent House/Villa' },
    { label: 'Residential Land', value: 'Residential Land' },
    { label: 'Warehouse', value: 'Warehouse' },
    { label: 'Builder Floor', value: 'Builder Floor' },
    { label: 'Office Space', value: 'Office Space' },
    { label: 'Shop/Showroom', value: 'Shop/Showroom' },
    { label: 'Serviced Apartment/PG', value: 'Serviced Apartment/PG' },
    { label: 'Agricultural/Farm Land', value: 'Agricultural/Farm Land' },
    { label: 'Farm House', value: 'Farm House' },
    { label: 'Commercial Land', value: 'Commercial Land' },
]

const countries = [
    { label: 'India', value: 'India' },
    { label: 'Singapore', value: 'Singapore' },
    { label: 'UAE', value: 'UAE' },
    { label: 'United States', value: 'United States' },
]

const indianStates = [
    { label: 'Andhra Pradesh', value: 'Andhra Pradesh' },
    { label: 'Arunachal Pradesh', value: 'Arunachal Pradesh' },
    { label: 'Assam', value: 'Assam' },
    { label: 'Bihar', value: 'Bihar' },
    { label: 'Chhattisgarh', value: 'Chhattisgarh' },
    { label: 'Goa', value: 'Goa' },
    { label: 'Gujarat', value: 'Gujarat' },
    { label: 'Haryana', value: 'Haryana' },
    { label: 'Himachal Pradesh', value: 'Himachal Pradesh' },
    { label: 'Jharkhand', value: 'Jharkhand' }
]

// const indianStates = [
//     'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh', 'Goa', 'Gujarat', 'Haryana',
//     'Himachal Pradesh', 'Jharkhand', 'Karnataka', 'Kerala', 'Madhya Pradesh', 'Maharashtra', 'Manipur',
//     'Meghalaya', 'Mizoram', 'Nagaland', 'Odisha', 'Punjab', 'Rajasthan', 'Sikkim', 'Tamil Nadu', 'Telangana',
//     'Tripura', 'Uttar Pradesh', 'Uttarakhand', 'West Bengal', 'Andaman and Nicobar Islands', 'Chandigarh',
//     'Dadra and Nagar Haveli and Daman and Diu', 'Lakshadweep', 'Delhi', 'Puducherry'
// ];

const Cities = [
    { label: 'Kolkata', value: 'Kolkata' },
    { label: 'Pune', value: 'Pune' },
    { label: 'Delhi', value: 'Delhi' },
]
const Localities = [
    { label: 'locality1', value: 'locality1' },
    { label: 'locality2', value: 'locality2' },
    { label: 'locality3', value: 'locality3' },
]

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

// const propertyStatus = ['Under Construction', 'Ready to move', 'Upcoming', 'Sold Out'];
const propertyStatus = [
    { label: 'Under Construction', value: 'Under Construction' },
    { label: 'Ready to move', value: 'Ready to move' },
    { label: 'Upcoming', value: 'Upcoming' },
    { label: 'Sold Out', value: 'Sold Out' },
]
const nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
const months = nums.map((item, index) => `${index} Month`);
const years = nums.map((item, index) => `${index} Year`);

const PropertyInfo = ({ setCurrCategory }) => {
    const [animation, setAnimation] = useState(false);
    const { postPropertyFormData, login_status } = useSelector(state => state.User);
    const dispatch = useDispatch();

    useEffect(() => {
        setAnimation(true);
    }, [])
    return (
        <div className={'mt-16 ' + (animation ? 'transition-transform ease-in-out transform -translate-y-10 duration-1000' : '')}>
            {(postPropertyFormData.generalInfo.completed || login_status) ?
                <>
                    <CategoryTitle title={'Property Information :'} icon={'fa-regular fa-building'} />
                    <div className='md:flex gap-[5%]'>
                        <div className='mb-5 flex-none'>
                            <ButtonList title={'Listed For'} btnNames={listedFor} required={true}
                                value={postPropertyFormData.propertyInfo.listedFor}
                                onClick={(item) => dispatch(setPostPropertyFormData({ ...postPropertyFormData, propertyInfo: { ...postPropertyFormData.propertyInfo, listedFor: item } }))}
                            />
                        </div>
                        <ButtonList title={'Property Type'} btnNames={propertyTypes} required={true} value={postPropertyFormData.propertyInfo.propertyType}
                            onClick={(item) => dispatch(setPostPropertyFormData({ ...postPropertyFormData, propertyInfo: { ...postPropertyFormData.propertyInfo, propertyType: item } }))}
                        />
                    </div>
                    {/* <InputList inputs={inputs} /> */}
                    <div className={'mt-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3'}>
                        <DropdownInput title={'Country'} options={countries} placeholder={'Select Country'} required={true} />
                        <DropdownInput title={'State'} options={indianStates} placeholder={'Select State'} required={true} />
                        <DropdownInput title={'City'} options={Cities} placeholder={'Select City'} required={true} />
                        <DropdownInput title={'Locality'} options={Localities} placeholder={'Select Locality'} required={true} />
                        <DropdownInput title={'Sub Locality'} placeholder={'Select Sub Locality'} required={false} />
                        <DropdownInput title={'Project/Society'} placeholder={'Select Project/Society'} required={true} />
                        <DropdownInput title={'Bedrooms'} placeholder={'0'} required={true} />
                        <DropdownInput title={'Balconies'} placeholder={'Select Balconies'} required={true} />
                        <DropdownInput title={'Bathrooms'} placeholder={'Select Bathrooms'} required={true} />
                        <DropdownInput title={'Property On Floor'} placeholder={'Numbers only'} required={false} />
                        <DropdownInput title={'No. Of Floor'} placeholder={'Numbers only'} required={false} />
                    </div>

                    <AreaInputs inputDatas={areasInputs} />

                    <div className='mt-5 sm:flex  gap-[5%]'>
                        <ButtonList title={'Status'} btnNames={propertyStatus}
                            required={true} classname={'w-[40%] mt-3'}
                            value={postPropertyFormData.propertyInfo.propertyStatus}
                            onClick={(item) => dispatch(setPostPropertyFormData({ ...postPropertyFormData, propertyInfo: { ...postPropertyFormData.propertyInfo, propertyStatus: item } }))}
                        />
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
                        <button className={styles.formBtn}>Save & Next</button>
                    </div>
                </>
                :
                <div className={(animation ? 'transition-opacity opacity-100 duration-500' : 'opacity-0') + ' bg-red-600 rounded text-white p-2 font-semibold'}>
                    Please submit general information first
                </div>
            }

        </div>
    );
}

export default PropertyInfo;
