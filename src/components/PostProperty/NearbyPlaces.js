import React, { useEffect, useState } from 'react';
import { CategoryTitle, DropdownInput, InputList } from './PostPropertyComp';
import { styles } from '../../Styles/Styles';
import { useDispatch, useSelector } from 'react-redux';
import { setPostPropertyFormData } from '../../Redux/reducer/User';
import { toast } from 'react-toastify';

// const inputs = [
//     { name: 'Bus Station', placeholder: 'Eg. 1KM or 100M', state: 'busStatus', star: false, dropdownData: null },
//     { name: 'Railway Metro Station', placeholder: 'Eg. 1KM or 100M', state: 'metro', star: false, dropdownData: null },
//     { name: 'Airport', placeholder: 'Eg. 1KM or 100M', state: 'airport', star: false, dropdownData: null },
//     { name: 'Hospital', placeholder: 'Eg. 1KM or 100M', state: 'Hospital', star: false, dropdownData: null },
//     { name: 'Worship', placeholder: 'Eg. 1KM or 100M', state: 'Workship', star: false, dropdownData: null },
//     { name: 'ATM', placeholder: 'Eg. 1KM or 100M', state: 'ATM', star: false, dropdownData: null },
//     { name: 'School', placeholder: 'Eg. 1KM or 100M', state: 'School', star: false, dropdownData: null },
//     { name: 'Shopping Mall', placeholder: 'Eg. 1KM or 100M', state: 'ShoppingMall', star: false, dropdownData: null },
//     { name: 'Main Road', placeholder: 'Eg. 1KM or 100M', state: 'Main Road', star: false, dropdownData: null },
//     { name: 'State Highway', placeholder: 'Eg. 1KM or 100M', state: 'State Highway', star: false, dropdownData: null },
//     { name: 'Expressway', placeholder: 'Eg. 1KM or 100M', state: 'Expressway', star: false, dropdownData: null },
//     { name: 'Bank', placeholder: 'Eg. 1KM or 100M', state: 'Bank', star: false, dropdownData: null },
//     { name: 'Public Garden', placeholder: 'Eg. 1KM or 100M', state: 'Public Garden', star: false, dropdownData: null },
//     { name: 'Amusement Park', placeholder: 'Eg. 1KM or 100M', state: 'Amusement Park', star: false, dropdownData: null },
//     { name: 'Milk Dairy', placeholder: 'Eg. 1KM or 100M', state: 'Milk Dairy', star: false, dropdownData: null },
//     { name: 'Movie Theatre', placeholder: 'Eg. 1KM or 100M', state: 'Movie Theatre', star: false, dropdownData: null },
//     { name: 'Restaurant', placeholder: 'Eg. 1KM or 100M', state: 'Restaurant', star: false, dropdownData: null },
//     { name: 'Library', placeholder: 'Eg. 1KM or 100M', state: 'Library', star: false, dropdownData: null },
//     { name: 'Public Swimming Pool', placeholder: 'Eg. 1KM or 100M', state: 'Public Swimming Pool', star: false, dropdownData: null },
//     { name: 'Petrol Gas Pump', placeholder: 'Eg. 1KM or 100M', state: 'Petrol Gas Pump', star: false, dropdownData: null },
//     { name: 'Motor Garage', placeholder: 'Eg. 1KM or 100M', state: 'Motor Garage', star: false, dropdownData: null },
//     { name: 'Car Charging Point', placeholder: 'Eg. 1KM or 100M', state: 'Car Charging Point', star: false, dropdownData: null },
//     { name: 'Spa Beauty Salon', placeholder: 'Eg. 1KM or 100M', state: 'Spa Beauty Salon', star: false, dropdownData: null },
//     { name: 'Pharmacy', placeholder: 'Eg. 1KM or 100M', state: 'Pharmacy', star: false, dropdownData: null },
// ]

const NearbyPlaces = ({setCurrCategory}) => {
    const [animation, setAnimation] = useState(false);
    const { postPropertyFormData } = useSelector(state => state.User);
    const [inputErrStatus, setInputErrStatus] = useState({});
    const dispatch = useDispatch();
    useEffect(() => {
        setAnimation(true);
    }, [])

    const onClickSave = () => {
        setCurrCategory('Gallery');
        dispatch(setPostPropertyFormData({ ...postPropertyFormData, nearByPlace: { ...postPropertyFormData.nearByPlace, completed: true } }));
        toast('Near by places saved successfully !', { type: 'success' });
        window.scrollTo({ top: 0 });
    }

    return (
        <div className={'mt-16 ' + (animation ? ' transition-transform ease-in-out transform -translate-y-10 duration-1000 ' : '')}>
            {(postPropertyFormData.generalInfo.completed && postPropertyFormData.propertyInfo.completed && postPropertyFormData.amenities.completed) ? <>
                <CategoryTitle title={'Nearby Places :'} icon={'fa fa-house'} />
                {/* <InputList inputs={inputs} classname={'mt-5 grid grid-cols-1 sm:grid-cols-2 sm:gap-7'} /> */}
                <div className={'mt-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3'}>
                    <DropdownInput title={'Bus Station'} placeholder={'Eg. 1KM or 100M'} required={false}
                        value={postPropertyFormData.nearByPlace.busStation}
                        onChange={(e) => {
                            dispatch(setPostPropertyFormData({ ...postPropertyFormData, nearByPlace: { ...postPropertyFormData.nearByPlace, busStation: e.target.value } }));
                            if (inputErrStatus.busStation) { setInputErrStatus(pre => ({ ...pre, busStation: '' })) };
                        }}
                    />
                    <DropdownInput title={'Railway Metro Station'} placeholder={'Eg. 1KM or 100M'} required={false}
                        value={postPropertyFormData.nearByPlace.railwayMetro}
                        onChange={(e) => {
                            dispatch(setPostPropertyFormData({ ...postPropertyFormData, nearByPlace: { ...postPropertyFormData.nearByPlace, railwayMetro: e.target.value } }));
                            if (inputErrStatus.railwayMetro) { setInputErrStatus(pre => ({ ...pre, railwayMetro: '' })) };
                        }}
                    />
                    <DropdownInput title={'Airport'} placeholder={'Eg. 1KM or 100M'} required={false}
                        value={postPropertyFormData.nearByPlace.airport}
                        onChange={(e) => {
                            dispatch(setPostPropertyFormData({ ...postPropertyFormData, nearByPlace: { ...postPropertyFormData.nearByPlace, airport: e.target.value } }));
                            if (inputErrStatus.airport) { setInputErrStatus(pre => ({ ...pre, airport: '' })) };
                        }}
                    />
                    <DropdownInput title={'Hospital'} placeholder={'Eg. 1KM or 100M'} required={false}
                        value={postPropertyFormData.nearByPlace.hospital}
                        onChange={(e) => {
                            dispatch(setPostPropertyFormData({ ...postPropertyFormData, nearByPlace: { ...postPropertyFormData.nearByPlace, hospital: e.target.value } }));
                            if (inputErrStatus.hospital) { setInputErrStatus(pre => ({ ...pre, hospital: '' })) };
                        }}
                    />
                    <DropdownInput title={'Worship'} placeholder={'Eg. 1KM or 100M'} required={false}
                        value={postPropertyFormData.nearByPlace.worship}
                        onChange={(e) => {
                            dispatch(setPostPropertyFormData({ ...postPropertyFormData, nearByPlace: { ...postPropertyFormData.nearByPlace, worship: e.target.value } }));
                            if (inputErrStatus.worship) { setInputErrStatus(pre => ({ ...pre, worship: '' })) };
                        }}
                    />
                    <DropdownInput title={'ATM'} placeholder={'Eg. 1KM or 100M'} required={false}
                        value={postPropertyFormData.nearByPlace.atm}
                        onChange={(e) => {
                            dispatch(setPostPropertyFormData({ ...postPropertyFormData, nearByPlace: { ...postPropertyFormData.nearByPlace, atm: e.target.value } }));
                            if (inputErrStatus.atm) { setInputErrStatus(pre => ({ ...pre, atm: '' })) };
                        }}
                    />
                    <DropdownInput title={'School'} placeholder={'Eg. 1KM or 100M'} required={false}
                        value={postPropertyFormData.nearByPlace.school}
                        onChange={(e) => {
                            dispatch(setPostPropertyFormData({ ...postPropertyFormData, nearByPlace: { ...postPropertyFormData.nearByPlace, school: e.target.value } }));
                            if (inputErrStatus.school) { setInputErrStatus(pre => ({ ...pre, school: '' })) };
                        }}
                    />
                    <DropdownInput title={'Shopping Mall'} placeholder={'Eg. 1KM or 100M'} required={false}
                        value={postPropertyFormData.nearByPlace.mall}
                        onChange={(e) => {
                            dispatch(setPostPropertyFormData({ ...postPropertyFormData, nearByPlace: { ...postPropertyFormData.nearByPlace, mall: e.target.value } }));
                            if (inputErrStatus.mall) { setInputErrStatus(pre => ({ ...pre, mall: '' })) };
                        }}
                    />
                    <DropdownInput title={'Main Road'} placeholder={'Eg. 1KM or 100M'} required={false}
                        value={postPropertyFormData.nearByPlace.mainRoad}
                        onChange={(e) => {
                            dispatch(setPostPropertyFormData({ ...postPropertyFormData, nearByPlace: { ...postPropertyFormData.nearByPlace, mainRoad: e.target.value } }));
                            if (inputErrStatus.mainRoad) { setInputErrStatus(pre => ({ ...pre, mainRoad: '' })) };
                        }}
                    />
                    <DropdownInput title={'State Highway'} placeholder={'Eg. 1KM or 100M'} required={false}
                        value={postPropertyFormData.nearByPlace.highway}
                        onChange={(e) => {
                            dispatch(setPostPropertyFormData({ ...postPropertyFormData, nearByPlace: { ...postPropertyFormData.nearByPlace, highway: e.target.value } }));
                            if (inputErrStatus.highway) { setInputErrStatus(pre => ({ ...pre, highway: '' })) };
                        }}
                    />
                    <DropdownInput title={'Expressway'} placeholder={'Eg. 1KM or 100M'} required={false}
                        value={postPropertyFormData.nearByPlace.expressWay}
                        onChange={(e) => {
                            dispatch(setPostPropertyFormData({ ...postPropertyFormData, nearByPlace: { ...postPropertyFormData.nearByPlace, expressWay: e.target.value } }));
                            if (inputErrStatus.expressWay) { setInputErrStatus(pre => ({ ...pre, expressWay: '' })) };
                        }}
                    />
                    <DropdownInput title={'Bank'} placeholder={'Eg. 1KM or 100M'} required={false}
                        value={postPropertyFormData.nearByPlace.bank}
                        onChange={(e) => {
                            dispatch(setPostPropertyFormData({ ...postPropertyFormData, nearByPlace: { ...postPropertyFormData.nearByPlace, bank: e.target.value } }));
                            if (inputErrStatus.bank) { setInputErrStatus(pre => ({ ...pre, bank: '' })) };
                        }}
                    />
                    <DropdownInput title={'Public Garden'} placeholder={'Eg. 1KM or 100M'} required={false}
                        value={postPropertyFormData.nearByPlace.publicGarden}
                        onChange={(e) => {
                            dispatch(setPostPropertyFormData({ ...postPropertyFormData, nearByPlace: { ...postPropertyFormData.nearByPlace, publicGarden: e.target.value } }));
                            if (inputErrStatus.publicGarden) { setInputErrStatus(pre => ({ ...pre, publicGarden: '' })) };
                        }}
                    />
                    <DropdownInput title={'Amusement Park'} placeholder={'Eg. 1KM or 100M'} required={false}
                        value={postPropertyFormData.nearByPlace.amusementPark}
                        onChange={(e) => {
                            dispatch(setPostPropertyFormData({ ...postPropertyFormData, nearByPlace: { ...postPropertyFormData.nearByPlace, amusementPark: e.target.value } }));
                            if (inputErrStatus.amusementPark) { setInputErrStatus(pre => ({ ...pre, amusementPark: '' })) };
                        }}
                    />
                    <DropdownInput title={'Milk Dairy'} placeholder={'Eg. 1KM or 100M'} required={false}
                        value={postPropertyFormData.nearByPlace.milkDiary}
                        onChange={(e) => {
                            dispatch(setPostPropertyFormData({ ...postPropertyFormData, nearByPlace: { ...postPropertyFormData.nearByPlace, milkDiary: e.target.value } }));
                            if (inputErrStatus.milkDiary) { setInputErrStatus(pre => ({ ...pre, milkDiary: '' })) };
                        }}
                    />
                    <DropdownInput title={'Movie Theatre'} placeholder={'Eg. 1KM or 100M'} required={false}
                        value={postPropertyFormData.nearByPlace.movieTheatre}
                        onChange={(e) => {
                            dispatch(setPostPropertyFormData({ ...postPropertyFormData, nearByPlace: { ...postPropertyFormData.nearByPlace, movieTheatre: e.target.value } }));
                            if (inputErrStatus.movieTheatre) { setInputErrStatus(pre => ({ ...pre, movieTheatre: '' })) };
                        }}
                    />
                    <DropdownInput title={'Restaurant'} placeholder={'Eg. 1KM or 100M'} required={false}
                        value={postPropertyFormData.nearByPlace.restaurant}
                        onChange={(e) => {
                            dispatch(setPostPropertyFormData({ ...postPropertyFormData, nearByPlace: { ...postPropertyFormData.nearByPlace, restaurant: e.target.value } }));
                            if (inputErrStatus.restaurant) { setInputErrStatus(pre => ({ ...pre, restaurant: '' })) };
                        }}
                    />
                    <DropdownInput title={'Library'} placeholder={'Eg. 1KM or 100M'} required={false}
                        value={postPropertyFormData.nearByPlace.library}
                        onChange={(e) => {
                            dispatch(setPostPropertyFormData({ ...postPropertyFormData, nearByPlace: { ...postPropertyFormData.nearByPlace, library: e.target.value } }));
                            if (inputErrStatus.library) { setInputErrStatus(pre => ({ ...pre, library: '' })) };
                        }}
                    />
                    <DropdownInput title={'Public Swimming Pool'} placeholder={'Eg. 1KM or 100M'} required={false}
                        value={postPropertyFormData.nearByPlace.swimmingPool}
                        onChange={(e) => {
                            dispatch(setPostPropertyFormData({ ...postPropertyFormData, nearByPlace: { ...postPropertyFormData.nearByPlace, swimmingPool: e.target.value } }));
                            if (inputErrStatus.swimmingPool) { setInputErrStatus(pre => ({ ...pre, swimmingPool: '' })) };
                        }}
                    />
                    <DropdownInput title={'Petrol Gas Pump'} placeholder={'Eg. 1KM or 100M'} required={false}
                        value={postPropertyFormData.nearByPlace.petrolGasPump}
                        onChange={(e) => {
                            dispatch(setPostPropertyFormData({ ...postPropertyFormData, nearByPlace: { ...postPropertyFormData.nearByPlace, petrolGasPump: e.target.value } }));
                            if (inputErrStatus.petrolGasPump) { setInputErrStatus(pre => ({ ...pre, petrolGasPump: '' })) };
                        }}
                    />
                    <DropdownInput title={'Motor Garage'} placeholder={'Eg. 1KM or 100M'} required={false}
                        value={postPropertyFormData.nearByPlace.motorGarage}
                        onChange={(e) => {
                            dispatch(setPostPropertyFormData({ ...postPropertyFormData, nearByPlace: { ...postPropertyFormData.nearByPlace, motorGarage: e.target.value } }));
                            if (inputErrStatus.motorGarage) { setInputErrStatus(pre => ({ ...pre, motorGarage: '' })) };
                        }}
                    />
                    <DropdownInput title={'Car Charging Point'} placeholder={'Eg. 1KM or 100M'} required={false}
                        value={postPropertyFormData.nearByPlace.carChargingPoint}
                        onChange={(e) => {
                            dispatch(setPostPropertyFormData({ ...postPropertyFormData, nearByPlace: { ...postPropertyFormData.nearByPlace, carChargingPoint: e.target.value } }));
                            if (inputErrStatus.carChargingPoint) { setInputErrStatus(pre => ({ ...pre, carChargingPoint: '' })) };
                        }}
                    />
                    <DropdownInput title={'Spa Beauty Salon'} placeholder={'Eg. 1KM or 100M'} required={false}
                        value={postPropertyFormData.nearByPlace.spaBeautySalon}
                        onChange={(e) => {
                            dispatch(setPostPropertyFormData({ ...postPropertyFormData, nearByPlace: { ...postPropertyFormData.nearByPlace, spaBeautySalon: e.target.value } }));
                            if (inputErrStatus.spaBeautySalon) { setInputErrStatus(pre => ({ ...pre, spaBeautySalon: '' })) };
                        }}
                    />
                    <DropdownInput title={'Pharmacy'} placeholder={'Eg. 1KM or 100M'} required={false}
                        value={postPropertyFormData.nearByPlace.pharmacy}
                        onChange={(e) => {
                            dispatch(setPostPropertyFormData({ ...postPropertyFormData, nearByPlace: { ...postPropertyFormData.nearByPlace, pharmacy: e.target.value } }));
                            if (inputErrStatus.pharmacy) { setInputErrStatus(pre => ({ ...pre, pharmacy: '' })) };
                        }}
                    />
                </div>
                <div className='my-7 flex gap-5'>
                    <button className={styles.formBtn} 
                    onClick={() => {
                        setCurrCategory('Amenities');
                        window.scrollTo({top:0});
                    }} >Back</button>
                    <button type='submit' className={styles.formBtn} onClick={onClickSave}>Save & Next</button>
                </div>
            </>
                :
                <div className={(animation ? 'transition-opacity opacity-100 duration-500' : 'opacity-0') + ' bg-red-600 rounded text-white p-2 font-semibold'}>
                    Please submit {!postPropertyFormData.generalInfo.completed ? 'general information' : !postPropertyFormData.propertyInfo.completed ? 'property information' : 'aminities'}  first
                </div>
            }
        </div>
    );
}


export default NearbyPlaces;
