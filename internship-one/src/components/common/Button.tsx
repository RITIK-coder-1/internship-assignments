// This is the common button component

import React from 'react';

// declaring type safety props for the button

interface ButtonProps {
  height: string;
  width: string;
  content: string;
  bgColor: string;
  color?: string;
  radius?: string;
  className?: string;
}

/**
 * Button component for displaying interactive buttons.
 * @param {ButtonProps} props - Component props.
 * @returns {JSX.Element} - Rendered JSX element for the button.
 */

const Button: React.FC<ButtonProps> = ({ height, width, content, bgColor, color, radius, className }) => {
  return (
    <button
      style={{
        height,
        width,
        backgroundColor: bgColor,
        borderRadius: radius,
        color,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
      }}
      className={className}
    >
      {content}
    </button>
  );
}

export default Button;
