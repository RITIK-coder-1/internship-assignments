"use client" 

// This is the glowing effect behind the title of the page

import React from 'react';
import { motion } from 'framer-motion';

const Glowing = () => {
  return (
    <div className="relative flex items-center justify-center h-32 ml-11">
      <motion.div
        className="absolute w-1 bg-[#6674CC] rounded-full"
        initial={{ height: 150 }}
        animate={{ height: [150, 950, 150] }}
        transition={{ duration: 10, repeat: Infinity, repeatType: "mirror" }}
        style={{ boxShadow: "0 0 20px  #6674CC" }}
      />
      <h1 className="relative text-white text-4xl z-10">Title</h1>
    </div>
  );
};

export default Glowing;
