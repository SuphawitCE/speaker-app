import React, { createContext, useState } from "react";
import Header from "./Header";
import Speakers from "./Speakers";

export const ThemeContext = createContext();

const App = () => {
  const [parentState, setParentState] = useState({
    showSessions: true,
    theme: "light",
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
        <Header
        // theme={theme}
        />
        <Speakers
        // theme={theme}
        // showSessions={showSessions}
        // setParentState={setParentState}
        />
      </div>
    </ThemeContext.Provider>
  );
};

export default App;
