import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { FaStar, FaRegStar } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import { format } from 'date-fns';



const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
        i < rating ? <FaStar key={i} className="text-yellow-400" /> : <FaRegStar key={i} className="text-gray-300" />
    ));
};

export default function SortedReview() {

    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch('http://localhost:3000/reviews/sortedByTime')
            .then(res => res.json())
            .then(data => {
                setReviews(data)
            });

    }, [])

    return (
        <div className='my-10'>
            <div>
                <h3 className="text-3xl md:text-4xl font-bold text-center my-10">Customer Reviews</h3>
            </div>
            <div className=" mx-auto px-4 ">
                <Swiper
                    modules={[Autoplay, Pagination, Navigation]}
                    spaceBetween={30}
                    loop={true}
                    autoplay={{ delay: 2000, disableOnInteraction: false }}
                    pagination={{ clickable: true }}
                    navigation={true}
                    breakpoints={{
                        640: { slidesPerView: 1 },
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                    }}
                >
                    {reviews.map((reviwe, i) => (
                        <SwiperSlide key={i}>
                            <div className="bg-white shadow-xl rounded-2xl p-6 m-3 text-center hover:shadow-green-300 transition-shadow">
                                <img
                                    src={reviwe.userPhoto}
                                    alt={reviwe.name}
                                    referrerPolicy='no-referrer'
                                    className="w-20 h-20 mx-auto rounded-full border-4 border-green-400 mb-4 shadow"
                                />
                                <h3 className="text-xl font-bold text-green-600">{reviwe.name}</h3>
                                <p className="text-sm text-gray-500 mb-2">{format(new Date(reviwe.date), 'PPP')}</p>
                                <div className="italic text-gray-700 mb-4 max-h-30 overflow-y-auto pr-2 scroll-thin">
                                    “{reviwe.review}”
                                </div>
                                <div className="flex justify-center gap-1">{renderStars(reviwe.rating)}</div>
                                <div className="mt-2 text-xs text-green-500 uppercase tracking-wide">Verified Review</div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
}
