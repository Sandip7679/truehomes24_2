import React from 'react';
import { ButtonList, CategoryTitle, DropdownInput, JoditTextEditor } from './PostPropertyComp';
import { styles } from '../../Styles/Styles';

const facing = ['North', 'East', 'South', 'West', 'North East', 'North West', 'South East', 'South West'];
const ownerShipTypes = ['Freehold', 'Leasehold', 'Power Of Attorney', 'Co Operative Society'];
const parkingTypes = ['4 Wheeler', '2 Wheeler', 'Both', 'None'];
const flooringTypes = ['Mosaic', 'Wooden', 'Marble', 'Granite', 'Vertified Tiles', 'Ceramic Tiles', 'Common Tiles', 'Marbonite'];
const views = ['Pool', 'Garden', 'Lake', 'Road'];
const furnishingStatus = ['Furinshed', 'Semi Furnished', 'Unfurnished'];
const amenities = ['24by7Water', 'CCTV Camera', 'Gated Society', 'Gym', 'Internet Connectivity', 'Jogging Track', 'Kid Play Area', 'Kid Play Pool'];

const Amenities = () => {
    return (
        <form className={styles.formCard}>
            <CategoryTitle title={'Amenities :'} icon={'fa fa-house'} />
            <div className='mt-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3'>
                <DropdownInput title={'Sale Price ( Rs. )'} required={true} placeholder={'Enter Sale price'} inputClass={'w-[100%] mt-2'} />
                <DropdownInput title={'Price/ Chataks ( Rs. )'} required={false} placeholder={'0'} inputClass={'w-[100%] mt-2'} />
                <div className='sm:ml-10 mt-5 flex-none'>
                    <div className={styles.textMedium + '-mt-[10px]'}>Price Negotiable<span className='text-red-500'>*</span></div>
                    <div className='flex gap-5 mt-2'>
                        <div className='flex'><input type='radio' name='price' className='mr-2 size-5 mt-[1px]' /> <span>Yes</span></div>
                        <div className='flex'> <input type='radio' name='price' className='mr-2 mt-[1px] size-5' /><span>No</span></div>
                    </div>
                </div>
            </div>
            <ButtonList title={'Facing '} btnNames={facing} classname={'mt-5'} />
            <ButtonList title={'Ownership'} btnNames={ownerShipTypes} classname={'mt-5'} />
            <ButtonList title={'Parking '} btnNames={parkingTypes} classname={'mt-5'} />
            <ButtonList title={'Types Of Flooring'} btnNames={flooringTypes} classname={'mt-5'} />
            <ButtonList title={'View'} btnNames={views} classname={'mt-5'} />
            <ButtonList title={'Furnishing Status'} btnNames={furnishingStatus} classname={'mt-5'} />
            <ButtonList title={'Furnishing Status'} btnNames={amenities} classname={'mt-5'} />
            <ButtonList title={'Ad Package'} required={true} initialName={'Featured Property - Rs. 10 / Day ( 15 Images + 1 Video'} btnNames={['Featured Property - Rs. 10 / Day ( 15 Images + 1 Video']} classname={'mt-5'} />
            <JoditTextEditor title={'About Property'} />
            <JoditTextEditor title={'About Builder'} />
            <div className='mt-5'>
                <span >Embedded Location<span className='text-red-600'>*</span></span>
                <textarea placeholder='Copy & Past Google Map Embed Location' className={styles.input + ' mt-2'} />
            </div>
            <div className='my-7 flex gap-5'>
                <button className={styles.formBtn}>Back</button>
                <button type='submit' className={styles.formBtn}>Save & Next</button>
            </div>
        </form>
    );
}

export default Amenities;
