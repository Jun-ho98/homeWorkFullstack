import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import useProduct from '../hooks/useProduct';
import ProductDetailContent from '../components/detail/ProductDetailContent';
import ProductDetailText from '../components/detail/ProductDetailText';
import { deleteById } from '../api/productApi';
import styled from 'styled-components';

const BtnRow = styled.div`
  display: flex;
  gap: 12px;
`;

const Btn = styled.button`
  padding: 12px 28px;
  border: none;
  border-radius: 8px;
  font-size: 0.95rem;
  font-weight: 600;
  cursor: pointer;
  transition: opacity 0.2s;

  &:hover { opacity: 0.85; }
`;

const EditBtn = styled(Btn)`
  background-color: #0f3460;
  color: white;
`;

const DeleteBtn = styled(Btn)`
  background-color: #e53e3e;
  color: white;
`;

export default function ProductDetailPage() {
  const { id } = useParams();
  const { loading, error, fetchProductVoById } = useProduct();
  const navigate = useNavigate();

  useEffect(() => { fetchProductVoById(id); }, [id]);

  if (loading) return <h2>로딩중 . . .</h2>;
  if (error) return <h2>에러 발생 ㅠ</h2>;

  return (
    <>
      <ProductDetailText />
      <ProductDetailContent />
      <BtnRow>
        <EditBtn onClick={() => navigate(`/product/edit/${id}`)}>수정</EditBtn>
        <DeleteBtn onClick={async () => {
          await deleteById(id);
          alert('삭제 완료');
          navigate('/product/list');
        }}>삭제</DeleteBtn>
      </BtnRow>
    </>
  );
}
