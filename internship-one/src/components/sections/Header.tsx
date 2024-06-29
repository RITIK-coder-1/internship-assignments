// Common header

"use client" // use client because I'm using React Hooks

import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx"; // imported the hamburger menu bar from react icons
import { FaDatabase } from "react-icons/fa"; // imported the base image from react icons
import { FaRegMoon } from "react-icons/fa"; // imported the moon icon
import { IoSunnyOutline, IoClose } from "react-icons/io5"; // imported the sun and close icons
import Button from "../common/Button"; // imported the button component
import Link from 'next/link'; // Imported the Link component from next/link to check the demo page

/**
 * Header component that is common to the entire layout of the website.
 * Includes a navigation bar with title, links, dark/light mode toggle icons, and a login button.
 * @returns {JSX.Element} Rendered JSX element for the header.
 */

export default function Header() {
  const [showHamburger, setShowHamburger] = useState(false); // showHamburger says if it should be shown or not

  // Toggle function for hamburger menu
  const toggleHamburger = () => {
    setShowHamburger(!showHamburger); // once this function is invoked, change the hamburger state
  };

  // Function to close hamburger menu
  const closeHamburger = () => {
    setShowHamburger(false); 
  };

  return (
    <>
      {/* Header Element */}
      <header className="h-[54px] w-screen bg-[#020817]">
        
        {/* Navigation Bar */}
        <nav className="h-full w-full border-b border-b-[#1E293B] flex justify-between gap-10">
          
          {/* Container for Title and Image */}
          <div className="flex gap-2 justify-start items-center w-[140px] h-full none pl-3 md:pl-2 relative">
            {/* Hamburger Menu Icon */}
            <div className="flex items-center">
              <RxHamburgerMenu
                className="text-white w-[32px] h-[32px] cursor-pointer md:hidden"
                onClick={toggleHamburger}
              />
            </div>
            
            {/* Logo and Title */}
            <div className="hidden md:flex justify-center items-center gap-2 bg-[#020817] z-10">
              <FaDatabase className="text-white" />
              <span className="text-white font-semibold">Nextbase</span>
            </div>
            
            {/* Hamburger Menu Content */}
            <div className={`h-screen w-[200px] text-black border border-[#1E293B] absolute top-0 left-0 bg-[#020817] z-30 ${showHamburger ? 'visible' : 'hidden'}`}>
              {/* Close Button */}
              <div className="flex justify-end p-2">
                <IoClose className="text-white cursor-pointer" onClick={closeHamburger} />
              </div>
              
              {/* Logo and Title */}
              <div className="bg-[#020817] p-3 flex gap-1 justify-start items-center w-full">
                <FaDatabase className="text-white" />
                <span className="text-white font-semibold">Nextbase</span>
              </div>
              
              {/* Navigation Links */}
              <ul className="flex flex-col gap-3 font-sans font-semibold text-[15px] justify-center items-start text-white p-3">
                <li><a href="/" onClick={closeHamburger}>Docs</a></li>
                <li><a href="/" onClick={closeHamburger}>Blog</a></li>
                <li><a href="/" onClick={closeHamburger}>Changeblog</a></li>
                <li><a href="/" onClick={closeHamburger}>Roadmap</a></li>
              </ul>
            </div>
          </div>
          
          {/* Container for Navigation Links */}
          <div className="hidden md:flex justify-center items-center">
            <ul className="flex gap-7 font-sans font-semibold text-[15px] justify-center items-center text-[#94A3B8]">
              <Link href="/demo">
                  Docs
              </Link>
              <li><a href="/">Blog</a></li>
              <li><a href="/">Changeblog</a></li>
              <li><a href="/">Roadmap</a></li>
            </ul>
          </div>
          
          {/* Container for Dark/Light Mode Toggle and Login */}
          <div className="flex justify-center items-center pr-2 pr-10 md:pr-5 gap-3">
            <div className="flex justify-center items-center bg-[#020817] z-10 gap-7 cursor-pointer">
              <IoSunnyOutline className="text-white w-[24px] h-[24px] bg-[#020817] cursor-pointer absolute"/>
              <FaRegMoon className="text-white w-[24px] h-[24px] bg-[#020817] z-20 cursor-pointer"/>
            </div>
            
            {/* Login Button - Hidden on smaller screens */}
            <div className="h-[40px] w-[140px] md:hidden" style={{ display: 'none' }}>
              <Button 
                height="100%" 
                width="100%" 
                bgColor="white" 
                content="Log in ->" 
                radius="5px"
              />
            </div>
            
            {/* Login Button - Visible on larger screens */}
            <div className="h-[40px] w-[140px] md:flex hidden">
              <Button 
                height="100%" 
                width="100%" 
                bgColor="white" 
                content="Log in ->" 
                radius="5px"
              />
            </div>
          </div>
          
        </nav>
        
      </header>
    </>
  );
}
