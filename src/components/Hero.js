import React from 'react';
import styled from 'styled-components';
import profileImage from './Profile.jpg';
import SocialLinks from './SocialLinks';

const HeroSection = styled.section`
  background-color: #f5f0e6; /* Light beige */
  color: #000;
  padding: 4rem 2rem;
  text-align: center;
  font-family: 'Open Sans', sans-serif;
`;

const ProfileImage = styled.img`
  width: 250px;
  height: 250px;
  border-radius: 10%;
  object-fit: cover;
  border: 2px solid #d4af37; /* Gold accent */
  margin-bottom: 1rem;
  
`;

const Name = styled.h1`
  font-family: 'Playfair Display', serif;
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
`;

const Title = styled.h2`
  font-weight: 400;
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

const Description = styled.p`
  max-width: 600px;
  margin: 0 auto 2rem;
  font-size: 1.1rem;
  line-height: 1.5;
`;

const CTAButtons = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
`;

const Button = styled.a`
  background-color: #d4af37;
  color: #000;
  padding: 0.75rem 1.5rem;
  border-radius: 25px;
  font-weight: 700;
  text-decoration: none;
  font-family: 'Open Sans', sans-serif;

  &:hover {
    background-color: #b38f1a;
  }
`;

const Stats = styled.div`
  display: flex;
  justify-content: center;
  gap: 3rem;
  margin-top: 3rem;
`;

const Stat = styled.div`
  text-align: center;
`;

const StatNumber = styled.div`
  font-family: 'Playfair Display', serif;
  font-size: 2rem;
  font-weight: 700;
  color: #d4af37;
`;

const StatLabel = styled.div`
  font-size: 1rem;
  font-weight: 600;
`;

const Hero = () => {
  const handleScroll = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <HeroSection>
      <ProfileImage src={profileImage} alt="Naledi Mankogele Motswiane" />
      <Name>Naledi Mankogele Motswiane</Name>
      <Title>Software Developer</Title>
      <Description>
        Dynamic Software Developer with expertise in programming, database management, web and mobile development, and IT project management. Skilled in leveraging AI tools and methodologies to create innovative, scalable technology solutions. Passionate about collaborative problem-solving and delivering impactful software solutions.
      </Description>
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '2rem' }}>
        <SocialLinks color="#000" size="1.8rem" gap="1.5rem" />
      </div>
      <CTAButtons>
        <Button href="#services" onClick={(e) => handleScroll(e, 'services')}>Explore Services</Button>
        <Button href="/Naledi_Motswiane_Resume.pdf" target="_blank" rel="noopener noreferrer">My Resume</Button>
      </CTAButtons>
      <Stats>
        <Stat>
          <StatNumber> 1+</StatNumber>
          <StatLabel>Years Experience</StatLabel>
        </Stat>
        <Stat>
          <StatNumber>5+</StatNumber>
          <StatLabel>Projects</StatLabel>
        </Stat>
        <Stat>
          <StatNumber>0</StatNumber>
          <StatLabel>Happy Clients</StatLabel>
        </Stat>
      </Stats>
    </HeroSection>
  );
};

export default Hero;
