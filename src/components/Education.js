import React from 'react';
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const EducationSection = styled.section`
  padding: 4rem 2rem;
  background-color: #f5f0e6;
  color: #000;
  max-width: 900px;
  margin: 0 auto;
  font-family: 'Open Sans', sans-serif;
  animation: ${fadeIn} 0.8s ease-out;
`;

const SectionTitle = styled.h2`
  font-family: 'Playfair Display', serif;
  font-size: 2.5rem;
  margin-bottom: 2rem;
  text-align: center;
`;

const EducationGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
`;

const EducationCard = styled.div`
  background-color: #fff;
  border-radius: 10px;
  padding: 1.5rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);
  text-align: left;
`;

const Degree = styled.h3`
  font-family: 'Playfair Display', serif;
  font-size: 1.4rem;
  margin-bottom: 0.5rem;
`;

const Institution = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  color: #555;
  font-weight: 600;
  margin-bottom: 0.5rem;
`;

const Details = styled.p`
  font-size: 1rem;
  line-height: 1.5;
  color: #666;
`;

const educationData = [
  {
    degree: 'Diploma In Information Technology in Software Development',
    institution: 'IIE Rosebank College',
    details: 'Graduated with Cum Laude (December 2023)',
  },
  {
    degree: 'Software Engineering Course',
    institution: 'WeThinkCode_',
    details: 'September 2024 - August 2025 (Incomplete)',
  },
  {
    degree: 'High School Qualification',
    institution: 'Hoërskool Dr Johan Jurgens High School',
    details: 'January 2015 - December 2019',
  },
];

const Education = () => (
  <EducationSection>
    <SectionTitle>Education</SectionTitle>
    <EducationGrid>
      {educationData.map((edu, index) => (
        <EducationCard key={index}>
          <Degree>{edu.degree}</Degree>
          <Institution>{edu.institution}</Institution>
          <Details>{edu.details}</Details>
        </EducationCard>
      ))}
    </EducationGrid>
  </EducationSection>
);

export default Education;