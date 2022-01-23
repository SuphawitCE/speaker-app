import React from "react";
import SpeakersList from "./SpeakersList";
import SpeakersToolbar from "./SpeakersToolbar";

const Speakers = ({
  // data,
  theme,
  showSessions,
  setParentState,
}) => {
  return (
    <>
      <SpeakersToolbar
        theme={theme}
        setParentState={setParentState}
        showSessions={showSessions}
      />
      <SpeakersList
        // data={data}
        showSessions={showSessions}
      />
    </>
  );
};

export default Speakers;
