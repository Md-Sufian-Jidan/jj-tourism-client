import { useLoaderData } from "react-router-dom";
import TouristCard from "../../Components/TouristCard/TouristCard";
import CommonHeadDes from "../../Components/Common/CommonHeadDes";
import { Helmet } from "react-helmet";
import { useState } from "react";

const AllTourist = () => {
    const spots = useLoaderData();
    const [displaySpots, setDisplaySpots] = useState(spots);

    const handleSort = (order) => {
        fetch(`${import.meta.env.VITE_LOCALHOST_API}/sort/${order}`)
            .then(res => res.json())
            .then(data => {
                setDisplaySpots(data);
            });
    };

    return (
        <div>
            <Helmet>
                <title>Jj tourism || All Tourist Places</title>
            </Helmet>
            <CommonHeadDes heading={`Unveil Your Perfect Travel Routes`} description={`Embark on a seamless journey with carefully curated travel routes designed for explorers like you. Whether you crave serene landscapes, cultural marvels, or thrilling adventures, our routes guide you through the most enchanting destinations with optimized paths, travel tips, and unforgettable experiences. Let is make your travel dreams a reality!`} />
            <div className="max-w-xl mx-auto text-center">
                <div className="dropdown dropdown-start">
                    <div tabIndex={0} role="button" className="btn m-1">Sort By Average Cost ⬇️</div>
                    <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                        <li><button onClick={() => handleSort('ascending')}>Ascending</button></li>
                        <li><button onClick={() => handleSort('descending')}>Descending</button></li>
                    </ul>
                </div>


            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-5">
                {
                    displaySpots?.map(spot => <TouristCard spot={spot} key={spot?._id} />)
                }
            </div>
        </div>
    );
};

export default AllTourist;