"use client" // because I am using framer motion, I have to use client

// This is the glowing effect behind the title of the page

import React from 'react';
import { motion } from 'framer-motion';

const Glowing: React.FC = () => {
  return (
    <div className="relative flex items-start justify-center z-10 left-2 md:left-20">
      <div className="bg-blue-900 w-10 h-5/6 z-0 blur-2xl absolute border border-solid border-red-900" /> {/* THis div is for providing the background shine effect behind the animation */}
      <motion.div
        className="absolute w-[0.1rem] bg-[#6674CC] rounded-full z-10"
        initial={{ height: 150 }}
        animate={{ height: [150, 450, 150] }}
        transition={{ duration: 10, repeat: Infinity, repeatType: "mirror" }}
        style={{ boxShadow: "0px 0px 20px 2px  #6674CC", transformOrigin: 'top' }}
      />
    </div>
  );
};

export default Glowing;
