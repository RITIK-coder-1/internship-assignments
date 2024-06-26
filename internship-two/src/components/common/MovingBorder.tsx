"use client"

import React from 'react';
import styled, { keyframes } from 'styled-components';

const changeBackgroundColor = keyframes`
  0% {
    background-color: #f3ec78;
  }
  25% {
    background-color: #af4261;
  }
  50% {
    background-color: #00c3ff;
  }
  75% {
    background-color: #ffc837;
  }
  100% {
    background-color: #f3ec78; /* Back to the initial color to create a loop */
  }
`;

const ColorChangingDiv = styled.div`
  width: 300px;
  height: 60px;
  background-color: #f3ec78; /* Initial background color */
  animation: ${changeBackgroundColor} 2s linear infinite; /* Change color over 10 seconds */
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1px;
  border-radius: 8px;
`;

const NestedDiv = styled.div`
  width: 100%;
  height: 100%;
  background-color: #0F0F0F;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  font-size: 24px;
  transition: 500ms;
  cursor: pointer;
  border-radius: 8px;
  padding-top: 12px;
  padding-bottom: 12px;
`;

const App = ({content}) => {
  return (
    <ColorChangingDiv>
      <NestedDiv className="hover:bg-[#111827]">
        {content}
      </NestedDiv>
    </ColorChangingDiv>
  );
}

export default App;
