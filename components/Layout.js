import React, { createContext, useState } from "react";

export const ThemeContext = createContext();

const Layout = ({ startingTheme, children }) => {
  const [parentState, setParentState] = useState({
    showSessions: true,
    theme: startingTheme,
  });
  const { showSessions, theme } = parentState;

  const providerSharedState = { showSessions, theme, setParentState };

  return (
    <ThemeContext.Provider value={providerSharedState}>
      <div
        className={
          theme === "light" ? "container-fluid light" : "container-fluid dark"
        }
      >
        {children}
        {/* <Header
        // theme={theme}
        />
        <Speakers
        // theme={theme}
        // showSessions={showSessions}
        // setParentState={setParentState}
        /> */}
      </div>
    </ThemeContext.Provider>
  );
};

export default Layout;
