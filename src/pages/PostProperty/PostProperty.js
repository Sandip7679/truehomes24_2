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
import { useLocation } from 'react-router-dom';


const catagories = ['Property Info', 'Amenities', 'Nearby Places', 'Gallery'];


const PostProperty = () => {
    const { login_status, postPropertyFormData} = useSelector(state => state.User);
    const [currCatagory, setCurrCategory] = useState(login_status ? 'Property Info' : 'General Info');
    const dispatch = useDispatch();
    const currPath = useLocation();

    useEffect(()=>{
        console.log('currPath...',currPath);
        let arr = currPath.pathname.split('/');
        console.log('arr...currpath..',arr);
        if(arr.length == 3 && arr[arr.length-1] == 'featured'){
            dispatch(setPostPropertyFormData({ ...postPropertyFormData, type:'featured'}));
            setCurrCategory('Property Info');
        }else if(arr.length == 2 && arr[arr.length-1] == 'post-property'){
            dispatch(setPostPropertyFormData({ ...postPropertyFormData, type:''}));
            setCurrCategory('Property Info');
        } 
    },[currPath]);

    useEffect(() => {
        if (login_status) {
            dispatch(setPostPropertyFormData({ ...postPropertyFormData, generalInfo: { name: '', email: '', countryCode: '+91', mobileNum: '', Iam: 'Individual/Owner', Otp: '',mobileVarification:false, completed:true } }));
            setCurrCategory('Property Info');
        }else{
            dispatch(setPostPropertyFormData({ ...postPropertyFormData, generalInfo: { name: '', email: '', countryCode: '+91', mobileNum: '', Iam: 'Individual/Owner', Otp: '',mobileVarification:false, completed:false } }));
            setCurrCategory('General Info');
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
                    </div>

                </div>
            </div>
            <TopCItiesFilter />
            <Footer />
        </div>
    );
}

export default PostProperty;
