import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import SocialLinks from './SocialLinks';

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
      <Logo>Naledi</Logo>
      <Nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/services">Services</NavLink>
        <NavLink to="/portfolio">Portfolio</NavLink>
        <NavLink to="/blog">Blog</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </Nav>
      <SocialLinks />
      <HireButton href="/Naledi_Motswiane_Resume.pdf" target="_blank" rel="noopener noreferrer">My Resume</HireButton>
    </HeaderContainer>
  );
};

export default Header;
