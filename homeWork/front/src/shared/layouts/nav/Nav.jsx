import React from 'react';
import NavItem from './NavItem';
import styled from 'styled-components';

const StyledNav = styled.nav`
  background-color: #ffffff;
  border-bottom: 2px solid #e2e8f0;
  padding: 0 40px;
  display: flex;
  align-items: center;
  gap: 4px;
  box-shadow: 0 1px 4px rgba(0,0,0,0.08);
`;

export default function Nav() {
  return (
    <StyledNav>
      <NavItem url="/product/insert" str="상품 등록" />
      <NavItem url="/product/list" str="상품 목록" />
      <NavItem url="/" str="홈" />
    </StyledNav>
  );
}
