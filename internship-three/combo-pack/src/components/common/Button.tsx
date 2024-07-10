import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ width, className, content }) => {
  return (
    <button
      className={`bg-purple-600 text-white rounded-[11px] h-[39px] font-semibold text-[16px] transform hover:scale-105 transition-transform duration-300 focus:outline-none transition duration-300 ease-in-out ${className}`}
    >
      {content}
    </button>
  );
};

export default Button;
