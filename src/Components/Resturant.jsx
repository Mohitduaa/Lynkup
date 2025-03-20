import React from "react";

const steps = [
  {
    number: "1",
    title: "List an Offer",
    desc: "Share the experience you’re offering, whether it’s a complimentary meal, special offer, tasting event, or exclusive dining experience."
  },
  {
    number: "2",
    title: "Select Creators",
    desc: "Accept or reject creator requests based on their alignment with your brand, engagement, and content style."
  },
  {
    number: "3",
    title: "Deliver the Experience",
    desc: "Host the creator, provide the agreed-upon experience, and let them capture the moment."
  },
  {
    number: "4",
    title: "Grow with Content",
    desc: "Gain authentic, high-quality content that boosts your visibility and attracts new customers."
  },
];

const RestaurantSteps = () => {
  return (
    <div className="bg-[#272530] py-16 px-4 md:px-20">
      <h2 className="text-center text-white text-3xl md:text-4xl font-bold mb-12 font-quicksand ">
        How to use LynkUp for restaurants?
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {steps.map((step, index) => (
          <div key={index} className="flex flex-col items-center text-center">
            <div className="w-20 h-20 border-2 border-white rounded-full flex items-center justify-center mb-5">
              <span className="text-white text-3xl font-bold">{step.number}</span>
            </div>
            <h3 className="text-white text-lg font-bold mb-3 font-quicksand ">{step.title}</h3>
            <p className="text-gray-300 max-w-[250px] font-Lexend font-extralight">{step.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RestaurantSteps;
