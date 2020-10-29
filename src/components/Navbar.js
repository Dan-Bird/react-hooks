import React, { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { ThemeContext } from '../contexts/ThemeContext';

const Navbar = () => {
  const { isAuthenticated, toggleAuth } = useContext(AuthContext);
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;

  return (
    <nav style={{ backgroundColor: theme.ui, color: theme.syntax }}>
      <h1>Context App</h1>
      <span onClick={toggleAuth} style={{ cursor: 'pointer' }}>
        {isAuthenticated ? 'Logged in' : 'Logged out'}
      </span>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;
