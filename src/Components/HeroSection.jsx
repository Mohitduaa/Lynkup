import React from 'react';


const HeroSection = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-center items-center gap-10 pl-6 lg:pl-20 py-10">
      <div className="text-center lg:text-left max-w-lg">
        <h1 className="text-xl lg:text-3xl font-bold font-poppins mb-4">Get Eat, Share, Grow</h1>
        <p className="font-Lexend font-extralight mb-2">
          LynkUp bridges the gap between restaurants looking for authentic promotion and creators who want to experience and share the best food in town.
        </p>
        <p className="font-Lexend font-extralight mb-2">
          🔹 <span className='font-poppins font-bold'>Our Mission:</span> To empower creators with opportunities and help restaurants leverage influencer marketing with minimal effort.
        </p>
        <p className="font-Lexend font-extralight">
          🔹 <span className='font-poppins font-bold'>Our Vision:</span> To be the go-to platform for barter collaborations between content creators and hospitality brands.
        </p>
      </div>

      <div className="">
        <img className='w-full ' src="images/ping.jpg" alt="" />
      </div>
    </div>
  );
};

export default HeroSection;
