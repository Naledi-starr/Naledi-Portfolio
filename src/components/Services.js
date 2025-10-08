import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Icon } from '@iconify/react';

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

const ServicesSection = styled.section`
  padding: 4rem 2rem;
  background-color: #fff;
  color: #000;
  text-align: center;
  animation: ${fadeIn} 0.8s ease-out;
`;

const Title = styled.h2`
  font-family: 'Playfair Display', serif;
  font-size: 2.5rem;
  margin-bottom: 2rem;
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const ServiceCard = styled.div`
  background-color: #f5f0e6;
  border-radius: 10px;
  padding: 2.5rem 2rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  }
`;

const ServiceIcon = styled.div`
  font-size: 3rem;
  color: #d4af37;
  margin-bottom: 1.5rem;
`;

const ServiceTitle = styled.h3`
  font-family: 'Playfair Display', serif;
  font-size: 1.5rem;
  margin-bottom: 0.75rem;
`;

const ServiceDescription = styled.p`
  font-family: 'Open Sans', sans-serif;
  line-height: 1.5;
  color: #555;
`;

const services = [
  {
    id: 1,
    title: 'Web Development',
    description: 'Building responsive and performant web applications using HTML, CSS, JavaScript, React, and other modern technologies.',
    icon: 'mdi:web'
  },
  {
    id: 2,
    title: 'Mobile App Development',
    description: 'Creating cross-platform mobile applications using Kotlin and other frameworks for seamless user experiences.',
    icon: 'mdi:cellphone'
  },
  {
    id: 3,
    title: 'Database Management',
    description: 'Designing and managing databases with MySQL, MS SQL, Oracle, Firebase, and SQLite for efficient data handling.',
    icon: 'mdi:database'
  },
  {
    id: 4,
    title: 'API Development',
    description: 'Developing REST APIs and integrating third-party services for scalable backend solutions.',
    icon: 'mdi:api'
  },
  {
    id: 5,
    title: 'IT Project Management',
    description: 'Leading projects with Agile and Waterfall methodologies, ensuring timely delivery and quality outcomes.',
    icon: 'eos-icons:project'
  },
  {
    id: 6,
    title: 'Software Engineering',
    description: 'Leveraging programming languages like Java, C#, Python, and PHP to build innovative software solutions.',
    icon: 'mdi:code-braces'
  }
];

const Services = () => {
  return (
    <ServicesSection id="services">
      <Title>Services</Title>
      <ServicesGrid>
        {services.map(service => (
          <ServiceCard key={service.id}>
            <ServiceIcon>
              <Icon icon={service.icon} />
            </ServiceIcon>
            <ServiceTitle>{service.title}</ServiceTitle>
            <ServiceDescription>{service.description}</ServiceDescription>
          </ServiceCard>
        ))}
      </ServicesGrid>
    </ServicesSection>
  );
};

export default Services;
