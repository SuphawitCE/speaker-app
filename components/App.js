import React, { useState } from "react";
import Header from "./Header";
import Speakers from "./Speakers";

const App = () => {
  const [parentState, setParentState] = useState({
    showSessions: true,
    theme: "light",
  });
  const { showSessions, theme } = parentState;
  return (
    <div
      className={
        theme === "light" ? "container-fluid light" : "container-fluid dark"
      }
    >
      <Header theme={theme} />
      <Speakers
        theme={theme}
        showSessions={showSessions}
        setParentState={setParentState}
      />
    </div>
  );
};

export default App;
