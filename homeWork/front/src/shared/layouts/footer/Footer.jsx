import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  background-color: #1a1a2e;
  color: #a0aec0;
  text-align: center;
  padding: 20px;
  font-size: 0.85rem;
`;

export default function Footer() {
  return (
    <StyledFooter>
      © 2026 Product Management System. All rights reserved.
    </StyledFooter>
  );
}
