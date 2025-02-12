import React, { useState } from "react";

const Navbaar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className="flex justify-between items-center px-6 lg:px-20 py-4 bg-white   ">
        <div>
          {/* <h1 className="font-bold font-poppins text-xl">PINGFLUENCE</h1> */}
          <img className="w-full h-[50px]" src="images/icon1.png" alt="" />
        </div>

        <div className="hidden lg:block">
          <ul className="flex gap-5">
            <li className="font-normal font-poppins text-[17px]  cursor-pointer">Book a Demo</li>
            <li className="font-normal font-poppins text-[17px] cursor-pointer">Testimonials</li>
            <li className="font-normal font-poppins text-[17px] cursor-pointer">Influencers</li>
            <li className="font-normal font-poppins text-[17px] cursor-pointer">Blog</li>
            <li className="font-normal font-poppins text-[17px] cursor-pointer">AppStore</li>
            <li className="font-normal font-poppins text-[17px] cursor-pointer">GooglePlay</li>
          </ul>
        </div>

        <div className="lg:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-800 focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-6 h-6"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="lg:hidden bg-white shadow-md">
          <ul className="flex flex-col gap-3 px-6 py-4">
            <li className="font-normal font-poppins text-[17px] cursor-pointer">
              Book a Demo
            </li>
            <li className="font-normal font-poppins text-[17px] cursor-pointer">
              Testimonials
            </li>
            <li className="font-normal font-poppins text-[17px] cursor-pointer">
              Influencers
            </li>
            <li className="font-normal font-poppins text-[17px] cursor-pointer">
              Blog
            </li>
            <li className="font-normal font-poppins text-[17px] cursor-pointer">
              AppStore
            </li>
            <li className="font-normal font-poppins text-[17px] cursor-pointer">
              GooglePlay
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Navbaar;
