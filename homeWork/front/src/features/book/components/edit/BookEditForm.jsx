import React, { useState } from 'react';
import useBook from '../../hooks/useBook';
import { updateTitleAndPriceById } from '../../api/bookApi';
import { useNavigate } from 'react-router-dom';

function BookEditForm() {
  const { vo } = useBook();
  const navi = useNavigate();

  const [formData, setFormData] = useState({
    id: vo.id,
    title: vo.title,
    price: vo.price,
  });

  async function handleSubmit(evt) {
    evt.preventDefault();
    await updateTitleAndPriceById(formData);
    alert('수정성공');
    navi(`/book/detail/${vo.id}`);
  }

  function hendleChange(evt) {
    setFormData({ ...formData, [evt.target.name]: evt.target.value });
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h3>버노 : {vo.id}</h3>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={hendleChange}
        />
        <input
          type="number"
          name="price"
          value={formData.price}
          onChange={hendleChange}
        />
        <input type="submit" value={'수정'} />
      </form>
    </>
  );
}

export default BookEditForm;
