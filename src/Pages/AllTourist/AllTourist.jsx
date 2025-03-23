import { useLoaderData } from "react-router-dom";
import TouristCard from "../../Components/TouristCard/TouristCard";

const AllTourist = () => {
    const spots = useLoaderData();
    console.log(spots);
    return (
        <div>
            all tourist : {spots?.length}
            <div className="text-center max-w-6xl mx-auto my-5">
                <h2 className="text-4xl font-bold">Unveil Your Perfect Travel Routes</h2>
                <p className="font-medium">Embark on a seamless journey with carefully curated travel routes designed for explorers like you. Whether you crave serene landscapes, cultural marvels, or thrilling adventures, our routes guide you through the most enchanting destinations with optimized paths, travel tips, and unforgettable experiences. Let is make your travel dreams a reality!</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-5">
                {
                    spots?.map(spot => <TouristCard spot={spot} key={spot?._id} />)
                }
            </div>
        </div>
    );
};

export default AllTourist;