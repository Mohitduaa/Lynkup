import React, { useState, useEffect } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";

const Navbaar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleClick = () => {
    if (location.pathname === "/") {
      const element = document.getElementById("businesses");
      if (element) {
        element.scrollIntoView({ 
          behavior: "smooth",
          block: "start"
        });
      }
    } else {
      navigate("/?scrollTo=businesses"); 
    }
  };

  const Features = () => {
    if (location.pathname === "/") {
      const element = document.getElementById("Features");
      if (element) {
        element.scrollIntoView({ 
          behavior: "smooth",
          block: "start"
        });
      }
    } else {
      navigate("/?scrollTo=Features"); 
    }
  };

  const Creators = () => {
    if (location.pathname === "/") {
      const element = document.getElementById("Creators");
      if (element) {
        element.scrollIntoView({ 
          behavior: "smooth",
          block: "start"
        });
      }
    } else {
      navigate("/?scrollTo=Creators"); // Fixed: Was scrolling to Features instead of Creators
    }
  };

  const Download = () => {
    if (location.pathname === "/") {
      const element = document.getElementById("Download");
      if (element) {
        element.scrollIntoView({ 
          behavior: "smooth",
          block: "start"
        });
      }
    } else {
      navigate("/?scrollTo=Download"); // Fixed: Was scrolling to Features instead of Download
    }
  };
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true }); // Added passive for better performance
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-[#fdfdfde7] shadow-md" : "bg-[#fdfdfdd3]"
      }`}
      style={{
        backdropFilter: 'blur(10px)', // Added for better background effect
        WebkitBackdropFilter: 'blur(10px)' // Safari specific
      }}
    >
      <div className="flex justify-between items-center px-4 md:px-6 lg:px-20 py-1 bg-[#fdfdfd9a]">
        <NavLink to="/">
          <div>
            <img
              className="w-auto h-[60px]" // Changed from w-full to w-auto for Safari
              src="images/Lynkup logo-01.svg"
              alt="Logo"
              style={{
                maxWidth: 'none' // Prevent Safari from resizing
              }}
            />
          </div>
        </NavLink>

        <div className="hidden lg:block">
          <ul className="flex gap-3 items-center">
            <button 
              onClick={handleClick} 
              className="font-normal font-quicksand text-[14px] lg:text-[17px] text-[#100E19] px-[8px] py-[4px] rounded-lg cursor-pointer hover:bg-gray-100 transition-colors"
            >
              Businesses
            </button>              
            <button 
              onClick={Features} 
              className="font-normal font-quicksand text-[14px] lg:text-[17px] text-[#100E19] px-[8px] py-[4px] rounded-lg cursor-pointer hover:bg-gray-100 transition-colors"
            >
              Our Features
            </button>
            <button 
              onClick={Download} 
              className="font-normal font-quicksand text-[14px] lg:text-[17px] text-[#100E19] px-[8px] py-[4px] rounded-lg cursor-pointer hover:bg-gray-100 transition-colors"
            >
              Download App
            </button>
            <button 
              onClick={Creators} 
              className="font-normal font-quicksand text-[14px] lg:text-[17px] text-[#100E19] px-[8px] py-[4px] rounded-lg cursor-pointer hover:bg-gray-100 transition-colors"
            >
              Creators
            </button>
            <NavLink 
              to="http://admin.lynkup.co.in" 
              className="font-normal font-quicksand text-[14px] lg:text-[16px] text-white bg-[#100E19] px-[12px] py-[8px] rounded-lg cursor-pointer hover:bg-[#2a2738] transition-colors"
            >
              Login as Business
            </NavLink>
          </ul>
        </div>

        <div className="lg:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-800 focus:outline-none p-2"
            aria-label="Toggle menu"
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
        <div 
          className="lg:hidden bg-[#100E19] text-white shadow-md"
          style={{
            WebkitOverflowScrolling: 'touch' // Smooth scrolling for iOS
          }}
        >
          <ul className="flex flex-col gap-3 px-4 py-4">
            <button 
              onClick={() => {
                handleClick();
                setIsMenuOpen(false);
              }} 
              className="font-normal font-quicksand text-[14px] lg:text-[17px] text-white px-[8px] py-[8px] rounded-lg cursor-pointer text-start hover:bg-[#2a2738] transition-colors"
            >
              Businesses
            </button>              
            <button 
              onClick={() => {
                Features();
                setIsMenuOpen(false);
              }} 
              className="font-normal font-quicksand text-[14px] lg:text-[17px] text-white px-[8px] py-[8px] rounded-lg cursor-pointer text-start hover:bg-[#2a2738] transition-colors"
            >
              Our Features
            </button>
            <button 
              onClick={() => {
                Download();
                setIsMenuOpen(false);
              }} 
              className="font-normal font-quicksand text-[14px] lg:text-[17px] text-white px-[8px] py-[8px] rounded-lg cursor-pointer text-start hover:bg-[#2a2738] transition-colors"
            >
              Download App
            </button>
            <button 
              onClick={() => {
                Creators();
                setIsMenuOpen(false);
              }} 
              className="font-normal font-quicksand text-[14px] lg:text-[17px] text-white px-[8px] py-[8px] rounded-lg cursor-pointer text-start hover:bg-[#2a2738] transition-colors"
            >
              Creators
            </button>
            <NavLink 
              to="http://admin.lynkup.co.in" 
              className="font-normal font-quicksand text-[14px] lg:text-[16px] text-white  px-[8px] py-[6px] rounded-lg cursor-pointer text-start"
            >
              Login as Business
            </NavLink>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbaar;