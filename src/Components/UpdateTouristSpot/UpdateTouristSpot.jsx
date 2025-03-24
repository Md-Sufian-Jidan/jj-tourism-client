import { useContext } from "react";
import { Helmet } from "react-helmet";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Routes/AuthProvider";
import Swal from "sweetalert2";

const UpdateTouristSpot = () => {
    const { user } = useContext(AuthContext);

    const spot = useLoaderData();
    const { _id, Country, average_cost, image, location, seasonality, short_description, totalVisitorsPerYear, tourists_spot_name, travel_time } = spot || {};

    const handleUpdateTouristSpot = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = user?.displayName;
        const email = user?.email;

        const tourists_spot_name = form.tourists_spot_name.value;
        const Country = form.country_Name.value;
        const location = form.location.value;
        const average_cost = form.average_cost.value;
        const seasonality = form.seasonality.value;
        const travel_time = form.travel_time.value;
        const totalVisitorsPerYear = form.totalVisitorsPerYear.value;
        const image = form.photoUrl.value;
        const short_description = form.short_description.value;

        const place = { name, email, Country, average_cost, image, location, seasonality, short_description, totalVisitorsPerYear, tourists_spot_name, travel_time };

        fetch(`${import.meta.env.VITE_LOCALHOST_API}/update-tourist/${_id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(place)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                if (data?.matchedCount) {
                    Swal.fire({
                        title: "Success",
                        text: "Tourist spot Update Successfully",
                        icon: "success"
                    });
                    form.reset();
                }
            });
    };

    return (
        <div>
            <Helmet>
                <title>Jj Tourism || Update Tourist Spot</title>
            </Helmet>

            <div className="w-full bg-[#A08963] shadow-2xl my-5 rounded-xl">
                <form onSubmit={handleUpdateTouristSpot} className="card-body w-3/4 mx-auto">
                    <fieldset className="fieldset">
                        {/* tourists_spot_name country_Name */}
                        <div className='flex items-center gap-10'>
                            <div className='flex-1'>
                                <label className="fieldset-label">Tourist Spot Name</label>
                                <input type="text" defaultValue={tourists_spot_name} name='tourists_spot_name' className="input bg-[#C9B194]" placeholder="Tourist Spot Name" />
                            </div>
                            <div className='flex-1'>
                                <label className="fieldset-label">Country Name</label>
                                <input type="text" defaultValue={Country} name='country_Name' className="input bg-[#C9B194]" placeholder="Country Name" />
                            </div>
                        </div>
                        {/* location average_cost */}
                        <div className='flex items-center gap-10'>
                            <div className='flex-1'>
                                <label className="fieldset-label">Location</label>
                                <input type="text" defaultValue={location} name='location' className="input bg-[#C9B194]" placeholder="Location" />
                            </div>
                            <div className='flex-1'>
                                <label className="fieldset-label">Average Cost</label>
                                <input type="number" defaultValue={average_cost} name='average_cost' className="input bg-[#C9B194]" placeholder="Average Cost" />
                            </div>
                        </div>
                        {/* seasonality travel_time */}
                        <div className='flex items-center gap-10'>
                            <div className='flex-1'>
                                <label className="fieldset-label">seasonality</label>
                                <input type="text" defaultValue={seasonality} name='seasonality' className="input bg-[#C9B194]" placeholder="Summer / Winter" />
                            </div>
                            <div className='flex-1'>
                                <label className="fieldset-label">Travel Time</label>
                                <input type="text" defaultValue={travel_time} name='travel_time' className="input bg-[#C9B194]" placeholder="Travel Time" />
                            </div>
                        </div>
                        {/* totalVisitorsPerYear photoUrl */}
                        <div className='flex items-center gap-10'>
                            <div className='flex-1'>
                                <label className="fieldset-label">Total Visitors Per Year</label>
                                <input type="text" defaultValue={totalVisitorsPerYear} name='totalVisitorsPerYear' className="input bg-[#C9B194]" placeholder="Total Visitors Per Year" />
                            </div>
                            <div className='flex-1'>
                                <label className="fieldset-label">Photo Url</label>
                                <input type="text" defaultValue={image} name='photoUrl' className="input bg-[#C9B194]" placeholder="Photo Url" />
                            </div>
                        </div>
                        <label className="fieldset-label">short description</label>
                        <textarea rows={5} cols={5} type="text" defaultValue={short_description} name='short_description' className="textarea textarea-lg w-full bg-[#C9B194]" placeholder="short description" />
                        <button className="btn bg-[#706D54] mt-4">Update Tourist Spot</button>
                    </fieldset>
                </form>
            </div>
        </div>
    );
};

export default UpdateTouristSpot;