import React, { useContext } from "react";
import SpeakersList from "./SpeakersList";
import SpeakersToolbar from "./SpeakersToolbar";
import { ThemeContext } from "./App";

const Speakers = (/*{ theme, showSessions, setParentState } */) => {
  const { showSessions } = useContext(ThemeContext);
  return (
    <>
      <SpeakersToolbar
      // theme={theme}
      // setParentState={setParentState}
      // showSessions={showSessions}
      />
      <SpeakersList showSessions={showSessions} />
    </>
  );
};

export default Speakers;
