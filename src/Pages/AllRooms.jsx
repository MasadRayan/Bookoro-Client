import React, { useEffect, useState } from 'react';
import RoomCard from '../Components/RoomCard/RoomCard';
import { ScrollRestoration } from 'react-router';
import { FiDollarSign } from 'react-icons/fi';
import Loading from '../Components/Loading/Loading';

const AllRooms = () => {
    const [rooms, setRooms] = useState([]);
    const [minPrice, setMinPrice] = useState('');
    const [maxPrice, setMaxPrice] = useState('');
    const [loading, setLoading] = useState(true); 
    useEffect(() => {
        document.title = 'All Rooms';
    }, []);

    useEffect(() => {
        setLoading(true);
        fetch(`https://bookoro-server-side.vercel.app/rooms?minPrice=${minPrice}&maxPrice=${maxPrice}`)
            .then(res => res.json())
            .then(data => {
                setRooms(data);
                setLoading(false); 
            })
            .catch(err => {
                console.error(err);
                setLoading(false); 
            });
    }, [minPrice, maxPrice]);

    return (
        <div>
            <h2 className='text-3xl md:text-5xl my-10 font-bold text-center'>All of our Rooms</h2>

            <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-8 px-4">
                <div className="form-control w-full md:w-72 relative">
                    <label className="label">
                        <span className="label-text font-semibold flex items-center gap-2">৳ Min Price</span>
                    </label>
                    <div className="relative">
                        <input
                            type="number"
                            placeholder="Enter min price"
                            value={minPrice}
                            onChange={(e) => setMinPrice(e.target.value)}
                            className="input input-bordered w-full pl-10"
                            min="0"
                        />
                        <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">৳</span>
                    </div>
                </div>

                <div className="form-control w-full md:w-72 relative">
                    <label className="label">
                        <span className="label-text font-semibold flex items-center gap-2">৳ Max Price</span>
                    </label>
                    <div className="relative">
                        <input
                            type="number"
                            placeholder="Enter max price"
                            value={maxPrice}
                            onChange={(e) => setMaxPrice(e.target.value)}
                            className="input input-bordered w-full pl-10"
                            min={minPrice || "0"}
                        />
                        <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">৳</span>
                    </div>
                </div>
            </div>

           
            {loading ? (
                <Loading></Loading>
            ) : (
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10'>
                    {rooms.map(room => (
                        <RoomCard key={room._id} room={room} />
                    ))}
                </div>
            )}
            <ScrollRestoration />
        </div>
    );
};

export default AllRooms;
