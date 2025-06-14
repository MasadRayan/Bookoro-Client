import { motion } from "framer-motion";
import { use, useEffect, useState } from "react";
import { FaBed, FaStar, FaUserFriends, FaSnowflake, FaUtensils, FaWater, FaInfoCircle } from "react-icons/fa";
import { Link, ScrollRestoration, useLoaderData, useLocation, useNavigate, } from "react-router";
import { AuthContext } from "../../Context/AuthContext";
import axios from "axios";
import Swal from "sweetalert2";
import ReviewCard from "../ReviewCard/ReviewCard";
import Lottie from "lottie-react";
import reviewlottie from '../../assets/lotties/review.json'




export default function RoomDetails() {
    const { user } = use(AuthContext)
    const loaderRoom = useLoaderData();
    const [room, setRoom] = useState(loaderRoom);
    const navigate = useNavigate();
    const location = useLocation();
    const [reviews, setReviews] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        document.title = 'Room Details'
    }, [])

    useEffect(() => {
        const fetchReviews = async () => {
            try {
                const res = await fetch('https://bookoro-server-side.vercel.app/reviews');
                const data = await res.json();
                setReviews(data);
            } catch (err) {
                console.error('Failed to load reviews:', err);
            } finally {
                setLoading(false);
            }
        };

        fetchReviews();
    }, []);
    // console.log(room);
    const selectedReview = reviews.filter(review => review.roomId == room._id)

    const handleBooking = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const date = e.target.date.value;
        const newAddedInfo = {
            email: email,
            date: date,
            status: "booked"
        };

        axios.patch(`https://bookoro-server-side.vercel.app/rooms/${room._id}`, newAddedInfo)
            .then(res => {
                if (res.data.modifiedCount) {

                    setRoom(prev => ({ ...prev, status: "booked" }));

                    const modal = document.getElementById("my_modal_1");
                    if (modal) modal.close();

                    Swal.fire({
                        icon: "success",
                        title: "Your Room is booked",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
            .catch(error => {
                console.log(error);
            })
    }

    const handleUserLogin = () => {
        navigate("/login", { state: location.pathname });
    }




    return (
        <div>
            <motion.div
                className="p-6 max-w-6xl mx-auto"
                initial={{ opacity: 0, scale: 0.95, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
            >
                <motion.h1
                    className="text-4xl font-bold mb-8 text-center"
                    style={{ color: "#2ecc71" }}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                >
                    Room Details
                </motion.h1>

                <motion.div
                    className="grid md:grid-cols-2 gap-8 items-start"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                >
                    <motion.img
                        src={room.photo}
                        alt={room.roomName}
                        className="w-full h-auto rounded-2xl shadow-xl object-cover"
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.6, duration: 0.5 }}
                    />

                    <motion.div
                        className="space-y-4"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.8, duration: 0.5 }}
                    >
                        <h2 className="text-3xl font-semibold" style={{ color: "#2ecc71" }}>
                            {room.roomName}
                        </h2>

                        <div className="flex items-center text-yellow-500 text-lg">
                            <FaStar className="mr-1" /> {room.rating}
                        </div>

                        <p className="text-gray-600 text-lg">
                            Room No: {room.roomNumber} (Floor {room.floor})
                        </p>

                        <div className="grid grid-cols-2 gap-4 text-base">
                            <div className="flex items-center gap-2">
                                <FaBed /> Bed: {room.bed}
                            </div>
                            <div className="flex items-center gap-2">
                                <FaUserFriends /> Capacity: {room.capacity}
                            </div>
                            <div className="flex items-center gap-2">
                                <FaSnowflake /> AC: <span className="uppercase">{room.ac}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <FaUtensils /> Breakfast: {room.complementaryBreakfast}
                            </div>
                            <div className="flex items-center gap-2">
                                <FaWater /> View: <span className="uppercase">{room.view}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <FaInfoCircle /> Status: {room.status}
                            </div>
                        </div>

                        <p className="text-2xl font-bold mt-4" style={{ color: "#2ecc71" }}>
                            ৳{room.price} / night
                        </p>
                        <div className="flex gap-5">
                            {
                                user ?
                                    <button
                                        onClick={() => document.getElementById('my_modal_1').showModal()}
                                        className="btn bg-[#2ecc71]"
                                        disabled={room.status === "booked"}
                                    >
                                        {room.status === "booked" ? "Not Available" : "Book Now"}
                                    </button>
                                    :
                                    <button
                                        onClick={handleUserLogin}
                                        className="btn bg-[#2ecc71]"
                                        disabled={room.status === "booked"}
                                    >
                                        {room.status === "booked" ? "Not Available" : "Book Now"}
                                    </button>
                            }
                            <Link to={'/rooms'} className="btn bg-[#2ecc71]">All Rooms</Link>
                        </div>
                    </motion.div>
                </motion.div>
            </motion.div>


            <dialog id="my_modal_1" className="modal">
                <div className="modal-box">
                    <h2 className="text-3xl font-semibold" style={{ color: "#2ecc71" }}>
                        {room.roomName}
                    </h2>
                    <p className="text-2xl font-bold mt-4">
                        ৳{room.price} / night
                    </p>
                    <div className="modal-action">
                        <form onSubmit={handleBooking} className="fieldset w-full text-2xl p-4">

                            <label className="label">Your Name</label>
                            <input type="text" className="input" name="name" defaultValue={user?.displayName} readOnly placeholder="Your name" />

                            <label className="label">Your Email</label>
                            <input type="email" name="email" defaultValue={user?.email} readOnly className="input" placeholder="Email" />

                            <label className="label">Reservation Date</label>
                            <input type="date" name="date" className="input" placeholder="Date" required />

                            <button className="btn mt-5 bg-[#2ecc71] w-fit">Confirm</button>
                        </form>
                    </div>
                </div>
            </dialog>

            <div>
                <h3 className="text-3xl font-bold text-center my-10">Reviwes Of This Room</h3>
                <div className="my-10">
                    {
                        selectedReview.length === 0 ? (
                            <div>
                                <p className="text-center text-lg text-gray-500">No reviews yet for this room.</p>
                                <div className="w-[300px] sm:w-[400px] md:w-[500px] h-auto mx-auto my-5">
                                    <Lottie animationData={reviewlottie} loop={true} />
                                </div>
                                
                            </div>

                        ) : (
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                                {
                                    selectedReview.map(review => (
                                        <ReviewCard
                                            review={review}
                                            key={review._id}
                                        />
                                    ))
                                }
                            </div>
                        )
                    }
                </div>
            </div>
            <ScrollRestoration></ScrollRestoration>
        </div>
    );
}
