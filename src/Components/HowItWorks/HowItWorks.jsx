import { FaSearch, FaCalendarCheck, FaSmile } from "react-icons/fa";
import { Fade } from "react-awesome-reveal";
import { motion } from "framer-motion";

const steps = [
  {
    icon: <FaSearch className="text-5xl text-primary" />,
    title: "Search & Explore",
    description: "Find the perfect room by filtering prices."
  },
  {
    icon: <FaCalendarCheck className="text-5xl text-secondary" />,
    title: "Book Instantly",
    description: "Select your room, confirm dates, and book with just a few clicks."
  },
  {
    icon: <FaSmile className="text-5xl text-accent" />,
    title: "Enjoy Your Stay",
    description: "Relax and enjoy your stay — we've taken care of the details."
  }
];

const HowItWorks = () => {
  return (
    <section className="py-16 px-6 ">
      <div className="max-w-7xl mx-auto text-center">
        <Fade cascade damping={0.2} triggerOnce>
          <h2 className="text-4xl font-extrabold mb-4">How It Works</h2>
          <p className="text-lg  mb-12 max-w-2xl mx-auto">
            Booking with Bookoro is easy and fast — follow these simple steps to get started.
          </p>
        </Fade>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {steps.map((step, index) => (
            <Fade key={index} triggerOnce delay={index * 200}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
                className=" p-8 rounded-3xl shadow-lg min-h-60 cursor-pointer hover:shadow-xl flex flex-col items-center text-center"
              >
                <div className="mb-6">{step.icon}</div>
                <h3 className="text-2xl font-semibold mb-3">{step.title}</h3>
                <p className="">{step.description}</p>
              </motion.div>
            </Fade>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
