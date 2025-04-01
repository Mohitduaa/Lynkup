import React, { useState, useEffect } from "react";
import HeroSection from "./HeroSection"; 
import { Link } from "react-scroll";
import {  NavLink, Link as RouterLink, useParams } from "react-router-dom";  
import { useLocation, useNavigate } from "react-router-dom";

const Navbaar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const {pathname} = useParams()
  const location = useLocation();
  const navigate = useNavigate();

  const handleClick = () => {
    if (location.pathname === "/") {
      document.getElementById("businesses")?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/?scrollTo=businesses"); 
    }
  };
  const Features = () => {
    if (location.pathname === "/") {
      document.getElementById("Features")?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/?scrollTo=Features"); 
    }
  };
  const Creators = () => {
    if (location.pathname === "/") {
      document.getElementById("Creators")?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/?scrollTo=Features"); 
    }
  };
  const Download = () => {
    if (location.pathname === "/") {
      document.getElementById("Download")?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/?scrollTo=Features"); 
    }
  };
  
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
          isScrolled ? "bg-[#fdfdfde7] shadow-md" : "bg-[#fdfdfdd3]"
        }`}
      >
        <div className="flex justify-between items-center px-4 md:px-6 lg:px-20 py-1 bg-[#fdfdfd9a]">
        <NavLink to="/" >         
         <div>
            <img
              className="w-full h-[60px] "
              src="images/Lynkup logo-01.svg"
              alt="Logo"
            />
          </div>
          </NavLink>

          <div className="hidden lg:block">
            <ul className="flex gap-3">
            <button onClick={handleClick} className="font-normal font-quicksand text-[14px] lg:text-[17px] text-[#100E19] px-[8px] py-[4px] rounded-lg cursor-pointer">Businesses</button>              
            <button onClick={Features}  smooth={true}  duration={500}  className="font-normal font-quicksand text-[14px] lg:text-[17px] text-[#100E19]  px-[8px] py-[4px] rounded-lg cursor-pointer">Our Features</button>
              <button onClick={Download}  smooth={true}  duration={500} className="font-normal font-quicksand text-[14px] lg:text-[17px] text-[#100E19]  px-[8px] py-[4px] rounded-lg cursor-pointer"> Download App</button>
              <button onClick={Creators}  smooth={true}  duration={500} className="font-normal font-quicksand text-[14px] lg:text-[17px] text-[#100E19]  px-[8px] py-[4px] rounded-lg cursor-pointer ">Creators</button>
              <NavLink to="http://admin.lynkup.co.in" className="font-normal font-quicksand text-[14px] lg:text-[16px] text-white bg-[#100E19] px-[8px] py-[6px] rounded-lg cursor-pointer" >Login as Business </NavLink>
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
          <div className="lg:hidden bg-[#100E19] text-white shadow-md">
            <ul className="flex flex-col gap-3 px-4 py-4">
              
            <button onClick={handleClick} className="font-normal font-quicksand text-[14px] lg:text-[17px] text-white px-[8px] py-[4px] rounded-lg cursor-pointer text-start">Businesses</button>              
            <button onClick={Features}  smooth={true}  duration={500}  className="font-normal font-quicksand text-[14px] lg:text-[17px] text-white  px-[8px] py-[4px] rounded-lg cursor-pointer text-start">Our Features</button>
              <button onClick={Download}  smooth={true}  duration={500} className="font-normal font-quicksand text-[14px] lg:text-[17px] text-white  px-[8px] py-[4px] rounded-lg cursor-pointer text-start"> Download App</button>
              <button onClick={Creators}  smooth={true}  duration={500} className="font-normal font-quicksand text-[14px] lg:text-[17px] text-white  px-[8px] py-[4px] rounded-lg cursor-pointer text-start">Creators</button>
              <NavLink to="http://admin.lynkup.co.in" className="font-normal font-quicksand text-[14px] lg:text-[16px] text-white  px-[8px] py-[6px] rounded-lg cursor-pointer text-start" >Login as Business </NavLink>


                
            </ul>
          </div>
        )}
      </div>

    </>
  );
};

export default Navbaar;
