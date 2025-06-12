import React, { Suspense, use } from 'react';
import MyRoomList from '../Components/MyRoomList/MyRoomList';
import Loading from '../Components/Loading/Loading';
import { myRoomPromise } from '../Api/roomPromise';
import { AuthContext } from '../Context/AuthContext';

const MyRooms = () => {
    const {user} = use(AuthContext)
    return (
        <div>
            <Suspense fallback={<Loading></Loading>}>
                <MyRoomList myRoomPromise={myRoomPromise(user.email)}></MyRoomList>
            </Suspense>
        </div>
    );
};

export default MyRooms;