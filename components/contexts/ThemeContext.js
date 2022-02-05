import React, { createContext, useState } from "react";
import useTheme from "../hooks/useTheme";

export const ThemeContext = createContext();

const ThemeProvider = ({ startingTheme, children }) => {
  const { theme, setTheme } = useTheme(startingTheme);

  const providerSharedState = {
    theme,
    setTheme,
  };

  return (
    <ThemeContext.Provider value={providerSharedState}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeProvider };
