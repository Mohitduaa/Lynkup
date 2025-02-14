import React from 'react';

const Commitments = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-between px-6 lg:px-20 py-10 gap-8">
      <div className="flex flex-col gap-4">
        <div className="mb-4">
          <h1 className="text-5xl font-bold font-poppins mb-1">245%</h1>
          <p className="font-Lexend text-sm lg:text-[12px] text-gray-600">More revenue for the brand</p>
        </div>
        <div>
          <h1 className="text-5xl font-bold font-poppins">50 +</h1>
          <p className="font-Lexend text-sm lg:text-[12px] text-gray-600">Brands trust us</p>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div className="mb-4">
          <h1 className="text-5xl font-bold font-poppins mb-1">130K+</h1>
          <p className="font-Lexend text-sm lg:text-[12px] text-gray-600">Audiences reached</p>
        </div>
        <div>
          <h1 className="text-5xl font-bold font-poppins">24+</h1>
          <p className="font-Lexend text-sm lg:text-[12px] text-gray-600">Worldwide Awards</p>
        </div>
      </div>

      <div className="text-center lg:text-left">
        <h1 className="text-5xl font-poppins font-bold mb-4">Commitments</h1>
        <p className="w-full lg:w-[500px] font-Lexend mb-4  font-extralight ">
          We are committed to working with you collaboratively to understand your goals and create a strategy that will achieve them.
        </p>
        <p className="font-Lexend text-[#653FCC]">{`Learn More ->`}</p>
      </div>
    </div>
  );
};

export default Commitments;
