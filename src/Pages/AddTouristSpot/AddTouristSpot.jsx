import React, { useContext } from 'react';
import { Helmet } from 'react-helmet';
import { AuthContext } from '../../Routes/AuthProvider';
import Swal from 'sweetalert2';

const AddTouristSpot = () => {
    const { user } = useContext(AuthContext);

    const handleAddTouristSpot = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const tourists_spot_name = form.tourists_spot_name.value;
        const Country = form.country_Name.value;
        const location = form.location.value;
        const average_cost = form.average_cost.value;
        const seasonality = form.seasonality.value;
        const travel_time = form.travel_time.value;
        const totalVisitorsPerYear = form.totalVisitorsPerYear.value;
        const image = form.photoUrl.value;
        const short_description = form.short_description.value;

        const place = { name, email, Country, average_cost, image, location, seasonality, short_description, totalVisitorsPerYear, tourists_spot_name, travel_time }

        fetch(`${import.meta.env.VITE_LOCALHOST_API}/add-tourist-spot`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(place)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                if (data?.insertedId) {
                    Swal.fire({
                        title: "Success",
                        text: "Tourist Place Added Successfully",
                        icon: "success"
                    });
                    form.reset();
                }
            });
    };

    return (
        <div>
            <Helmet>
                <title>Jj Tourism || Add Tourist Spot</title>
            </Helmet>

            <div className="w-full bg-slate-600 shadow-2xl">
                <form onSubmit={handleAddTouristSpot} className="card-body w-3/4 mx-auto">
                    <fieldset className="fieldset">
                        <div className='flex items-center gap-10'>
                            <div className='flex-1'>
                                <label className="fieldset-label">Name</label>
                                <input type="text" defaultValue={user?.displayName} name='name' className="input" placeholder="Name" readOnly />
                            </div>
                            <div className='flex-1'>
                                <label className="fieldset-label">User Email</label>
                                <input type="email" defaultValue={user?.email} name='email' className="input" placeholder="User Email" readOnly />
                            </div>
                        </div>
                        {/* tourists_spot_name country_Name */}
                        <div className='flex items-center gap-10'>
                            <div className='flex-1'>
                                <label className="fieldset-label">Tourist Spot Name</label>
                                <input type="text" name='tourists_spot_name' className="input" placeholder="Tourist Spot Name" />
                            </div>
                            <div className='flex-1'>
                                <label className="fieldset-label">Country Name</label>
                                <input type="text" name='country_Name' className="input" placeholder="Country Name" />
                            </div>
                        </div>
                        {/* location average_cost */}
                        <div className='flex items-center gap-10'>
                            <div className='flex-1'>
                                <label className="fieldset-label">Location</label>
                                <input type="text" name='location' className="input" placeholder="Location" />
                            </div>
                            <div className='flex-1'>
                                <label className="fieldset-label">Average Cost</label>
                                <input type="number" name='average_cost' className="input" placeholder="Average Cost" />
                            </div>
                        </div>
                        {/* seasonality travel_time */}
                        <div className='flex items-center gap-10'>
                            <div className='flex-1'>
                                <label className="fieldset-label">seasonality</label>
                                <input type="text" name='seasonality' className="input" placeholder="Summer / Winter" />
                            </div>
                            <div className='flex-1'>
                                <label className="fieldset-label">Travel Time</label>
                                <input type="text" name='travel_time' className="input" placeholder="Travel Time" />
                            </div>
                        </div>
                        {/* totalVisitorsPerYear photoUrl */}
                        <div className='flex items-center gap-10'>
                            <div className='flex-1'>
                                <label className="fieldset-label">Total Visitors Per Year</label>
                                <input type="text" name='totalVisitorsPerYear' className="input" placeholder="Total Visitors Per Year" />
                            </div>
                            <div className='flex-1'>
                                <label className="fieldset-label">Photo Url</label>
                                <input type="text" name='photoUrl' className="input" placeholder="Photo Url" />
                            </div>
                        </div>
                        <label className="fieldset-label">short description</label>
                        <textarea rows={5} cols={5} type="text" name='short_description' className="textarea textarea-lg w-full" placeholder="short description" />
                        <button className="btn bg-[#5F99AE] mt-4">Add Tourist Spot</button>
                    </fieldset>
                </form>
            </div>
        </div>
    );
};

export default AddTouristSpot;