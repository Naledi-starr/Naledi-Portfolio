import React from 'react';
import styled from 'styled-components';

const HeroSection = styled.section`
  background-color: #f5f0e6; /* Light beige */
  color: #000;
  padding: 4rem 2rem;
  text-align: center;
  font-family: 'Open Sans', sans-serif;
`;

const ProfileImage = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  border: 4px solid #d4af37; /* Gold accent */
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

const SocialIcons = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin-bottom: 2rem;
`;

const SocialIcon = styled.a`
  font-size: 1.8rem;
  color: #000;
  text-decoration: none;

  &:hover {
    color: #d4af37;
  }
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
  return (
    <HeroSection>
      <ProfileImage src="/1.png" alt="Profile" />
      <Name>John Doe</Name>
      <Title>Full Stack Developer</Title>
      <Description>
        Passionate developer with expertise in building elegant and performant web applications.
      </Description>
      <SocialIcons>
        <SocialIcon href="https://github.com/" target="_blank" rel="noopener noreferrer" aria-label="GitHub">🐱</SocialIcon>
        <SocialIcon href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">🔗</SocialIcon>
        <SocialIcon href="https://twitter.com/" target="_blank" rel="noopener noreferrer" aria-label="Twitter">🐦</SocialIcon>
      </SocialIcons>
      <CTAButtons>
        <Button href="#services">Explore Services</Button>
        <Button href="#contact">Hire Me</Button>
      </CTAButtons>
      <Stats>
        <Stat>
          <StatNumber>5+</StatNumber>
          <StatLabel>Years Experience</StatLabel>
        </Stat>
        <Stat>
          <StatNumber>20+</StatNumber>
          <StatLabel>Projects</StatLabel>
        </Stat>
        <Stat>
          <StatNumber>15+</StatNumber>
          <StatLabel>Happy Clients</StatLabel>
        </Stat>
      </Stats>
    </HeroSection>
  );
};

export default Hero;
