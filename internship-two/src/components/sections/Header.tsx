import Image from "next/image" // image from next
import Link from "next/link" // link from next
import Button from "../common/Button" // imported the common button

// This Header component is common to the entire layout of the webpage

export default function Header() {
  return (
    <header className="w-full h-auto py-4 md:px-[3.2rem] flex justify-center items-center fixed z-[100] transition-all duration-300 bg-[#0F0F0F]" style={{boxShadow: "rgba(102, 116, 204, 0.25) 0px 4px 10px"}}>
      
      {/* Navigation container with flexbox properties and inner spacing */}
      <nav className="w-[95%] h-[45px] max-w-maxScreen flex justify-between items-center">
        
        {/* Logo link container */}
        <a className="flex justify-start items-center">
          <Image
            src="https://www.codehelp.in/_next/image?url=%2Fassets%2FCommon%2FWhitelogoGIF.gif&w=256&q=75" // URL of the logo image
            alt="Code Help Logo" // Alt text for the logo image
            width={250} // Width of the image
            height={250} // Height of the image
            unoptimized
          /> {/* It is an animated image, so it won't be optimised. It's better to explicitly define it. */}
        </a>
        
        {/* Navigation links container (hidden on smaller screens, visible on large screens) */}
        <ul className="lg:flex justify-center items-center gap-x-6 hidden">
          <li className="py-5 relative hover:text-[#6674CC] transition-all duration-150 font-semibold text-indigo-500 cursor-pointer">Home</li>
          <li className="py-5 relative hover:text-[#6674CC] transition-all duration-150 text-white w-auto h-auto cursor-pointer">
              <Link href="/demo">Courses</Link> {/* Just for demo */}
          </li>
          <li className="py-5 relative hover:text-[#6674CC] transition-all duration-150 text-white w-auto h-auto cursor-pointer flex items-end gap-3">
            <span>Explore</span>
            <span>&#9660;</span> {/* The arrow symbol */}
          </li>
          <li className="py-5 relative hover:text-[#6674CC] transition-all duration-150 text-white w-auto h-auto cursor-pointer">Contact</li>
          <li className="py-5 relative hover:text-[#6674CC] transition-all duration-150 text-white w-auto h-auto cursor-pointer">Articles</li>
          <li className="py-5 relative hover:text-[#6674CC] transition-all duration-150 text-white w-auto h-auto cursor-pointer">Tutorials</li>
        </ul>
        
        {/* Get Started button container (hidden on smaller screens, visible on large screens) */}
        <div className="lg:flex items-center hidden gap-x-2">
          <Button content="Get Started" bgColor="#6674CC" hoverBgColor="#515DB1"/>
        </div>
        
        {/* Hamburger menu icon for small screens */}
        <div className="relative flex h-[52px] w-[66px] cursor-pointer flex-col items-end justify-between p-[0.8rem] lg:hidden transparent">
          <span className="w-10 rounded-md py-[2px] bg-black dark:bg-[#fff] transition-all duration-300"></span>
          <span className="w-8 py-[2px] rounded-md bg-black dark:bg-[#fff] transition-all duration-300"></span>
          <span className="w-6 rounded-md bg-black dark:bg-[#fff] py-[2px] transition-all duration-300"></span>
        </div>
      </nav>
    </header>
  );
}
