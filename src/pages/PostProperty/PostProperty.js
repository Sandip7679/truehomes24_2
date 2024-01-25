import React, { useEffect, useState } from 'react';
import { styles } from '../../Styles/Styles';
import Header from '../../components/Header/Header';
import FormCatagories, { ButtonList, InputList } from '../../components/PostPropertyComp';


const formCatagories = ['Property Info', 'Amenities', 'Nearby Places', 'Gallery'];
const propertyTypes = [
    'Apartment', 'Independent House/Villa', 'Residential Land', 'Warehouse', 'Builder Floor',
    'Office Space', 'Shop/Showroom', 'Serviced Apartment/PG', 'Agricultural/Farm Land', 'Farm House', 'Commercial Land',
]

const countries = ['India', 'Singapore', 'UAE', 'United States'];
const indianStates = [
    'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh', 'Goa', 'Gujarat', 'Haryana',
    'Himachal Pradesh', 'Jharkhand', 'Karnataka', 'Kerala', 'Madhya Pradesh', 'Maharashtra', 'Manipur',
    'Meghalaya', 'Mizoram', 'Nagaland', 'Odisha', 'Punjab', 'Rajasthan', 'Sikkim', 'Tamil Nadu', 'Telangana',
    'Tripura', 'Uttar Pradesh', 'Uttarakhand', 'West Bengal', 'Andaman and Nicobar Islands', 'Chandigarh',
    'Dadra and Nagar Haveli and Daman and Diu', 'Lakshadweep', 'Delhi', 'Puducherry'
];

const Cities = ['Kolkata', 'Pune', 'Delhi']

const inputs = [
    { name: 'Country', placeholder: 'Select Country', state: 'country', star: true, dropdownData: countries },
    { name: 'State', placeholder: 'Select State', state: 'state', star: true, dropdownData: indianStates },
    { name: 'City', placeholder: 'Select City', state: 'city', star: true, dropdownData: Cities },
    { name: 'Locality', placeholder: 'Select Locality', state: 'locality', star: true, dropdownData: null },
    { name: 'Sub Locality', placeholder: 'Select Sub Locality', state: 'subLocality', star: false, dropdownData: null },
    { name: 'Project/Society', placeholder: 'Select Project/Society', state: 'Project/Society', star: true, dropdownData: null },
    { name: 'Bedrooms', placeholder: '0', state: 'Bedrooms', star: true, dropdownData: null },
    { name: 'Balconies', placeholder: '0', state: 'Balconies', star: true, dropdownData: null },
    { name: 'Bathrooms', placeholder: 'Select Bathrooms', state: 'Bathrooms', star: true, dropdownData: null },
    { name: 'Property On Floor', placeholder: 'Numbers only', state: 'propertyOnFloor', star: false, dropdownData: null },
    { name: 'No. Of Floor', placeholder: 'Numbers only', state: 'noOfFloor', star: false, dropdownData: null },
]

const units = ['sq.ft.', 'sq.yards', 'sq.m.', 'atres', 'cents', 'grounds', 'guntha', 'bigha', 'kottah']

const areasInputs = [
    { name: 'BuiltUp Area', star: true },
    { name: 'Carapet Area', star: false }
]

const propertyStatus = ['Under Construction', 'Ready to move', 'Upcoming', 'Sold Out'];
const nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];


const PostProperty = () => {
    const [formCatagory, setFormCategory] = useState('Property Info');
    const [propertyType, setPropertyType] = useState('Apartment');
    const [currPropertyStatus, setCurrPropertyStatus] = useState('Under Construction');

    // useEffect(() => {
    //    getCountryData('countries');
    // }, []);

    // const getCountryData = (endpoint) => {
    //     var headers = new Headers();
    //     headers.append("X-CSCAPI-KEY", "API_KEY");

    //     var requestOptions = {
    //         method: 'GET',
    //         headers: headers,
    //         redirect: 'follow'
    //     };
    //     let url = "https://api.countrystatecity.in/v1/"+endpoint
    //     fetch(url, requestOptions)
    //         .then(response => response.text())
    //         .then(result => console.log(result))
    //         .catch(error => console.log('error', error));
    // }

    const [listedFor, setListedFor] = useState('sale');
    return (
        <div>
            <Header />
            <div className='mt-[80px]'>
                <div className={styles.postpropTitle}>Post your Property</div>
                <div className='mt-5 px-[5%] sm:px-[8%]'>
                    <FormCatagories catagories={formCatagories} />
                    <form className={styles.formCard}>
                        <div className='flex my-5 text-gray-700 bg-gray-50 p-3 -mx-[1.6%]'>
                            <i class="fa-regular fa-building mt-[5px] mr-2"></i>
                            <span className={styles.title3}>Property Information :</span>
                        </div>
                        <div className='md:flex gap-[5%]'>
                            <div className='mb-5 flex-none'>
                                <ButtonList title={'Listed For'} btnNames={['Sale', 'Rent']} initialName={'Sale'} required={true} />
                            </div>
                            <ButtonList title={'Property Type'} btnNames={propertyTypes} initialName={'Apartment'} required={true} />
                        </div>
                        <InputList inputs={inputs} />

                        <div className='mt-5 grid grid-cols-1 sm:grid-cols-2 gap-[5%]'>
                            {areasInputs.map((item, index) => {
                                return (
                                    <div>
                                        <p className={styles.textMedium}>{item.name}</p>
                                        <div className='flex justify-between mt-1'>
                                            <input required={item.star} className={styles.input + 'w-[70%]'} placeholder={'Enter ' + item.name} />
                                            <input required={item.star} placeholder='Units' className={styles.input + 'w-[27%]'} />
                                        </div>
                                    </div>

                                )
                            })}
                        </div>
                        <div className='mt-5 sm:flex  gap-[5%]'>
                            <ButtonList title={'Status'} btnNames={propertyStatus}
                                initialName={'Under Construction'} required={true} classname={'w-[40%] mt-3'} />
                            <div className='sm:w-[55%] mt-3'>
                                <p>Available From</p>
                                <div className='sm:flex gap-[4%] '>
                                    <select name="dropdown" className={styles.input + 'text-gray-500 max-w-[200px] mt-2'}>
                                        <option value="" selected>Month</option>
                                        {nums.map((item, index) => {
                                            return (
                                                <option className='text-sm' value={`${item}`}>{item} Month</option>
                                            )
                                        })}
                                    </select>
                                    <select name="" className={styles.input + 'text-gray-500 max-w-[200px] mt-2'}>
                                        <option value="" selected>Year</option>
                                        {nums.map((item, index) => {
                                            return (
                                                <option className='text-sm' value={`${item}`}>{item} Year</option>
                                            )
                                        })}
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className='mt-5 sm:flex sm:gap-5'>
                            <div className='sm:w-[40%]'>
                                <p>Main Image<span className='text-red-500'>*</span></p>
                                <input required type='file' className={styles.input + 'text-gray-500 text-sm mt-2 py-[5px]'} />
                                <p className='text-gray-500 text-sm mt-2'>Allowed File type: jpg | png | jpeg | gif | bmp</p>
                                <p className='text-gray-500 text-sm'>Max Size Limit: 5 MB.</p>
                            </div>
                            <div className='sm:w-[55%]'>
                                <p>RERA Id<span className='text-red-500'>*</span></p>
                                <input required placeholder='RERA Id' className={styles.input + 'mt-2 pl-5'} />
                            </div>
                        </div>
                        <div className='mt-5 flex gap-5'>
                            <button className='bg-gray-700 text-white text-sm sm:text-base px-4 py-1 rounded'>Back</button>
                            <button type='submit' className='bg-gray-700 text-white text-sm sm:text-base px-4 py-1 rounded'>Save & Next</button>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    );
}

export default PostProperty;
