import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import { Icon } from '@iconify/react';

const Button = styled.button`
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  background-color: #d4af37;
  color: #000;
  border: none;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  cursor: pointer;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out;
  opacity: 0;
  transform: translateY(20px);
  z-index: 1000;

  ${({ isVisible }) =>
    isVisible &&
    css`
      opacity: 1;
      transform: translateY(0);
    `}

  &:hover {
    background-color: #b38f1a;
  }
`;

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <Button isVisible={isVisible} onClick={scrollToTop} aria-label="Go to top">
      <Icon icon="mdi:arrow-up" />
    </Button>
  );
};

export default BackToTopButton;

