import React from "react";
import { FaInstagram, FaFacebook, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-4">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-center md:justify-between">
        <div className="flex space-x-4 mb-4 md:mb-0">
          <a href="#" className="text-gray-300 hover:text-gray-400">
            <FaInstagram />
          </a>
          <a href="#" className="text-gray-300 hover:text-gray-400">
            <FaFacebook />
          </a>
          <a href="#" className="text-gray-300 hover:text-gray-400">
            <FaEnvelope />
          </a>
        </div>
        <p className="text-center md:text-left">
          &copy; {new Date().getFullYear()} IndianEats. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
