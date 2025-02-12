import React from 'react';

const Appfeatures = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row justify-between px-5 md:px-20 py-10 gap-10">
        <div className="flex flex-col items-start">
          <h1 className="text-2xl md:text-3xl font-poppins font-bold mb-4">
            How it Works
          </h1>
          <p className="text-base md:text-xl font-normal mb-6 md:mb-10 max-w-full md:w-[500px]">
            We believe that the best way to create successful marketing campaigns is to work closely with our clients to understand their goals and challenges.
          </p>
          <img
            src="/images/card1.png"
            alt="Card"
            className="w-full max-w-md object-contain"
          />
        </div>

        <div className="flex flex-col gap-6 md:gap-8">
          {[
            {
              title: "Automated Booking System",
              description: "No back-and-forth coordination required.",
            },
            {
              title: "Verified Instagram API Integration",
              description: "Safe and secure authentication.",
            },
            {
              title: "Real-Time Campaign Tracking",
              description: "Monitor content deliveries with ease.",
            },
            {
              title: "Strike & Reputation System",
              description:
                "Ensures accountability and timely content submissions.",
            },
            {
              title: "Performance-Based Matching",
              description:
                "Get connected with the best-fit creators for your brand.",
            },
          ].map((feature, index) => (
            <div key={index} className="flex gap-4 items-center">
              <div className="text-white bg-blue-700 p-2 rounded-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="40px"
                  viewBox="0 -960 960 960"
                  width="40px"
                  fill="#000000"
                >
                  <path d="M319.33-246.67h321.34v-66.66H319.33v66.66Zm0-166.66h321.34V-480H319.33v66.67ZM226.67-80q-27 0-46.84-19.83Q160-119.67 160-146.67v-666.66q0-27 19.83-46.84Q199.67-880 226.67-880H574l226 226v507.33q0 27-19.83 46.84Q760.33-80 733.33-80H226.67Zm314-542.67v-190.66h-314v666.66h506.66v-476H540.67Zm-314-190.66v190.66-190.66 666.66-666.66Z" />
                </svg>
              </div>
              <div>
                <h1 className="text-base md:text-xl font-poppins font-bold">
                  {feature.title}
                </h1>
                <p className="text-sm md:text-[15px] text-gray-500">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Appfeatures;
