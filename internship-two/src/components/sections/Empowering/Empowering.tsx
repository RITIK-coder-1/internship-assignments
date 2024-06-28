"use client";

// THis is the followers card component that gives a 3d effect on hover

import React, { useEffect, useRef } from 'react';
import './empowering.css'; // Imported the plain CSS file
import Button from '../../common/Button'; // Imported the plain CSS file

const Empowering: React.FC = () => {
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
            ${center.x + bounds.width / 2}px
            ${center.y + bounds.height / 2}px,
            rgba(14, 65, 30, 0.6),
            transparent
          )
        `;
      }

      // Determine which border(s) to change
      const borderColor = '#24BF5A';
      const transparent = 'transparent';
      const glowBorderColor = '#24BF5A'; 

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
      <div className="card" ref={cardRef}>
        <div>
        <div id="empowering">
              <span style={{color: "#22BD59", fontSize: "1.125rem"}}>Who Are We</span>
              <h2>Empowering Coders, <br /> Enabling Dreams</h2>
              <span style={{color: "#808E99", fontSize: "1rem"}}>Unveil the essence of CodeHelp: a community-driven <br /> platform dedicated to empowering coders of all levels. <br /> Discover who we are and how we're shaping the future of <br /> coding education.</span>
              <Button content="Let's Connect" bgColor="#6674CC" hoverBgColor="#515DB1" className="w-[165px] text-base font-semibold mt-12"/>
          </div>
          <div id="carousel"></div>
        </div>
        <div className="glow" />
      </div>
    </section>
  );
};

export default Empowering;
