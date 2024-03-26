import React, { useEffect, useState } from 'react';
import Select from 'react-select';

import { AreaInputs, ButtonList, DropdownInput, InputList, JoditTextEditor } from '../../components/PostProperty/PostPropertyComp';
import { styles } from '../../Styles/Styles';
import { useDispatch, useSelector } from 'react-redux';
import { setPostPropertyFormData } from '../../Redux/reducer/User';

const countries = ['India', 'Singapore', 'UAE', 'United States'];
const indianStates = [
    'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh', 'Goa', 'Gujarat', 'Haryana',
    'Himachal Pradesh', 'Jharkhand', 'Karnataka', 'Kerala', 'Madhya Pradesh', 'Maharashtra', 'Manipur',
    'Meghalaya', 'Mizoram', 'Nagaland', 'Odisha', 'Punjab', 'Rajasthan', 'Sikkim', 'Tamil Nadu', 'Telangana',
    'Tripura', 'Uttar Pradesh', 'Uttarakhand', 'West Bengal', 'Andaman and Nicobar Islands', 'Chandigarh',
    'Dadra and Nagar Haveli and Daman and Diu', 'Lakshadweep', 'Delhi', 'Puducherry'
];

const Cities = ['Kolkata', 'Pune', 'Delhi'];
const propTypesDropdownData = ['Apartment', 'Independent House/Villa', 'Shop/Showroom'];
const projectStatus = ['Ongoing', 'Upcoming', 'Completed', 'Sold Out'];

const inputs = [
    { name: 'Country', placeholder: 'Select Country', state: 'country', star: true, dropdownData: countries },
    { name: 'State', placeholder: 'Select State', state: 'state', star: true, dropdownData: indianStates },
    { name: 'City', placeholder: 'Select City', state: 'city', star: true, dropdownData: Cities },
    { name: 'Locality', placeholder: 'Select Locality', state: 'locality', star: true, dropdownData: null },
    { name: 'Sub Locality', placeholder: 'Select Sub Locality', state: 'subLocality', star: false, dropdownData: null },
    { name: 'Society Name', placeholder: 'Select Society Name', state: 'Society Name', star: true, dropdownData: null },
    { name: 'Property Type', placeholder: 'Select Property Type', state: 'Property Type', star: false, dropdownData: propTypesDropdownData },
    { name: 'Bedroom from (Ex. 1BHK)', placeholder: 'Enter Bedroom from', state: 'Bedroom from', star: false, dropdownData: null },
    { name: 'Bedroom to (Ex. 1BHK)', placeholder: 'Enter Bedroom to', state: 'Bedroom to', star: false, dropdownData: null },
    { name: 'No. of Bathrooms from', placeholder: 'Enter starting Bathroom number', state: 'No. of Bathrooms from', star: false, dropdownData: null },
    { name: 'No. of Bathrooms to', placeholder: 'Enter highest Bathroom number', state: 'No. of Bathrooms to', star: false, dropdownData: null },
    { name: 'Total Floor', placeholder: 'Enter total floor', state: 'totalFloor', star: false, dropdownData: null },
]

const inputs2 = [
    { name: 'Price from (in Rs)', placeholder: 'Enter ypur price from', state: 'priceFrom', star: true, dropdownData: null },
    { name: 'Price to (in Rs)', placeholder: 'Enter ypur price to', state: 'priceto', star: true, dropdownData: null },
    { name: 'Builder name', placeholder: 'Enter ypur builder name', state: 'buildername', star: true, dropdownData: null },
    { name: 'Project status', placeholder: 'Select One', state: 'projectStatus', star: true, dropdownData: projectStatus },
];

const amenities = ['24by7 Water', 'CCTV Camera', 'Gated Society', 'Gym', 'Internet Connectivity',
    'Jogging Track', 'Kids Play Area', 'Kids Play Pool', 'Large Open Space', 'Laundry Services', 'Lift', 'Maintenance Staff',
    'Multipurpose Hall', 'Power Backup', 'RainWater Harvesting', 'Security', 'Swimming Pool', 'Visitor Parking', 'Waste Disposal'
]

const areasInputs = [
    { name: 'Area from', star: true },
    { name: 'Area to', star: true }
];

const furnishingItem = [
    { value: 'Ari Conditioner', label: 'Ari Conditioner' },
    { value: 'Bed', label: 'Bed' },
    { value: 'Book Case', label: 'Book Case' },
    { value: 'Chairs', label: 'Chairs' },
    { value: 'Chimney', label: 'Chimney' },
    { value: 'Curtain', label: 'Curtain' },
    { value: 'Desk', label: 'Desk' },
    { value: 'Dining Table', label: 'Dining Table' },
    { value: 'Dinerware', label: 'Dinerware' },
    { value: 'Bath rugs', label: 'Bath rugs' },
    { value: 'DVD Player', label: 'DVD Player' },
    { value: 'Exhaust Fan', label: 'Exhaust Fan' },
    { value: 'Fan', label: 'Fan' },
    { value: 'Food storage containers', label: 'Food storage containers' },
    { value: 'Iron Board', label: 'Iron Board' },
    { value: 'Gas Stove', label: 'Gas Stove' },
    { value: 'Hair Dryer', label: 'Hair Dryer' },
    { value: 'Smart TV', label: 'Hair Dryer' },
    { value: 'Sofa', label: 'Sofa' },
    { value: 'Table Lamps', label: 'Table Lamps' },
    { value: 'Washing machine', label: 'Washing machine' }
];
const NewProjectInfo = () => {
    const [selectedOption, setSelectedOption] = useState(null);
    const [animation, setAnimation] = useState(false);
    const { postPropertyFormData } = useSelector(state => state.User);
    const [inputErrStatus, setInputErrStatus] = useState({});
    const dispatch = useDispatch();

    useEffect(() => {
        setAnimation(true);
    }, [])

    return (
        <div className={'mt-16 ' + (animation ? 'transition-transform ease-in-out transform -translate-y-10 duration-1000' : '')}>
            {/* <InputList inputs={inputs} /> */}
            <div className={'mt-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3'}>
                <DropdownInput title={'Country'} options={countries} placeholder={'Select Country'} required={true}
                    value={postPropertyFormData.newProjectInfo.country}
                    onChange={(e) => {
                        dispatch(setPostPropertyFormData({ ...postPropertyFormData, newProjectInfo: { ...postPropertyFormData.newProjectInfo, country: e.target.value } }));
                        if (inputErrStatus.country) { setInputErrStatus(pre => ({ ...pre, country: '' })) };
                    }}
                />
                <DropdownInput title={'State'} options={indianStates} placeholder={'Select State'} required={true}
                    value={postPropertyFormData.newProjectInfo.state}
                    onChange={(e) => {
                        dispatch(setPostPropertyFormData({ ...postPropertyFormData, newProjectInfo: { ...postPropertyFormData.newProjectInfo, state: e.target.value } }));
                        if (inputErrStatus.state) { setInputErrStatus(pre => ({ ...pre, state: '' })) };
                    }}
                />
                <DropdownInput title={'City'} options={Cities} placeholder={'Select City'} required={true}
                    value={postPropertyFormData.newProjectInfo.city}
                    onChange={(e) => {
                        dispatch(setPostPropertyFormData({ ...postPropertyFormData, newProjectInfo: { ...postPropertyFormData.newProjectInfo, city: e.target.value } }));
                        if (inputErrStatus.city) { setInputErrStatus(pre => ({ ...pre, city: '' })) };
                    }}
                />
                <DropdownInput title={'Locality'} placeholder={'Select Locality'} required={true}
                    value={postPropertyFormData.newProjectInfo.locality}
                    onChange={(e) => {
                        dispatch(setPostPropertyFormData({ ...postPropertyFormData, newProjectInfo: { ...postPropertyFormData.newProjectInfo, locality: e.target.value } }));
                        if (inputErrStatus.locality) { setInputErrStatus(pre => ({ ...pre, locality: '' })) };
                    }}
                />
                <DropdownInput title={'Sub Locality'} placeholder={'Select Sub Locality'} required={false}
                    value={postPropertyFormData.newProjectInfo.subLocality}
                    onChange={(e) => {
                        dispatch(setPostPropertyFormData({ ...postPropertyFormData, newProjectInfo: { ...postPropertyFormData.newProjectInfo, subLocality: e.target.value } }));
                        if (inputErrStatus.subLocality) { setInputErrStatus(pre => ({ ...pre, subLocality: '' })) };
                    }}
                />
                <DropdownInput title={'Society Name'} placeholder={'Select Society Name'} required={true}
                    value={postPropertyFormData.newProjectInfo.societyName}
                    onChange={(e) => {
                        dispatch(setPostPropertyFormData({ ...postPropertyFormData, newProjectInfo: { ...postPropertyFormData.newProjectInfo, societyName: e.target.value } }));
                        if (inputErrStatus.societyName) { setInputErrStatus(pre => ({ ...pre, societyName: '' })) };
                    }}
                />
                <DropdownInput title={'Property Type'} options={propTypesDropdownData} placeholder={'Select Property Type'} required={false}
                    value={postPropertyFormData.newProjectInfo.propertyType}
                    onChange={(e) => {
                        dispatch(setPostPropertyFormData({ ...postPropertyFormData, newProjectInfo: { ...postPropertyFormData.newProjectInfo, propertyType: e.target.value } }));
                        if (inputErrStatus.propertyType) { setInputErrStatus(pre => ({ ...pre, propertyType: '' })) };
                    }}
                />
                <DropdownInput title={'Bedroom from (Ex. 1BHK)'} placeholder={'Enter Bedroom from'} required={false}
                    value={postPropertyFormData.newProjectInfo.bedroomFrom}
                    onChange={(e) => {
                        dispatch(setPostPropertyFormData({ ...postPropertyFormData, newProjectInfo: { ...postPropertyFormData.newProjectInfo, bedroomFrom: e.target.value } }));
                        if (inputErrStatus.bedroomFrom) { setInputErrStatus(pre => ({ ...pre, bedroomFrom: '' })) };
                    }}
                />
                <DropdownInput title={'Bedroom to (Ex. 1BHK)'} placeholder={'Enter Bedroom to'} required={false}
                    value={postPropertyFormData.newProjectInfo.bedRoomTo}
                    onChange={(e) => {
                        dispatch(setPostPropertyFormData({ ...postPropertyFormData, newProjectInfo: { ...postPropertyFormData.newProjectInfo, bedRoomTo: e.target.value } }));
                        if (inputErrStatus.bedRoomTo) { setInputErrStatus(pre => ({ ...pre, bedRoomTo: '' })) };
                    }}
                />
                <DropdownInput title={'No. of Bathrooms from'} placeholder={'Enter starting Bathroom number'} required={false}
                    value={postPropertyFormData.newProjectInfo.bathroomsFrom}
                    onChange={(e) => {
                        dispatch(setPostPropertyFormData({ ...postPropertyFormData, newProjectInfo: { ...postPropertyFormData.newProjectInfo, bathroomsFrom: e.target.value } }));
                        if (inputErrStatus.bathroomsFrom) { setInputErrStatus(pre => ({ ...pre, bathroomsFrom: '' })) };
                    }}
                />
                <DropdownInput title={'No. of Bathrooms to'} placeholder={'Enter highest Bathroom number'} required={false}
                    value={postPropertyFormData.newProjectInfo.bathroomsTo}
                    onChange={(e) => {
                        dispatch(setPostPropertyFormData({ ...postPropertyFormData, newProjectInfo: { ...postPropertyFormData.newProjectInfo, bathroomsTo: e.target.value } }));
                        if (inputErrStatus.bathroomsTo) { setInputErrStatus(pre => ({ ...pre, bathroomsTo: '' })) };
                    }}
                />
                <DropdownInput title={'Total Floor'} placeholder={'Enter total floor'} required={false}
                    value={postPropertyFormData.newProjectInfo.totalFloor}
                    onChange={(e) => {
                        dispatch(setPostPropertyFormData({ ...postPropertyFormData, newProjectInfo: { ...postPropertyFormData.newProjectInfo, totalFloor: e.target.value } }));
                        if (inputErrStatus.totalFloor) { setInputErrStatus(pre => ({ ...pre, totalFloor: '' })) };
                    }}
                />
            </div>
            <ButtonList title={'Amenities'} btnNames={amenities} initialName={''} classname={'mt-5'} required={true} />
            <ButtonList title={'Furnishing Type '} btnNames={['Furnished', 'Semi Furnished', 'Unfurnished',]} initialName={''} classname={'mt-5'} />
            <div className='mt-5'>
                <span className=''>Furnishing Item </span>
                <Select
                    defaultValue={selectedOption}
                    onChange={setSelectedOption}
                    options={furnishingItem}
                    isMulti
                    className='mt-2'
                />
            </div>
            <AreaInputs inputDatas={areasInputs} />
            <InputList inputs={inputs2} classname={'mt-5 grid grid-cols-1 sm:grid-cols-2 gap-3'} />
            <JoditTextEditor title={'Description'} />
            <JoditTextEditor title={'About Builder'} />
            <div className='mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3'>
                <DropdownInput title={'Project Link'} placeholder={'Example:https//www.truehomes24.com'} required={true} />
                <DropdownInput title={'Image'} placeholder={'Example:https//www.truehomes24.com'} required={true} type={'file'} />
                <DropdownInput title={'Video'} placeholder={'Example:https//www.truehomes24.com'} required={true} type={'file'} />
            </div>
            <div>
                {/* <div dangerouslySetInnerHTML={{ __html: value }} /> */}
            </div>
            <div className='mt-5'>
                <button type='submit' className={styles.formBtn}>Continue</button>
            </div>
        </div>
    );
}

export default NewProjectInfo;
