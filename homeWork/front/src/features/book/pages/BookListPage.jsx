import React, { useEffect } from 'react';
import useBook from './../hooks/useBook';
import BookListTable from '../components/list/BookListTable';
import BookListText from '../components/list/BookListText';

function BookListPage() {
  const { loading, error, fetchBookVoList } = useBook();
  useEffect(() => {
    fetchBookVoList();
  }, []);

  if (error) return <h1>error zz</h1>;
  if (loading) return <h1>loading, , ,</h1>;
  return (
    <>
      <BookListText />
      <BookListTable />
    </>
  );
}

export default BookListPage;
