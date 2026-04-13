import React, { useState } from 'react';
import useProduct from '../../hooks/useProduct';
import { updateNameAndPriceById } from '../../api/productApi';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Card = styled.div`
  background: white;
  border-radius: 12px;
  padding: 40px;
  box-shadow: 0 2px 12px rgba(0,0,0,0.08);
`;

const IdRow = styled.p`
  font-size: 0.9rem;
  color: #888;
  margin-bottom: 24px;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-bottom: 20px;
`;

const Label = styled.label`
  font-size: 0.9rem;
  font-weight: 600;
  color: #4a5568;
`;

const Input = styled.input`
  padding: 12px 16px;
  border: 1.5px solid #e2e8f0;
  border-radius: 8px;
  font-size: 1rem;
  outline: none;
  transition: border-color 0.2s;

  &:focus { border-color: #0f3460; }
`;

const SubmitBtn = styled.button`
  width: 100%;
  padding: 14px;
  background-color: #0f3460;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  margin-top: 8px;
  transition: background-color 0.2s;

  &:hover { background-color: #16213e; }
`;

export default function ProductEditForm() {
  const { vo } = useProduct();
  const navi = useNavigate();

  const [formData, setFormData] = useState({ id: vo.id, name: vo.name, price: vo.price });

  async function handleSubmit(evt) {
    evt.preventDefault();
    await updateNameAndPriceById(formData);
    alert('수정성공');
    navi(`/product/detail/${vo.id}`);
  }

  function handleChange(evt) {
    setFormData({ ...formData, [evt.target.name]: evt.target.value });
  }

  return (
    <Card>
      <IdRow>상품 번호 : {vo.id}</IdRow>
      <form onSubmit={handleSubmit}>
        <FormGroup>
          <Label>상품 이름</Label>
          <Input type="text" name="name" value={formData.name} onChange={handleChange} />
        </FormGroup>
        <FormGroup>
          <Label>가격</Label>
          <Input type="number" name="price" value={formData.price} onChange={handleChange} />
        </FormGroup>
        <SubmitBtn type="submit">수정하기</SubmitBtn>
      </form>
    </Card>
  );
}
