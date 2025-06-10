import React, { useEffect } from 'react';
import Map from '../Components/Map/Map';

const Home = () => {

    useEffect(() => {

        document.title = "Home";
        
    }, [])
    return (
        <div>
            <Map></Map>
        </div>
    );
};

export default Home;