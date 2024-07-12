"use client";
import React from "react";
import Image from "next/image";
import { PinContainer } from "../ui/3d-pin";

interface PinProps {
  className?: string;
  heading: string;
  src: string;
}

const Pin: React.FC<PinProps> = ({ className, heading, src }) => {
  return (
    <div className={`h-[23rem] w-[28%] flex items-center justify-center ${className}`}>
      <PinContainer title="Project Description">
        <div className="flex basis-full flex-col p-4 tracking-tight text-white sm:basis-1/2 w-[20rem] h-[20rem] justify-between rounded-xl shadow-2xl bg-gradient-to-br from-gray-800 to-gray-900 hover:from-gray-700 hover:to-gray-800 transition-all duration-300 ease-in-out transform hover:scale-105">
          <h3 className="max-w-xs pb-2 m-0 font-bold text-xl text-purple-300 transition-colors duration-300 hover:text-purple-200">
            {heading}
          </h3>
          <div className="relative w-full h-[80%] rounded-xl overflow-hidden shadow-2xl">
            <Image src={src} fill alt="image" className="transition-transform duration-300 ease-in-out hover:scale-110" />
          </div>
        </div>
      </PinContainer>
    </div>
  );
}

export default Pin;
