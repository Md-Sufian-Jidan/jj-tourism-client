import { useLoaderData } from "react-router-dom";
import TouristCard from "../../Components/TouristCard/TouristCard";
import CommonHeadDes from "../../Common/CommonHeadDes";

const AllTourist = () => {
    const spots = useLoaderData();
    console.log(spots);
    return (
        <div>
            <CommonHeadDes heading={`Unveil Your Perfect Travel Routes`} description={`Embark on a seamless journey with carefully curated travel routes designed for explorers like you. Whether you crave serene landscapes, cultural marvels, or thrilling adventures, our routes guide you through the most enchanting destinations with optimized paths, travel tips, and unforgettable experiences. Let is make your travel dreams a reality!`} />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-5">
                {
                    spots?.map(spot => <TouristCard spot={spot} key={spot?._id} />)
                }
            </div>
        </div>
    );
};

export default AllTourist;