import React from "react";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
<div className="w-full relative overflow-hidden max-lg:pt-[80px]">
{/* For Mobile & Tablet (Same Image) */}
      <div className="block lg:hidden">
        {/* Text Part */}
        <div className="relative flex justify-center items-center ">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2, ease: "easeOut" }}
            className="text-center text-[#FDFDFD]"
          >
            <motion.h1
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 2, delay: 0.3, ease: "easeOut" }}
              className="text-2xl font-bold font-quicksand mb-4"
            >
              Turn content into customers
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 2, delay: 0.6, ease: "easeOut" }}
              className="font-Lexend text-[14px] font-extralight mb-2 max-w-[90%] mx-auto"
            >
              A platform where creator marketing is accessible, seamless, and mutually beneficial for creators and restaurants alike.
            </motion.p>
          </motion.div>
        </div>

        {/* Image Part */}
        <motion.div
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 3, ease: "easeOut" }}
          className="h-[300px] w-full bg-cover"
          style={{
            backgroundImage: `url('images/mobilebackground.png')`,
            backgroundSize: "cover",
          }}
        />
      </div>

      {/* For Desktop (Different Image) */}
      <div className="hidden lg:block h-[650px] lg:h-[800px] relative">
        {/* Background Image */}
        <motion.div
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 3, ease: "easeOut" }}
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('images/lynkuphero.png')`,
            backgroundSize: "cover",
          }}
        />

        {/* Content */}
        <div className="relative flex justify-start items-center h-full px-12">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2, ease: "easeOut" }}
            className="text-left text-[#FDFDFD]"
          >
            <motion.h1
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 2, delay: 0.3, ease: "easeOut" }}
              className="text-4xl lg:text-[2.1rem] font-bold font-quicksand mb-4"
            >
              Turn content into customers
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 2, delay: 0.6, ease: "easeOut" }}
              className="font-Lexend text-xl font-extralight mb-2 max-w-[500px]"
            >
              A platform where creator marketing is accessible, seamless, and mutually beneficial for creators and restaurants alike.
            </motion.p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;