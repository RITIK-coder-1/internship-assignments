"use client"

// This is the circle that is expanding and contracting in the background of the followers section, touching a lot more sections.

import { motion } from 'framer-motion';
import styled from '@emotion/styled';

// Styled components for the container and circles
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 200px;
  height: 200px;
  z-index: 2;
  filter: blur(1px)
`;

const Circle = styled(motion.div)`
  position: absolute;
  width: 500px;
  height: 500px;
  border: none;
  border-radius: 50%;
  background: transparent;
  top: 50px;
  `;

const ConcentricCircles: React.FC = () => {
  return (
    <Container>
      <Circle
        animate={{
          scale: [1, 1.25, 1], // Scale animation from 1 to 1.2 and back to 1
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        style={{ borderColor: '#9ca3af', backgroundColor: "rgba(8, 8, 8, 0.9)", zIndex: "5" }}
      />
      <Circle
        animate={{
          scale: [1.25, 1.8, 1.25], // Scale animation from 1 to 1.4 and back to 1
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 0.5, // Delay the animation start by 0.5 seconds
        }}
        style={{ borderColor: '#9ca3af', backgroundColor: "rgba(11, 11, 11, 0.3)", zIndex: "3" }}
      />
      <Circle
        animate={{
          scale: [1.8, 2, 1.8], // Scale animation from 1 to 1.6 and back to 1
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 1, // Delay the animation start by 1 second
        }}
        style={{ borderColor: '#9ca3af', backgroundColor: "rgba(10, 10, 10, 0.5)", zIndex: "1" }}
      />
    </Container>
  );
};

export default ConcentricCircles;
