import React from "react";
import Image from "next/image";
import Link from "next/link";

import AboutImage from "../public/assets/projects/aboutImage.jpg";

const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#27a2bd]">
            About
          </p>
          <h2 className="py-4">Who I am</h2>
          <p className="py-2 text-gray-600">
            I have 2 years of experience building and designing software.
            Currently, I love to work on web applications using technologies
            like React, Tailwind, Next JS. Building different types of web
            applications has helped me gain knowledge in many of today&apos;s
            popular libraries such as Tailwind and NextJS.
          </p>
          <Link href="/#projects">
            <p className="py-2 text-gray-600 underline cursor-pointer">
              Check out some of my latest projects.
            </p>
          </Link>
        </div>
        <div className="w-full h-full m-auto shadow-gray-400 shadow-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <Image
            className="rounded-xl"
            src={AboutImage}
            width={320}
            height={320}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default About;
