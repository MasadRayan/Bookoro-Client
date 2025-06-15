import { useState } from "react";
import { Fade } from "react-awesome-reveal";
import { motion } from "framer-motion";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const faqs = [
  {
    question: "Is parking free at the hotel?",
    answer: "Yes, we offer free parking for all our guests during their stay."
  },
  {
    question: "Can I cancel my booking?",
    answer: "You can cancel your booking up to 48 hours before your check-in date without any charge."
  },
  {
    question: "Do you provide airport shuttle services?",
    answer: "Yes, airport shuttle services are available upon request for an additional fee."
  },
  {
    question: "What are the check-in and check-out times?",
    answer: "Check-in starts at 2 PM, and check-out is until 11 AM."
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleIndex = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 px-6 bg-base-100">
      <div className="max-w-4xl mx-auto">
        <Fade cascade damping={0.2} triggerOnce>
          <h2 className="text-4xl font-extrabold mb-8 text-center">Frequently Asked Questions</h2>
        </Fade>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <Fade key={index} triggerOnce delay={index * 150}>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.15 }}
                  whileHover={{ scale: 1.02 }}
                  className="rounded-2xl shadow-md cursor-pointer"
                  onClick={() => toggleIndex(index)}
                >
                  <div className="flex justify-between items-center p-5">
                    <h3 className="text-xl font-semibold">{faq.question}</h3>
                    <span className="text-primary">
                      {isOpen ? <FaChevronUp size={20} /> : <FaChevronDown size={20} />}
                    </span>
                  </div>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-5 pb-6 "
                    >
                      {faq.answer}
                    </motion.div>
                  )}
                </motion.div>
              </Fade>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
