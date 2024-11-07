"use client";
import React from "react";
import Typewriter from "@/components/Typewriter"; // Import the Typewriter component
import FadeIn from "@/components/FadeIn"; // Import FadeIn component
import Image from "next/image"
export default function Home() {
  return (
   <div className="hero-background">
  <FadeIn>
    <div className="hero-container hero-container-lg">
      <Image
        src="/ahsan.png"
        alt="pf"
        className="profile-image profile-image-lg"
      />
      
      <div className="text-container text-container-lg">
        <h1 className="heading-main heading-main-lg">
          Hey there, {"I'm Ahsan"}
        </h1>

        <h2 className="subheading subheading-lg">
          {"I'm a"} <Typewriter />
        </h2>

        <h3 className="description description-lg">
          I will help you out to transform
          <br /> your boring website into a cool <br /> and exciting one.
        </h3>
        
        <FadeIn delay={300}>
          <div className="button-container button-container-lg">
            <button  ="/contact" className="contact-button">
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
