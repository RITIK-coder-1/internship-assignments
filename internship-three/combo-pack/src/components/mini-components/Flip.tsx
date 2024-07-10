import React from "react";
import { FlipWords } from "../ui/flip-words";

export default function Flip() {
  const words = ["6 End-To-End Data Engineering Projects", "In-Depth Videos", "Guided Notes", "eBooks for Interview Prep", "And, much more..."];

  return (
    <div className="text-3xl font-normal text-neutral-600 dark:text-neutral-400 flex gap-2 flex-col">
        You will get access to: <br />
        <FlipWords words={words} /> 
    </div>
  );
}
