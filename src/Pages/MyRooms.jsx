'use client';
import React, { Suspense, use, useState, useCallback } from 'react';
import MyRoomList from '../Components/MyRoomList/MyRoomList';
import Loading from '../Components/Loading/Loading';
import { myRoomPromise } from '../Api/roomPromise';
import { AuthContext } from '../Context/AuthContext';

const MyRooms = () => {
    const { user } = use(AuthContext);

    const createPromise = useCallback(() => myRoomPromise(user.email), [user.email]);

    const [promise, setPromise] = useState(createPromise);

    const refreshPromise = () => {
        setPromise(createPromise());
    };

    return (
        <div>
            <Suspense fallback={<Loading />}>
                <MyRoomList myRoomPromise={promise} onRefresh={refreshPromise} />
            </Suspense>
        </div>
    );
};

export default MyRooms;
