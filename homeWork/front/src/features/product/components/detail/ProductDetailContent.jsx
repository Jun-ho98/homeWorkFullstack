import React from 'react';
import useProduct from '../../hooks/useProduct';
import styled from 'styled-components';

const Card = styled.div`
  background: white;
  border-radius: 12px;
  padding: 32px;
  box-shadow: 0 2px 12px rgba(0,0,0,0.08);
  margin-bottom: 20px;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  padding: 14px 0;
  border-bottom: 1px solid #f0f0f0;

  &:last-child {
    border-bottom: none;
  }
`;

const Label = styled.span`
  width: 120px;
  font-size: 0.85rem;
  font-weight: 600;
  color: #888;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

const Value = styled.span`
  font-size: 1rem;
  color: #222;
  font-weight: 500;
`;

export default function ProductDetailContent() {
  const { vo } = useProduct();
  return (
    <Card>
      <Row><Label>번호</Label><Value>{vo.id}</Value></Row>
      <Row><Label>이름</Label><Value>{vo.name}</Value></Row>
      <Row><Label>가격</Label><Value>{vo.price?.toLocaleString()}원</Value></Row>
      <Row><Label>등록일시</Label><Value>{vo.createdAt}</Value></Row>
      <Row><Label>수정일시</Label><Value>{vo.modifiedAt ?? '-'}</Value></Row>
    </Card>
  );
}
