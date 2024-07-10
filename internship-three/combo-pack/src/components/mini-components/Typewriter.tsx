"use client";
import { TypewriterEffectSmooth } from "../ui/typewriter-effect";
export default function Typewriter() {
  const words = [
    {
      text: "Combo",
    },
    {
      text: "Pack.",
    }
  ];
  return (
    <div className="flex flex-col items-center justify-center">
      <TypewriterEffectSmooth words={words} />
    </div>
  );
}
