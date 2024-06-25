// This is the hero section of the landing page

import React from 'react';
import Button from "../common/Button"; // Imported the button component
import Heading from "../common/Heading" // Imported the common heading component

/**
 * Hero component that is the main highlight of the landing page.
 * Includes a title, introductory text, call-to-action buttons, and a prominent hero image.
 * The layout is responsive, adjusting the placement and size of elements for different screen sizes.
 * 
 * @returns {JSX.Element} Rendered JSX element for the hero section.
 */


export default function Hero() {
  return (
    <>
      <section className="w-screen h-[1023px] flex flex-col justify-center items-start md:items-center gap-24 md:gap-5 px-2">
        {/* Main container for the hero section */}
        
        <div className="w-5/6 h-[240px] flex flex-col justify-center items-start md:items-center gap-3">
          {/* Container for the text and button elements */}
          
          <Heading headingContent="Nextbase Ultimate Landing Page" paraContent1="Welcome to Nextbase Ultimate Landing Page: Your Gateway to Innovation. Discover the Future of" paraContent2="Excellence and Elevate Your Experience." buttonContent="&#9733;  Introducing ->"/>
          
          <div className="flex flex-col md:flex-row gap-3 mt-2 justify-between">
            {/* Button container for the responsive layout */}
            
            <Button 
              height="40px" 
              width="200px"
              bgColor="white" 
              content="Log in ->" 
              radius="5px" 
              className="w-[95vw] md:w-[200px]" 
            />
            <Button 
              height="40px" 
              width="200px"
              bgColor="#1E293B" 
              content="Learn more >" 
              radius="5px" 
              color="white" 
              className="w-[95vw] md:w-[200px]" 
            />
          </div>
        </div>
        
        <img 
          src="/images/hero.png" 
          alt="hero image" 
          className="w-5/2 h-[514px]" 
        />
        {/* Image part */}
        
      </section>
    </>
  );
}
