import React from 'react';
import useBook from '../../hooks/useBook';

function BookDetailContent() {
  const { vo } = useBook();

  return (
    <>
      <div>
        <h3>번호 : {vo.id}</h3>
        <h3>제목 : {vo.title}</h3>
        <h3>가격 : {vo.price}</h3>
        <h3>작성일시 : {vo.createdAt}</h3>
        <h3>수정일시 : {vo.modifiedAt}</h3>
      </div>
    </>
  );
}

export default BookDetailContent;
