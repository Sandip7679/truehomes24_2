import React, { useEffect, useState } from 'react';
import { styles } from '../../Styles/Styles';
import { AreaInputs, ButtonList, CategoryTitle, DropdownInput, InputList } from './PostPropertyComp';
import { useDispatch, useSelector } from 'react-redux';
import { setPostPropertyFormData } from '../../Redux/reducer/User';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

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
const subLocalities = [
    { label: 'subLocality1', value: 'subLocality1' },
    { label: 'subLocality2', value: 'subLocality2' },
    { label: 'subLocality3', value: 'subLocality3' },
]
const projectNames = [
    { label: 'projectName1', value: 'projectName1' },
    { label: 'projectName2', value: 'projectName2' },
    { label: 'projectName3', value: 'projectName3' },
]
const bedrooms = [
    { label: '0', value: '0' },
    { label: '1', value: '1' },
    { label: '1.5', value: '1.5' },
    { label: '2', value: '2' },
    { label: '2.5', value: '2.5' },
    { label: '3', value: '3' },
    { label: '3.5', value: '3.5' },
    { label: '4', value: '4' },
    { label: '4.5', value: '4.5' },
    { label: '5', value: '5' },
    { label: '5.5', value: '5.5' },
    { label: '6', value: '6' },
    { label: '6.5', value: '6.5' },
    { label: '7', value: '7' },
    { label: '7.5', value: '7.5' },
    { label: '8', value: '8' },
    { label: '8.5', value: '8.5' },
    { label: '9', value: '9' },
    { label: '9.5', value: '9.5' },
    { label: '10+', value: '10+' },
    // { label: '2', value: '2' },
];
const balconies = [
    { label: '0', value: '0' },
    { label: '1', value: '1' },
    { label: '2', value: '2' },
    { label: '3', value: '3' },
    { label: '4', value: '4' },
    { label: '5', value: '5' },
    { label: '6', value: '6' },
    { label: '7', value: '7' },
    { label: '8', value: '8' },
    { label: '9', value: '9' },
    { label: '10+', value: '10+' }
];
const bathrooms = [
    { label: '1', value: '1' },
    { label: '2', value: '2' },
    { label: '3', value: '3' },
    { label: '4', value: '4' },
    { label: '5+', value: '5+' }
];

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
// const units = ['sq.ft.', 'sq.yards', 'sq.m.', 'atres', 'cents', 'grounds', 'guntha', 'bigha', 'kottah']
const units = [
    { label: 'sq.ft.', value: 'sq.ft.' },
    { label: 'sq.yards', value: 'sq.yards' },
    { label: 'sq.m.', value: 'sq.m.' },
    { label: 'atres', value: 'atres' },
    { label: 'cents', value: 'cents' },
    { label: 'grounds', value: 'grounds' },
    { label: 'guntha', value: 'guntha' },
    { label: 'bigha', value: 'bigha' },
    { label: 'kottah', value: 'kottah' }
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
    const [inputErrorState, setInputErrState] = useState({ country: '', state: '' });
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        setAnimation(true);
    }, [])

    const onClickSave = () => {
        setCurrCategory('Amenities');
        dispatch(setPostPropertyFormData({ ...postPropertyFormData, propertyInfo: { ...postPropertyFormData.propertyInfo, completed: true } }));
        toast('Property information saved successfully !', { type: 'success' });
    }
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
                        <DropdownInput title={'Country'} options={countries} placeholder={'Select Country'} required={true}
                            value={postPropertyFormData.propertyInfo.country}
                            onChange={(e) => {
                                dispatch(setPostPropertyFormData({ ...postPropertyFormData, propertyInfo: { ...postPropertyFormData.propertyInfo, country: e.target.value } }));
                                if (inputErrorState.country) { setInputErrState(pre => ({ ...pre, country: '' })) };
                            }}
                        />
                        <DropdownInput title={'State'} options={indianStates} placeholder={'Select State'} required={true}
                            value={postPropertyFormData.propertyInfo.state}
                            onChange={(e) => {
                                dispatch(setPostPropertyFormData({ ...postPropertyFormData, propertyInfo: { ...postPropertyFormData.propertyInfo, state: e.target.value } }));
                                if (inputErrorState.state) { setInputErrState(pre => ({ ...pre, state: '' })) };
                            }}
                        />
                        <DropdownInput title={'City'} options={Cities} placeholder={'Select City'} required={true}
                            value={postPropertyFormData.propertyInfo.city}
                            onChange={(e) => {
                                dispatch(setPostPropertyFormData({ ...postPropertyFormData, propertyInfo: { ...postPropertyFormData.propertyInfo, city: e.target.value } }));
                                if (inputErrorState.city) { setInputErrState(pre => ({ ...pre, city: '' })) };
                            }}
                        />
                        <DropdownInput title={'Locality'} options={Localities} placeholder={'Select Locality'} required={true}
                            value={postPropertyFormData.propertyInfo.locality}
                            onChange={(e) => {
                                dispatch(setPostPropertyFormData({ ...postPropertyFormData, propertyInfo: { ...postPropertyFormData.propertyInfo, locality: e.target.value } }));
                                if (inputErrorState.locality) { setInputErrState(pre => ({ ...pre, locality: '' })) };
                            }}
                        />
                        <DropdownInput title={'Sub Locality'} options={subLocalities} placeholder={'Select Sub Locality'} required={false}
                            value={postPropertyFormData.propertyInfo.subLocality}
                            onChange={(e) => {
                                dispatch(setPostPropertyFormData({ ...postPropertyFormData, propertyInfo: { ...postPropertyFormData.propertyInfo, subLocality: e.target.value } }));
                                // if (inputErrorState.subLocality) { setInputErrState(pre => ({ ...pre, subLocality: '' })) };
                            }}
                        />
                        <DropdownInput title={'Project/Society'} options={projectNames} placeholder={'Select Project/Society'} required={true}
                            value={postPropertyFormData.propertyInfo.projectName}
                            onChange={(e) => {
                                dispatch(setPostPropertyFormData({ ...postPropertyFormData, propertyInfo: { ...postPropertyFormData.propertyInfo, projectName: e.target.value } }));
                                if (inputErrorState.projectName) { setInputErrState(pre => ({ ...pre, projectName: '' })) };
                            }}
                        />
                        <DropdownInput title={'Bedrooms'} options={bedrooms} placeholder={'Select Bedrooms'} required={true}
                            value={postPropertyFormData.propertyInfo.bedrooms}
                            onChange={(e) => {
                                dispatch(setPostPropertyFormData({ ...postPropertyFormData, propertyInfo: { ...postPropertyFormData.propertyInfo, bedrooms: e.target.value } }));
                                if (inputErrorState.bedrooms) { setInputErrState(pre => ({ ...pre, bedrooms: '' })) };
                            }}
                        />
                        <DropdownInput title={'Balconies'} options={balconies} placeholder={'Select Balconies'} required={true}
                            value={postPropertyFormData.propertyInfo.balcony}
                            onChange={(e) => {
                                dispatch(setPostPropertyFormData({ ...postPropertyFormData, propertyInfo: { ...postPropertyFormData.propertyInfo, balcony: e.target.value } }));
                                if (inputErrorState.balcony) { setInputErrState(pre => ({ ...pre, balcony: '' })) };
                            }}
                        />
                        <DropdownInput title={'Bathrooms'} options={bathrooms} placeholder={'Select Bathrooms'} required={true}
                            value={postPropertyFormData.propertyInfo.bathrooms}
                            onChange={(e) => {
                                dispatch(setPostPropertyFormData({ ...postPropertyFormData, propertyInfo: { ...postPropertyFormData.propertyInfo, bathrooms: e.target.value } }));
                                if (inputErrorState.bathrooms) { setInputErrState(pre => ({ ...pre, bathrooms: '' })) };
                            }}
                        />
                        <DropdownInput title={'Property On Floor'} placeholder={'Numbers only'} required={false}
                            value={postPropertyFormData.propertyInfo.propertyOnFloor}
                            onChange={(e) => {
                                if (/^[0-9]*$/.test(e.target.value)) {
                                    dispatch(setPostPropertyFormData({ ...postPropertyFormData, propertyInfo: { ...postPropertyFormData.propertyInfo, propertyOnFloor: e.target.value } }));
                                    if (inputErrorState.propertyOnFloor) { setInputErrState(pre => ({ ...pre, propertyOnFloor: '' })) };
                                }
                            }}
                        />
                        <DropdownInput title={'No. Of Floor'} placeholder={'Numbers only'} required={false}
                            value={postPropertyFormData.propertyInfo.noOfFloor}
                            onChange={(e) => {
                                if (/^[0-9]*$/.test(e.target.value)) {
                                    dispatch(setPostPropertyFormData({ ...postPropertyFormData, propertyInfo: { ...postPropertyFormData.propertyInfo, noOfFloor: e.target.value } }));
                                    if (inputErrorState.noOfFloor) { setInputErrState(pre => ({ ...pre, noOfFloor: '' })) };
                                }
                            }}
                        />
                    </div>

                    {/* <AreaInputs inputDatas={areasInputs} /> */}
                    <div className='mt-5 grid grid-cols-1 sm:grid-cols-2 gap-[5%]'>
                        <div>
                            <div className='flex justify-between mt-1'>
                                <DropdownInput title={'BuiltUp Area'} placeholder={'Enter BuiltUp Area'} inputClass={'w-[70%]'} required={true}
                                    value={postPropertyFormData.propertyInfo.buildUpArea}
                                    onChange={(e) => {
                                        if (/^[0-9]*$/.test(e.target.value)) {
                                            dispatch(setPostPropertyFormData({ ...postPropertyFormData, propertyInfo: { ...postPropertyFormData.propertyInfo, buildUpArea: e.target.value } }));
                                            if (inputErrorState.buildUpArea) { setInputErrState(pre => ({ ...pre, buildUpArea: '' })) };
                                        }
                                    }}
                                />
                                <DropdownInput title={'Units'} placeholder={'Please Select'} options={units} inputClass={'w-[27%]'} required={true}
                                    value={postPropertyFormData.propertyInfo.buildUpUnit}
                                    onChange={(e) => {
                                        dispatch(setPostPropertyFormData({ ...postPropertyFormData, propertyInfo: { ...postPropertyFormData.propertyInfo, buildUpUnit: e.target.value } }));
                                        if (inputErrorState.buildUpUnit) { setInputErrState(pre => ({ ...pre, buildUpUnit: '' })) };
                                    }}
                                />
                            </div>
                        </div>
                        <div>
                            <div className='flex justify-between mt-1'>
                                <DropdownInput title={'Carpet Area'} placeholder={'Enter Carpet Area'} inputClass={'w-[70%]'} required={false}
                                    value={postPropertyFormData.propertyInfo.carpetArea}
                                    onChange={(e) => {
                                        if (/^[0-9]*$/.test(e.target.value)) {
                                            dispatch(setPostPropertyFormData({ ...postPropertyFormData, propertyInfo: { ...postPropertyFormData.propertyInfo, carpetArea: e.target.value } }));
                                            // if (inputErrorState.carpetArea) { setInputErrState(pre => ({ ...pre, carpetArea: '' })) };
                                        }
                                    }}
                                />
                                <DropdownInput title={'Units'} placeholder={'Please Select'} options={units} inputClass={'w-[27%]'} required={false}
                                    value={postPropertyFormData.propertyInfo.carpetUnit}
                                    onChange={(e) => {
                                        dispatch(setPostPropertyFormData({ ...postPropertyFormData, propertyInfo: { ...postPropertyFormData.propertyInfo, carpetUnit: e.target.value } }));
                                        // if (inputErrorState.carpetUnit) { setInputErrState(pre => ({ ...pre, carpetUnit: '' })) };
                                    }}
                                />
                            </div>
                        </div>
                    </div>

                    <div className='mt-5 sm:flex  gap-[5%]'>
                        <ButtonList title={'Status'} btnNames={propertyStatus}
                            required={true} classname={'w-[40%] mt-3'}
                            value={postPropertyFormData.propertyInfo.propertyStatus}
                            onClick={(item) => dispatch(setPostPropertyFormData({ ...postPropertyFormData, propertyInfo: { ...postPropertyFormData.propertyInfo, propertyStatus: item } }))}
                        />
                        <div className='sm:w-[55%] mt-3'>
                            <p>Available From</p>
                            <div className='sm:flex gap-[4%] '>
                                <DropdownInput options={months} placeholder={'Month'} inputClass={'w-[100%] max-w-[200px] mt-2'}
                                    value={postPropertyFormData.propertyInfo.month}
                                    onChange={(e) => {
                                        dispatch(setPostPropertyFormData({ ...postPropertyFormData, propertyInfo: { ...postPropertyFormData.propertyInfo, month: e.target.value } }));
                                        if (inputErrorState.month) { setInputErrState(pre => ({ ...pre, month: '' })) };
                                    }}
                                />
                                <DropdownInput options={years} placeholder={'Year'} inputClass={'w-[100%] max-w-[200px] mt-2'}
                                    value={postPropertyFormData.propertyInfo.year}
                                    onChange={(e) => {
                                        dispatch(setPostPropertyFormData({ ...postPropertyFormData, propertyInfo: { ...postPropertyFormData.propertyInfo, year: e.target.value } }));
                                        if (inputErrorState.year) { setInputErrState(pre => ({ ...pre, year: '' })) };
                                    }}
                                />
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
                            <p>RERA Id</p>
                            <input required placeholder='RERA Id' className={styles.input + 'mt-2 pl-5'}
                                value={postPropertyFormData.propertyInfo.reraId}
                                onChange={(e) => {
                                    dispatch(setPostPropertyFormData({ ...postPropertyFormData, propertyInfo: { ...postPropertyFormData.propertyInfo, reraId: e.target.value } }));
                                    // if (inputErrorState.reraId) { setInputErrState(pre => ({ ...pre, reraId: '' })) };
                                }}
                            />
                        </div>
                    </div>
                    <div className='mt-5 flex gap-5'>
                        <button className={styles.formBtn}
                            onClick={() => {
                                if (login_status) {
                                    navigate('/dashboard/my-property/active');
                                    window.scrollTo({ top: 0, behavior: 'smooth' });
                                } else {
                                    setCurrCategory('General Info');
                                }
                            }}>
                            Back
                        </button>
                        <button className={styles.formBtn} onClick={onClickSave}>
                            Save & Next
                        </button>
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
