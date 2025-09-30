import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HeaderContainer = styled.header`
  background-color: #000;
  color: #fff;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.div`
  font-family: 'Playfair Display', serif;
  font-size: 1.5rem;
  font-weight: bold;
`;

const Nav = styled.nav`
  display: flex;
  gap: 1.5rem;
`;

const NavLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  font-family: 'Open Sans', sans-serif;
  font-weight: 600;

  &:hover {
    color: #d4af37; /* Gold accent */
  }
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 1rem;
  margin-left: 1rem;
`;

const SocialIcon = styled.a`
  color: #fff;
  font-size: 1.2rem;
  text-decoration: none;

  &:hover {
    color: #d4af37;
  }
`;

const HireButton = styled.a`
  background-color: #d4af37;
  color: #000;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-weight: 700;
  text-decoration: none;
  margin-left: 1rem;

  &:hover {
    background-color: #b38f1a;
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Logo>MyPortfolio</Logo>
      <Nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/services">Services</NavLink>
        <NavLink to="/portfolio">Portfolio</NavLink>
        <NavLink to="/about">About Me</NavLink>
        <NavLink to="/blog">Blog</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </Nav>
      <SocialIcons>
        <SocialIcon href="https://github.com/" target="_blank" rel="noopener noreferrer" aria-label="GitHub">🐱</SocialIcon>
        <SocialIcon href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">🔗</SocialIcon>
        <SocialIcon href="https://twitter.com/" target="_blank" rel="noopener noreferrer" aria-label="Twitter">🐦</SocialIcon>
      </SocialIcons>
      <HireButton href="#contact">Hire Me</HireButton>
    </HeaderContainer>
  );
};

export default Header;
