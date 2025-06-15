import React, { useEffect, useState } from 'react';
import Map from '../Components/Map/Map';
import Banner from '../Components/Banner/Banner';
import ShowTopRooms from '../Components/ShowTopRooms/ShowTopRooms';
import SortedReview from '../Components/SortedReview/SortedReview';
import WhyBookoro from '../Components/WhyBookoro/WhyBookoro';
import { ScrollRestoration } from 'react-router';
import HowItWorks from '../Components/HowItWorks/HowItWorks';
import FAQ from '../Components/FAQ/FAQ';


const Home = () => {
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        document.title = "Home";


        const timer = setTimeout(() => {
            setShowModal(true);
        }, 500);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div>
            <Banner />
            <ShowTopRooms />
            <SortedReview />
            <WhyBookoro></WhyBookoro>
            <HowItWorks></HowItWorks>
            <FAQ></FAQ>
            <Map />

            {showModal && (
                <dialog id="promo_modal" className="modal modal-open">
                    <div className="modal-box">
                        <div
                            className="hero min-h-100"
                            style={{
                                backgroundImage:
                                    "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('https://oasis-prasonisi.com/wp-content/uploads/2023/11/Oasis-hotel-prasonisi-slide-1.jpeg')",
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                                borderRadius: '10px'
                            }}
                        >
                            <div className="hero-content text-neutral-content text-center">
                                <div className="max-w-md">
                                    <h3 className="font-bold text-2xl">🎉 Special Offer!</h3>
                                    <p className="py-4 text-lg">Get 20% off your first booking! Book now and save big.</p>
                                </div>
                            </div>
                        </div>

                        <div className="modal-action">
                            <form method="dialog">
                                <button
                                    className="btn btn-primary"
                                    onClick={() => setShowModal(false)}
                                >
                                    Close
                                </button>
                            </form>
                        </div>
                    </div>
                </dialog>
            )}
            <ScrollRestoration></ScrollRestoration>
        </div>
    );
};

export default Home;
