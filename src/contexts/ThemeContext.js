import React, { createContext, useState } from 'react';

const themeObj = {
  isLightTheme: true,
  light: { syntax: '#555', ui: '#ddd', bg: '#eee' },
  dark: { syntax: '#ddd', ui: '#333', bg: '#555' },
};

export const ThemeContext = createContext(themeObj);

const ThemeContextProvider = ({ children }) => {
  const [theme] = useState(themeObj);

  return (
    <ThemeContext.Provider value={{ ...theme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
