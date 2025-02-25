import React from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#100E19] text-white px-6 py-8 md:px-12 md:py-5  ">
      <div className="flex flex-col gap-2 md:gap-5 md:flex-row  justify-around">
        <div>
          <h1 className="font-bold text-2xl">Lynkup</h1>
          <p className="text-sm mt-4">12/6, First Floor, Cabinet-VI, Metro Pillar 480-81, behind SBI Bank, <br /> Mathura Road, Mathura Road Faridabad, Faridabad, Haryana.</p>
        </div>
        <div>
          <h2 className="font-semibold text-lg">Contact us</h2>
         
          <p className="text-sm mt-2">lynkupindia@gmail.com</p>
          <div className="flex gap-2 mt-2">
      <a href="https://www.instagram.com/lynkupindia" target="_blank" rel="noopener noreferrer" className="text-pink-500 text-2xl hover:text-pink-700 transition-colors" aria-label="Instagram">
        <FaInstagram />
      </a>

      <a href="https://www.facebook.com/people/lynkup/61573045351381/"  target="_blank" rel="noopener noreferrer" className="text-blue-600 text-2xl hover:text-blue-800 transition-colors" aria-label="Facebook">
        <FaFacebook />
      </a>  
    </div>
        </div>
        <div className="flex flex-col flex-wrap gap-4 justify-center md:justify-end">
          <a href="#" className="text-[#FDFDFD] hover:underline">   Brands </a>
          <a href="#" className="text-[#FDFDFD] hover:underline">  Creators</a>
         <p className="text-[#FDFDFD]"><Link to="/Faq" className="hover:underline">FAQs</Link></p>
        <p className="text-[#FDFDFD]"><Link to="/privacy" className="hover:underline">Terms and conditions </Link></p>
        </div>
      </div> 
    </footer>
  );
};

export default Footer;
