import React, { useContext, useState, useRef } from 'react';
import { BookContext } from '../contexts/BookContext';
import { actionTypes } from '../reducers/actionTypes';

const BookForm = () => {
  const { dispatch } = useContext(BookContext);
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const bookTitleRef = useRef(null);

  const handleSubmit = e => {
    e.preventDefault();
    dispatch({
      type: actionTypes.ADD_BOOK,
      book: {
        title,
        author,
      },
    });
    bookTitleRef.current.focus();
    setTitle('');
    setAuthor('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        ref={bookTitleRef}
        type="text"
        name="book-title"
        id="book-title"
        placeholder="Book title"
        value={title}
        onChange={e => setTitle(e.target.value)}
        required
      />
      <input
        type="text"
        name="book-author"
        id="book-author"
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
