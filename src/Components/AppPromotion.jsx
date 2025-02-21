import React from "react";

const AppPromotion = () => {
  return (
    <div className=" py-10 px-6 lg:px-20 flex flex-col lg:flex-row items-center justify-evenly  ">
      <div className="text-center lg:text-left  lg:pr-10">
        <h1 className="text-3xl lg:text-5xl  text-white font-poppins font-bold mb-4 ">
          Book and manage <br /> brand collaborations{" "} <br />
          <span className="text-[#653FCC]">with one simple app</span>
        </h1>
        

        <div className="flex justify-center lg:justify-start gap-4">
          <div href="#" className=" text-white flex items-center py-3 px-2 rounded-lg hover:bg-gray-800 transition">
            <img src="images/Appstore IOS.png" alt="App Store" className="h-10 "/>
          </div>
          <div  href="#" className=" text-white flex items-center py-3 px-2 rounded-lg hover:bg-gray-800 transition">
            <img src="images/playstore.png" alt="Google Play" className="h-10 w-full"/>
          </div>
        </div>
      </div>

      <div className=" flex justify-center items-center">
        
        <div className="  ">
          <img
            src="images/mobile.png"
            alt="App Mockup 2"
            className=" md:w-full md:h-[600px]"
          />
          <div className="-mt-10">

          <img className=" -rotate-[10deg] -ml-2 mb-2" src="images/right (2).png" alt="" />
           <h1 className="absolute -ml-5 md:-ml-12 text-white font-poppins font-medium">100% free for creators</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppPromotion;
