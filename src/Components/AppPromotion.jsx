import React from "react";

const AppPromotion = () => {
  return (
    <div className="bg-[#1E4898] py-12 px-6 lg:px-20 flex flex-col lg:flex-row items-center justify-between">
      <div className="text-center lg:text-left max-w-lg lg:pr-10">
        <h1 className="text-3xl lg:text-5xl  text-white font-poppins mb-4 leading-tight">
          Book and manage <br /> brand collaborations{" "}
          <span className="text-pink-500">with one simple app</span>
        </h1>
        <p className="text-white font-Lexend font-extralight mb-6 text-base lg:text-lg">
          100% free for creators. Empower yourself with the best tools to manage
          brand deals seamlessly.
        </p>

        <div className="flex justify-center lg:justify-start gap-4">
          <div
            href="#"
            className="bg-black text-white flex items-center py-3 px-5 rounded-lg hover:bg-gray-800 transition"
          >
            <img
              src="images/app-store.png"              alt="App Store"
              className="h-6 mr-3"
            />
            <div>
              <p className="text-xs">Download on the</p>
              <p className="text-sm font-semibold">App Store</p>
            </div>
          </div>
          <div
            href="#"
            className="bg-black text-white flex items-center py-3 px-5 rounded-lg hover:bg-gray-800 transition"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
              alt="Google Play"
              className="h-6 mr-3"
            />
            <div>
              <p className="text-xs">Get it on</p>
              <p className="text-sm font-semibold">Google Play</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-10 lg:mt-0 relative flex justify-center">
        <div className="w-60 h-auto rounded-lg shadow-lg overflow-hidden bg-white">
          <img
            src="images/card1.png"
            alt="App Mockup 1"
            className="w-full"
          />
        </div>
        <div className="w-55 h-auto rounded-lg shadow-lg overflow-hidden bg-white -ml-16 mt-10">
          <img
            src="images/card1.png"
            alt="App Mockup 2"
            className="w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default AppPromotion;
