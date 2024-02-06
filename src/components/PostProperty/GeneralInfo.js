import React, { useEffect, useState } from 'react';
import { ButtonList, CategoryTitle } from './PostPropertyComp';
import { styles } from '../../Styles/Styles';


const Iam = ['Individual/Owner','Builder/Developer','Agent/Dealer']
const GeneralInfo = () => {
    const [animation, setAnimation] = useState(false);
    useEffect(() => {
        setAnimation(true);
    }, [])
    return (
        <div className={'mt-16 ' + (animation ? 'transition-transform ease-in-out transform -translate-y-10 duration-1000' : '')}>
            <CategoryTitle title={'General Information :'} icon={'fa-regular fa-user mt-1'} />
            <div className='mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-8'>
                <div>
                    <span className={styles.textMedium}>Name<span className='text-red-500'>*</span></span>
                    <input required placeholder='Enter Your Name' className={styles.input + 'mt-1'} />
                </div>
                <div>
                    <span className={styles.textMedium}>Email<span className='text-red-500'>*</span></span>
                    <input required placeholder='Enter Your Email' className={styles.input + 'mt-1'} />
                </div>
                <div>
                    <span className={styles.textMedium}>Country Code<span className='text-red-500'>*</span></span>
                    <input required placeholder='+ 91 (India)' readOnly className={styles.input + 'mt-1'} />
                </div>
                <div>
                    <span className={styles.textMedium}>Mobile<span className='text-red-500'>*</span></span>
                    <input required placeholder='Enter Your Mobile No' className={styles.input + 'mt-1'} />
                </div>
            </div>
            <div className='mt-8'>
                <ButtonList title={'I Am'} btnNames={Iam} initialName={'Individual/Owner'} required={true} />
            </div>
            <div className='mt-8 flex justify-center'>
                <button className={styles.formBtn+styles.btnBlackHover}>Continue</button>
            </div>

        </div>
    );
}

export default GeneralInfo;
