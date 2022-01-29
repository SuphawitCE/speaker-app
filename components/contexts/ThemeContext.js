import React, { createContext, useState } from "react";

export const ThemeContext = createContext();

const ThemeProvider = ({ startingTheme, children }) => {
  //  Global state
  const [parentState, setParentState] = useState({
    showSessions: true,
    theme: startingTheme,
    // Add state here
  });
  const { showSessions, theme } = parentState;

  const providerSharedState = { showSessions, theme, setParentState };

  return (
    <ThemeContext.Provider value={providerSharedState}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeProvider };
