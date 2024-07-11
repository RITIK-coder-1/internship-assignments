import React from "react";
import { FlipWords } from "../ui/flip-words";

export default function Flip() {
  const words = [
    "Data Engineering Projects",
    "In-Depth Videos",
    "Guided Notes",
    "eBooks for Interview Prep",
    "And, much more..."
  ];

  return (
    <div className="text-3xl font-normal text-neutral-600 dark:text-neutral-400 flex flex-col items-center">
      <p className="mb-4 text-center text-xl md:text-3xl">You will get access to:</p>
      <div className="flex flex-col items-center">
        <FlipWords words={words} className="text-neutral-900 dark:text-neutral-400 text-xl md:text-7xl" />
      </div>
    </div>
  );
}
