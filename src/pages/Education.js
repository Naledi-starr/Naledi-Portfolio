import React from 'react';
import styled from 'styled-components';
import Education from '../components/Education';

const EducationPageContainer = styled.div`
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

const EducationPage = () => {
  return (
    <EducationPageContainer>
      <Title>Education</Title>
      <Education />
    </EducationPageContainer>
  );
};

export default EducationPage;
