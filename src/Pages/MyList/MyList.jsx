import { useContext, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { AuthContext } from '../../Routes/AuthProvider';
import { Link } from 'react-router-dom';

const MyList = () => {

    const { user } = useContext(AuthContext);
    const [places, setPlaces] = useState([]);

    useEffect(() => {
        fetch(`${import.meta.env.VITE_LOCALHOST_API}/my-list/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setPlaces(data);
            });
    }, []);

    return (
        <div>
            <Helmet>
                <title>Jj Tourism || My List</title>
            </Helmet>

            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Name</th>
                            <th>Country</th>
                            <th>Add By</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            places?.map((place, idx) => <tr key={place?._id}>
                                <th>{idx + 1}</th>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle h-12 w-12">
                                                <img
                                                    src={place?.image}
                                                    alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{place?.tourists_spot_name}</div>
                                            <div className="text-sm opacity-50">{place?.location}</div>
                                        </div>
                                    </div>
                                </td>
                                <td>{place?.Country}</td>
                                <td>{user?.displayName}</td>
                                <th>
                                    <Link to={`/update/${place?._id}`}>
                                        <button className="btn bg-[#3F7D58]">Update</button>
                                    </Link>
                                </th>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyList;