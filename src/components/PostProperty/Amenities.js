import React, { useEffect, useState } from 'react';
import { ButtonList, CategoryTitle, DropdownInput, JoditTextEditor } from './PostPropertyComp';
import { styles } from '../../Styles/Styles';
import { useDispatch, useSelector } from 'react-redux';
import { setPostPropertyFormData } from '../../Redux/reducer/User';
import { toast } from 'react-toastify';

const facing = ['North', 'East', 'South', 'West', 'North East', 'North West', 'South East', 'South West'];
const ownerShipTypes = ['Freehold', 'Leasehold', 'Power Of Attorney', 'Co Operative Society'];
const parkingTypes = ['4 Wheeler', '2 Wheeler', 'Both', 'None'];
const flooringTypes = ['Mosaic', 'Wooden', 'Marble', 'Granite', 'Vertified Tiles', 'Ceramic Tiles', 'Common Tiles', 'Marbonite'];
const views = ['Pool', 'Garden', 'Lake', 'Road'];
const furnishingStatus = ['Furinshed', 'Semi Furnished', 'Unfurnished'];
const amenities = ['24by7Water', 'CCTV Camera', 'Gated Society', 'Gym', 'Internet Connectivity', 'Jogging Track', 'Kid Play Area', 'Kid Play Pool'];
const postPropertyPackages = [
    'Gold - Rs. 5 / Day ( 5 Images + 1 Video',
    'Diamond - Rs. 7 / Day ( 7 Images + 1 Video',
    'Platinum - Rs. 8 / Day ( 10 Images + 1 Video'
]
const featuredPackages = [
    'Featured Property - Rs. 10 / Day ( 15 Images + 1 Video'
]

const Amenities = ({ setCurrCategory }) => {
    const [animation, setAnimation] = useState(false);
    const { postPropertyFormData } = useSelector(state => state.User);
    const [inputErrStatus, setInputErrStatus] = useState({ salePrice: '', pricePerUnit: '' });
    const dispatch = useDispatch();

    useEffect(() => {
        setAnimation(true);
    }, [])

    const onClickSave = () => {
        setCurrCategory('Nearby Places');
        dispatch(setPostPropertyFormData({ ...postPropertyFormData, amenities: { ...postPropertyFormData.amenities, completed: true } }));
        toast('Amenities information saved successfully !', { type: 'success' });
        window.scrollTo({ top: 0,  });
    }

    return (
        <div className={'mt-16 ' + (animation ? 'transition-transform ease-in-out transform -translate-y-10 duration-1000' : '')}>
            {
                (postPropertyFormData.generalInfo.completed && postPropertyFormData.propertyInfo.completed) ? <>
                    <CategoryTitle title={'Amenities :'} icon={'fa fa-house'} />
                    <div className='mt-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3'>
                        <DropdownInput title={'Sale Price ( Rs. )'} required={true} placeholder={'Enter Sale price'} inputClass={'w-[100%] mt-2'}
                            value={postPropertyFormData.amenities.salePrice}
                            onChange={(e) => {
                                dispatch(setPostPropertyFormData({ ...postPropertyFormData, amenities: { ...postPropertyFormData.amenities, salePrice: e.target.value } }));
                                if (inputErrStatus.salePrice) { setInputErrStatus(pre => ({ ...pre, salePrice: '' })) };
                            }}
                        />
                        <DropdownInput title={`Price /${postPropertyFormData.propertyInfo.buildUpUnit} ( Rs. )`} required={false} placeholder={'0'} inputClass={'w-[100%] mt-2'}
                            value={postPropertyFormData.amenities.pricePerUnit}
                            onChange={(e) => {
                                dispatch(setPostPropertyFormData({ ...postPropertyFormData, amenities: { ...postPropertyFormData.amenities, pricePerUnit: e.target.value } }));
                                if (inputErrStatus.pricePerUnit) { setInputErrStatus(pre => ({ ...pre, pricePerUnit: '' })) };
                            }}
                        />
                        <div className='sm:ml-10 mt-5 flex-none'>
                            <div className={styles.textMedium + '-mt-[10px]'}>Price Negotiable<span className='text-red-500'>*</span></div>
                            <div className='flex gap-5 mt-2'>
                                <div className='flex'><input type='radio' name='price' className='mr-2 size-5 mt-[1px]'
                                    checked={postPropertyFormData.amenities.isPriceNegotiable == 'yes'}
                                    onClick={() => {
                                        dispatch(setPostPropertyFormData({ ...postPropertyFormData, amenities: { ...postPropertyFormData.amenities, isPriceNegotiable: 'yes' } }));
                                        if (inputErrStatus.isPriceNegotiable) { setInputErrStatus(pre => ({ ...pre, isPriceNegotiable: '' })) };
                                    }}
                                /> <span>Yes</span></div>
                                <div className='flex'> <input type='radio' name='price' className='mr-2 mt-[1px] size-5'
                                    checked={postPropertyFormData.amenities.isPriceNegotiable == 'no'}
                                    onClick={() => {
                                        dispatch(setPostPropertyFormData({ ...postPropertyFormData, amenities: { ...postPropertyFormData.amenities, isPriceNegotiable: 'no' } }));
                                        if (inputErrStatus.isPriceNegotiable) { setInputErrStatus(pre => ({ ...pre, isPriceNegotiable: '' })) };
                                    }}
                                /><span>No</span></div>
                            </div>
                        </div>
                    </div>
                    <ButtonList title={'Facing '} btnNames={facing} classname={'mt-5'}
                        value={postPropertyFormData.amenities.facing}
                        onClick={(item) => dispatch(setPostPropertyFormData({ ...postPropertyFormData, amenities: { ...postPropertyFormData.amenities, facing: item } }))}
                    />
                    <ButtonList title={'Ownership'} btnNames={ownerShipTypes} classname={'mt-5'}
                        value={postPropertyFormData.amenities.ownership}
                        onClick={(item) => dispatch(setPostPropertyFormData({ ...postPropertyFormData, amenities: { ...postPropertyFormData.amenities, ownership: item } }))}
                    />
                    <ButtonList title={'Parking '} btnNames={parkingTypes} classname={'mt-5'}
                        value={postPropertyFormData.amenities.parking}
                        onClick={(item) => dispatch(setPostPropertyFormData({ ...postPropertyFormData, amenities: { ...postPropertyFormData.amenities, parking: item } }))}
                    />
                    <ButtonList title={'Types Of Flooring'} btnNames={flooringTypes} classname={'mt-5'}
                        value={postPropertyFormData.amenities.flooringType}
                        onClick={(item) => dispatch(setPostPropertyFormData({ ...postPropertyFormData, amenities: { ...postPropertyFormData.amenities, flooringType: item } }))}
                    />
                    <ButtonList title={'View'} btnNames={views} classname={'mt-5'}
                        value={postPropertyFormData.amenities.view}
                        onClick={(item) => dispatch(setPostPropertyFormData({ ...postPropertyFormData, amenities: { ...postPropertyFormData.amenities, view: item } }))}
                    />
                    <ButtonList title={'Furnishing Status'} btnNames={furnishingStatus} classname={'mt-5'}
                        value={postPropertyFormData.amenities.furnishingStatus}
                        onClick={(item) => dispatch(setPostPropertyFormData({ ...postPropertyFormData, amenities: { ...postPropertyFormData.amenities, furnishingStatus: item } }))}
                    />
                    <ButtonList title={'Aminities'} btnNames={amenities} classname={'mt-5'}
                        value={postPropertyFormData.amenities.aminities}
                        onClick={(item) => dispatch(setPostPropertyFormData({ ...postPropertyFormData, amenities: { ...postPropertyFormData.amenities, aminities: item } }))}
                    />
                    <ButtonList title={'Ad Package'} required={true} btnNames={postPropertyFormData.type ? featuredPackages : postPropertyPackages} classname={'mt-5'}
                        value={postPropertyFormData.amenities.adPackage}
                        onClick={(item) => dispatch(setPostPropertyFormData({ ...postPropertyFormData, amenities: { ...postPropertyFormData.amenities, adPackage: item } }))}
                    />
                    <JoditTextEditor title={'About Property'}
                    // value={postPropertyFormData.amenities.ownership}
                    // onClick={(item) => dispatch(setPostPropertyFormData({ ...postPropertyFormData, amenities: { ...postPropertyFormData.amenities, ownership: item } }))}
                    />
                    <JoditTextEditor title={'About Builder'}
                    // value={postPropertyFormData.amenities.ownership}
                    // onClick={(item) => dispatch(setPostPropertyFormData({ ...postPropertyFormData, amenities: { ...postPropertyFormData.amenities, ownership: item } }))}
                    />
                    <div className='mt-5'>
                        <span >Embedded Location<span className='text-red-600'>*</span></span>
                        <textarea placeholder='Copy & Past Google Map Embed Location' className={styles.input + ' mt-2'} />
                    </div>
                    <div className='my-7 flex gap-5'>
                        <button className={styles.formBtn}
                            onClick={() => setCurrCategory('Property Info')}
                        >Back</button>
                        <button type='submit' className={styles.formBtn} onClick={onClickSave}>Save & Next</button>
                    </div>
                </>
                    :
                    <div className={(animation ? 'transition-opacity opacity-100 duration-500' : 'opacity-0') + ' bg-red-600 rounded text-white p-2 font-semibold'}>
                        Please submit {!postPropertyFormData.generalInfo.completed ? 'general' : 'property'} information first
                    </div>
            }

        </div>
    );
}

export default Amenities;
