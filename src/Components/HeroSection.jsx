import React from "react";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <div className="h-[600px] md:h-[700px] lg:h-[800px] w-full relative overflow-hidden">
      {/* Background Image with Zoom Effect */}
      <motion.div
        initial={{ scale: 1.2 }}
        animate={{ scale: 1 }}
        transition={{ duration: 3, ease: "easeOut" }}
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('images/lynkuphero.png')`,
          backgroundSize: "cover",
          backgroundBlendMode: "screen",
        }}
      />

      {/* Content */}
      <div className="relative flex justify-center md:justify-start items-center h-full px-4 md:px-12 lg:px-20">
        <motion.div
          initial={{ opacity: 0, y: 100 }} // Starts lower for a slower effect
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2, ease: "easeOut" }} // Slow Animation
          className="text-center text-[#FDFDFD] md:text-left"
        >
          <motion.h1
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2, delay: 0.3, ease: "easeOut" }}
            className="text-2xl md:text-4xl lg:text-[2.1rem] font-bold font-quicksand mb-4"
          >
         Turn content into customers
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2, delay: 0.6, ease: "easeOut" }}
            className="font-Lexend text-[14px] md:text-xl font-extralight mb-2 max-w-[90%] md:max-w-[500px]"
          >
            A platform where creator marketing is accessible, seamless, and mutually beneficial for creators and restaurants alike.
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;
