import React from 'react';
import styled from 'styled-components';
import FeaturedProjects from '../components/FeaturedProjects';

const PortfolioContainer = styled.div`
  padding: 2rem;
  background-color: #f5f0e6;
  min-height: 100vh;
`;

const Title = styled.h1`
  font-family: 'Playfair Display', serif;
  font-size: 3rem;
  text-align: center;
  margin-bottom: 2rem;
  color: #000;
`;

const Portfolio = () => {
  return (
    <PortfolioContainer>
      <Title>My Portfolio</Title>
      <FeaturedProjects />
    </PortfolioContainer>
  );
};

export default Portfolio;
