import React from 'react';
import { styles } from '../Styles/Styles';
const bestBudgetSearch = [
    'below 30 lakhs', 'between 30 to 50 lakhs',
    'between 50 to 75 lakhs', 'between 75 to 1 crore', 'between 1 to 1.75 crore',
    'above 1.75 crore'
];

const propertyOption = [
    'Verified Property in Bangalore', 'Property in Bangalore by owner', 'New Property in Bangalore',
    'Apartment in Bangalore by owner', 'Apartment in Bangalore', 'Independent House/Billa in Bangalore',
    // 'Builder Floor in Bangalore', 'Serviced Apartment/PG in Bangalore', 'Commercial Land in Bangalore'
]
const commertialOptions = [
    'Commertial Property for sale in Bangalore',
    'Office Space in Bangalore',
    'Shop/Showroom in Bangalore',
    'New commertial property in Bangalore'
]
const SiteMapProperty = ({ title }) => {
    return (
        <div className='mt-5'>
            <p className={styles.title3}>{title}</p>
            <div className='mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 item-center w-full'>
                <div className='w-full'>
                    <p className='mb-2 font-semibold prose'>BHK-WISE PROPERTY IN BANGALORE</p>
                    {['1', '2', '3', '4', '4+'].map((item, index) => {
                        return (
                            <p key={index} className='text-sm my-2 hover:opacity-80 hover:cursor-pointer text-gray-600'>{item}BHK Apartment in Bangalore</p>
                        )
                    })}
                </div>
                <div className='w-full'>
                    <p className='mb-2 font-semibold prose'>BEST BUDGET SEARCHES IN BANGALORE</p>
                    {bestBudgetSearch.map((item, index) => {
                        return (
                            <p key={index} className='text-sm my-2 hover:opacity-80 hover:cursor-pointer text-gray-600'>Apartment in Bangalore {item}</p>
                        )
                    })}
                </div>
                {/* <div className='w-full'>
                <p className='mb-2 font-semibold prose'>PROPERTY OPTIONS IN BANGALORE</p>
                {propertyOption.map((item, index) => {
                    return (
                        <p key={index} className='text-sm my-2 hover:opacity-80 hover:cursor-pointer text-gray-600'>{item}</p>
                    )
                })}
            </div> */}
                <div className='w-full'>
                    <p className='mb-2 font-semibold prose'>COMMERCIAL INVESTMENT OPTIONS IN BANGALORE</p>
                    {commertialOptions.map((item, index) => {
                        return (
                            <p key={index} className='text-sm my-2 hover:opacity-80 hover:cursor-pointer text-gray-600'>Apartment in Bangalore {item}</p>
                        )
                    })}
                </div>
            </div>
        </div>

    );
}

export default SiteMapProperty;
