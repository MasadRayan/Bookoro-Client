import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import { Link } from 'react-router';

const Banner = () => {
    return (
        <div>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className="relative w-full h-[400px] md:h-[500px] lg:h-[700px] rounded-2xl overflow-hidden">
                        <div
                            className="absolute inset-0 bg-center bg-no-repeat bg-cover"
                            style={{
                                backgroundImage: "url(https://oasis-prasonisi.com/wp-content/uploads/2023/11/Oasis-hotel-prasonisi-slide-1.jpeg)",
                            }}
                        ></div>

                        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/50 flex justify-center items-center">
                            <div className="text-center px-4">
                                <h1 className="text-white font-extrabold text-3xl md:text-7xl max-w-[750px] mx-auto">
                                    Beachfront Hotel
                                </h1>
                                <p className="text-white opacity-80 text-lg font-medium mt-5 max-w-[750px] mx-auto">
                                    More than a place to stay!
                                </p>
                                <Link to="/rooms" className="btn mt-5 bg-[#2ecc71] border-0 text-lg">
                                    Our Rooms
                                </Link>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="relative w-full h-[400px] md:h-[500px] lg:h-[700px] rounded-2xl overflow-hidden">
                        <div
                            className="absolute inset-0 bg-center bg-no-repeat bg-cover"
                            style={{
                                backgroundImage: "url(https://oasis-prasonisi.com/wp-content/uploads/2023/11/oasis-hotel-prasonisi-deluxe-double-2.jpeg)",
                            }}
                        ></div>

                        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/50 flex justify-center items-center">
                            <div className="text-center px-4">
                                <h1 className="text-white font-extrabold text-3xl md:text-7xl max-w-[750px] mx-auto">
                                    Come to The Tourist Haven
                                </h1>
                                <p className="text-white opacity-80 text-lg font-medium mt-5 max-w-[750px] mx-auto">
                                    Get your daily dose of Vitamin Sea
                                </p>
                                <Link to="/rooms" className="btn mt-5 bg-[#2ecc71] border-0 text-lg">
                                    Our Rooms
                                </Link>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="relative w-full h-[400px] md:h-[500px] lg:h-[700px] rounded-2xl overflow-hidden">
                        <div
                            className="absolute inset-0 bg-center bg-no-repeat bg-cover"
                            style={{
                                backgroundImage: "url(https://oasis-prasonisi.com/wp-content/uploads/2023/11/Oasis-hotel-prasonisi-premium-suite-private-pool-8.jpeg)",
                            }}
                        ></div>

                        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/50 flex justify-center items-center">
                            <div className="text-center px-4">
                                <h1 className="text-white font-extrabold text-3xl md:text-7xl max-w-[750px] mx-auto">
                                    Book Now
                                </h1>
                                <p className="text-white opacity-80 text-lg font-medium mt-5 max-w-[750px] mx-auto">
                                    More than a place to stay!
                                </p>
                                <Link to="/rooms" className="btn mt-5 bg-[#2ecc71] border-0 text-lg">
                                    Our Rooms
                                </Link>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

            </Swiper>
        </div>
    );
};

export default Banner;