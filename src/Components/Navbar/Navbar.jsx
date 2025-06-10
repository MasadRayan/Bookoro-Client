import React, { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router';
import logo from '../../assets/download .png';
import { AuthContext } from '../../Context/AuthContext';
import ThemeToggle from '../../ThemeToggle/ThemeToggle';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const toggleDrawer = () => setIsDrawerOpen(!isDrawerOpen);

    const links = (
        <>
            <NavLink className="hover:bg-[#2ecc71] hover:rounded-lg px-3 py-2 block" to="/">Home</NavLink>
            <NavLink className="hover:bg-[#2ecc71] hover:rounded-lg px-3 py-2 block" to="/rooms">Rooms</NavLink>
            {
                user && <NavLink className="hover:bg-[#2ecc71] hover:rounded-lg px-3 py-2 block" to="/myBookings">My Bookings</NavLink>
            }
            <NavLink className="hover:bg-[#2ecc71] hover:rounded-lg px-3 py-2 block" to="/aboutUs">About Us</NavLink>

        </>
    );

    const handleLogOut = () => {
        logOut().catch((error) => console.error(error));
    };

    return (
        <div className="navbar mb-10 px-4">
            <div className="flex-1 flex items-center gap-2">
                <button className="lg:hidden text-2xl" onClick={toggleDrawer}>
                    {isDrawerOpen ? <FiX /> : <FiMenu />}
                </button>
                <img className="w-[24px] h-[24px] rounded-full" src={logo} alt="Logo" />
                <span className="text-xl font-semibold">Bookoro</span>
            </div>

            <div className="hidden lg:flex flex-1 justify-center">
                <ul className="menu menu-horizontal px-1 font-medium">
                    {links}
                </ul>
            </div>

            <div className="flex items-center gap-3">
                <ThemeToggle />
                {user ? (
                    <div className="flex items-center gap-3">
                        <div className="relative group">
                            <img
                                className="w-10 h-10 object-cover rounded-full"
                                src={user.photoURL}
                                alt={user.displayName}
                                referrerPolicy="no-referrer"
                            />
                            <div className="absolute top-12 left-1/2 -translate-x-1/2 hidden group-hover:block bg-gray-800 text-white px-2 py-1 rounded shadow-md z-10">
                                {user.displayName}
                            </div>
                        </div>
                        <button onClick={handleLogOut} className="btn bg-[#2ecc71]">Log Out</button>
                    </div>
                ) : (
                    <div className="hidden md:flex gap-2">
                        <Link to="/login" className="btn bg-[#2ecc71]">Login</Link>
                        <Link to="/register" className="btn btn-outline btn-info">Register</Link>
                    </div>
                )}

                {!user && (
                    <div className="flex md:hidden">
                        <Link to="/login" className="btn bg-[#2ecc71]">Login</Link>
                    </div>
                )}
            </div>

            <div
                className={`fixed top-16 left-0 w-3/4 h-screen bg-base-300 z-50 shadow-lg px-6 py-4 flex flex-col gap-4 transform transition-transform duration-300 ease-in-out ${isDrawerOpen ? 'translate-x-0' : '-translate-x-full'
                    } lg:hidden`}
            >
                {links}
            </div>
        </div>
    );
};

export default Navbar;
