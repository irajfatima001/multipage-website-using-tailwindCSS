import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
//import Navbar from './Navbar'



const Hero = () => {
  return (
    <div className="relative h-[700px] w-full overflow-hidden">
        
        <Image
          src="/bg1.png"
          alt="Background Image"
          layout="fill"
          objectFit=""
          className="relative top-0 left-0"
        />

        <div className="relative  flex flex-col items-center  h-full bg-gradient-to-t from-black  to-transparent">
          <h1 className="text-3xl  font-bold mt-40 mb-10 font-serif text-center text-orange-300 transition ease-in-out delay-150 hover:shadow-4xl hover:scale-110 duration-300">
          Taste the rich flavour of high quality meals
          </h1>
          <p className="text-sm mt-10 md:text-xl mb-6 text-center text-white font-serif hover:scale-110 duration-300">
          We only use the five star quality for our
          <br/> menu, come and get the richness in<br/> every meals we serve.
          </p>
          <Link href="/menu">
          <button
            className=" mt-10 bg-tranparent text-white border-2 border-orange-400 px-6 py-2 rounded-lg transition duration-300 
            hover:bg-red-600 hover:shadow-xl hover:scale-105 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-opacity-75 
            active:scale-95 active:ring-0 hover:shadow-red-700/50"
          >
            Go to menu
          </button></Link>
        </div>
      </div>

  )
}

export default Hero
