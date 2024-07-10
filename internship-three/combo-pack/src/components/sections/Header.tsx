"use client";
import Link from 'next/link';
import Image from 'next/image';
import { FaRegMoon } from 'react-icons/fa';
import { IoSunnyOutline } from 'react-icons/io5';
import { useState, useEffect } from 'react';
import Nav from './Nav';

const Header: React.FC = () => {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-mode');
      document.body.classList.remove('light-mode');
    } else {
      document.body.classList.add('light-mode');
      document.body.classList.remove('dark-mode');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <header className="w-full h-20">
      <nav className="w-full flex justify-between border-b border-slate-500 h-full">
        <div className="flex items-center justify-start gap-12 grow pl-12">
          <div className="flex items-center">
            <Image
              src="https://datavidhyav2.netlify.app/HomeIcons/logo/vidyalogo.svg"
              width={111}
              height={111}
              alt="Logo Image"
              className="transform hover:scale-110 transition-transform duration-300"
            />
          </div>
          <Nav darkMode={darkMode}/>
        </div>
        <div className="flex items-center gap-5 pr-12">
          <div className="flex justify-between items-center gap-3">
            <FaRegMoon style={{ width: '24px', height: '24px', color: darkMode ? '#FB7185' : 'grey' }} />
            <div className="w-12 cursor-pointer h-5 relative" onClick={toggleDarkMode}>
              <div className={`absolute z-10 size-6 rounded-full bg-rose-400 w-6 h-6 bottom-1 mb-[-6px] transform ${darkMode ? 'translate-x-6' : 'translate-x-0'} transition-transform duration-300`}></div>
              <div className="absolute z-0 h-5 w-12 rounded-[11px] bg-[#5B5C5E]"></div>
            </div>
            <IoSunnyOutline style={{ width: '24px', height: '24px', color: darkMode ? 'grey' : '#FB7185' }} />
          </div>
          <button className="bg-purple-600 text-white rounded-[11px] h-[39px] w-[139px] font-semibold text-[16px] transform hover:scale-105 transition-transform duration-300">
            Login
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
