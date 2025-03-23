import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../Routes/AuthProvider';
import Swal from 'sweetalert2';
import { Tooltip as ReactTooltip } from 'react-tooltip'

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogout = () => {
        logOut()
            .then(result => {
                console.log(result);
                Swal.fire({
                    title: "Logout!",
                    text: "User Logout Successfully!",
                    icon: "success"
                });
            })
            .catch(err => {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: err.message,
                });
            });
    };

    const navLinks = <>
        <li><NavLink to={'/'} className={({ isActive }) => isActive === true ? 'text-blue-900 font-bold' : 'font-semibold'}>Home</NavLink></li>
        <li><NavLink to={'/all-tourist'} className={({ isActive }) => isActive === true ? 'text-blue-900 font-bold' : 'font-semibold'}>All Tourist</NavLink></li>
        <li><NavLink to={'/add-tourist-spot'} className={({ isActive }) => isActive === true ? 'text-blue-900 font-bold' : 'font-semibold'}>Add Tourists Spot</NavLink></li>
        <li><NavLink to={'/my-list'} className={({ isActive }) => isActive === true ? 'text-blue-900 font-bold' : 'font-semibold'}>My List</NavLink></li>
    </>

    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {navLinks}
                        </ul>
                    </div>
                    <Link to={'/'} className='flex items-center gap-1 btn hover:text-green-500'>
                        <img className='w-8 rounded' src="https://i.ibb.co/7NgsV6t8/logo.png" alt="" />
                        <span>Jj Tourism</span>
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navLinks}
                    </ul>
                </div>
                <div className="navbar-end">
                    <div className="avatar mr-3">
                        <div className="ring-primary ring-offset-base-100 w-8 rounded-full ring ring-offset-2 z-20">
                            <img data-tooltip-id="my-tooltip" data-tooltip-content={user?.email} alt="photo url is not right" src={user ? user?.photoURL
                                : "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"} />
                            <ReactTooltip id="my-tooltip" />
                        </div>
                    </div>
                    {
                        user ? <button onClick={handleLogout} className='btn btn-error'>Logout</button> :
                            <>
                                <Link to={'/login'} className="btn btn-success mr-2">Login</Link>
                                <Link to={'/register'} className="btn btn-primary">Register</Link>
                            </>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;