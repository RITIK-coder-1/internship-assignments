// This is the heading that is common to a lot of sections

import React from 'react';
import Button from '../common/Button'; // Imported the Button component

// type safety props declaration -->

interface HeadingProps {
  headingContent: string;
  paraContent1: string;
  paraContent2: string;
  buttonContent: string;
}

/**
 * Common heading component used across multiple sections.
 * @param {HeadingProps} props - Component props.
 * @returns {JSX.Element} - Rendered JSX element for the heading.
 */

const Heading: React.FC<HeadingProps> = ({ headingContent, paraContent1, paraContent2, buttonContent }) => {
  return (
    <div className="w-full h-[240px] flex flex-col justify-center items-start md:items-center gap-3 pl-2 md:pl-0">
      {/* Button Component */}
      <Button
        content={buttonContent}
        color="white"
        height="32px"
        width="148px"
        radius="80px"
        bgColor="#1E293B"
      />
      {/* Heading */}
      <h1 className="text-4xl font-bold text-white font-sans">
        {headingContent}
      </h1>
      {/* Paragraphs */}
      <p className="text-[#94A3B8] text-start md:text-center">
        {paraContent1}
      </p>
      <p className="text-[#94A3B8] text-start md:text-center">
        {paraContent2}
      </p>
    </div>
  );
}

export default Heading;
