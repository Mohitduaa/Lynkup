import React from "react";

const AppPromotion = () => {
  return (
    <div className=" py-20 px-6 lg:px-20 flex flex-col lg:flex-row items-center justify-evenly  ">
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
        <div className="flex gap-8 py-2">
          <div className="flex">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="gold" className="h-6 w-6"> <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" /></svg>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="gold" className="h-6 w-6"> <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" /></svg>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="gold" className="h-6 w-6"> <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" /></svg>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="gold" className="h-6 w-6"> <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" /></svg>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="gold" className="h-6 w-6"> <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" /></svg>
          <h1>4.8</h1>
          </div>
          <div className="flex">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="gold" className="h-6 w-6"> <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" /></svg>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="gold" className="h-6 w-6"> <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" /></svg>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="gold" className="h-6 w-6"> <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" /></svg>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="gold" className="h-6 w-6"> <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" /></svg>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="gold" className="h-6 w-6"> <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" /></svg>
          <h1>4.9</h1>
          </div>
        </div>
      </div>

      <div className=" flex justify-center items-center">
        
        <div className="  ">
          <img
            src="images/mobile.png"
            alt="App Mockup 2"
            className="w-full h-[600px]"
          />
          <div className="-mt-10">

          <img className=" -rotate-[10deg] -ml-2 mb-2" src="images/right (2).png" alt="" />
        <h1 className="absolute -ml-12 text-white font-poppins font-medium">100%free creators</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppPromotion;
