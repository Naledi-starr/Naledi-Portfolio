import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const CTASection = styled.section`
  background-color: #000;
  color: #fff;
  padding: 4rem 2rem;
  text-align: center;
  border-radius: 10px;
  margin: 2rem auto;
  max-width: 900px;
`;

const CTATitle = styled.h2`
  font-family: 'Playfair Display', serif;
  font-size: 2.5rem;
  margin-bottom: 1rem;
`;

const CTASubtitle = styled.p`
  font-family: 'Open Sans', sans-serif;
  font-size: 1.2rem;
  margin-bottom: 2rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

const CTAButton = styled(Link)`
  background-color: #d4af37;
  color: #000;
  padding: 0.75rem 2rem;
  border-radius: 25px;
  font-family: 'Open Sans', sans-serif;
  font-weight: 700;
  text-decoration: none;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #b38f1a;
  }
`;

const CallToAction = () => {
  return (
    <CTASection>
      <CTATitle>Let's Build Something Great Together</CTATitle>
      <CTASubtitle>I'm available for freelance projects, collaborations, and full-time opportunities.</CTASubtitle>
      <CTAButton to="/contact">Get in Touch</CTAButton>
    </CTASection>
  );
};

export default CallToAction;
