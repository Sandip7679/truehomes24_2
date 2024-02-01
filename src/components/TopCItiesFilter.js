import React, { useEffect, useState } from 'react';
import { LinkIcon } from './svgIcons';
import { styles } from '../Styles/Styles';


const cities = [
    { city: 'Ahmedabad', id: 1 },
    { city: 'Bangalore', id: 2 },
    { city: 'Chennai', id: 3 },
    { city: 'Delhi', id: 4 },
    { city: 'Hydrabad', id: 5 },
    { city: 'Kolkata', id: 6 },
    { city: 'Mumbai', id: 7 },
    { city: 'Pune', id: 8 },
]

const locations = [
    { location: 'Property in Anna Nagar' },
    { location: 'Property in Adyar' },
    { location: 'Property in Guduvancheri' },
    { location: 'Property in Guduvancheri' },
    { location: 'Property in Valasaravakkam' },
    { location: 'Property in Valasaravakkam' },
    { location: 'Property in Valasaravakkam' },
    { location: 'Property in Mylapore' },
    { location: 'Property in Tambaram' },
    { location: 'Property in Perungudi' },
    { location: 'Property in Perungudi' },
    { location: 'Property in Perungudi' },
    { location: 'Property in Thiruvanmiyur' },
    { location: 'Property in Ambattur' },
    { location: 'Property in Ambattur' },
    { location: 'Property in Ambattur' },
    { location: 'Property in Ambattur' },
    { location: 'Property in Ambattur' },
    { location: 'Property in Ambattur' },
    { location: 'Property in Ambattur' },
    { location: 'Property in Ambattur' },
    { location: 'Property in Ambattur' },
    { location: 'Property in Ambattur' },
    { location: 'Property in Ambattur' },
    { location: 'Property in Ambattur' },
    { location: 'Property in Ambattur' },
    { location: 'Property in Ambattur' },
    { location: 'Property in Ambattur' },
    { location: 'Property in Ambattur' },
    { location: 'Property in Ambattur' },

]
const TopCItiesFilter = () => {
    const [currCityId, setCurrCityId] = useState(1);

    useEffect(() => {
        // const borderBottomElement = document.querySelector('.animated-border');
        // borderBottomElement.classList.add('animated-border');
    }, []);

    const getLocations = (cityId) => {
        setCurrCityId(cityId);
    }

    return (
        <div className=' pt-5 px-[5%] py-5 bg-gray-50'>
             <h1 className={styles.title1}>Browse Residential Projects In Top Cities</h1>

            <div className='w-[95%] sm:flex justify-between pt-2 border-b-[1px] mt-10 border-b-gray-200'>
                {/* <button className='p-1 focus:border-b-2 focus:border-gray-600 active:border-b-2 active:border-gray-600'>Ahmedabad</button> */}

                {cities.map((item, index) => {
                    return (
                        <button key={index}
                            onClick={() => getLocations(item.id)}
                            className={`p-1 hover:opacity-60 animated-border ${item.id === currCityId ? 'border-b-[1px] border-gray-600' : ''}`}>
                            {item.city}
                        </button>
                    )
                })}

            </div>
            <div className='flex flex-wrap mt-5'>
                <div className=''>
                    {locations.map((item, index) => {
                        return (
                            <button key={index} className='text-left text-sm text-gray-600 mx-4 mt-[1px] min-w-[200px]'>
                                <div className='flex hover:underline'>
                                    <span><LinkIcon classname={'h-4 w-4 mt-1 mr-1'} /></span>
                                    <span>{item.location}</span>
                                </div>


                            </button>
                        )
                    })}
                </div>

            </div>
        </div>
    );
}

export default TopCItiesFilter;
