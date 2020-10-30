import React, { useContext } from 'react';
import { BookContext } from '../contexts/BookContext';
import { actionTypes } from '../reducers/actionTypes';

const BookDetails = ({ book }) => {
  const { dispatch } = useContext(BookContext);

  const handleClick = () => {
    dispatch({
      type: actionTypes.REMOVE_BOOK,
      id: book.id,
    });
  };

  return (
    <li onClick={handleClick}>
      <div className="title">{book.title}</div>
      <div className="author">{book.author}</div>
    </li>
  );
};

export default BookDetails;
