import React from 'react';
import { FaEnvelope, FaFacebook, FaInstagram,  FaPhoneAlt,  FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-4 md:p-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="text-center md:text-left mb-4 md:mb-0">
        <div className='flex gap-2 mb-2'>
           <FaPhoneAlt size={24} className="text-green-500" />
          <p className="text-sm font-poppins"> +91 1234567890</p>
        </div>
          <div className='flex gap-2'>
          <FaEnvelope size={24} className="text-blue-500" />
          <p className="text-sm font-poppins"> example@email.com</p>
          </div>
        </div>

        <div className="flex space-x-4">
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-400"
          >
            <FaInstagram size={24} />
          </a>
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-400"
          >
            <FaFacebook size={24} />
          </a>
          <a
            href="https://www.youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-400"
          >
            <FaYoutube size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
