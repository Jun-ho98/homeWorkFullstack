import React, { useEffect } from 'react';
import useProduct from '../hooks/useProduct';
import ProductListTable from '../components/list/ProductListTable';
import ProductListText from '../components/list/ProductListText';

function ProductListPage() {
  const { loading, error, fetchProductVoList } = useProduct();

  useEffect(() => {
    fetchProductVoList();
  }, []);

  if (error) return <h1>error zz</h1>;
  if (loading) return <h1>loading, , ,</h1>;

  return (
    <>
      <ProductListText />
      <ProductListTable />
    </>
  );
}

export default ProductListPage;
