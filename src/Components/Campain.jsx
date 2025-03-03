import React from "react";
import { motion } from "framer-motion";

const Campaign = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }} // Hidden initially
      whileInView={{ opacity: 1, y: 0 }} // Animates when in view
      transition={{ duration: 2, ease: "easeOut" }}
      viewport={{ once: true }} // Animation triggers only once
      className="py-16 text-center px-6 md:px-20"
    >
      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 2, delay: 0.2, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-3xl lg:text-4xl font-quicksand font-bold mb-4"
      >
        Planning a campaign?
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 2, delay: 0.4, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-lg lg:text-xl mb-6 font-Lexend"
      >
        Book a free 15 minute kick-off call with our team and get started!
      </motion.p>

      <motion.button
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 2, delay: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="bg-white text-[#653FCC] font-Lexend hover:bg-gray-100 font-medium py-3 px-6 rounded-full shadow-lg transition"
        onClick={() =>
          window.location.href =
            "mailto:lynkupindia@gmail.com?subject=Enquiry&body=Hello, I want to enquire about your services."
        }
      >
        Enquire Now
      </motion.button>
    </motion.div>
  );
};

export default Campaign;
