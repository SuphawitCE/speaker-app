import React, { useState } from "react";
import { data } from "../SpeakerData";
import SpeakersList from "./SpeakersList";
import Header from "./Header";
import SpeakersToolbar from "./SpeakersToolbar";

const Speakers = () => {
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
      <SpeakersToolbar
        theme={theme}
        setParentState={setParentState}
        showSessions={showSessions}
      />
      <SpeakersList data={data} />
    </div>
  );
};

export default Speakers;
