import React from 'react'; // Importing React

// This is a common button prop

// Creating the props interface using TypeScript
interface ButtonProps {
  bgColor: string;
  borderColor?: string;
  content: string;
  className?: string;
}

// Button component definition using React.FC and the ButtonProps interface
const Button: React.FC<ButtonProps> = ({ bgColor, borderColor, content, className }) => {
  return (
    <button 
      className={`text-white flex justify-center items-center py-3 rounded-full font-medium text-md transition-all duration-150 w-[8.1rem] ${className}`} // Conditional className inclusion
      style={{ backgroundColor: bgColor, borderColor: borderColor || 'transparent' }} // Inline styles for background and border color
    >
      {content} {/* Button content */}
    </button>
  );
}

export default Button; // Exporting the Button component
