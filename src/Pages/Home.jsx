import React, { useEffect } from 'react';
import Map from '../Components/Map/Map';
import Banner from '../Components/Banner/Banner';
import ShowTopRooms from '../Components/ShowTopRooms/ShowTopRooms';
import SortedReview from '../Components/SortedReview/SortedReview';


const Home = () => {

    useEffect(() => {

        document.title = "Home";
        
    }, [])
    return (
        <div>
            <Banner></Banner>
            <ShowTopRooms></ShowTopRooms>
            <SortedReview></SortedReview>
            <Map></Map>
        </div>
    );
};

export default Home;