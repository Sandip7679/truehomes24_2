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
import { useDispatch, useSelector } from 'react-redux';
import { setPostPropertyFormData } from '../../Redux/reducer/User';


const catagories = ['Property Info', 'Amenities', 'Nearby Places', 'Gallery'];


const PostProperty = () => {
    const { login_status, postPropertyFormData} = useSelector(state => state.User)
    const [currCatagory, setCurrCategory] = useState(login_status ? 'Property Info' : 'General Info');
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setPostPropertyFormData({ ...postPropertyFormData, generalInfo: { name: '', email: '', countryCode: '+91', mobileNum: '', Iam: 'Individual/Owner', Otp: '',mobileVarification:false, completed:false } }));
        if (login_status) {
            setCurrCategory('Property Info');
        }
    }, [login_status])

    const changeCategories = (catetory)=>{
        setCurrCategory(catetory);
    }

    return (
        <div>
            <Header />
            <div className='mt-[80px]'>
                <div className={styles.postpropTitle}>Post your Property</div>
                <div className='mt-5 px-2 container mx-auto'>
                    <FormCatagories catagories={login_status ? catagories : ['General Info', ...catagories]} activeCatagory={currCatagory} onClickItem={(item) => setCurrCategory(item)} />
                    <div className={styles.formCard}>
                        {currCatagory === 'General Info' && <GeneralInfo setCurrCategory = {changeCategories} />}
                        {currCatagory === 'Property Info' && <PropertyInfo setCurrCategory = {changeCategories} />}
                        {currCatagory === 'Amenities' && <Amenities setCurrCategory = {changeCategories}/>}
                        {currCatagory === 'Nearby Places' && <NearbyPlaces setCurrCategory = {changeCategories}/>}
                        {currCatagory === 'Gallery' && <Gallery setCurrCategory = {changeCategories}/>}
                        {/* {currCatagory === 'Property Info' && !postPertyFormData.generalInfo &&
                            <div className={(currCatagory === 'Property Info'?'transition-transform ease-in-out transform -translate-y-10 duration-1000':'')+' mt-16 bg-red-600 text-white'}>
                                  Please submit general information first
                            </div>} */}
                    </div>

                </div>
            </div>
            <TopCItiesFilter />
            <Footer />
        </div>
    );
}

export default PostProperty;
