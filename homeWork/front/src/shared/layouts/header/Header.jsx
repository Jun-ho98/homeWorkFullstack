import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.header`
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%);
  color: white;
  padding: 20px 40px;
  text-align: center;
  box-shadow: 0 2px 10px rgba(0,0,0,0.3);
`;

const Title = styled.h1`
  font-size: 1.8rem;
  font-weight: 700;
  letter-spacing: 2px;
`;

const Sub = styled.p`
  font-size: 0.85rem;
  color: #a0aec0;
  margin-top: 4px;
  letter-spacing: 1px;
`;

export default function Header() {
  return (
    <StyledHeader>
      <Title>🛒 상품 관리 시스템</Title>
      <Sub>Product Management System</Sub>
    </StyledHeader>
  );
}
