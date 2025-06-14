import { use, useEffect, useState } from 'react';
import { FaStar } from 'react-icons/fa';
import Swal from 'sweetalert2';
import axios from 'axios';
import Lottie from 'lottie-react';
import lottieHotel from '../../assets/lotties/Hotelbook.json'
import { Link, ScrollRestoration } from 'react-router';
import { AuthContext } from '../../Context/AuthContext';

const MyRoomList = ({ myRoomPromise, onRefresh }) => {
    const rooms = use(myRoomPromise);
    const { user } = use(AuthContext);
    const date = new Date();
    const formattedDate = date.toLocaleString('en-CA', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
    }).replace(',', '');

    useEffect(() => {
        document.title = 'My Bookings'
    }, [])

    const handleroomDelete = (id, bookingDate) => {
        const today = new Date();
        const booking = new Date(bookingDate);

        const timeDiff = booking.getTime() - today.getTime();
        const dayDiff = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));

        if (dayDiff <= 1) {
            Swal.fire({
                icon: "error",
                title: "Too Late!",
                text: "You can only cancel bookings more than 1 day in advance.",
            });
            return;
        }

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                const deleteInfo = {
                    email: "",
                    date: "",
                    status: "unbooked"
                };
                axios.patch(`https://bookoro-server-side.vercel.app/rooms/${id}`, deleteInfo)
                    .then(res => {
                        if (res.data.modifiedCount) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your Reservation has been removed",
                                icon: "success"
                            });
                            onRefresh();
                        }
                    })
                    .catch(error => {
                        console.error(error);
                    });
            }
        });
    };


    const handleUpdateDate = (e, id) => {
        e.preventDefault();
        const date = e.target.date.value;
        const UpdateInfo = {
            date: date,
        };
        axios.patch(`https://bookoro-server-side.vercel.app/rooms/${id}`, UpdateInfo)
            .then(res => {
                if (res.data.modifiedCount) {


                    const modal = document.getElementById("my_modal_1");
                    if (modal) modal.close();

                    Swal.fire({
                        icon: "success",
                        title: "Your Reservation Date has been Updated",
                        showConfirmButton: false,
                        timer: 1500
                    });

                    onRefresh();
                }
            })
            .catch(error => {
                console.log(error);
            })
    }

    const handlePostReview = (e, id, photo, roomtitle) => {
        e.preventDefault();
        const email = e.target.email.value;
        const name = e.target.name.value;
        const rating = e.target.rating.value;
        const userPhoto = photo;
        const review = e.target.review.value;
        const roomId = id;
        const date = formattedDate;
        const roomTitle = roomtitle
        const newReview = {
            email,
            name,
            rating,
            userPhoto,
            review,
            roomId,
            date,
            roomTitle
        }

        axios.post(`https://bookoro-server-side.vercel.app/reviews`, newReview)
            .then(res => {
                if (res.data.insertedId) {

                    const modal = document.getElementById("my_modal_2");
                    if (modal) modal.close();


                    Swal.fire({
                        icon: "success",
                        title: "Your Reviwe has been Added",
                        showConfirmButton: false,
                        timer: 1500
                    });

                }
            })
            .catch(error => {
                console.log(error);
            })

    }

    return (
        <div>
            {
                rooms.length ?
                    <div>
                        <h3 className="text-3xl md:text-5xl font-bold my-10 text-center text-[#2ecc71]">My Booking</h3>
                        <div className="overflow-x-auto">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th>No.</th>
                                        <th>Room Name</th>
                                        <th>Price</th>
                                        <th>Rating</th>
                                        <th>Booked Date</th>
                                        <th>Manage</th>
                                        <th>Review</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {rooms.map((room, index) => (
                                        <tr key={index}>
                                            <th>{index + 1}</th>
                                            <td>
                                                <div className="flex items-center gap-3">
                                                    <div className="avatar">
                                                        <div className="mask mask-squircle h-16 w-16">
                                                            <img src={room.photo} alt="room image" />
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="font-bold text-lg">{room.roomName}</div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>৳{room.price}</td>
                                            <td className='flex mt-3.5 items-center'>
                                                <FaStar className="text-yellow-400 mr-1" />
                                                <span>{room.rating}</span>
                                            </td>
                                            <td>
                                                {room.date}
                                            </td>
                                            <td className='space-x-3 '>
                                                <button
                                                    onClick={() => handleroomDelete(room._id, room.date)}
                                                    className="btn btn-sm bg-red-400">Cancel</button>
                                                <button
                                                    onClick={() => document.getElementById('my_modal_1').showModal()}
                                                    className="btn btn-sm btn-soft btn-success">Update Date</button>
                                            </td>
                                            <td>
                                                <button
                                                    onClick={() => document.getElementById('my_modal_2').showModal()}
                                                    className="btn btn-sm bg-[#2ecc71]">Review</button>
                                            </td>
                                            <dialog id="my_modal_1" className="modal">
                                                <div className="modal-box">
                                                    <h2 className="text-3xl font-semibold" style={{ color: "#2ecc71" }}>
                                                        {room.roomName}
                                                    </h2>
                                                    <p className="text-2xl font-bold mt-4">
                                                        ৳{room.price} / night
                                                    </p>
                                                    <div className="modal-action">
                                                        <form onSubmit={(e) => handleUpdateDate(e, room._id)} className="fieldset w-full text-2xl p-4">

                                                            <label className="label">Your Name</label>
                                                            <input type="text" className="input" name="name" defaultValue={user?.displayName} readOnly placeholder="Your name" />

                                                            <label className="label">Your Email</label>
                                                            <input type="email" name="email" defaultValue={user?.email} readOnly className="input" placeholder="Email" />

                                                            <label className="label">Updated Reservation Date</label>
                                                            <input type="date" name="date" className="input" placeholder="Date" required />

                                                            <button className="btn mt-5 bg-[#2ecc71] w-fit">Update Now</button>
                                                        </form>
                                                    </div>
                                                </div>
                                            </dialog>
                                            <dialog id="my_modal_2" className="modal">
                                                <div className="modal-box">
                                                    <h2 className='text-3xl font-bold text-center mb-3'>Review Box</h2>
                                                    <h2 className="text-2xl font-semibold" style={{ color: "#2ecc71" }}>
                                                        {room.roomName}
                                                    </h2>
                                                    <div className="modal-action">
                                                        <form onSubmit={(e) => handlePostReview(e, room._id, user.photoURL, room.roomName)} className="fieldset w-full text-2xl p-4">

                                                            <label className="label">Your Name</label>
                                                            <input type="text" className="input" name="name" defaultValue={user?.displayName} readOnly placeholder="Your name" />

                                                            <label className="label">Your Email</label>
                                                            <input type="email" name="email" defaultValue={user?.email} readOnly className="input" placeholder="Email" />

                                                            <label className="label">Rating</label>
                                                            <input type="number" name="rating" min={'1'} max={'5'} className="input" placeholder="Rating" />

                                                            <label className="label">Review</label>
                                                            <textarea className="textarea" name='review' placeholder="Review"></textarea>

                                                            <button className="btn mt-5 bg-[#2ecc71] w-fit">Submit</button>
                                                        </form>
                                                    </div>
                                                </div>
                                            </dialog>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                    :
                    <div>
                        <h3 className="text-3xl md:text-5xl font-bold mb-3 mt-10 text-center text-[#2ecc71]">You Have No Bookings</h3>
                        <div className="w-[300px] sm:w-[400px] md:w-[500px]  h-auto mx-auto ">
                            <Lottie animationData={lottieHotel} loop={true} />
                        </div>
                        <div className='text-center'>
                            <Link to={'/rooms'} className='btn bg-[#2ecc71]'>All Rooms</Link>
                        </div>
                    </div>
            }
            <ScrollRestoration></ScrollRestoration>
        </div>
    );
};

export default MyRoomList;
