import React from 'react';

const Appfeatures = () => {
  return (
    <div className='bg-[#272530] py-1'>
      <div className="flex flex-col gap-8 md:gap-0 md:flex-row justify-between items-center px-10 md:mx-40  py-10 my-10  rounded-md ">
        <div className="flex flex-col items-start px-5">
          <h1 className="text-2xl md:text-3xl font-poppins font-bold mb-4">
          Our Features:
          </h1>
          <p className="text-base md:text-xl font-Lexend font-extralight mb-6 md:mb-10 max-w-full md:w-[600px]">
            We believe that the best way to create successful marketing campaigns is to work closely with our clients to understand their goals and challenges.
          </p>
          <img
            src="/images/card1.png"
            alt="Card"
            className="w-full max-w-lg object-contain"
          />
        </div>

        <div className="flex flex-col gap-6 md:gap-10">
          {[
            {
              img: "images/2.svg",
              title: "Automated Booking System",
              description: "No back-and-forth coordination required.",
            },
            {
              img: "images/4.svg",
              title: "Verified Instagram API Integration",
              description: "Safe and secure authentication.",
            },
            {
              img: "images/3.svg",
              title: "Real-Time Campaign Tracking",
              description: "Monitor content deliveries with ease.",
            },
            {
              img: "images/1.svg",
              title: "Strike & Reputation System",
              description:
                "Ensures accountability and timely content submissions.",
            },
            {
              img: "images/5.svg",
              title: "Performance-Based Matching",
              description:
                "Get connected with the best-fit creators for your brand.",
            },
          ].map((feature, index) => (
            <div key={index} className="flex gap-3 items-center">
              <div className="text-[#FDFDFD] bg-[#653FCC]  p-2 rounded-lg">   
                <img src={feature.img} alt="" />
              </div>
              <div>
                <h1 className="text-base md:text-xl font-poppins font-bold">
                  {feature.title}
                </h1>
                <p className="text-sm md:text-[15px]  font-Lexend font-extralight mb-2">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Appfeatures;
