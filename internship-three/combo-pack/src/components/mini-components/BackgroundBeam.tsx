"use client";
import React from "react";
import { BackgroundBeams } from "../ui/background-beams";

export default function BackgroundBeam() {
  return (
    <div className="absolute z-0 blur-[1px] h-full w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
      <BackgroundBeams />
    </div>
  );
}
