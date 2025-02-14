import React from 'react';

const CardSecond = () => {
  return (
    <div className='bg-[#272530]'>
      <div className="py-8 ">
        <h1 className="text-center text-xl font-poppins font-bold">
          Why work with influencers?
        </h1>
      </div>
      <div className="flex flex-col-reverse md:flex-row justify-between items-center md:items-start px-5 md:px-20 py-10 gap-10">
        <div className="flex flex-col gap-5 w-full md:w-1/2">
          <div>
            <h1 className="text-xl md:text-2xl font-medium font-poppins">
              Boost your business with local influencers
            </h1>
          </div>
          <div>
            <h1 className="text-xl md:text-2xl font-medium font-poppins">
              11x more effective than traditional marketing
            </h1>
          </div>
          <div>
            <h1 className="text-xl md:text-2xl font-medium font-poppins">
              An unlimited supply of high-quality, user-generated content
            </h1>
          </div>
        </div>

        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src="images/card1.png"
            alt="Card"
            className="max-w-full h-auto object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default CardSecond;
