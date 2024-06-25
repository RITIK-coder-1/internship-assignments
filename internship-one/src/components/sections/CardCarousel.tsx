/**
 * Company component that shows the list of connected companies.
 * Includes Google, Microsoft, Spotify, etc.
 * @returns {JSX.Element} Rendered JSX element for the header.
 */

'use client';

// Imported all the dependencies
import dynamic from 'next/dynamic';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

// Dynamically imported the Slider component
const Slider = dynamic(() => import('react-slick'), { ssr: false });

// Settings for the animation
const settings = {
  infinite: true, // it is infinite
  speed: 5000, // Control the speed of the transition
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 0, // Set to 0 to prevent pauses between slides
  cssEase: 'linear', // Ensure smooth transition
  arrows: false, // Hide next/previous arrows
  dots: false, // Hide pagination dots
};

export default function CardCarousel() {
  return (
    <Slider {...settings}>
      {/* Each image wrapped in a div with padding */}
      <div className="px-2">
        <img src="/images/google.png" alt="Google Logo" className="w-68 h-12" />
      </div>
      <div className="px-2">
        <img src="/images/airbnb.png" alt="Airbnb Logo" className="w-68 h-12" />
      </div>
      <div className="px-2">
        <img src="/images/mail.png" alt="Mail Logo" className="w-68 h-12" />
      </div>
      <div className="px-2">
        <img src="/images/Spotify.png" alt="Spotify Logo" className="w-68 h-12" />
      </div>
      <div className="px-2">
        <img src="/images/mashable.png" alt="Mashable Logo" className="w-68 h-12" />
      </div>
      <div className="px-2">
        <img src="/images/MS.png" alt="Microsoft Logo" className="w-68 h-12" />
      </div>
    </Slider>
  );
}
