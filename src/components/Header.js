import React, { useState } from 'react';
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
  position: relative; /* For mobile nav positioning */
`;

const Logo = styled.div`
  font-family: 'Playfair Display', serif;
  font-size: 1.5rem;
  font-weight: bold;
`;

const Nav = styled.nav`
  display: flex;
  gap: 1.5rem;

  @media (max-width: 768px) {
    display: none;
  }
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

  @media (max-width: 768px) {
    display: none;
  }
`;

const MobileNavToggle = styled.button`
  display: none;
  background: none;
  border: none;
  color: #fff;
  font-size: 1.5rem;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

const MobileNav = styled.div`
  display: none;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  background-color: #000;
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  padding: 2rem 0;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);

  @media (max-width: 768px) {
    display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
  }
`;

const SocialLinksContainer = styled.div`
  @media (max-width: 768px) {
    display: none;
  }
`;

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

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
      <SocialLinksContainer>
        <SocialLinks />
      </SocialLinksContainer>
      <HireButton href="/Naledi_Motswiane_Resume.pdf" target="_blank" rel="noopener noreferrer">My Resume</HireButton>
      <MobileNavToggle onClick={() => setIsOpen(!isOpen)}>
        ☰
      </MobileNavToggle>
      <MobileNav isOpen={isOpen}>
        <NavLink to="/" onClick={() => setIsOpen(false)}>Home</NavLink>
        <NavLink to="/services" onClick={() => setIsOpen(false)}>Services</NavLink>
        <NavLink to="/portfolio" onClick={() => setIsOpen(false)}>Portfolio</NavLink>
        <NavLink to="/blog" onClick={() => setIsOpen(false)}>Blog</NavLink>
        <NavLink to="/contact" onClick={() => setIsOpen(false)}>Contact</NavLink>
        <HireButton href="/Naledi_Motswiane_Resume.pdf" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block' }}>
          My Resume
        </HireButton>
        <SocialLinks />
      </MobileNav>
    </HeaderContainer>
  );
};

export default Header;
