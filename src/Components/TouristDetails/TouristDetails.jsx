import { Helmet } from "react-helmet";
import { useLoaderData } from "react-router-dom";

const TouristDetails = () => {
    const spot = useLoaderData({});
    const { Country, average_cost, image, location, seasonality, short_description, totalVisitorsPerYear, tourists_spot_name, travel_time } = spot || {};
    return (
        <>
            <Helmet>
                <title>Jj tourism || Tourist Details</title>
            </Helmet>
            <section className="bg-white dark:bg-gray-900">
                <div className="container px-6 py-10 mx-auto">
                    <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">Country : {Country}</h1>

                    <div className="mt-8 lg:-mx-6 lg:flex lg:items-center">
                        <img className="object-cover w-full lg:mx-6 lg:w-1/2 rounded-xl h-72 lg:h-96" src={image} alt="Tourist place picture" />

                        <div className="mt-6 lg:w-1/2 lg:mt-0 lg:mx-6 ">
                            <p className="text-2xl mt-4 text-gray-800 dark:text-white">Place Name : <span className="font-bold">{tourists_spot_name}</span></p>

                            <p className="mt-4 text-xl text-gray-800 dark:text-white">Location : <span className="font-bold">{location}</span></p>
                            <p className="mt-4 text-xl text-gray-800 dark:text-white">Seasonality : <span className="font-bold">{seasonality}</span></p>
                            <p className="mt-4 text-xl text-gray-800 dark:text-white">Average Cost : <span className="font-bold">{average_cost}</span></p>

                            <p className="mt-4 text-xl text-gray-800 dark:text-white">Travel Time : <span className="font-bold">{travel_time}</span></p>
                            <p className="mt-4 text-xl text-gray-800 dark:text-white">Total Visitor Per Year : <span className="font-bold">{totalVisitorsPerYear}</span></p>
                            <p className="mt-4 text-xl text-gray-800 dark:text-white">In short, <span className="font-bold">{short_description}</span></p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default TouristDetails;