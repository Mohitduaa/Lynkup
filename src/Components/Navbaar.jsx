import React, { useState, useEffect } from "react";
import HeroSection from "./HeroSection"; // Import the HeroSection component
import { NavLink } from "react-router-dom";

const Navbaar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? "bg-[#fdfdfd9a] shadow-md" : "bg-transparent"
        }`}
      >
        <div className="flex justify-between items-center px-4 md:px-6 lg:px-20 py-2 bg-[#fdfdfd9a]">
          <div>
            <img
              className="w-full "
              src="images/logo1.svg"
              alt="Logo"
            />
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:block">
            <ul className="flex gap-3">
              {/* {[
                "Book a Demo",
                "Influencers",
                "Blog",
                "Business Login",
              ].map((item, index) => (
                <li 
                  key={index}
                  className="font-normal font-poppins text-[14px] lg:text-[17px] text-white bg-[#100E19] px-[8px] py-[4px] rounded-lg cursor-pointer">
                  {item}
                </li>
              ))} */}
              <li className="font-normal font-poppins text-[14px] lg:text-[17px] text-[#100E19]  px-[8px] py-[4px] rounded-lg cursor-pointer">Book a Demo </li>
              <li className="font-normal font-poppins text-[14px] lg:text-[17px] text-[#100E19]  px-[8px] py-[4px] rounded-lg cursor-pointer">Influencers</li>
              <li className="font-normal font-poppins text-[14px] lg:text-[17px] text-[#100E19]  px-[8px] py-[4px] rounded-lg cursor-pointer">Blog</li>
              <a href="https://socialmeadmin.testenvapp.com/auth" className="font-normal font-poppins text-[14px] lg:text-[16px] text-white bg-[#100E19] px-[8px] py-[6px] rounded-lg cursor-pointer"target="_blank" rel="noopener noreferrer">Login as Business </a>
            </ul>
          </div>

          {/* Mobile Menu Toggle Button */}
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

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-[#100E19] text-white shadow-md">
            <ul className="flex flex-col gap-3 px-4 py-4">
              {[
                "Book a Demo",
                "Testimonials",
                "Influencers",
                "Blog",
                "AppStore",
                "GooglePlay",
              ].map((item, index) => (
                <li
                  key={index}
                  className="font-normal font-poppins text-[14px] md:text-[17px] cursor-pointer"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

    </>
  );
};

export default Navbaar;
