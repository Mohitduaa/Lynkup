import React from 'react';

const images = [
  { src: "images/card1.png", rotate: "-rotate-6" },
  { src: "images/card1.png", rotate: "-rotate-12" },
  { src: "images/card1.png", rotate: "-rotate-6" },
  { src: "images/card1.png", rotate: "-rotate-6" },
  { src: "images/card1.png", rotate: "-rotate-12" },
  { src: "images/card1.png", rotate: "-rotate-6" },
];

const HeroSection = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-center items-center gap-10 px-6 lg:px-20 py-10">
      <div className="text-center lg:text-left max-w-lg">
        <h1 className="text-xl lg:text-2xl font-bold font-poppins mb-4">Get Eat, Share, Grow</h1>
        <p className="font-Lexend mb-2">
          LynkUp bridges the gap between restaurants looking for authentic promotion and creators who want to experience and share the best food in town.
        </p>
        <p className="font-Lexend mb-2">
          🔹 Our Mission: To empower creators with opportunities and help restaurants leverage influencer marketing with minimal effort.
        </p>
        <p className="font-Lexend">
          🔹 Our Vision: To be the go-to platform for barter collaborations between content creators and hospitality brands.
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6 p-4 lg:p-6">
        {images.map((img, index) => (
          <div
            key={index}
            className={`rounded-2xl shadow-lg transform ${img.rotate} hover:rotate-0 hover:scale-105 transition duration-300`}
          >
            <img
              src={img.src}
              alt={`Collage ${index}`}
              className="w-full h-48 sm:h-64 md:w-[300px] lg:w-[500px] object-cover rounded-xl"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroSection;
