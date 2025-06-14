import { Fade } from "react-awesome-reveal";
import { FaBed, FaMapMarkedAlt, FaWifi, FaConciergeBell } from "react-icons/fa";

const hotelBenefits = [
    {
        title: "Comfortable Rooms",
        description:
            "Experience luxurious and spacious rooms designed for your ultimate comfort.",
        icon: <FaBed className="w-12 h-12 text-[#2ecc71]" />,
    },
    {
        title: "Prime Location",
        description:
            "Located in the heart of the city with easy access to attractions and transport.",
        icon: <FaMapMarkedAlt className="w-12 h-12 text-[#2ecc71]" />,
    },
    {
        title: "High-Speed Wi-Fi",
        description:
            "Stay connected with free high-speed internet available throughout the hotel.",
        icon: <FaWifi className="w-12 h-12 text-[#2ecc71]" />,
    },
    {
        title: "24/7 Concierge Service",
        description:
            "Our staff is available around the clock to assist you with anything you need.",
        icon: <FaConciergeBell className="w-12 h-12 text-[#2ecc71]" />,
    },
];

const WhyBookoro = () => {
    return (
        <section className="max-w-5xl mx-auto py-20 px-6 md:px-12">
            <Fade direction="up" triggerOnce>
                <h2 className="text-4xl font-extrabold text-center mb-12">
                    Why Bookoro?
                </h2>
            </Fade>

            <div className="space-y-12">
                {hotelBenefits.map((benefit, idx) => (
                    <Fade key={idx} direction="up" delay={idx * 150} >
                        <div
                            className={`flex flex-col md:flex-row items-center ${idx % 2 === 1 ? "md:flex-row-reverse" : ""
                                } gap-6`}
                        >
                            <div>{benefit.icon}</div>
                            <div className="max-w-xl text-center md:text-left">
                                <h3 className="text-2xl font-semibold mb-2">
                                    {benefit.title}
                                </h3>
                                <p>{benefit.description}</p>
                            </div>
                        </div>
                    </Fade>
                ))}
            </div>
        </section>
    );
};

export default WhyBookoro;
