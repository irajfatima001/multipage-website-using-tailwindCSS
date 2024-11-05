import React from "react";
import { BsTwitter, BsPinterest } from "react-icons/bs";
import { FaFacebook, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="relative pt-20 bg-gray-700 bg-gradient-to-b from-black  to-transparent pb-16">
      <div className="space-y-6 w-full mx-auto text-center px-4 sm:px-8 md:px-12 pb-20 text-white">
          <h2 className="text-2xl text-orange-400 font-serif">
            We are always ready to surprise
            <br />
            you with new flavours
          </h2>
        </div>
      <div className="grid md:grid-cols-3 gap-10 pl-20 ">
        
        <div className="space-y-4 text-orange-400 italic">
          <h2 className="text-4xl font-bold font-serif pt-8">Foodelicious</h2>
          
        </div>

        <div className="space-y-2 space-x-3 text-white">
          <h2 className=" font-bold text-orange-400 italic pl-6">Quick Links</h2>
          <ul className="space-y-1 text-md pl-6 ">
            <li>About Us</li>
            <li>Chefs</li>
            <li>Events</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="flex gap-4 text-red-500 text-2xl pt-10">
          <FaFacebook />
          <BsTwitter />
          <BsPinterest />
          <FaLinkedinIn />
        </div>
        
        
      </div>
      <div className="absolute bottom-0 left-0 right-0 py-4 mt-10">
      <p className="text-sm md:text-base text-white text-center mx-4 my-2">
          &copy; {new Date().getFullYear()} Foodelicious. All Rights Reserved.
        </p></div>
    </div>
  );
};

export default Footer;
