import React from "react";

const HeroSection = () => {
  return (
    <div
      className="h-[600px] md:h-[700px] lg:h-[800px] w-full"
      style={{
        backgroundImage: `url('images/lynkuphero.png')`,
        backgroundSize: "cover",
        backgroundBlendMode: "screen",
      }}
    >
      <div className="flex justify-center md:justify-start items-center h-full px-4 md:px-12 lg:px-20">
        <div className="text-center text-[#FDFDFD] md:text-left">
          <h1 className="text-2xl md:text-4xl lg:text-[2.5rem] font-bold font-poppins mb-4">
          Eat, Share, Grow
          </h1>
          <p className="font-Lexend text-[14px] md:text-xl font-extralight mb-2 max-w-[90%] md:max-w-[500px]">
          A platform where creator marketing is accessible,  seamless,  and  mutually beneficial for creators and restaurants alike.
          </p>
          {/* <p className="font-Lexend font-extralight mb-2 max-w-[90%] md:max-w-[660px] text-[14px] md:text-xl">
            <span className="font-poppins font-bold text-lg md:text-2xl">
              Our Mission:
            </span>{" "}
            To empower creators with opportunities and help businesses leverage
            influencer marketing with minimal effort.
          </p> */}
          {/* <p className="font-Lexend font-extralight max-w-[90%] md:max-w-[660px] text-[14px] md:text-xl">
            <span className="font-poppins font-bold text-lg md:text-2xl">
              Our Vision:
            </span>{" "}
            To be the go-to platform for barter collaborations between content
            creators and hospitality brands.
          </p> */}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
