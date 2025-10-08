import React from 'react';
import styled from 'styled-components';
import { Icon } from '@iconify/react';

const techStackData = {
  frontend: [
    { name: 'HTML5', icon: 'devicon:html5' },
    { name: 'CSS3', icon: 'devicon:css3' },
    { name: 'JavaScript', icon: 'devicon:javascript' },
    { name: 'React', icon: 'devicon:react' },
    { name: 'Redux', icon: 'devicon:redux' },
    { name: 'Styled Components', icon: 'logos:styled-components' },
    { name: 'Bootstrap', icon: 'devicon:bootstrap' },
  ],
  backend: [
    { name: 'Java', icon: 'devicon:java' },
    { name: 'C#', icon: 'devicon:csharp' },
    { name: 'Python', icon: 'devicon:python' },
    { name: 'PHP', icon: 'devicon:php' },
    { name: 'REST API', icon: 'mdi:api' },
  ],
  databases: [
    { name: 'MySQL', icon: 'devicon:mysql' },
    { name: 'MS SQL', icon: 'devicon:microsoftsqlserver' },
    { name: 'Oracle', icon: 'devicon:oracle' },
    { name: 'Firebase', icon: 'logos:firebase' },
    { name: 'SQLite', icon: 'devicon:sqlite' },
  ],
  tools: [
    { name: 'Git', icon: 'devicon:git' },
    { name: 'GitHub', icon: 'devicon:github' },
    { name: 'VS Code', icon: 'devicon:vscode' },
    { name: 'Command Line', icon: 'grommet-icons:terminal' },
    { name: 'Agile', icon: 'carbon:chart-scrum' },
    { name: 'Waterfall', icon: 'mdi:chart-waterfall' },
  ],
  learning: [
    { name: 'Kotlin', icon: 'devicon:kotlin' },
    { name: 'Mobile Development', icon: 'mdi:cellphone' },
  ],
};

const StackSection = styled.section`
  padding: 4rem 2rem;
  background-color: #fff;
  color: #080808ff;
  text-align: center;
`;

const SectionTitle = styled.h2`
  font-family: 'Playfair Display', serif;
  font-size: 2.5rem;
  margin-bottom: 2rem;
`;

const CategoriesContainer = styled.div`
  max-width: 900px;
  margin: 0 auto;
`;

const StackCategory = styled.div`
  margin-bottom: 2rem;
  text-align: left;
`;

const CategoryTitle = styled.h4`
  font-family: 'Playfair Display', serif;
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
  border-bottom: 2px solid #f0f0f0;
  padding-bottom: 0.5rem;
`;

const StackIcons = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  align-items: center;
`;

const IconWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem;
  border-radius: 8px;
  transition: background-color 0.3s ease, transform 0.3s ease;
  min-width: 80px;

  &:hover {
    background-color: #f5f0e6;
    transform: translateY(-3px);
  }
`;

const IconName = styled.span`
  font-family: 'Open Sans', sans-serif;
  font-size: 0.85rem;
  font-weight: 600;
`;

const TechStack = () => {
  return (
    <StackSection>
      <SectionTitle>My Tech Stack</SectionTitle>
      <CategoriesContainer>
        {Object.entries(techStackData).map(([category, techs]) => (
          <StackCategory key={category}>
            <CategoryTitle>{category.toUpperCase()}</CategoryTitle>
            <StackIcons>
              {techs.map((tech) => (
                <IconWrapper key={tech.name} title={tech.name}>
                  <Icon icon={tech.icon} width="40" height="40" color="#333" />
                  <IconName>{tech.name}</IconName>
                </IconWrapper>
              ))}
            </StackIcons>
          </StackCategory>
        ))}
      </CategoriesContainer>
    </StackSection>
  );
};

export default TechStack;
