import React from 'react';
import Header from '../../components/Header/Header';
import { styles } from '../../Styles/Styles';
import userBackImage from '../../assets/images/user.svg'

const EditProfile = () => {
    return (
        <div>
            <Header />
            <div className='mt-16'>
                <p className={styles.title3}>Eidt Profile:</p>
                <div className='gird grid-cols-1 md:grid-cols-2'>
                    {/* <div className='p-2 border-[1px] w-[190px] border-gray-300'>
                        <img alt='' src={userBackImage} className='h-[200px] w-[200px]' />
                    </div> */}
                </div>
                <div>

                </div>
            </div>
        </div>
    );
}

export default EditProfile;
