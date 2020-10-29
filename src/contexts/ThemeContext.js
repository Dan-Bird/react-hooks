import React, { createContext, useState } from 'react';

const themeObj = {
  isLightTheme: true,
  light: { syntax: '#555', ui: '#ddd', bg: '#eee' },
  dark: { syntax: '#ddd', ui: '#333', bg: '#555' },
};

export const ThemeContext = createContext(themeObj);

const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState(themeObj);

  const toggleTheme = () => {
    setTheme(theme => ({ ...theme, isLightTheme: !theme.isLightTheme }));
  };

  return (
    <ThemeContext.Provider value={{ ...theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
