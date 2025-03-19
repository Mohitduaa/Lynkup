import React from 'react';
import { motion } from 'framer-motion';

const Commitments = () => {
  return (
    <div className=" flex flex-col lg:flex-row justify-between items-center px-6 md:px-12 lg:px-20 py-16 gap-8 bg-[#272530] text-center lg:text-left">
      
      {/* Scroll Animation for Stats Section */}
      <motion.div 
        initial={{ opacity: 0, x: -50 }} 
        whileInView={{ opacity: 1, x: 0 }} 
        viewport={{ once: true, amount: 0.2 }} 
        transition={{ duration: 0.8 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto"
      >
        {/* Left Side */}
        <div className="flex flex-col gap-10">
          <div>
            <h1 className="text-5xl font-bold font-quicksand">81%</h1>
            <p className="font-Lexend text-lg text-[#FDFDFD] max-w-xs">
              consumers say content from digital creators drive interest in businesses
            </p>
          </div>
          <div>
            <h1 className="text-5xl font-bold font-quicksand">67%</h1>
            <p className="font-Lexend text-lg text-[#FDFDFD] max-w-xs">
              Gen Z are using Instagram as a search engine
            </p>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex flex-col gap-10">
          <div>
            <h1 className="text-5xl font-bold font-quicksand">92%</h1>
            <p className="font-Lexend text-lg text-[#FDFDFD] max-w-xs">
              of consumers trust online word-of-mouth
            </p>
          </div>
          <div>
            <h1 className="text-5xl font-bold font-quicksand">11x</h1>
            <p className="font-Lexend text-lg text-[#FDFDFD] max-w-xs">
              greater ROI than traditional ads
            </p>
          </div>
        </div>
      </motion.div>

      {/* Scroll Animation for Heading */}
      <motion.div 
        initial={{ opacity: 0, x: 50 }} 
        whileInView={{ opacity: 1, x: 0 }} 
        viewport={{ once: true, amount: 0.2 }} 
        transition={{ duration: 0.8, delay: 0.2 }}
        className="w-full lg:w-auto"
      >
        <h1 className="text-2xl md:text-4xl lg:text-4xl font-quicksand font-bold mb-4">
          Why work with creators?
        </h1>
      </motion.div>
    
    </div>
  );
};

export default Commitments;
