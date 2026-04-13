import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import useBook from '../hooks/useBook';
import BookDetailContent from '../components/detail/BookDetailContent';
import BookDetailText from '../components/detail/BookDetailText';
import { deleteById } from '../api/bookApi';

function BookDetailPage() {
  const { id } = useParams();
  const { loading, error, fetchBookVoById } = useBook();
  const navigete = useNavigate();
  useEffect(() => {
    fetchBookVoById(id);
  }, [id]);

  if (loading) return <h1>로딩즁 . . .</h1>;
  if (error) return <h1>에러 발생 ㅠ</h1>;

  return (
    <>
      <BookDetailText />
      <BookDetailContent />
      <button
        onClick={() => {
          navigete('/book/edit/${id}');
        }}
      >
        수정
      </button>
      <button
        onClick={async () => {
          const resp = await deleteById(id);
          alert('삭제 완료');
          navigete(`/book/list`);
        }}
      >
        삭제
      </button>
    </>
  );
}

export default BookDetailPage;
