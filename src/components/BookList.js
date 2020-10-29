import React, { useContext, useState } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

const initialBookList = [
  { title: 'the way of kings', id: 1 },
  { title: 'the name of the wind', id: 2 },
  { title: 'the final empire', id: 3 },
];

const BookList = () => {
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;

  const [books] = useState(initialBookList);

  return (
    <div
      className="book-list"
      style={{ backgroundColor: theme.bg, color: theme.syntax }}
    >
      <ul>
        {books.map(book => (
          <li key={book.id} style={{ backgroundColor: theme.ui }}>
            {book.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookList;
