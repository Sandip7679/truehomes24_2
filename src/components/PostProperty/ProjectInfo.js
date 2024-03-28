import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Select from 'react-select';
import { setPostPropertyFormData } from '../../Redux/reducer/User';
import { toast } from 'react-toastify';
import { ButtonList, DropdownInput, JoditTextEditor } from './PostPropertyComp';
import { styles } from '../../Styles/Styles';

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


const amenities = ['24by7 Water', 'CCTV Camera', 'Gated Society', 'Gym', 'Internet Connectivity',
    'Jogging Track', 'Kids Play Area', 'Kids Play Pool', 'Large Open Space', 'Laundry Services', 'Lift', 'Maintenance Staff',
    'Multipurpose Hall', 'Power Backup', 'RainWater Harvesting', 'Security', 'Swimming Pool', 'Visitor Parking', 'Waste Disposal'
]

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
const units = ['sq.ft.', 'sq.yards', 'sq.m.', 'atres', 'cents', 'grounds', 'guntha', 'bigha', 'kottah'];
const ProjectInfo = ({ setCurrCategory, category }) => {
    const [selectedOption, setSelectedOption] = useState(null);
    const { postPropertyFormData } = useSelector(state => state.User);
    const [inputErrStatus, setInputErrStatus] = useState({});
    const dispatch = useDispatch();

    const onClickContinue = () => {
        setCurrCategory(category);
        toast('New project has been creacted successfully !', { type: 'success' });
        dispatch(setPostPropertyFormData({ ...postPropertyFormData, newProjectInfo: { ...postPropertyFormData.newProjectInfo, completed: true } }));
        window.scrollTo({ top: 0 });
    }
    return (
        <div>
            <div className={'mt-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 lg:gap-5'}>
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
                <DropdownInput title={'Property Type'} options={propTypesDropdownData} placeholder={'Select Property Type'} required={true}
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
            <ButtonList title={'Amenities'} btnNames={amenities} classname={'mt-5'} required={true}
                value={postPropertyFormData.newProjectInfo.amenities}
                onClick={(item) => dispatch(setPostPropertyFormData({ ...postPropertyFormData, newProjectInfo: { ...postPropertyFormData.newProjectInfo, amenities: item } }))}
            />
            <ButtonList title={'Furnishing Type '} btnNames={['Furnished', 'Semi Furnished', 'Unfurnished']} initialName={''} classname={'mt-5'}
                value={postPropertyFormData.newProjectInfo.furnishingType}
                onClick={(item) => dispatch(setPostPropertyFormData({ ...postPropertyFormData, newProjectInfo: { ...postPropertyFormData.newProjectInfo, furnishingType: item } }))}
            />
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
            {/* <AreaInputs inputDatas={areasInputs} /> */}
            <div className='mt-5 grid grid-cols-1 sm:grid-cols-2 gap-[5%]'>
                <div className='flex justify-between mt-1'>
                    <DropdownInput title={'Area from'} placeholder={'Enter Area from'} inputClass={'w-[70%]'} required={true}
                        value={postPropertyFormData.newProjectInfo.areaFrom}
                        onChange={(e) => {
                            dispatch(setPostPropertyFormData({ ...postPropertyFormData, newProjectInfo: { ...postPropertyFormData.newProjectInfo, areaFrom: e.target.value } }));
                            if (inputErrStatus.areaFrom) { setInputErrStatus(pre => ({ ...pre, areaFrom: '' })) };
                        }}
                    />
                    <DropdownInput title={'Units'} placeholder={'Please Select'} options={units} inputClass={'w-[27%]'} required={true}
                        value={postPropertyFormData.newProjectInfo.areaFromUnit}
                        onChange={(e) => {
                            dispatch(setPostPropertyFormData({ ...postPropertyFormData, newProjectInfo: { ...postPropertyFormData.newProjectInfo, areaFromUnit: e.target.value } }));
                            if (inputErrStatus.areaFromUnit) { setInputErrStatus(pre => ({ ...pre, areaFromUnit: '' })) };
                        }}
                    />
                </div>
                <div className='flex justify-between mt-1'>
                    <DropdownInput title={'Area to'} placeholder={'Enter Area to'} inputClass={'w-[70%]'} required={true}
                        value={postPropertyFormData.newProjectInfo.areaTo}
                        onChange={(e) => {
                            dispatch(setPostPropertyFormData({ ...postPropertyFormData, newProjectInfo: { ...postPropertyFormData.newProjectInfo, areaTo: e.target.value } }));
                            if (inputErrStatus.areaTo) { setInputErrStatus(pre => ({ ...pre, areaTo: '' })) };
                        }}
                    />
                    <DropdownInput title={'Units'} placeholder={'Please Select'} options={units} inputClass={'w-[27%]'} required={true}
                        value={postPropertyFormData.newProjectInfo.areaToUnit}
                        onChange={(e) => {
                            dispatch(setPostPropertyFormData({ ...postPropertyFormData, newProjectInfo: { ...postPropertyFormData.newProjectInfo, areaToUnit: e.target.value } }));
                            if (inputErrStatus.areaToUnit) { setInputErrStatus(pre => ({ ...pre, areaToUnit: '' })) };
                        }}
                    />
                </div>
            </div>

            <div className={'mt-5 grid grid-cols-1 sm:grid-cols-2 gap-5'}>
                <DropdownInput title={'Price from (in Rs)'} placeholder={'Enter your price from'} required={true}
                    value={postPropertyFormData.newProjectInfo.priceFrom}
                    onChange={(e) => {
                        dispatch(setPostPropertyFormData({ ...postPropertyFormData, newProjectInfo: { ...postPropertyFormData.newProjectInfo, priceFrom: e.target.value } }));
                        if (inputErrStatus.priceFrom) { setInputErrStatus(pre => ({ ...pre, priceFrom: '' })) };
                    }}
                />
                <DropdownInput title={'Price to (in Rs)'} placeholder={'Enter your price from'} required={true}
                    value={postPropertyFormData.newProjectInfo.priceTo}
                    onChange={(e) => {
                        dispatch(setPostPropertyFormData({ ...postPropertyFormData, newProjectInfo: { ...postPropertyFormData.newProjectInfo, priceTo: e.target.value } }));
                        if (inputErrStatus.priceTo) { setInputErrStatus(pre => ({ ...pre, priceTo: '' })) };
                    }}
                />
                <DropdownInput title={'Builder name'} placeholder={'Enter ypur builder name'} required={true}
                    value={postPropertyFormData.newProjectInfo.builderName}
                    onChange={(e) => {
                        dispatch(setPostPropertyFormData({ ...postPropertyFormData, newProjectInfo: { ...postPropertyFormData.newProjectInfo, builderName: e.target.value } }));
                        if (inputErrStatus.builderName) { setInputErrStatus(pre => ({ ...pre, builderName: '' })) };
                    }}
                />
                <DropdownInput title={'Project status'} options={projectStatus} placeholder={'Select One'} required={true}
                    value={postPropertyFormData.newProjectInfo.projectStaus}
                    onChange={(e) => {
                        dispatch(setPostPropertyFormData({ ...postPropertyFormData, newProjectInfo: { ...postPropertyFormData.newProjectInfo, projectStaus: e.target.value } }));
                        if (inputErrStatus.projectStaus) { setInputErrStatus(pre => ({ ...pre, projectStaus: '' })) };
                    }}
                />
            </div>

            <JoditTextEditor title={'Description'} />
            <JoditTextEditor title={'About Builder'} />
            <div className='mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3'>
                <DropdownInput title={'Project Link'} placeholder={'Example:https//www.truehomes24.com'} required={true}
                    value={postPropertyFormData.newProjectInfo.projectLink}
                    onChange={(e) => {
                        dispatch(setPostPropertyFormData({ ...postPropertyFormData, newProjectInfo: { ...postPropertyFormData.newProjectInfo, projectLink: e.target.value } }));
                        if (inputErrStatus.projectLink) { setInputErrStatus(pre => ({ ...pre, projectLink: '' })) };
                    }}
                />
                <DropdownInput title={'Image'} placeholder={'Example:https//www.truehomes24.com'} required={true} type={'file'}
                    value={postPropertyFormData.newProjectInfo.image}
                    onChange={(e) => {
                        dispatch(setPostPropertyFormData({ ...postPropertyFormData, newProjectInfo: { ...postPropertyFormData.newProjectInfo, image: e.target.value } }));
                        if (inputErrStatus.image) { setInputErrStatus(pre => ({ ...pre, image: '' })) };
                    }}
                />
                <DropdownInput title={'Video'} placeholder={'Example:https//www.truehomes24.com'} required={true} type={'file'}
                    value={postPropertyFormData.newProjectInfo.video}
                    onChange={(e) => {
                        dispatch(setPostPropertyFormData({ ...postPropertyFormData, newProjectInfo: { ...postPropertyFormData.newProjectInfo, video: e.target.value } }));
                        if (inputErrStatus.video) { setInputErrStatus(pre => ({ ...pre, video: '' })) };
                    }}
                />
            </div>
            <div className='mt-5'>
                <button type='submit' className={styles.formBtn} onClick={onClickContinue}>Continue</button>
            </div>
        </div>
    );
}

export default ProjectInfo;
