import { useEffect, useState } from "react";
import CommonHeadDes from "../Common/CommonHeadDes";
import CountryCard from "../CountryCard/CountryCard";

const Countries = () => {
    const [countries, setCountries] = useState([]);
    useEffect(() => {
        fetch(`${import.meta.env.VITE_LOCALHOST_API}/countries`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setCountries(data);
            })
    }, [])
    return (
        <div>
            <CommonHeadDes heading={`🌍 Discover Beautiful Destinations Across Countries`} description={`Explore a curated selection of captivating countries, each offering unique experiences, breathtaking landscapes, and rich cultural heritage. From serene beaches to historic landmarks, find your next travel destination and uncover its hidden gems.`} />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-5">
                {
                    countries?.map(country => <CountryCard country={country} />)
                }
            </div>
        </div>
    );
};

export default Countries;