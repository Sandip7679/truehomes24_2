import React, { useState } from 'react';
import { LinkIcon } from './svgIcons';


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
    const [currCityId, setCurrCityId] = useState(null);


    const getLocations = (cityId) => {
        setCurrCityId(cityId);
    }

    return (
        <div className='pb-10 mt-5 px-[20px]'>
            <div className='sm:flex justify-between pt-2 border-b-[1px] border-b-gray-200'>
                {/* <button className='p-1 focus:border-b-2 focus:border-gray-600 active:border-b-2 active:border-gray-600'>Ahmedabad</button> */}

                {cities.map((item, index) => {
                    return (
                        <button
                            onClick={() => getLocations(item.id)}
                            className={`p-1 hover:opacity-60 ${item.id == currCityId ? 'border-b-[1px] border-gray-600' : ''}`}>{item.city}</button>
                    )
                })}

            </div>
            <div className='flex flex-wrap mt-5'>
                <div className=''>
                    {locations.map((item, index) => {
                        return (
                            <button className='text-left text-sm text-gray-600 mx-4 mt-[1px] min-w-[200px]'>
                                <div className='flex hover:underline'>
                                    <span><LinkIcon classname={'h-4 w-4 mt-1 mr-1'}/></span>
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
