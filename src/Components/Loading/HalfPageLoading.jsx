import React from 'react';

const HalfPageLoading = () => {
    return (
        <div className='min-h-80 w-full flex justify-center items-center'>
            <span className="loading loading-bars text-[#2ecc71]"
                style={{ width: '70px', height: '70px' }}
            ></span>
        </div>
    );
};

export default HalfPageLoading;