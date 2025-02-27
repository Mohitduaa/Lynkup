import React from 'react';

const Commitments = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-between items-center px-6 md:px-12 lg:px-20 py-16 gap-8 bg-[#272530] text-center lg:text-left">
      <div className="flex flex-col gap-4 w-full lg:w-auto">
        <div className="mb-4">
          <h1 className="text-4xl md:text-5xl font-bold font-poppins mb-1">81%</h1>
          <p className="font-Lexend text-sm md:text-base lg:text-[12px] text-[#FDFDFD] max-w-[280px] mx-auto lg:mx-0">
            consumers say content from digital creators drive interest in businesses
          </p>
        </div>
        <div>
          <h1 className="text-4xl md:text-5xl font-bold font-poppins">67%</h1>
          <p className="font-Lexend text-sm md:text-base lg:text-[12px] text-[#FDFDFD] max-w-[280px] mx-auto lg:mx-0">
            Gen Z are using Instagram as a search engine
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-4 w-full lg:w-auto">
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold font-poppins mb-1">92%</h1>
          <p className="font-Lexend text-sm md:text-base lg:text-[12px] text-[#FDFDFD] max-w-[280px] mx-auto lg:mx-0">
            of consumers trust online word-of-mouth
          </p>
        </div>
        <div className='mt-2'>
          <h1 className="text-4xl md:text-5xl font-bold font-poppins">11x</h1>
          <p className="font-Lexend text-sm md:text-base lg:text-[12px] text-[#FDFDFD] max-w-[280px] mx-auto lg:mx-0">
            greater ROI than traditional ads
          </p>
        </div>
      </div>

      <div className="w-full lg:w-auto">
        <h1 className="text-2xl md:text-4xl lg:text-5xl font-poppins font-bold mb-4">Why work with creators?</h1>
      </div>
    </div>
  );
};

export default Commitments;
