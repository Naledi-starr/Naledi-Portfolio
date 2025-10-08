import React from 'react';
import styled from 'styled-components';
import { Icon } from '@iconify/react';

const SocialIconsContainer = styled.div`
  display: flex;
  gap: ${props => props.gap || '1rem'};
`;

const SocialIcon = styled.a`
  color: ${props => props.color || '#fff'};
  font-size: ${props => props.size || '1.2rem'};
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: #d4af37;
  }
`;

const socialLinks = [
  { href: "https://github.com/Naledi-starr", label: "GitHub", icon: "mdi:github" },
  { href: "https://www.linkedin.com/in/naledi-mankgogele-motswiane", label: "LinkedIn", icon: "mdi:linkedin" },
];

const SocialLinks = ({ color, size, gap }) => (
  <SocialIconsContainer gap={gap}>
    {socialLinks.map(link => (
      <SocialIcon key={link.label} href={link.href} target="_blank" rel="noopener noreferrer" aria-label={link.label} color={color} size={size}>
        <Icon icon={link.icon} />
      </SocialIcon>
    ))}
  </SocialIconsContainer>
);

export default SocialLinks;