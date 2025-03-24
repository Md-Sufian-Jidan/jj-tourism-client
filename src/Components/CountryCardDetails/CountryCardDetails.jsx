import React from 'react';
import { useLoaderData } from 'react-router-dom';
import TouristCard from '../TouristCard/TouristCard';

const CountryCardDetails = () => {
    const countries = useLoaderData();
    console.log(countries);
    return (
        <div>
            <h2 className='text-2xl font-bold'>Total countries : {countries?.length}</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-5'>
                {
                    countries?.map(country => <TouristCard key={country?._id} spot={country} />)
                }
            </div>
        </div>
    );
};

export default CountryCardDetails;