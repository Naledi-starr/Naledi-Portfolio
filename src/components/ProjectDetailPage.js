import React from 'react';
import { useParams, Link } from 'react-router-dom';
import styled from 'styled-components';
import { projects } from '../data/projects';

const PageContainer = styled.div`
  padding: 4rem 2rem;
  background-color: #f5f0e6;
  min-height: 100vh;
  color: #000;
`;

const ProjectContent = styled.div`
  max-width: 900px;
  margin: 0 auto;
  background-color: #fff;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`;

const ProjectImage = styled.img`
  width: 100%;
  height: auto;
  max-height: 450px;
  object-fit: cover;
  border-radius: 10px;
  margin-bottom: 2rem;
`;

const Title = styled.h1`
  font-family: 'Playfair Display', serif;
  font-size: 3rem;
  margin-bottom: 1rem;
`;

const Description = styled.p`
  font-family: 'Open Sans', sans-serif;
  font-size: 1.1rem;
  line-height: 1.7;
  margin-bottom: 2rem;
`;

const TagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 2rem;
`;

const Tag = styled.span`
  background-color: #d4af37;
  color: #000;
  padding: 0.25rem 0.75rem;
  border-radius: 15px;
  font-size: 0.9rem;
  font-weight: 600;
`;

const LinksContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
`;

const ProjectLink = styled.a`
  background-color: #000;
  color: #fff;
  padding: 0.75rem 1.5rem;
  border-radius: 25px;
  text-decoration: none;
  font-weight: 600;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #333;
  }
`;

const BackLink = styled(Link)`
  display: inline-block;
  margin-top: 2rem;
  font-family: 'Open Sans', sans-serif;
  font-weight: 600;
  color: #000;
  text-decoration: none;

  &:hover {
    color: #d4af37;
  }
`;

const ProjectDetailPage = () => {
  const { projectId } = useParams();
  const project = projects.find(p => p.id === parseInt(projectId));

  if (!project) {
    return <PageContainer><div>Project not found.</div></PageContainer>;
  }

  return (
    <PageContainer>
      <ProjectContent>
        <Title>{project.title}</Title>
        <ProjectImage src={project.image} alt={project.title} />
        <Description>{project.description}</Description>
        <TagsContainer>
          {project.tags.map(tag => <Tag key={tag}>{tag}</Tag>)}
        </TagsContainer>
        <LinksContainer>
          <ProjectLink href={project.liveUrl} target="_blank" rel="noopener noreferrer">View Live</ProjectLink>
          <ProjectLink href={project.repoUrl} target="_blank" rel="noopener noreferrer">View Code</ProjectLink>
        </LinksContainer>
        <BackLink to="/portfolio">← Back to Portfolio</BackLink>
      </ProjectContent>
    </PageContainer>
  );
};

export default ProjectDetailPage;

