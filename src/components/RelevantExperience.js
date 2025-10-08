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

const ExperienceSection = styled.section`
  padding: 4rem 2rem;
  background-color: #fff;
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

const ExperienceGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const ExperienceCard = styled.div`
  background-color: #f5f0e6;
  border-radius: 10px;
  padding: 1.5rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);
  text-align: left;
`;

const ExperienceTitle = styled.h3`
  font-family: 'Playfair Display', serif;
  font-size: 1.4rem;
  margin-bottom: 0.5rem;
`;

const ExperienceMeta = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  color: #555;
  margin-bottom: 0.25rem;
`;

const ExperienceDescription = styled.p`
  font-size: 1rem;
  color: #666;
`;

const RelevantExperience = () => {
const experienceData = [
  {
    title: 'Front-End Developer',
    event: 'Hack Campus Life - IIE MSA Roodeport Campus',
    date: 'April 2025',
    description: 'Contributed to a React-based project, helping secure 3rd place with effective planning and presentation.',
  },
  {
    title: 'Solutions Designer',
    event: 'Vhaswa Vuwani Hackathon – Virtual',
    date: 'January 2025',
    description: 'Led a team to design solutions used project management and designing tools , delivering innovative outcomes.',
  },
  {
    title: 'Literacy Facilitator',
    event: 'Rhoo Hlatswayo Art Center - Daveyton',
    date: 'May 2024 – September 2024',
    description: 'Supported learning with educational tech tools, enhancing digital engagement.',
  },
  {
    title: 'Library Student Assistant',
    event: 'IIE Rosebank College - Pretoria Campus',
    date: 'March 2023 – December 2023',
    description: 'Managed digital resources and coordinated with teams to improve library operations.',
  },
];

return (
  <ExperienceSection>
    <SectionTitle>Relevant Experience</SectionTitle>
    <ExperienceGrid>
      {experienceData.map((exp) => (
        <ExperienceCard key={`${exp.title}-${exp.event}`}>
          <ExperienceTitle>{exp.title}</ExperienceTitle>
          <ExperienceMeta>{exp.event}</ExperienceMeta>
          <ExperienceMeta>{exp.date}</ExperienceMeta>
          <ExperienceDescription>{exp.description}</ExperienceDescription>
        </ExperienceCard>
      ))}
    </ExperienceGrid>
  </ExperienceSection>
);
};

export default RelevantExperience;