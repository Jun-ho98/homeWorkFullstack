import React from 'react';
import useProduct from '../../hooks/useProduct';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.div`
  background: white;
  border-radius: 12px;
  box-shadow: 0 2px 12px rgba(0,0,0,0.08);
  overflow: hidden;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const Th = styled.th`
  background-color: #1a1a2e;
  color: white;
  padding: 14px 20px;
  text-align: left;
  font-size: 0.9rem;
  font-weight: 600;
`;

const Tr = styled.tr`
  border-bottom: 1px solid #e2e8f0;
  cursor: pointer;
  transition: background-color 0.15s;

  &:hover {
    background-color: #f0f4ff;
  }

  &:last-child {
    border-bottom: none;
  }
`;

const Td = styled.td`
  padding: 14px 20px;
  font-size: 0.95rem;
  color: #444;
`;

const Empty = styled.div`
  text-align: center;
  padding: 60px;
  color: #aaa;
  font-size: 1rem;
`;

export default function ProductListTable() {
  const { voList } = useProduct();
  const navigate = useNavigate();

  if (!voList || voList.length === 0) {
    return (
      <Wrapper>
        <Empty>등록된 상품이 없습니다.</Empty>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <Table>
        <thead>
          <tr>
            <Th>번호</Th>
            <Th>상품 이름</Th>
            <Th>가격</Th>
          </tr>
        </thead>
        <tbody>
          {voList.map((vo) => (
            <Tr key={vo.id} onClick={() => navigate(`/product/detail/${vo.id}`)}>
              <Td>{vo.id}</Td>
              <Td>{vo.name}</Td>
              <Td>{vo.price?.toLocaleString()}원</Td>
            </Tr>
          ))}
        </tbody>
      </Table>
    </Wrapper>
  );
}
