import Hero from "../components/sections/Hero" // imported the hero section 
import CardCarousel from "../components/sections/CardCarousel" // imported the card section
import Feature from "../components/sections/Feature" // imported the Feature section
import Quote from "../components/sections/Quote" // imported the Feature section
import Circle from "../components/sections/Circle" // imported the Feature section
import Testimonial from "../components/sections/Testimonial" // imported the Testimonial section
import Price from "../components/sections/Price" // imported the Testimonial section
import Questions from "../components/sections/Questions" // imported the Testimonial section
import Start from "../components/sections/Start" // imported the start component
import Footer from "../components/sections/Footer" // imported the Testimonial section

export default function Home() {
  return (
    <>
    {/* Main section of the home page --> */}
      <main>
        <Hero /> {/* The hero section of the page */}
        <CardCarousel /> {/* The card section of the page */}
        <Feature /> {/* The feature section of the page */}
        <Quote /> {/* The quote section of the page */}
        <Circle /> {/* The circle section of the page */}
        <Testimonial /> {/* The testimonial section of the page */}
        <Price /> {/* The testimonial section of the page */}
        <Questions /> {/* The testimonial section of the page */}
        <Start /> {/* the start component */}
      </main>
    </>
  );
}
