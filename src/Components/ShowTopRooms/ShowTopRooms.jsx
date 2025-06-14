import React, { useEffect, useState } from 'react';
import { FaStar, FaMountain, FaUmbrellaBeach, FaBed, FaUserFriends, FaUtensils, FaSnowflake } from 'react-icons/fa';
import { Link } from 'react-router';
import HalfPageLoading from '../Loading/HalfPageLoading';

const ShowTopRooms = () => {

    const [rooms, setRooms] = useState([]);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch('https://bookoro-server-side.vercel.app/rooms/sorted-by-rating')
            .then(res => res.json())
            .then(data => {
                setRooms(data);
                setLoading(false);
            })
            .catch(err => {
                console.error(err);
                setLoading(false);
            });
    }, [])

    const sortedRooms = rooms.slice(0, 6);

    return (
        <div className='py-20'>
            <h2 className='text-4xl font-bold text-center my-5'>Top Rated Rooms</h2>
            {
                loading ?
                    (
                        <HalfPageLoading></HalfPageLoading>
                    )
                    :
                    (
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-10'>
                            {
                                sortedRooms.map(room => <div key={room._id} className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow duration-300 px-2 md:px-0">
                                    {room.status === "booked" && (
                                        <div className="badge badge-secondary absolute top-4 right-4 z-10">Booked</div>
                                    )}

                                    <figure className="relative h-62  overflow-hidden">
                                        <img
                                            src={room.photo}
                                            alt={room.roomName}
                                            className="w-full h-full rounded-2xl object-cover hover:scale-105 transition-transform duration-500"
                                        />
                                        <div className="absolute bottom-4 left-4 bg-black bg-opacity-70 text-white px-3 py-1 rounded-full flex items-center">
                                            <FaStar className="text-yellow-400 mr-1" />
                                            <span>{room.rating}</span>
                                        </div>
                                    </figure>

                                    <div className="card-body">
                                        <div className="flex justify-between items-start gap-3">
                                            <h2 className="card-title text-2xl font-bold">{room.roomName}</h2>
                                            <p className="text-xl font-semibold text-[#2ecc71]">৳{room.price}<span className="text-sm text-gray-500">/night</span></p>
                                        </div>

                                        <div className="flex flex-wrap gap-4 my-3">
                                            <div className="flex items-center text-sm">
                                                <FaBed className="mr-1 text-[#2ecc71]" />
                                                <span className="capitalize">{room.bed} bed</span>
                                            </div>
                                            <div className="flex items-center text-sm">
                                                <FaUserFriends className="mr-1 text-[#2ecc71]" />
                                                <span>{room.capacity} guests</span>
                                            </div>
                                            <div className="flex items-center text-sm">
                                                {room.view === "sea" ? (
                                                    <FaUmbrellaBeach className="mr-1 text-[#2ecc71]" />
                                                ) : (
                                                    <FaMountain className="mr-1 text-[#2ecc71]" />
                                                )}
                                                <span className="capitalize">{room.view} view</span>
                                            </div>
                                            <div className="flex items-center text-sm">
                                                <FaSnowflake className="mr-1 text-[#2ecc71]" />
                                                <span className="uppercase">{room.ac}</span>
                                            </div>
                                            {room.complementaryBreakfast === "included" && (
                                                <div className="flex items-center text-sm">
                                                    <FaUtensils className="mr-1 text-[#2ecc71]" />
                                                    <span>Breakfast</span>
                                                </div>
                                            )}
                                        </div>

                                        <div className="flex justify-between items-center mt-2 text-sm text-gray-500 flex-1">
                                            <div>
                                                <span>Floor {room.floor}</span>
                                                <span className="mx-2">•</span>
                                                <span>Room #{room.roomNumber}</span>
                                            </div>

                                        </div>

                                        <div className='mt-5'>
                                            <Link to={`/room/${room._id}`} className='btn bg-[#2ecc71]'>See Details</Link>
                                        </div>
                                    </div>
                                </div>)
                            }
                        </div>
                    )
            }
        </div>
    );
};

export default ShowTopRooms;

/**
 * 
 */