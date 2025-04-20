import React from "react";
import HeroImg from "../../assets/illustration_hero.png";
export default function HeroSection() {
  return (
    <div className=" max-w-9/10 md:max-w-8/10  flex gap-10  items-center flex-col-reverse  md:flex-row  mx-auto lg:justify-between">
      <div className="md:w-1/2 lg:max-w-[442px]">
        <h1 className="hidden md:block  font-black text-4xl lg:text-5xl">
          Navigating the digital landscape for success
        </h1>
        <p className="my-3.5">
          Our digital marketing agency helps businesses grow and succeed online
          through a range of services including SEO, PPC, social media
          marketing, and content creation.
        </p>
        <button className=" btn px-6 py-4 hover:text-black hover:bg-white ">
          Book a consultation
        </button>
      </div>

      <div className="md:w-1/2 lg:max-w-[442px]">
        <h1 className="text-4xl font-bold  my-8 md:hidden">
          Navigating the digital landscape for success
        </h1>
        <img src={HeroImg} className="w-full  mx-auto" alt="" />
      </div>
    </div>
  );
}
