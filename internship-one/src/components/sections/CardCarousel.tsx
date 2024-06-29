'use client';

// Imported all the dependencies
import dynamic from 'next/dynamic';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image" // image from next

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
    <div className="bg-[#020817]">
      <Slider {...settings}>
        {/* Each image wrapped in a div with padding */}
        <div className="px-2 bg-[#020817]">
          <Image src="/images/google.png" alt="Google Logo" width={272} height={48} />
        </div>
        <div className="px-2 bg-[#020817]">
          <Image src="/images/airbnb.png" alt="Airbnb Logo" width={272} height={48} />
        </div>
        <div className="px-2 bg-[#020817]">
          <Image src="/images/mail.png" alt="Mail Logo" width={272} height={48} />
        </div>
        <div className="px-2 bg-[#020817]">
          <Image src="/images/Spotify.png" alt="Spotify Logo" width={272} height={48} />
        </div>
        <div className="px-2 bg-[#020817]">
          <Image src="/images/mashable.png" alt="Mashable Logo" width={272} height={48} />
        </div>
        <div className="px-2 bg-[#020817]">
          <Image src="/images/MS.png" alt="Microsoft Logo" width={272} height={48} />
        </div>
      </Slider>
    </div>
  );
}
