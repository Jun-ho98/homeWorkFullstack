import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import useProduct from '../hooks/useProduct';
import ProductEditText from '../components/edit/ProductEditText';
import ProductEditForm from '../components/edit/ProductEditForm';

function ProductEditPage() {
  const { id } = useParams();
  const { fetchProductVoById, loading, error } = useProduct();

  useEffect(() => {
    fetchProductVoById(id);
  }, [id]);

  if (loading) return <h1>로딩중 . . .</h1>;
  if (error) return <h1>에러 발생 ㅠ</h1>;

  return (
    <>
      <ProductEditText />
      <ProductEditForm />
    </>
  );
}

export default ProductEditPage;
