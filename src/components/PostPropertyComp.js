import React, { useState } from 'react';
import { styles } from '../Styles/Styles';

const FormCatagories = ({ catagories }) => {
    const [formCatagory, setFormCategory] = useState('Property Info');
    return (
        <div className={styles.lightBorder + 'flex flex-wrap'}>
            {catagories.map((item, index) => {
                return (
                    <button
                        onClick={() => setFormCategory(item)}
                        className={(formCatagory == item ? 'border-b-[1px]' : '') + ' hover:border-b-[1px] border-b-gray-700 pb-1 mt-2 px-1 mr-[2%]'}>
                        <p className={styles.textMedium + ''}>{item}</p>
                    </button>
                )
            })}
        </div>
    );
}

export const ButtonList = ({ title,btnNames,initialName,classname,required }) => {
    const [selectedBtnName, setSelectedBtnName] = useState(initialName);
    return (
        <div className={classname}>
            <span>{title} {required && <span className='text-red-600'>*</span>}</span>
            <div className='flex flex-wrap gap-2 mt-2 text-sm'>
                {btnNames.map((item, index) => {
                    return (
                        <button
                            onClick={() => setSelectedBtnName(item)}
                            className={(selectedBtnName == item ? 'border-orange-600 text-orange-600' : 'border-gray-400 text-gray-400') + ' hover:border-orange-600 hover:text-orange-600 border-[1px] px-3 py-1 rounded-xl '}>
                            {item}
                        </button>
                    )
                })}
            </div>
        </div>
    )
}

export const InputList = ({ inputs }) => {
    return (
        <div className='mt-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3'>
            {inputs.map((item, index) => {
                return (
                    <div>
                        <span className={styles.textMedium}>{item.name}{item.star && <span className='text-red-500'>*</span>}</span>
                        {item.dropdownData ? <select required={item.star} name="" className={styles.input + 'mt-1 text-gray-500'}>
                            <option value="0">Select {item.name}</option>
                            {item.dropdownData.map((itm, index) => {
                                return (
                                    <option className='text-sm sm:text-base text-gray-500' value={`${itm}`}>{itm}</option>
                                )
                            })}
                        </select>
                            :
                            <input required={item.star} placeholder={item.placeholder} className={styles.input + 'mt-1'} />}
                    </div>
                )
            })}
        </div>
    )
}

export default FormCatagories;

