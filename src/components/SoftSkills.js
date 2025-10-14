import React from 'react';
import styled from 'styled-components';

const SkillsSection = styled.section`
  padding: 5rem 2rem;
  color: #000;
  font-family: 'Open Sans', sans-serif;
  background-color: #ffffff;
`;

const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
`;

const SectionTitle = styled.h2`
  font-family: 'Playfair Display', serif;
  font-size: 2.5rem;
  margin-bottom: 2rem;
  text-align: center;
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
`;

const SkillCard = styled.div`
  background-color: #f5f0e6;
  border-radius: 10px;
  padding: 1.5rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);
  text-align: left;
`;

const SkillTitle = styled.h3`
  font-family: 'Playfair Display', serif;
  font-size: 1.4rem;
  margin-bottom: 0.5rem;
`;

const SkillDescription = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  color: #555;
`;

const SkillList = styled.ul`
  padding-left: 1.5rem;
  margin: 0;
  font-size: 1.1rem;
  line-height: 1.6;
  color: #555;
`;

const SkillListItem = styled.li`
  margin-bottom: 0.5rem;
`;

const SoftSkills = () => {
const skillsData = [
  {
    title: 'Key Soft Skills',
    description: [
      'Problem-solving',
      'Project Management',
      'Strong communication',
      'Organisation',
      'Adaptable',
      'Goal-oriented',
      'Self-driven',
    ],
  },
  {
    title: 'Achievement',
    description: 'IIE MSA Hack Campus Life - 3rd Position',
  },
];
return (
  <SkillsSection>
    <Container>
      <SectionTitle>Soft Skills &amp; Achievements</SectionTitle>
      <SkillsGrid>
        {skillsData.map((skill, index) => (
          <SkillCard key={index}>
            <SkillTitle>{skill.title}</SkillTitle>
            {Array.isArray(skill.description) ? (
              <SkillList>
                {skill.description.map((item, i) => (
                  <SkillListItem key={i}>{item}</SkillListItem>
                ))}
              </SkillList>
            ) : (
              <SkillDescription>{skill.description}</SkillDescription>
            )}
          </SkillCard>
        ))}
      </SkillsGrid>
    </Container>
  </SkillsSection>
);
};

export default SoftSkills;