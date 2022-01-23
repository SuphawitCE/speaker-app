import React from "react";
import SpeakersList from "./SpeakersList";
import SpeakersToolbar from "./SpeakersToolbar";

const Speakers = ({ theme, showSessions, setParentState }) => {
  return (
    <>
      <SpeakersToolbar
        theme={theme}
        setParentState={setParentState}
        showSessions={showSessions}
      />
      <SpeakersList showSessions={showSessions} />
    </>
  );
};

export default Speakers;
