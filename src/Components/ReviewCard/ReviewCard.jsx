import { motion } from "framer-motion";
import { FaStar, FaRegStar } from "react-icons/fa";

const ReviewCard = ({ review }) => {
  const { name, rating, userPhoto, review: comment, date } = review;

  const renderStars = (rating) => {
    const fullStars = parseInt(rating);
    const stars = [];

    for (let i = 1; i <= 5; i++) {
      stars.push(
        i <= fullStars ? (
          <FaStar key={i} className="text-yellow-400 drop-shadow-sm" />
        ) : (
          <FaRegStar key={i} className="text-gray-300" />
        )
      );
    }

    return stars;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      whileHover={{ scale: 1.02 }}
      className=" rounded-2xl shadow-xl p-6 max-w-md w-full mx-auto transition-all"
    >
      <div className="flex items-center gap-4">
        <img
          src={userPhoto}
          alt={name}
          className="w-16 h-16 rounded-full border-4 border-green-400 shadow-md"
        />
        <div>
          <h3 className="text-xl font-bold text-green-700 dark:text-green-300">{name}</h3>
          <p className="text-sm ">{date}</p>
        </div>
      </div>

      <div className="mt-3 flex items-center gap-1">
        {renderStars(rating)}
        <span className="ml-2 px-2 py-0.5 text-sm bg-green-100 text-green-700 rounded-full font-semibold">
          {rating}/5
        </span>
      </div>

      <p className="mt-4 leading-relaxed italic border-l-4 border-green-400 pl-4">
        “{comment}”
      </p>

      <div className="mt-5 text-sm font-medium text-right text-green-500 dark:text-green-300">
        ✓ Verified Review
      </div>
    </motion.div>
  );
};

export default ReviewCard;
