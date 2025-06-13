import React from 'react';
import errorLottie from '../assets/lotties/errorpage.json'
import { Link } from 'react-router';
import Lottie from 'lottie-react';

const ErrorPage = () => {
    return (
        <div className='my-10'>
            <h3 className="text-3xl font-bold text-center my-5">Page Not Found</h3>
            <div className="w-[300px] sm:w-[400px] md:w-[500px] h-auto mx-auto my-5">
                <Lottie animationData={errorLottie} loop={true} />
            </div>
            <div className='text-center mt-5'> 
                <Link to={'/'} className='btn  bg-[#2ecc71]'>Back to Home</Link>
            </div>
        </div>
    );
};

export default ErrorPage;