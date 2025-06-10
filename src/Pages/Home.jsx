import React, { useEffect } from 'react';
import Map from '../Components/Map/Map';
import Banner from '../Banner/Banner';


const Home = () => {

    useEffect(() => {

        document.title = "Home";
        
    }, [])
    return (
        <div>
            
            <Banner></Banner>
            <Map></Map>
        </div>
    );
};

export default Home;