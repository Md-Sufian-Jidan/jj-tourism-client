import React, { useContext } from 'react';
import { Helmet } from 'react-helmet';
import { AuthContext } from '../../Routes/AuthProvider';

const AddTouristSpot = () => {
    const { user } = useContext(AuthContext);

    const handleAddTouristSpot = (e) => {
        e.preventDefault();
    }
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
                                <input type="text" defaultValue={user?.displayName} name='name' className="input" placeholder="Photo Url" />
                            </div>
                            <div className='flex-1'>
                                <label className="fieldset-label">User Email</label>
                                <input type="email" defaultValue={user?.email} name='email' className="input" placeholder="User Email" />
                            </div>
                        </div>
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
                        <div className='flex items-center gap-10'>
                            <div className='flex-1'>
                                <label className="fieldset-label">Location</label>
                                <input type="text" name='location' className="input" placeholder="Location" />
                            </div>
                            <div className='flex-1'>
                                <label className="fieldset-label">Average Cost</label>
                                <input type="number" className="input" placeholder="Average Cost" />
                            </div>
                        </div>
                        <div className='flex items-center gap-10'>
                            <div className='flex-1'>
                                <label className="fieldset-label">seasonality</label>
                                <input type="text" name='seasonality' className="input" placeholder="Summer / Winter" />
                            </div>
                            <div className='flex-1'>
                                <label className="fieldset-label">Travel Time</label>
                                <input type="text" className="input" placeholder="Travel Time" />
                            </div>
                        </div>
                        <div className='flex items-center gap-10'>
                            <div className='flex-1'>
                                <label className="fieldset-label">Total Visitors Per Year</label>
                                <input type="text" name='totalVisitorsPerYear' className="input" placeholder="Total Visitors Per Year" />
                            </div>
                            <div className='flex-1'>
                                <label className="fieldset-label">Photo Url</label>
                                <input type="text" className="input" placeholder="Photo Url" />
                            </div>
                        </div>
                        <label className="fieldset-label">short description</label>
                        <textarea rows={10} cols={10} type="text" name='short_description' className="textarea textarea-lg w-full" placeholder="short description" />
                        <div><a className="link link-hover">Forgot password?</a></div>
                        <button className="btn btn-neutral mt-4">Login</button>
                    </fieldset>
                </form>
            </div>
        </div>
    );
};

export default AddTouristSpot;