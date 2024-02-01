import React, { useRef, useState } from 'react';
import { styles } from '../../Styles/Styles';
import JoditEditor from 'jodit-react';

const FormCatagories = ({ catagories, activeCatagory, onClickItem }) => {
    return (
        <div className={styles.lightBorder + 'flex flex-wrap'}>
            {catagories.map((item, index) => {
                return (
                    <button key={index}
                        onClick={() => onClickItem(item)}
                        className={(activeCatagory === item ? 'border-b-[1px]' : '') + ' hover:border-b-[1px] border-b-gray-700 pb-1 mt-2 px-1 mr-[2%]'}>
                        <p className={styles.textMedium + ''}>{item}</p>
                    </button>
                )
            })}
        </div>
    );
}

export const CategoryTitle = ({ title, icon }) => {
    return (
        <div className='flex my-5 text-gray-700 bg-gray-50 p-3 -mx-[1.6%]'>
            <i class={icon + " mt-[5px] mr-2"}></i>
            <span className={styles.title3}>{title}</span>
        </div>
    )
}

export const ButtonList = ({ title, btnNames, initialName, classname, required }) => {
    const [selectedBtnName, setSelectedBtnName] = useState(initialName);
    return (
        <div className={classname}>
            <span>{title} {required && <span className='text-red-600'>*</span>}</span>
            <div className='flex flex-wrap gap-2 mt-2 text-sm'>
                {btnNames.map((item, index) => {
                    return (
                        <button key={index}
                            onClick={() => setSelectedBtnName(item)}
                            className={(selectedBtnName === item ? 'border-orange-600 text-orange-600' : 'border-gray-400 text-gray-400') + ' hover:border-orange-600 hover:text-orange-600 border-[1px] px-3 py-1 rounded-xl '}>
                            {item}
                        </button>
                    )
                })}
            </div>
        </div>
    )
}

export const InputList = ({ inputs, classname }) => {
    return (
        <div className={classname ? classname : 'mt-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3'}>
            {inputs.map((item, index) => {
                return (
                    <DropdownInput title={item.name} options={item.dropdownData} placeholder={item.placeholder} required={item.star} />
                )
            })}
        </div>
    )
}

export const DropdownInput = ({ title, options, placeholder, required, inputClass, type }) => {
    return (
        <div className={inputClass}>
            {title && <span className={styles.textMedium}>{title}{required && <span className='text-red-500'>*</span>}</span>}
            {options ? <select required={required} name="" className={styles.input + 'mt-1 text-gray-500 '}>
                <option value="0">{placeholder}</option>
                {options.map((item, index) => {
                    return (
                        <option  key={index} className='text-sm sm:text-base text-gray-500' value={`${item}`}>{item}</option>
                    )
                })}
            </select>
                :
                <input required={required} type={type} placeholder={placeholder} className={styles.input + 'mt-1'} />
            }
        </div>

    )
}

const units = ['sq.ft.', 'sq.yards', 'sq.m.', 'atres', 'cents', 'grounds', 'guntha', 'bigha', 'kottah']
export const AreaInputs = ({ inputDatas }) => {
    return (
        <div className='mt-5 grid grid-cols-1 sm:grid-cols-2 gap-[5%]'>
            {inputDatas.map((item, index) => {
                return (
                    <div>
                        {/* <p className={styles.textMedium}>{item.name}</p> */}
                        <div className='flex justify-between mt-1'>
                            <DropdownInput title={item.name} placeholder={'Enter ' + item.name} inputClass={'w-[70%]'} required={item.star} />
                            <DropdownInput title={'Units'} placeholder={'Please Select'} options={units} inputClass={'w-[27%]'} required={item.star} />
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export const JoditTextEditor = ({title}) => {
    const [content, setContent] = useState('');
    const editor = useRef(null);
    return (
        <div className='mt-10'>
            <p className='mb-2'>{title}<span className='text-red-500'>*</span> </p>
            <JoditEditor
                ref={editor}
                value={content}
                // config={config}
                tabIndex={1} // tabIndex of textarea
                onBlur={newContent => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
                onChange={newContent => { }}
                className='shadow-md'
            // onChange={newContent => setContent(newContent)}
            />
        </div>
    )
}

export default FormCatagories;

