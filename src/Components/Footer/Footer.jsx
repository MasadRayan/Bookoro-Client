import { FaFacebook } from 'react-icons/fa';
import { BsGithub, BsInstagram } from 'react-icons/bs';import { FaArrowUp } from "react-icons/fa";
import logo from '../../assets/download .png'
import { use } from "react";
import { AuthContext } from "../../Context/AuthContext";
import { Link } from "react-router";

const Footer = () => {
    const { user } = use(AuthContext)
    const links =
        <>
            <Link className="hover:text-[#2ecc71] cursor-pointer  block" to="/">Home</Link>
            <Link className="hover:text-[#2ecc71] cursor-pointer  block" to="/rooms">Rooms</Link>
            {
                user && <Link className="hover:text-[#2ecc71] cursor-pointer  block" to="/myBookings">My Bookings</Link>
            }
        </>
    return (
        <footer className=" mt-20 bg-base-200 rounded-t-3xl overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 py-10 grid md:grid-cols-3 gap-8">
                <div>
                    <div className="flex items-center space-x-2 mb-4">

                        <img className="w-[24px] h-[24px] rounded-full" src={logo} alt="Logo" />
                        <span className="text-xl font-semibold">Bookoro</span>
                    </div>
                    <p className="text-sm mb-4">
                        Your Stay, Your Way – Book with Confidence.
                    </p>
                    <nav >
                        <h6 className="footer-title">Social</h6>
                        <div className="flex items-center gap-2">
                            <a href='https://www.facebook.com/masad.rayan.2024' target='_blank' className='cursor-pointer'>
                                <FaFacebook size={26} />
                            </a>
                            <a href='https://www.instagram.com/masad_rayan/' target='_blank' className='cursor-pointer'>
                                <BsInstagram size={26} />
                            </a>
                            <a href='https://github.com/MasadRayan' target='_blank' className='cursor-pointer'>
                                <BsGithub size={26} />
                            </a>
                        </div>
                    </nav>
                    <button
                        className="mt-6 border px-4 py-2 flex items-center gap-2 rounded hover:bg-white hover:text-black transition"
                        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                    >
                        <FaArrowUp />
                        BACK TO TOP
                    </button>
                </div>

                <div>
                    <h3 className="font-semibold  mb-4">Site Map</h3>
                    <ul className="space-y-2 text-sm">
                        {links}
                    </ul>
                </div>

                {/* Right Section - Legal */}
                <div>
                    <h3 className="font-semibold mb-4">Legal</h3>
                    <ul className="space-y-2 text-sm">
                        <li className="hover:text-[#2ecc71] cursor-pointer">Privacy Policy</li>
                        <li className="hover:text-[#2ecc71] cursor-pointer">Terms of Services</li>
                        <li className="hover:text-[#2ecc71] cursor-pointer">Lawyer’s Corners</li>
                    </ul>
                </div>
            </div>

            {/* Bottom Copyright */}
            <div className="bg-[#2ecc71] rounded-t-xl text-center text-sm py-3 text-black">
                © 2024 ataraxis.ai, All Rights Reserved.
            </div>
        </footer>
    );
};

export default Footer;
