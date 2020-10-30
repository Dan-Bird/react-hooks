import React, { useContext, useState } from 'react';
import { BookContext } from '../contexts/BookContext';
import { actionTypes } from '../reducers/actionTypes';

const BookForm = () => {
  const { dispatch } = useContext(BookContext);
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    dispatch({
      type: actionTypes.ADD_BOOK,
      book: {
        title,
        author,
      },
    });
    setTitle('');
    setAuthor('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="book-title"
        id=""
        placeholder="Book title"
        value={title}
        onChange={e => setTitle(e.target.value)}
        required
      />
      <input
        type="text"
        name="book-author"
        id=""
        placeholder="Book author"
        value={author}
        onChange={e => setAuthor(e.target.value)}
        required
      />
      <button type="submit">Add Book</button>
    </form>
  );
};

export default BookForm;
