'use client';

// This is the common vertical carousel with its respective settings

import dynamic from 'next/dynamic';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { FaRocket } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";
import { IoMdBookmarks } from "react-icons/io";

// Dynamically import the Slider component
const Slider = dynamic(() => import('react-slick'), { ssr: false });

const settings = {
  infinite: true,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  cssEase: 'linear',
  arrows: false,
  dots: false,
  vertical: true,
  verticalSwiping: true,
};

export default function Carousel() {
  return (
    <Slider {...settings} className="w-full h-full">
      <div className="border-b border-[#222429] p-12">
        <div className="w-14 h-14 bg-[#0F0F0F] rounded-full flex justify-center items-center">
          <FaRocket className="w-5 h-5 text-[#24BF5A] my-2" id="rocket"/>
        </div>
        <h3 className="text-white text-xl font-semibold my-2 text-start">Grow: Elevate Your Career</h3>
        <p className="text-[#808E99] font-normal text-center text-start my-2">
          Climb with Codehelp&apos;s Grow. Upskill through Codehelp and <br /> Achieve Career Success
        </p>
      </div>
      <div className="border-b border-[#222429] p-10">
        <div className="w-14 h-14 bg-[#0F0F0F] rounded-full flex justify-center items-center">
          <SlCalender className="w-5 h-5 text-[#EF476F] my-2" />
        </div>
        <h3 className="text-white text-xl font-semibold my-2 text-start">Hands-on Learning Experience</h3>
        <p className="text-[#808E99] font-normal text-center text-start my-2">
          Emphasize that your courses are crafted by industry <br /> experts to ensure high-quality, up-to-date content.
        </p>
      </div>
      <div className="border-b border-[#222429] p-10">
        <div className="w-14 h-14 bg-[#0F0F0F] rounded-full flex justify-center items-center">
          <IoMdBookmarks className="w-5 h-5 text-[#FB9014] my-2" />
        </div>
        <h3 className="text-white text-xl font-semibold my-2 text-start">Apply: Build, Play, Create</h3>
        <p className="text-[#808E99] font-normal text-center text-start my-2">
          Bring ideas to life in Codehelp&apos;s Apply. Build Projects, <br /> Play in boot playgrounds, all in your browser.
        </p>
      </div>
    </Slider>
  );
}
