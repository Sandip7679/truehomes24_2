import React from 'react';
import { CategoryTitle, InputList } from './PostPropertyComp';
import { styles } from '../../Styles/Styles';

const inputs = [
    { name: 'Bus Station', placeholder: 'Eg. 1KM or 100M', state: 'busStatus', star: false, dropdownData: null },
    { name: 'Railway Metro Station', placeholder: 'Eg. 1KM or 100M', state: 'metro', star: false, dropdownData: null },
    { name: 'Airport', placeholder: 'Eg. 1KM or 100M', state: 'airport', star: false, dropdownData: null },
    { name: 'Hospital', placeholder: 'Eg. 1KM or 100M', state: 'Hospital', star: false, dropdownData: null },
    { name: 'Workship', placeholder: 'Eg. 1KM or 100M', state: 'Workship', star: false, dropdownData: null },
    { name: 'ATM', placeholder: 'Eg. 1KM or 100M', state: 'ATM', star: false, dropdownData: null },
    { name: 'School', placeholder: 'Eg. 1KM or 100M', state: 'School', star: false, dropdownData: null },
    { name: 'Shopping Mall', placeholder: 'Eg. 1KM or 100M', state: 'ShoppingMall', star: false, dropdownData: null },
    { name: 'Main Road', placeholder: 'Eg. 1KM or 100M', state: 'Main Road', star: false, dropdownData: null },
    { name: 'State Highway', placeholder: 'Eg. 1KM or 100M', state: 'State Highway', star: false, dropdownData: null },
    { name: 'Expressway', placeholder: 'Eg. 1KM or 100M', state: 'Expressway', star: false, dropdownData: null },
    { name: 'Bank', placeholder: 'Eg. 1KM or 100M', state: 'Bank', star: false, dropdownData: null },
    { name: 'Public Garden', placeholder: 'Eg. 1KM or 100M', state: 'Public Garden', star: false, dropdownData: null },
    { name: 'Amusement Park', placeholder: 'Eg. 1KM or 100M', state: 'Amusement Park', star: false, dropdownData: null },
    { name: 'Milk Dairy', placeholder: 'Eg. 1KM or 100M', state: 'Milk Dairy', star: false, dropdownData: null },
    { name: 'Movie Theatre', placeholder: 'Eg. 1KM or 100M', state: 'Movie Theatre', star: false, dropdownData: null },
    { name: 'Restaurant', placeholder: 'Eg. 1KM or 100M', state: 'Restaurant', star: false, dropdownData: null },
    { name: 'Library', placeholder: 'Eg. 1KM or 100M', state: 'Library', star: false, dropdownData: null },
    { name: 'Public Swimming Pool', placeholder: 'Eg. 1KM or 100M', state: 'Public Swimming Pool', star: false, dropdownData: null },
    { name: 'Petrol Gas Pump', placeholder: 'Eg. 1KM or 100M', state: 'Petrol Gas Pump', star: false, dropdownData: null },
    { name: 'Motor Garage', placeholder: 'Eg. 1KM or 100M', state: 'Motor Garage', star: false, dropdownData: null },
    { name: 'Car Charging Point', placeholder: 'Eg. 1KM or 100M', state: 'Car Charging Point', star: false, dropdownData: null },
    { name: 'Spa Beauty Salon', placeholder: 'Eg. 1KM or 100M', state: 'Spa Beauty Salon', star: false, dropdownData: null },
    { name: 'Pharmacy', placeholder: 'Eg. 1KM or 100M', state: 'Pharmacy', star: false, dropdownData: null },
]

const NearbyPlaces = () => {
    return (
        <div>
            <form className={styles.formCard}>
                <CategoryTitle title={'Nearby Places :'} icon={'fa fa-house'} />
                <InputList inputs={inputs} classname={'mt-5 grid grid-cols-1 sm:grid-cols-2 sm:gap-7'} />
                <div className='my-7 flex gap-5'>
                    <button className={styles.formBtn}>Back</button>
                    <button type='submit' className={styles.formBtn}>Save & Next</button>
                </div>
            </form>
        </div>
    );
}

export default NearbyPlaces;
