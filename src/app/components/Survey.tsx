import React from "react";
import Image from "next/image";
import Link from "next/link";

const Survey = () => {
  return (
    <div className="relative pt-40 bg-black pb-10 ">
      <div className="space-y-6 w-full mx-auto text-center px-4 sm:px-8 md:px-12 pb-20">
      <h2 className="text-4xl text-orange-400 md:text-3xl font-serif ">Our Story</h2>
      <p className="text-white text-xl sm:text-sm md:text-xl font-thin">A journey for making successful luxury restaurant<br/>
      with the best services</p></div>
      <div className="grid lg:grid-cols-[50%,1fr] gap-4 px-4 sm:px-8 md:px-12">
        <div className="flex justify-center">
          <Image
            className="w-full max-w-[600px] h-auto"
            src="/o1.png"
            width={600}
            height={600}
            alt="story image"
          />
        </div>
        <div className="self-center text-center lg:text-left px-4 lg:px-40 font-thin">
          
          
          <p className="text-white pt-8 sm:text-base md:text-md">
            Lorem ipsum dolor sit amet, <br/>consectetur adipiscing elit. <br/>Integer
            feugiat urna id leo euismod <br/>rhoncus. Aliquam erat volutpat. <br/>Nulla id
            aliquam neque, at dignissim<br/> quam. Praesent et lacus accumsan,<br/>
            consequat nisl a, mattis sapien.
          </p>
          <p className="text-white pt-6 sm:text-base md:text-md">
            Nam sodales ullamcorper aliquet.<br/> Phasellus ut pretium libero,<br/> vitae
            imperdiet purus. Sed sed <br/>tincidunt velit. Aliquam vitae <br/>ipsum
            molestie, vehicula nisi <br/>quis, finibus leo.
          </p>

          <Link href="/about"><button className="text-xl text-orange-400 pt-6 lg:pt-12">More..</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Survey;
