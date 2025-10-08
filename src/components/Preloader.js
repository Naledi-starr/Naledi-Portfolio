import React from 'react';
import styled, { keyframes } from 'styled-components';

const PreloaderContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
`;

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const Spinner = styled.div`
  border: 4px solid rgba(255, 255, 255, 0.2);
  border-left-color: #d4af37; /* Gold accent */
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: ${spin} 1s linear infinite;
`;

const Preloader = () => {
  return (
    <PreloaderContainer>
      <Spinner />
    </PreloaderContainer>
  );
};

export default Preloader;