"use client";

// This is the common three-dimensional card component that gives a 3d effect on hover

import React, { useEffect, useRef } from 'react';
import './card.css'; // Imported the plain CSS file
import Button from '../Button'; // Imported the common button
import Carousel from './Carousel'
import { FaRocket } from "react-icons/fa";
import { SlGraph } from "react-icons/sl";

// defined the props in typescript

interface CardPROPS{
    title: string;
    heading1: string;
    heading2: string;
    paragraph1: string;
    paragraph2?: string;
    paragraph3?: string;
    color: string;
    glowColor: string;
    borderColor: string;
    reverse: boolean; // this is for reversing the order of the two main div elements
}

const Card: React.FC<CardPROPS> = ({title, heading1, heading2, paragraph1, paragraph2, paragraph3, paragraph4, color, glowColor, borderColor, reverse, margin}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const boundsRef = useRef<DOMRect | null>(null);

  useEffect(() => {
    const $card = cardRef.current;

    if (!$card) return;

    const rotateToMouse = (e: MouseEvent) => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;
      const bounds = boundsRef.current;

      if (!bounds) return;

      const leftX = mouseX - bounds.x;
      const topY = mouseY - bounds.y;
      const center = {
        x: leftX - bounds.width / 2,
        y: topY - bounds.height / 2,
      };
      const distance = Math.sqrt(center.x ** 2 + center.y ** 2);

      $card.style.transform = `
        scale3d(1.07, 1.07, 1.07)
        rotate3d(
          ${center.y / 100},
          ${-center.x / 100},
          0,
          ${Math.log(distance) * 2}deg
        )
      `;

      const glow = $card.querySelector('.glow') as HTMLElement;
      if (glow) {
        glow.style.backgroundImage = `
          radial-gradient(
            circle at
            ${center.x * 2 + bounds.width/2}px
            ${center.y * 2 + bounds.width/2}px,
            ${glowColor},
            transparent
          )
        `;
      }

      // Determine which border(s) to change
      const border_Color = borderColor;
      const transparent = 'transparent';
      const glowBorderColor = borderColor; 

      if (center.x < 0 && center.y < 0) {
        // Top-left
        $card.style.borderTopColor = borderColor;
        $card.style.borderLeftColor = borderColor;
        $card.style.borderRightColor = transparent;
        $card.style.borderBottomColor = transparent;
        if (glow) {
          glow.style.borderTopColor = glowBorderColor;
          glow.style.borderLeftColor = glowBorderColor;
          glow.style.borderRightColor = transparent;
          glow.style.borderBottomColor = transparent;
        }
      } else if (center.x > 0 && center.y < 0) {
        // Top-right
        $card.style.borderTopColor = borderColor;
        $card.style.borderRightColor = borderColor;
        $card.style.borderLeftColor = transparent;
        $card.style.borderBottomColor = transparent;
        if (glow) {
          glow.style.borderTopColor = glowBorderColor;
          glow.style.borderRightColor = glowBorderColor;
          glow.style.borderLeftColor = transparent;
          glow.style.borderBottomColor = transparent;
        }
      } else if (center.x < 0 && center.y > 0) {
        // Bottom-left
        $card.style.borderBottomColor = borderColor;
        $card.style.borderLeftColor = borderColor;
        $card.style.borderTopColor = transparent;
        $card.style.borderRightColor = transparent;
        if (glow) {
          glow.style.borderBottomColor = glowBorderColor;
          glow.style.borderLeftColor = glowBorderColor;
          glow.style.borderTopColor = transparent;
          glow.style.borderRightColor = transparent;
        }
      } else if (center.x > 0 && center.y > 0) {
        // Bottom-right
        $card.style.borderBottomColor = borderColor;
        $card.style.borderRightColor = borderColor;
        $card.style.borderTopColor = transparent;
        $card.style.borderLeftColor = transparent;
        if (glow) {
          glow.style.borderBottomColor = glowBorderColor;
          glow.style.borderRightColor = glowBorderColor;
          glow.style.borderTopColor = transparent;
          glow.style.borderLeftColor = transparent;
        }
      }
    };

    const handleMouseEnter = () => {
      boundsRef.current = $card.getBoundingClientRect();
      document.addEventListener('mousemove', rotateToMouse);
    };

    const handleMouseLeave = () => {
      document.removeEventListener('mousemove', rotateToMouse);
      $card.style.transform = '';
      $card.style.background = 'transparent';
      $card.style.borderTopColor = 'transparent';
      $card.style.borderRightColor = 'transparent';
      $card.style.borderBottomColor = 'transparent';
      $card.style.borderLeftColor = 'transparent';
      const glow = $card.querySelector('.glow') as HTMLElement;
      if (glow) {
        glow.style.borderTopColor = 'transparent';
        glow.style.borderRightColor = 'transparent';
        glow.style.borderBottomColor = 'transparent';
        glow.style.borderLeftColor = 'transparent';
        glow.style.background = 'transparent';
      }
      $card.style.backgroundImage = 'none';
    };

    $card.addEventListener('mouseenter', handleMouseEnter);
    $card.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      $card.removeEventListener('mouseenter', handleMouseEnter);
      $card.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <section id="section"> {/* ID is specified so that the CSS is applied to this specific section only */}
      <div 
           className="w-20 h-20 bg-[#0F0F0F] rounded-full flex justify-center items-center"
           style={{
           position: "relative",
           left: reverse ? "40%" : "auto",
           right: reverse ? "auto" : "40%",
           top: "10px",
           zIndex: 200,
           border: `1px solid ${borderColor}`,
           }}>
           {
            reverse ?
            <SlGraph className="w-8 h-8 my-2" id="rocket" style={{
            color: `${borderColor}`}}/> :
            <FaRocket className="w-8 h-8 my-2" id="rocket" style={{
            color: `${borderColor}`}}/>
           }
          
      </div>
      <div className="card" ref={cardRef}>
        <div style={{ flexDirection: reverse ? "row-reverse" : "row" }}>
          <div id="carousel">
              <Carousel />
          </div>
          <div id="connect">
              <span style={{color: color, fontSize: "1.125rem"}}> {title} </span>
              <h2> {heading1} <br /> {heading2} </h2>
              <span style={{color: "#808E99", fontSize: "0.99rem", marginBottom: reverse ? "50px" : "20px"}}> {paragraph1} <br /> {paragraph2} <br /> {paragraph3} </span>
              <Button content="Let&apos;s Connect" bgColor="#6674CC" hoverBgColor="#515DB1" className="w-[170px] text-base font-semibold"/>
          </div>
        </div>
        <div className="glow" />
      </div>
    </section>
  );
};

export default Card;
