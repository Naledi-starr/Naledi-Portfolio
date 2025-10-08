import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { projects } from '../data/projects';

const Section = styled.section`
  padding: 4rem 2rem;
  background-color: #fff;
  color: #000;
  text-align: center;
`;

const Title = styled.h2`
  font-family: 'Playfair Display', serif;
  font-size: 2.5rem;
  margin-bottom: 2rem;
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const ProjectCard = styled.div`
  background-color: #f5f0e6;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s;
  display: flex;
  flex-direction: column;

  &:hover {
    transform: translateY(-5px);
  }
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const ProjectContent = styled.div`
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

const ProjectTitle = styled.h3`
  font-family: 'Playfair Display', serif;
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
`;

const ProjectDescription = styled.p`
  font-family: 'Open Sans', sans-serif;
  margin-bottom: 1rem;
  line-height: 1.5;
`;

const ProjectTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
`;

const Tag = styled.span`
  background-color: #d4af37;
  color: #000;
  padding: 0.25rem 0.5rem;
  border-radius: 15px;
  font-size: 0.8rem;
  font-weight: 600;
`;

const ViewDetailsButton = styled(Link)`
  background-color: #000;
  color: #fff;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  text-decoration: none;
  font-weight: 600;
  display: inline-block;
  margin-top: auto;

  &:hover {
    background-color: #333;
  }
`;

const FeaturedProjects = () => {
  return (
    <Section>
      <Title>Featured Projects</Title>
      <ProjectsGrid>
        {projects.map(project => (
          <ProjectCard key={project.id}>
            <ProjectImage src={project.image} alt={project.title} />
            <ProjectContent>
              <ProjectTitle>{project.title}</ProjectTitle>
              <ProjectDescription>{project.description}</ProjectDescription>
              <ProjectTags>
                {project.tags.map(tag => (
                  <Tag key={tag}>{tag}</Tag>
                ))}
              </ProjectTags>
              <ViewDetailsButton to={`/portfolio/${project.id}`}>View Details</ViewDetailsButton>
            </ProjectContent>
          </ProjectCard>
        ))}
      </ProjectsGrid>
    </Section>
  );
};

export default FeaturedProjects;
