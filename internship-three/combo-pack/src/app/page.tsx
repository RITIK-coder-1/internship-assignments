"use client"

import Image from "next/image"
import Hero from "../components/sections/Hero"
import Project from "../components/sections/Project"
import Courses from "../components/sections/Courses"

export default function Home() {
  
  return (
    <main>
      <Hero />
      <Project />
      <Courses />
    </main>  
  );
}
