import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const StyledLink = styled(NavLink)`
  display: inline-block;
  padding: 16px 24px;
  font-size: 0.95rem;
  font-weight: 600;
  text-decoration: none;
  color: #555;
  border-bottom: 3px solid transparent;
  transition: all 0.2s;

  &:hover {
    color: #0f3460;
    background-color: #f7fafc;
  }

  &.active {
    color: #0f3460;
    border-bottom: 3px solid #0f3460;
  }
`;

export default function NavItem({ url, str }) {
  return <StyledLink to={url}>{str}</StyledLink>;
}
