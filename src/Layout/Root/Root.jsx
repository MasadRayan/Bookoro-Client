import React from 'react';
import { Outlet } from 'react-router';

const Root = () => {
    return (
        <div className='container mx-auto'>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;