import { useEffect, useState } from "react";
import TouristSpot from "../TouristSpot/TouristSpot";
import CommonHeadDes from "../Common/CommonHeadDes";


const TouristSpots = () => {

    const [touristSpots, setTouristSpots] = useState([]);

    useEffect(() => {
        fetch(`${import.meta.env.VITE_LOCALHOST_API}/tourist-spots`)
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setTouristSpots(data)
            })
    }, []);

    return (
        <div>
           <CommonHeadDes heading={'Explore Breathtaking Tourist Destinations'} description={'Discover some of the world is most mesmerizing tourist spots across various countries. From serene beaches to majestic historical sites, find your perfect travel destination with detailed information about popular spots, travel costs, best seasons to visit, and much more. Let your next adventure begin here!'} />
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 my-5">
                {
                    touristSpots.map(spot => <TouristSpot key={spot?._id} spot={spot} />)
                }
            </div>
        </div>
    );
};

export default TouristSpots;