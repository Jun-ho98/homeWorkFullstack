import React from 'react';
import styled from 'styled-components';

const Title = styled.h2`
  font-size: 1.4rem;
  font-weight: 700;
  color: #1a1a2e;
  margin-bottom: 20px;
`;

export default function ProductEditText() {
  return <Title>✏️ 상품 수정</Title>;
}
