import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

const ThemeToggle = () => {
  const contextType = useContext(ThemeContext);
  const { toggleTheme } = contextType;

  return <button onClick={toggleTheme}>Toggle Theme</button>;
};

export default ThemeToggle;
