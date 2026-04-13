import React, { useState } from 'react';
import { save } from '../api/productApi';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Card = styled.div`
  background: white;
  border-radius: 12px;
  padding: 40px;
  box-shadow: 0 2px 12px rgba(0,0,0,0.08);
`;

const Title = styled.h2`
  font-size: 1.4rem;
  font-weight: 700;
  color: #1a1a2e;
  margin-bottom: 28px;
  padding-bottom: 14px;
  border-bottom: 2px solid #e2e8f0;
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
  transition: border-color 0.2s;
  outline: none;

  &:focus {
    border-color: #0f3460;
  }
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
  transition: background-color 0.2s;
  margin-top: 8px;

  &:hover {
    background-color: #16213e;
  }
`;

export default function ProductInsertPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ name: '', price: '' });

  async function handleSubmit(evt) {
    evt.preventDefault();
    await save(formData);
    alert('등록 완료');
    navigate('/product/list');
  }

  function handleChange(evt) {
    setFormData({ ...formData, [evt.target.name]: evt.target.value });
  }

  return (
    <Card>
      <Title>📦 상품 등록</Title>
      <form onSubmit={handleSubmit}>
        <FormGroup>
          <Label>상품 이름</Label>
          <Input type="text" name="name" placeholder="상품 이름을 입력하세요" value={formData.name} onChange={handleChange} />
        </FormGroup>
        <FormGroup>
          <Label>가격</Label>
          <Input type="number" name="price" placeholder="가격을 입력하세요" value={formData.price} onChange={handleChange} />
        </FormGroup>
        <SubmitBtn type="submit">등록하기</SubmitBtn>
      </form>
    </Card>
  );
}
