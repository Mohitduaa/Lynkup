import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[##100E19] text-white px-6 py-8 md:px-12 md:py-12 bg-[#272530] ">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
        <div>
          <h1 className="font-bold text-2xl">Lynkup</h1>
          <p className="text-sm mt-4">
            Lynkup is registered in England and Wales under company number
            13889273.
          </p>
        </div>

        <div>
          <h2 className="font-semibold text-lg">As seen in</h2>
          <div className="flex flex-col flex-wrap gap-4 mt-4">
            {/* <img
              src="https://via.placeholder.com/100x40?text=The+Sunday+Times"
              alt="The Sunday Times"
              className="h-8"
            /> */}
            <h1>The Sunday Times</h1>
            {/* <img
              src="https://via.placeholder.com/80x40?text=The+Grocer"
              alt="The Grocer"
              className="h-8"
            /> */}
            <h1>The Grocer</h1>
            {/* <img
              src="https://via.placeholder.com/80x40?text=Restaurant"
              alt="Restaurant Marketer"
              className="h-8"
            /> */}
            <h1>Restaurant Marketer</h1>
          </div>
        </div>

        {/* Section 3: Talent Partners */}
        <div>
          <h2 className="font-semibold text-lg">Talent partners</h2>
          <div className="flex flex-col flex-wrap gap-4 mt-4">
            {/* <img
              src="https://via.placeholder.com/80x40?text=The+Creator+Co."
              alt="The Creator Co."
              className="h-8"
            /> */}
            <h1>The Creator</h1>
            {/* <img
              src="https://via.placeholder.com/80x40?text=GRAIL"
              alt="GRAIL"
              className="h-8"
            /> */}
            <h1>GRAIL</h1>
            {/* <img
              src="https://via.placeholder.com/80x40?text=Be+Talent"
              alt="Be Talent"
              className="h-8"
            /> */}
            <h1>Be Talent</h1>
          </div>
        </div>

        {/* Section 4: Contact Us */}
        <div>
          <h2 className="font-semibold text-lg">Contact us</h2>
         
          <p className="text-sm mt-2">hello@invyted.com</p>
          <p className="text-sm mt-2">Follow Us</p>
          <div className="flex  space-x-6 mt-10">
      {/* Instagram */}
      <a
        href="https://www.instagram.com/yourprofile"
        target="_blank"
        rel="noopener noreferrer"
        className="text-pink-500 text-2xl hover:text-pink-700 transition-colors"
        aria-label="Instagram"
      >
        <FaInstagram />
      </a>

      {/* Facebook */}
      <a
        href="https://www.facebook.com/yourprofile"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 text-2xl hover:text-blue-800 transition-colors"
        aria-label="Facebook"
      >
        <FaFacebook />
      </a>

      {/* Twitter */}
      <a
        href="https://www.twitter.com/yourprofile"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-400 text-2xl hover:text-blue-600 transition-colors"
        aria-label="Twitter"
      >
        <FaTwitter />
      </a>
    </div>
        </div>
        <div className="flex flex-col flex-wrap gap-4 justify-center md:justify-end">
          <a href="#" className="text-[#FDFDFD] hover:underline">
            Brands
          </a>
          <a href="#" className="text-[#FDFDFD] hover:underline">
            Influencers
          </a>
          <a href="#" className="text-[#FDFDFD] hover:underline">
            About us
          </a>
          <a href="#" className="text-[#FDFDFD] hover:underline">
            Contact us
          </a>
          <p className="text-[#FDFDFD]">
        <Link to="/Faq" className="hover:underline">
          FAQs
        </Link>
        </p>
          <p className="text-[#FDFDFD]">
        <Link to="/privacy" className="hover:underline">
        Terms and conditions 
        </Link>
      </p>
        </div>
      </div>

      {/* Divider */}
      {/* <div className="border-t border-gray-300 my-8"></div> */}

      {/* Bottom Section */}
      <div className="flex flex-col md:flex-row justify-between items-center text-sm">
        {/* Social Media */}
        {/* <div className="flex gap-4 mb-4 md:mb-0">
          <a
            href="#"
            className="text-[#FDFDFD] hover:text-gray-600"
            aria-label="Instagram"
          >
            Instagram
          </a>
          <a
            href="#"
            className="text-[#FDFDFD] hover:text-gray-600"
            aria-label="TikTok"
          >
            TikTok
          </a>
          <a
            href="#"
            className="text-[#FDFDFD] hover:text-gray-600"
            aria-label="LinkedIn"
          >
            LinkedIn
          </a>
        </div> */}

        {/* Footer Links */}
        {/* <div className="flex flex-wrap gap-4 justify-center md:justify-end">
          <a href="#" className="text-[#FDFDFD] hover:underline">
            Brands
          </a>
          <a href="#" className="text-[#FDFDFD] hover:underline">
            Influencers
          </a>
          <a href="#" className="text-[#FDFDFD] hover:underline">
            About us
          </a>
          <a href="#" className="text-[#FDFDFD] hover:underline">
            Contact us
          </a>
          <a href="#" className="text-[#FDFDFD] hover:underline">
            FAQs
          </a>
          <a href="#" className="text-[#FDFDFD] hover:underline">
            Privacy & Cookie Policy
          </a>
        </div> */}
      </div>
    </footer>
  );
};

export default Footer;
