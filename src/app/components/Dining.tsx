import React from "react";

import Image from "next/image";



const Dining = () => {
  return (
    <div className="=relative pt-20 bg-black pb-10">
      <div className="space-y-6 w-full mx-auto text-center px-4 sm:px-8 md:px-12">
        <h2 className="text-3xl sm:text-4xl md:text-5xl text-orange-400  font-serif">Dining Events</h2>
        <p className="text-white text-base sm:text-lg md:text-xl">
          We provide dining event for your special day
          <br />
          with your important people
        </p>
<div  className="flex flex-wrap justify-center gap-4">
        <button
          className="bg-orange-400 text-white border-2 border-orange-400 px-6 py-2 rounded-lg transition duration-300 
            hover:bg-red-600 hover:shadow-xl hover:scale-105 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-opacity-75 
            active:scale-95 active:ring-0 hover:shadow-red-700/50"
        >
          Private Events
        </button>
        <span
          className="  bg-tranparent text-white border-2 border-orange-400 px-6 py-2 rounded-lg transition duration-300 
            hover:bg-red-600 hover:shadow-xl hover:scale-105 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-opacity-75 
            active:scale-95 active:ring-0 hover:shadow-red-700/50"
        >
          Cooperate Events
        </span>
      </div>
</div>
      <div className="relative  p-0">
        <div className="relative">
          <Image
            src="/d1.png"
            alt="Decorative Image"
            layout="responsive"
            width={1720}
            height={400}
            className="object-cover p-10 "
          />
          <div className="absolute top-0 left-0  w-full sm:w-1/2 h-full bg-gradient-to-r from-black via-black to-transparent  flex items-center pl-20">
            
            <div className="text-white font-serif">
              <h2 className="text-3xl sm:text-sm md:text-2xl  mb-4">Fine Dining</h2>
              <p className=" text-base sm:text-sm md:text-md mt-2">
                Bottle of Champagne
                <br /> Fine Sushi Tower For 2+
                <br /> Dessert
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className=" relative p-0">
        <div className="relative">
          <Image
            src="/d2.png"
            alt="Decorative Image"
            layout="responsive"
            width={1720}
            height={400}
            className="object-cover p-10"
          />
          <div className="absolute top-0 right-0 w-full sm:w-1/2 h-full bg-gradient-to-l from-black via-black to-transparent  flex items-center justify-end pr-20">
           
            <div className="text-white font-serif">
              <h2 className="text-3xl sm:text-sm md:text-2xl  mb-4">Gold Dining</h2>
              <p className="text-base sm:text-sm md:text-md mt-2">
                Bottle of Champagne
                <br /> Fine Sushi Tower For 2+
                <br /> Dessert
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="relative  p-0">
        <div className="relative">
          <Image
            src="/d3.png"
            alt="Decorative Image"
            layout="responsive"
            width={1720}
            height={400}
            className="object-cover p-10 "
          />
          <div className="absolute top-0 left-0 w-full sm:w-1/2 h-full bg-gradient-to-r from-black via-black to-transparent  flex items-center pl-20">
            
            <div className="text-white font-serif">
              <h2 className="text-3xl sm:text-sm md:text-2xl  mb-4">Royalty Dining</h2>
              <p className="text-base sm:text-sm md:text-md mt-2">
                Bottle of Champagne
                <br /> Fine Sushi Tower For 2+
                <br /> Dessert
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dining;
