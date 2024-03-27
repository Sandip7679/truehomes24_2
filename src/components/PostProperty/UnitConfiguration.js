import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { styles } from '../../Styles/Styles';
import { setPostPropertyFormData } from '../../Redux/reducer/User';
import { ButtonList, DropdownInput } from './PostPropertyComp';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';


const unit = [
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
    { label: '10', value: '10' },
];

const unitTypes = ['Independent House/Villa', 'Apartment'];
const units = ['sq.ft.', 'sq.yards', 'sq.m.', 'acres', 'cents', 'grounds', 'guntha', 'bigha', 'kottah', 'karnal', 'ares', 'aankadam', 'hectares', 'chataks', 'perch', 'rood', 'biswa', 'marla']
const UnitConfiguration = ({ setCurrCategory }) => {
    const [animation, setAnimation] = useState(false);
    const { postPropertyFormData } = useSelector(state => state.User);
    const [inputErrStatus, setInputErrStatus] = useState({});
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        setAnimation(true);
    }, [])

    const onClickAddNew = () => {
        setCurrCategory('New Project Info');
        toast('Unit configuration submited successfully!', { type: 'success' });
        dispatch(setPostPropertyFormData({
            ...postPropertyFormData,
            newProjectGallery: { completed: false },
            newProjectInfo: {
                completed: false, country: '', state: '', city: '', locality: '', subLocality: '', societyName: '', propertyType: '', bedroomFrom: '', bedRoomTo: '',
                bathroomsFrom: '', bathroomsTo: '', totalFloor: '', amenities: '', furnishingType: '', furnishingItem: '', areaFrom: '', areaFromUnit: '', areaTo: '', areaToUnit: '',
                priceFrom: '', priceTo: '', builderName: '', projectStaus: '', description: '', aboutBuilder: '', projectLink: '', image: '', video: ''
            },
            unitConfig: {
                completed: false, unitFrom: '', unitTo: '', unitType: '', availability: '', builtUpAreaFrom: '', builtUpAreaTo: '', builtUpUnit: '', carpetAreaFrom: '', carpetAreaTo: '', carpetUnit: '',
                minPrice: '', maxPrice: '', liveInTourVideo: null, makePayment: false, addPackage: '1', floorPlanImage: null
            }
        }));
        window.scrollTo({ top: 0 });
    }

    const onClickMakePayment = () => {
        dispatch(setPostPropertyFormData({ ...postPropertyFormData, unitConfig: { ...postPropertyFormData.unitConfig, makePayment: true } }));
    }
    const proceedToPayment = () => {
        navigate('/membership');
    }

    return (
        <div className={'mt-16 ' + (animation ? 'transition-transform ease-in-out transform -translate-y-10 duration-1000' : '')}>
            {postPropertyFormData.newProjectInfo.completed ? <>
                <p className={styles.title3}>Add/Update Unit Configuration</p>
                <div className='border-b-[1px] border-gray-300 mt-2' />
                <div className='mt-5 grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-4 lg:gap-5'>
                    <DropdownInput title={'Unit From'} options={unit} placeholder={'Select Unit From'} required={false}
                        value={postPropertyFormData.unitConfig.unitFrom}
                        onChange={(e) => {
                            dispatch(setPostPropertyFormData({ ...postPropertyFormData, unitConfig: { ...postPropertyFormData.unitConfig, unitFrom: e.target.value } }));
                            if (inputErrStatus.unitFrom) { setInputErrStatus(pre => ({ ...pre, unitFrom: '' })) };
                        }}
                    />
                    <DropdownInput title={'Unit to'} options={unit} placeholder={'Select Unit to'} required={false}
                        value={postPropertyFormData.unitConfig.unitTo}
                        onChange={(e) => {
                            dispatch(setPostPropertyFormData({ ...postPropertyFormData, unitConfig: { ...postPropertyFormData.unitConfig, unitTo: e.target.value } }));
                            if (inputErrStatus.unitTo) { setInputErrStatus(pre => ({ ...pre, unitTo: '' })) };
                        }}
                    />
                    <DropdownInput title={'Unit Type'} options={unitTypes} placeholder={'Select Unit Type'} required={false}
                        value={postPropertyFormData.unitConfig.unitType}
                        onChange={(e) => {
                            dispatch(setPostPropertyFormData({ ...postPropertyFormData, unitConfig: { ...postPropertyFormData.unitConfig, unitType: e.target.value } }));
                            if (inputErrStatus.unitType) { setInputErrStatus(pre => ({ ...pre, unitType: '' })) };
                        }}
                    />
                    <DropdownInput title={'Availability'} options={['Yes', 'No']} placeholder={'Select Availability'} required={false}
                        value={postPropertyFormData.unitConfig.availability}
                        onChange={(e) => {
                            dispatch(setPostPropertyFormData({ ...postPropertyFormData, unitConfig: { ...postPropertyFormData.unitConfig, availability: e.target.value } }));
                            if (inputErrStatus.availability) { setInputErrStatus(pre => ({ ...pre, availability: '' })) };
                        }}
                    />
                </div>
                <div className='mt-5 grid grid-cols-1 sm:grid-cols-2 gap-5'>
                    <div className='mt-5 grid grid-cols-1 sm:grid-cols-3'>
                        <DropdownInput title={'Built-up Area From'} placeholder={'Enter Built-up area from'} required={false}
                            value={postPropertyFormData.unitConfig.builtUpAreaFrom}
                            onChange={(e) => {
                                dispatch(setPostPropertyFormData({ ...postPropertyFormData, unitConfig: { ...postPropertyFormData.unitConfig, builtUpAreaFrom: e.target.value } }));
                                if (inputErrStatus.builtUpAreaFrom) { setInputErrStatus(pre => ({ ...pre, builtUpAreaFrom: '' })) };
                            }}
                        />
                        <DropdownInput title={'Built-up Area to'} placeholder={'Enter Built-up area to'} required={false}
                            value={postPropertyFormData.unitConfig.builtUpAreaTo}
                            onChange={(e) => {
                                dispatch(setPostPropertyFormData({ ...postPropertyFormData, unitConfig: { ...postPropertyFormData.unitConfig, builtUpAreaTo: e.target.value } }));
                                if (inputErrStatus.builtUpAreaTo) { setInputErrStatus(pre => ({ ...pre, builtUpAreaTo: '' })) };
                            }}
                        />
                        <DropdownInput title={'Unit Measurement '} options={units} placeholder={'Select Measurement'} required={false} dropdownClass={'py-[8.5px]'}
                            value={postPropertyFormData.unitConfig.builtUpUnit}
                            onChange={(e) => {
                                dispatch(setPostPropertyFormData({ ...postPropertyFormData, unitConfig: { ...postPropertyFormData.unitConfig, builtUpUnit: e.target.value } }));
                                if (inputErrStatus.builtUpUnit) { setInputErrStatus(pre => ({ ...pre, builtUpUnit: '' })) };
                            }}
                        />
                    </div>
                    <div className='mt-5 grid grid-cols-1 sm:grid-cols-3'>
                        <DropdownInput title={'carpet Area From'} placeholder={'Enter carpet area from'} required={false}
                            value={postPropertyFormData.unitConfig.carpetAreaFrom}
                            onChange={(e) => {
                                dispatch(setPostPropertyFormData({ ...postPropertyFormData, unitConfig: { ...postPropertyFormData.unitConfig, carpetAreaFrom: e.target.value } }));
                                if (inputErrStatus.carpetAreaFrom) { setInputErrStatus(pre => ({ ...pre, carpetAreaFrom: '' })) };
                            }}
                        />
                        <DropdownInput title={'Carpet Area to'} placeholder={'Enter carpet area to'} required={false}
                            value={postPropertyFormData.unitConfig.carpetAreaTo}
                            onChange={(e) => {
                                dispatch(setPostPropertyFormData({ ...postPropertyFormData, unitConfig: { ...postPropertyFormData.unitConfig, carpetAreaTo: e.target.value } }));
                                if (inputErrStatus.carpetAreaTo) { setInputErrStatus(pre => ({ ...pre, carpetAreaTo: '' })) };
                            }}
                        />
                        <DropdownInput title={'Unit Measurement '} options={units} placeholder={'Select Measurement'} required={false} dropdownClass={'py-[8.5px]'}
                            value={postPropertyFormData.unitConfig.carpetUnit}
                            onChange={(e) => {
                                dispatch(setPostPropertyFormData({ ...postPropertyFormData, unitConfig: { ...postPropertyFormData.unitConfig, carpetUnit: e.target.value } }));
                                if (inputErrStatus.carpetUnit) { setInputErrStatus(pre => ({ ...pre, carpetUnit: '' })) };
                            }}
                        />
                    </div>

                </div>
                <div className='mt-5 grid grid-cols-1 sm:grid-cols-3 gap-5'>
                    <DropdownInput title={'Min. Price '} placeholder={'Enter minimum price'} required={false}
                        value={postPropertyFormData.unitConfig.minPrice}
                        onChange={(e) => {
                            dispatch(setPostPropertyFormData({ ...postPropertyFormData, unitConfig: { ...postPropertyFormData.unitConfig, minPrice: e.target.value } }));
                            if (inputErrStatus.minPrice) { setInputErrStatus(pre => ({ ...pre, minPrice: '' })) };
                        }}
                    />
                    <DropdownInput title={'Max. Price '} placeholder={'Enter maximum price'} required={false}
                        value={postPropertyFormData.unitConfig.maxPrice}
                        onChange={(e) => {
                            dispatch(setPostPropertyFormData({ ...postPropertyFormData, unitConfig: { ...postPropertyFormData.unitConfig, maxPrice: e.target.value } }));
                            if (inputErrStatus.maxPrice) { setInputErrStatus(pre => ({ ...pre, maxPrice: '' })) };
                        }}
                    />
                    <div>
                        <span className={styles.textMedium}>Live-in Tour (Video)</span>
                        <input className={styles.input + ' mt-1'} type='file' accept='video/*' />
                    </div>
                </div>
                <div className='mt-5'>
                    <span className={styles.textMedium}>Floor Plan Image</span>
                    <div className='flex w-[80%] mt-2'>
                        <select name="" className={styles.input + ' text-gray-500 '}
                            value={postPropertyFormData.unitConfig.floorPlanImage}
                            onChange={(e) => {
                                dispatch(setPostPropertyFormData({ ...postPropertyFormData, unitConfig: { ...postPropertyFormData.unitConfig, floorPlanImage: e.target.value } }));
                                if (inputErrStatus.floorPlanImage) { setInputErrStatus(pre => ({ ...pre, floorPlanImage: '' }))};
                            }}
                        >
                            <option value="">Select a floor plan Image</option>
                            {/* {options.map((item, index) => {
                            return (
                                <option key={index} className='text-sm sm:text-base text-gray-500' value={item.label ? item.value : item}>{item.label ? item.label : item}</option>
                            )
                        })} */}
                        </select>
                        <button className='px-2 border-[1px] border-gray-500 hover:bg-gray-500 hover:text-white flex-none'>Get Images</button>
                    </div>
                </div>
                <div className='my-7 flex gap-2'>
                    <button className={styles.formBtn}
                        onClick={() => {
                            setCurrCategory('Gallery');
                            window.scrollTo({ top: 0 });
                        }}
                    >Back</button>
                    <button type='submit' className={styles.formBtn} onClick={onClickAddNew} >Add New</button>
                    <button type='submit' className={'hover:bg-cyan-700 bg-cyan-600 text-white text-sm sm:text-base px-4 py-1 rounded '}
                        onClick={onClickMakePayment}
                    >Make Payment</button>
                </div>
                {postPropertyFormData.unitConfig.makePayment && <div>
                    <ButtonList title={'Add Package'} btnNames={[{ label: 'Top Selling Projects - Rs. 10 / Day ( 15 Images + 1 Video)', value: '1' }]} classname={'mt-5'}
                        value={postPropertyFormData.unitConfig.addPackage}
                        onClick={(item) => dispatch(setPostPropertyFormData({ ...postPropertyFormData, unitConfig: { ...postPropertyFormData.unitConfig, addPackage: item } }))}
                    />
                    <button className='mt-5 hover:bg-cyan-100 bg-cyan-50 rounded text-red-600 py-1 px-2'
                        onClick={proceedToPayment}
                    >Proceed to Payment</button>
                </div>}
            </>
                :
                <div className={(animation ? 'transition-opacity opacity-100 duration-500' : 'opacity-0') + ' bg-red-600 rounded text-white p-2 font-semibold'}>
                    Please submit new project info first
                </div>
            }
        </div>
    );
}

export default UnitConfiguration;
