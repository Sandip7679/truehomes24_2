import React from 'react';
import { CategoryTitle, DropdownInput } from './PostPropertyComp';
import { styles } from '../../Styles/Styles';

const Amenities = () => {
    return (
        <div>
            <CategoryTitle title={'Amenities :'} icon={'fa fa-house'} />
            <div className='mt-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3'>
                <DropdownInput title={'Sale Price ( Rs. )'} required={true} placeholder={'Enter Sale price'} inputClass={'w-[100%] mt-2'} />
                <DropdownInput title={'Price/ Chataks ( Rs. )'} required={false} placeholder={'0'} inputClass={'w-[100%] mt-2'} />
                <div className='sm:ml-10 mt-5 flex-none'>
                    <div className={styles.textMedium+'-mt-[10px]'}>Price Negotiable<span className='text-red-500'>*</span></div>
                    <div className='flex gap-5'>
                        <label> <input type='radio' name='price' className='m-2 size-5'/>Yes</label>
                        <label> <input type='radio' name='price'className='m-2 size-5' />No</label>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Amenities;
