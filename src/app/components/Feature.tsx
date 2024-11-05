import React from "react";
import Dash from "./Dash";
import Image from "next/image";
import { FaStar } from "react-icons/fa";

const speciality = [
  {
    img: "/s1.png",
    title: "Spinach & Mushroom Quiche",

    rating: 4.7,
  },
  {
    img: "/s2.png",
    title: "Sweet Potato",

    rating: 4.7,
  },
  {
    img: "/s3.png",
    title: "Spaghetti ",

    rating: 4.7,
  },
  {
    img: "/s4.png",
    title: "Chickpea Curry",

    rating: 4.7,
  },
];
const Feature = () => {
  return (
    <div className="relative pt-40 bg-black">
      <div className="space-y-4 w-fit mx-auto text-center">
        <h2 className="text-6xl  sm:text-5xl md:text-6xl font-serif text-orange-400">
          {`Today's`} Special
        </h2>

        <p className="max-w-[550px] pt-5 text-white text-lg sm:text-xl md:text-2xl">
          Special menu oftenly comes different everyday, this is our special
          food for today
        </p>
        <div className="w-fit mx-auto">
          <Dash />
        </div>
      </div>
      <div className="flex flex-wrap justify-center items-start  px-3 pt-3 gap-6 mb-20">
        {speciality.map((item) => (
         
            <><Image
            src={item.img}
            alt={item.title}
            width={180}
            height={180}
            className="m-auto object-cover h-56 w-auto transition-transform duration-300 hover:scale-105" /><div className="bg-black text-white p-4 transition-colors duration-300 ">
              <h1 className="text-xl font-serif">{item.title}</h1>
              <div className="flex flex-wrap justify-center items-start px-3 pt-3 gap-6 mb-20">
                {[...Array(5)].map((_, index) => (
                  <FaStar
                    key={index}
                    className={`h-5 w-5 ${index < item.rating ? "text-yellow-500" : "text-gray-400"}`} />
                ))}
              </div>
              <p className="text-sm font-serif">
                Lorem ipsum dolor sit amet,
                <br /> consectetur adipiscing elit. Etiam <br />
                ut imperdiet lectus.
              </p>

              <button className="w-full sm:w-62 bg-orange-400 text-black  px-10 py-2 mt-2 rounded-2xl transition duration-300 hover:bg-slate-600 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 active:scale-95 active:ring-0 hover:shadow-teal-700/50">
                Order now
              </button>
            </div></>
         
        ))}
      </div>
      <div className="w-full p-0 ">
        <Image
          src="/bg2.png"
          alt="Decorative Image"
          layout="responsive"
          width={1920}
          height={600}
          className="object-cover"
        />
      </div>
    </div>
  );
};

export default Feature;
