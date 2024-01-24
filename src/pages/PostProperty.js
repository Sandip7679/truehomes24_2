import React, { useState } from 'react';
import Header from '../components/Header/Header';
import { styles } from '../Styles/Styles';


const formCatagories = ['Property Info', 'Amenities', 'Nearby Places', 'Gallery'];
const propertyTypes = [
    { type: 'Apartment' },
    { type: 'Independent House/Villa' },
    { type: 'Residential Land' },
    { type: 'Warehouse' },
    { type: 'Builder Floor' },
    { type: 'Office Space' },
    { type: 'Shop/Showroom' },
    { type: 'Serviced Apartment/PG' },
    { type: 'Agricultural/Farm Land' },
    { type: 'Farm House' },
    { type: 'Commercial Land' },
]

const inputs = [
    {name:'Country',placeholder:'Select Country',state:'country',star:true},
    {name:'State',placeholder:'Select State',state:'state',star:true},
    {name:'City',placeholder:'Select City',state:'city',star:true},
    {name:'Locality',placeholder:'Select Locality',state:'locality',star:true},
    {name:'Sub Locality',placeholder:'Select Sub Locality',state:'subLocality',star:false},
    {name:'Project/Society',placeholder:'Select Project/Society',state:'Project/Society',star:true},
    {name:'Bedrooms',placeholder:'0',state:'Bedrooms',star:true},
    {name:'Balconies',placeholder:'0',state:'Balconies',star:true},
    {name:'Bathrooms',placeholder:'Select Bathrooms',state:'Bathrooms',star:true},
    {name:'Property On Floor',placeholder:'Numbers only',state:'propertyOnFloor',star:false},
    {name:'No. Of Floor',placeholder:'Numbers only',state:'noOfFloor',star:false},
]

const PostProperty = () => {
    const [formCatagory, setFormCategory] = useState('Property Info');
    const [propertyType,setPropertyType] = useState('Apartment');
    const [listedFor, setListedFor] = useState('sale');
    return (
        <div>
            <Header />
            <div className='mt-[80px]'>
                <div className={'text-orange-500 text-center py-2 sm:text-lg font-semibold bg-gray-50'}>Post your Property</div>
                <div className='mt-5 px-[5%] sm:px-[10%]'>
                    <div className='border-b-[1px] border-b-gray-300 flex flex-wrap px-2 sm:px-5'>
                        {formCatagories.map((item, index) => {
                            return (
                                <button
                                    onClick={() => setFormCategory(item)}
                                    className={(formCatagory == item ? 'border-b-[1px]' : '') + ' hover:border-b-[1px] border-b-gray-700 pb-1 mr-5'}>
                                    <p className={styles.textMedium + ''}>{item}</p>
                                </button>
                            )
                        })}
                    </div>
                    <div className='rounded shadow-md p-2 px-2 sm:px-5'>
                        <div className='flex my-5 text-gray-700'>
                            <i class="fa-regular fa-building mt-[5px] mr-2"></i>
                            <span className={styles.title3}>Property Information :</span>
                        </div>
                        <div className='md:flex gap-[5%]'>
                            <div className='mb-5 flex-none'>
                                <span className=''>Listed For <span className='text-red-600'>*</span></span>
                                <div className='flex gap-2 mt-2 text-sm'>
                                    <button
                                        onClick={() => setListedFor('sale')}
                                        className={(listedFor == 'sale' ? 'border-orange-600 text-orange-600' : 'border-gray-500 text-gray-500') + ' border-[1px] px-2 py-1 rounded-xl hover:border-orange-600 hover:text-orange-600'}>For Sale</button>
                                    <button
                                        onClick={() => setListedFor('rent')}
                                        className={(listedFor == 'rent' ? 'border-orange-600 text-orange-600' : 'border-gray-500 text-gray-500') + ' border-[1px] px-2 py-1 rounded-xl hover:border-orange-600 hover:text-orange-600'}>For Rent</button>
                                </div>
                            </div>
                            <div>
                                <span>Property Type <span className='text-red-600'>*</span></span>
                                <div className='flex flex-wrap gap-2 mt-2 text-sm'>
                                    {propertyTypes.map((item, index) => {
                                        return (
                                            <button
                                                onClick={() => setPropertyType(item.type)}
                                                className={(propertyType == item.type ? 'border-orange-600 text-orange-600' : 'border-gray-400 text-gray-400') + ' hover:border-orange-600 hover:text-orange-600 border-[1px] px-2 py-1 rounded-xl '}>
                                               {item.type}
                                            </button>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                        <div className='mt-5 sm:grid sm:grid-cols-2 md:grid-cols-3 gap-2'>
                            {inputs.map((item,index)=>{
                                return(
                                    <div>
                                        <p>{item.name}</p>
                                         <input placeholder={item.placeholder} className={styles.input+'mt-2'}/>
                                    </div>
                                )
                            })}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default PostProperty;
