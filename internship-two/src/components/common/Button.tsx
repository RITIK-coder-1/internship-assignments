"use client"

import React from 'react'; // Importing React

// Creating the props interface using TypeScript
interface ButtonProps {
  bgColor?: string;
  borderColor?: string;
  content: string;
  hoverBgColor?: string;
  className?: string;
}

// Button component definition using React.FC and the ButtonProps interface
const Button: React.FC<ButtonProps> = ({ bgColor = 'transparent', borderColor = 'transparent', content, hoverBgColor = bgColor, className }) => {
  return (
    <button 
      className={`text-white flex justify-center items-center py-3 rounded-full font-medium text-md transition-all duration-150 w-[8.1rem] ${className}`}
      style={{ backgroundColor: bgColor, borderColor: borderColor }}
      onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = hoverBgColor)}
      onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = bgColor)}
    > {/* Tailwind wasn't recognising the hover effect dynamically, so I had to include it using the JS event object */}
      {content} {/* Button content */}
    </button>
  );
}

export default Button; // Exporting the Button component
