import React, { useEffect, useState } from 'react';
import { styles } from '../../Styles/Styles';
import Header from '../../components/Header/Header';
import FormCatagories from '../../components/PostProperty/PostPropertyComp';
import PropertyInfo from '../../components/PostProperty/PropertyInfo';
import Amenities from '../../components/PostProperty/Amenities';
import NearbyPlaces from '../../components/PostProperty/NearbyPlaces';
import Gallery from '../../components/PostProperty/Gallery';
import TopCItiesFilter from '../../components/TopCItiesFilter';
import Footer from '../../components/Footer';
import GeneralInfo from '../../components/PostProperty/GeneralInfo';
import { useSelector } from 'react-redux';


const catagories = ['Property Info', 'Amenities', 'Nearby Places', 'Gallery'];


const PostProperty = () => {
    const { login_status} = useSelector(state => state.User)
    const [currCatagory, setCurrCategory] = useState(login_status?'Property Info':'General Info');
    useEffect(()=>{
        if(login_status){
            setCurrCategory('Property Info');
        }
    },[login_status])

    return (
        <div>
            <Header />
            <div className='mt-[80px]'>
                <div className={styles.postpropTitle}>Post your Property</div>
                <div className='mt-5 px-2 container mx-auto'>
                    <FormCatagories catagories={login_status?catagories:['General Info',...catagories]} activeCatagory={currCatagory} onClickItem={(item) => setCurrCategory(item)} />
                    <div className={styles.formCard}>
                        {currCatagory === 'General Info' && <GeneralInfo />}
                        {currCatagory === 'Property Info' && <PropertyInfo />}
                        {currCatagory === 'Amenities' && <Amenities />}
                        {currCatagory === 'Nearby Places' && <NearbyPlaces />}
                        {currCatagory === 'Gallery' && <Gallery />}
                    </div>

                </div>
            </div>
            <TopCItiesFilter />
            <Footer />
        </div>
    );
}

export default PostProperty;
