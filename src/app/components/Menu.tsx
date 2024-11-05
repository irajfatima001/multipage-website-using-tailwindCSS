import React from "react";
import Dash from "./Dash";
import Image from "next/image";




const Menu = () => {
  return (
    <div className="relative pt-40 bg-black pb-10">
      <div className="space-y-4 w-fit mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl text-orange-400  font-serif">
          Our Specialities
        </h2>
        <p className="text-white text-base sm:text-lg md:text-xl">
        Authentic meals from our restaurant served with high <br/>quality ingredients.
        </p>
        <div className="w-fit mx-auto">
          <Dash />
        </div>
      </div>
      <ul className="mt-10 hidden sm:flex gap-6 md:gap-10 lg:gap-20 w-fit mx-auto mb-10">
        <li className="bg-red-500 rounded-lg text-white py-2 px-6">
          Specialities
        </li>
        <li className="border border-orange-400 rounded-lg text-white py-2 px-6">
          Homestyle Sushi
        </li>
        <li className="border border-orange-400 rounded-lg text-white py-2 px-6">
          Steak
        </li>
        <li className="border border-orange-400 rounded-lg text-white py-2 px-6">
          With Rice
        </li>
        <li className="border border-orange-400 rounded-lg text-white py-2 px-6">
          Cocktails
        </li>
        <li className="border border-orange-400 rounded-lg text-white py-2 px-6">
          Appetizer
        </li>
      </ul>
      {/* 1st div */}
      <div className="grid lg:grid-cols-[50%,1fr] gap-5 pt-20 m-10">
        <div className="w-fit mx-auto">
          <Image
            className="w-full max-w-[400px] h-auto"
            src="/s5.png"
            width={400}
            height={400}
            alt="dish"
          />
        </div>
        <div className="w-fit   pl-10 text-white">
          <h2 className="text-xl sm:text-2xl md:text-3xl mb-5">Dragon Sushi</h2>
          <p className="font-thin">
            Ingredients: Lorem ipsum dolor sit <br />
            amet, consectetur adipiscing elit.
            <br /> Etiam ut imperdiet lectus. Donec <br />
            vitae vulputate nunc, in laoreet <br /> urna.
          </p>
          <p className="text-xl text-orange-400 mt-5 font-serif">$50</p>
        </div>
      </div>
      {/* 2nd div */}
      <div className="grid lg:grid-cols-[50%,1fr] gap-5 pt-20 m-16">
        <div className="w-fit pl-20 text-white">
          <h2 className="text-xl sm:text-2xl md:text-3xl mb-5">Creamy Sushi</h2>
          <p className="font-thin">
            Ingredients: Lorem ipsum dolor sit <br />
            amet, consectetur adipiscing elit.
            <br /> Etiam ut imperdiet lectus. Donec <br />
            vitae vulputate nunc, in laoreet <br /> urna.
          </p>
          <p className="text-xl text-orange-400 mt-5 font-serif">$50</p>
        </div>
        <div className="w-fit mx-auto  ">
          <Image
            className="w-[100%] max-w-[400px] h-auto "
            src="/s6.png"
            width={400}
            height={400}
            alt="dish"
          />
        </div>
      </div>
{/* 3rd div */}
      <div className="grid lg:grid-cols-[50%,1fr] gap-5 pt-10 m-5">
        <div className="w-fit mx-auto">
          <Image
            className="w-[100%] max-w-[400px] h-auto"
            src="/s7.png"
            width={400}
            height={400}
            alt="dish"
          />
        </div>
        <div className="w-fit pl-10 text-white">
          <h2 className="text-xl sm:text-2xl md:text-3xl mb-5">Roll Salmon Sushi</h2>
          <p className="font-thin">
            Ingredients: Lorem ipsum dolor sit <br />
            amet, consectetur adipiscing elit.
            <br /> Etiam ut imperdiet lectus. Donec <br />
            vitae vulputate nunc, in laoreet <br /> urna.
          </p>
          <p className="text-xl text-orange-400 mt-5 font-serif">$50</p>
        </div>
      </div>
    </div>
  );
};

export default Menu;
