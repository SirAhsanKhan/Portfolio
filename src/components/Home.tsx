"use client";
import React from "react";
import Typewriter from "@/components/Typewriter"; // Import the Typewriter component
import FadeIn from "@/components/FadeIn"; // Import FadeIn component
import Image from "next/image"
export default function Home() {
  return (
    <div className="bg-gradient-to-b from-[#1a2335] to-[#060338] h-screen">
      <FadeIn> {/* Wrap the hero section with FadeIn component */}
        <div className="flex flex-col md:flex-row items-center justify-around pt-28 px-5 md:px-20">
          <Image
          
            src="/ahsan.png"
            alt="pf"
            className="h-48 w-48 md:h-72 md:w-72 rounded-full shadow-lg bg-transparent mb-5 md:mb-0"
          />
          
          <div className="text-center md:text-right md:max-w-md">
            <h1 className="text-3xl md:text-4xl text-[#fbbf24] font-bold">
              Hey there, {"I'm Ahsan"}
            </h1>

            <h2 className="text-[#fbbf24] font-bold text-2xl md:text-3xl mt-5">
             {"I'm a"} <Typewriter /> {/* Dynamically typed words */}
            </h2>

            <h3 className="text-[#fbbf24] font-bold text-lg md:text-xl mt-5">
              I will help you out to transform
              <br /> your boring website into a cool <br /> and exciting one.
            </h3>
            
            {/* Contact Button directly below the text */}
            <FadeIn delay={300}>
            <div className="mt-8 md:mt-10 flex justify-center md:justify-end">
              <button className="bg-[#fbbf24] text-[#1f2937] font-semibold hover:bg-[#e5e7eb] transition duration-300 px-10 py-3 rounded-full">
                Contact Me
              </button>
            </div>
            </FadeIn>
          </div>
        </div>
      </FadeIn>
    </div>
  );
}
