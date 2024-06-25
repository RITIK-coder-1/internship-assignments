/**
 * Testimonial component that shows the list of user reviews.
 * @returns {JSX.Element} Rendered JSX element for the header.
 */

'use client';

// Imported all the dependencies
import dynamic from 'next/dynamic';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import User from "../common/User"; // imported users

// Dynamically imported the Slider component
const Slider = dynamic(() => import('react-slick'), { ssr: false });

// Settings for the animation
const settings = {
  infinite: true, // it is infinite
  speed: 5000, // Control the speed of the transition
  slidesToShow: 2,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 0, // Set to 0 to prevent pauses between slides
  cssEase: 'linear', // Ensure smooth transition
  arrows: false, // Hide next/previous arrows
  dots: false, // Hide pagination dots
};

export default function Testimonial() {
  return (
    <section className="py-20 bg-[#1E293B] flex flex-col gap-2">
      <h2 className="text-white text-center font-bold text-4xl font-sans">
        Don&apos;t Take Our Word For It
      </h2>
      <p className="text-center text-[#94A3B8] text-xl">
        Hear what our satisfied customers have to say about Nextbase
      </p>
      <div className="mb-10 mt-20">
        <Slider {...settings}>
          <div className="px-2">
            <User marg="100px" />
            <User />
          </div>
          <div className="px-2">
            <User />
            <User marg="100px" />
          </div>
        </Slider>
      </div>
    </section>
  );
}
