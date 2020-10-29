import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

const Navbar = () => {
  const themeContext = useContext(ThemeContext);
  const { isLightTheme, light, dark } = themeContext;

  const theme = isLightTheme ? light : dark;

  return (
    <nav style={{ backgroundColor: theme.bg, color: theme.syntax }}>
      <h1>Context App</h1>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;
