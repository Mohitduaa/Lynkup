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
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="text-center text-[#FDFDFD]"
          >
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5, delay: 0.3, ease: "easeOut" }}
              className="text-2xl font-bold font-quicksand mb-4"
            >
              Turn content into customers
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5, delay: 0.6, ease: "easeOut" }}
              className="font-Lexend text-[14px] font-extralight mb-2 max-w-[90%] mx-auto"
            >
              A platform where creator marketing is accessible, seamless, and mutually beneficial for creators and restaurants alike.
            </motion.p>
          </motion.div>
        </div>

        {/* Image Part */}
        <motion.div
          initial={{ scale: 1.2, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="h-[300px] w-full bg-cover"
          style={{
            backgroundImage: `url('images/mobilebackground.png')`,
            backgroundSize: "cover",
          }}
        />
      </div>

      {/* For Desktop (Different Image) */}
      <div className="hidden lg:flex justify-center items-center ">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="text-left px-6 text-[#FDFDFD]"
        >
          <h1 className="text-4xl lg:text-[1.8rem] font-bold font-quicksand mb-4">
            Turn content into customers
          </h1>

          <p className="font-Lexend text-xl font-extralight mb-2 lg:max-w-[400px]">
            A platform where creator marketing is accessible, seamless, and mutually beneficial for creators and restaurants alike.
          </p>
        </motion.div>

        <motion.div
          initial={{ scale: 1.2, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="w-[70%] flex justify-end items-end"
        >
          <img className="w-full" src="images/mobilebackground.png" alt="" />
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;