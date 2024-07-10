"use client";
import { TextGenerateEffect } from "../ui/text-generate-effect";

const words = `Zero To Hero`;

export default function TextGenerate() {
  return <TextGenerateEffect words={words} />;
}
