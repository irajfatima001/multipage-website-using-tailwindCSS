"use client"
import React, { useState } from "react";
//import Image from 'next/image'
import { AiOutlineMenu } from "react-icons/ai";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const handleLinkClick = () => {
    setIsOpen(false); 
  };
  return (
    <div className="relative pt-6 bg-gray-900">
      <div className="flex justify-between items-center ">
        {/* <Image src="/p1.png" width={50} height={50} alt="logo"/> */}
        <h2 className="text-orange-400 italic text-4xl font-bold font-serif">
          Foodelicious
        </h2>
        <ul className=" md:flex hidden space-x-7 items-center font-serif text-xl text-white ">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/menu">Menu</Link>
          <Link href="/reservation">Reservation</Link>

          <Link href="/contact">Contact</Link>
        </ul>
        <button className="bg-red-500 text-white px-4  mr-8 rounded-3xl">
          Signup
        </button>
        
        <button onClick={toggleMenu} className="md:hidden">
        <AiOutlineMenu className="md:hidden text-red-500 " size={30} />
        </button>
      </div>
      {isOpen && (
        <div className="absolute top-16 right-0 bg-white shadow-lg p-4 md:hidden z-10">
          <Link href="/" className="block py-2" onClick={handleLinkClick}>
            Home
          </Link>
          <Link href="/about" className="block py-2" onClick={handleLinkClick}>
            About
          </Link>
          <Link href="/menu" className="block py-2" onClick={handleLinkClick}>
          Menu
          </Link>
          <Link href="/reservation" className="block py-2" onClick={handleLinkClick}>
          Reservation
          </Link>
  
          <Link href="/contact" className="block py-2" onClick={handleLinkClick}>
            Contact
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
