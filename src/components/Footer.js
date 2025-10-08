import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import SocialLinks from './SocialLinks';

const FooterContainer = styled.footer`
  background-color: #000;
  color: #fff;
  padding: 2rem 1rem;
  text-align: center;
  font-family: 'Open Sans', sans-serif;
`;

const FooterLinks = styled.div`
  margin-bottom: 1rem;
  display: flex;
  justify-content: center;
  gap: 2rem;
`;

const FooterLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  font-weight: 600;

  &:hover {
    color: #d4af37;
  }
`;

const Copyright = styled.div`
  font-size: 0.9rem;
  color: #aaa;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1rem' }}>
        <SocialLinks size="1.5rem" gap="1.5rem" />
      </div>
      <FooterLinks>
        <FooterLink to="/">Home</FooterLink>
        <FooterLink to="/services">Services</FooterLink>
        <FooterLink to="/portfolio">Portfolio</FooterLink>
        <FooterLink to="/blog">Blog</FooterLink>
        <FooterLink to="/contact">Contact</FooterLink>
      </FooterLinks>
      <Copyright>© {new Date().getFullYear()} Naledi Mankogele Motswiane. All rights reserved.</Copyright>
    </FooterContainer>
  );
};

export default Footer;
