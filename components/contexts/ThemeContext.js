import React, { createContext, useState } from "react";
import useTheme from "../hooks/useTheme";

export const ThemeContext = createContext();

const ThemeProvider = ({ startingTheme, children }) => {
  //  Global state
  // const [parentState, setParentState] = useState({
  //   showSessions: true,
  //   theme: startingTheme,
  //  // Add state here
  // });
  // const {
  //   showSessions,
  //    theme
  // } = parentState;

  const { theme, setTheme } = useTheme(startingTheme);

  const providerSharedState = {
    // showSessions,
    theme,
    setTheme,
    // setParentState,
  };

  return (
    <ThemeContext.Provider value={providerSharedState}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeProvider };
