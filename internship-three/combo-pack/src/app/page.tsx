"use client"

import Image from "next/image"
import Hero from "../components/sections/Hero"
import { useState, useEffect } from "react";

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
      document.body.classList.remove("light-mode");
    } else {
      document.body.classList.add("light-mode");
      document.body.classList.remove("dark-mode");
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  return (
    <main>
      <Hero darkMode={darkMode} />
    </main>  
  );
}
