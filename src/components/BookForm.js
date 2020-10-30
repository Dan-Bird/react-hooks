import React, { useContext, useState } from 'react';
import { BookContext } from '../contexts/BookContext';

const BookForm = () => {
  const { addBook } = useContext(BookContext);
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    addBook(title, author);
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
