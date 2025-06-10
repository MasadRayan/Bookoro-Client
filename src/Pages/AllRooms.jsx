import React, { useEffect } from 'react';
import { ScrollRestoration, useLoaderData } from 'react-router';
import RoomCard from '../Components/RoomCard/RoomCard';

const AllRooms = () => {
    useEffect(() => {
        document.title = 'All Rooms'
    }, [])
    const rooms = useLoaderData()
    console.log(rooms);
    return (
        <div>
            <h2 className='text-3xl md:text-5xl my-10 font-bold text-center'>All of our Rooms</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10'>
                {
                    rooms.map(room => <RoomCard 
                        key={room._id}
                        room = {room}
                    ></RoomCard>)
                }
            </div>
            <ScrollRestoration></ScrollRestoration>
        </div>
    );
};

export default AllRooms;