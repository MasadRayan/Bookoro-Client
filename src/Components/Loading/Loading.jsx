import React from 'react';

const Loading = () => {
    return (
        <div className='min-h-screen w-full flex justify-center items-center'>
            <span className="loading loading-bars text-[#2ecc71]"
                style={{ width: '70px', height: '70px' }}
            ></span>
        </div>
    );
};

export default Loading;