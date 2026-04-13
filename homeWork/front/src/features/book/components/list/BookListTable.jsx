import React from 'react';
import useBook from '../../hooks/useBook';
import { useNavigate } from 'react-router-dom';

function BookListTable() {
  const { voList } = useBook();
  const navigate = useNavigate();
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>도서 번호</th>
            <th>도서 제목</th>
          </tr>
        </thead>
        <tbody>
          {voList.map((vo) => {
            return (
              <tr
                key={vo.id}
                onClick={() => {
                  navigate(`/book/detail/${vo.id}`);
                }}
              >
                <td>{vo.id}</td>
                <td>{vo.title}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default BookListTable;
