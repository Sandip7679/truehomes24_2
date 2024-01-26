import React, { useEffect, useState } from 'react';
import { styles } from '../../Styles/Styles';
import Header from '../../components/Header/Header';
import FormCatagories from '../../components/PostProperty/PostPropertyComp';
import PropertyInfo from '../../components/PostProperty/PropertyInfo';
import Amenities from '../../components/PostProperty/Amenities';


const formCatagories = ['Property Info', 'Amenities', 'Nearby Places', 'Gallery'];

const PostProperty = () => {
    const [formCatagory, setFormCategory] = useState('Property Info');

    return (
        <div>
            <Header />
            <div className='mt-[80px]'>
                <div className={styles.postpropTitle}>Post your Property</div>
                <div className='mt-5 px-[5%] sm:px-[8%]'>
                    <FormCatagories catagories={formCatagories} activeCatagory={formCatagory} onClickItem={(item)=>setFormCategory(item)}/>
                   {formCatagory == 'Property Info' && <PropertyInfo/>}
                   {formCatagory == 'Amenities' && <Amenities/>}
                </div>
            </div>
        </div>
    );
}

export default PostProperty;
