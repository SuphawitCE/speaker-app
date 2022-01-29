import React, { useContext } from "react";
import SpeakersList from "./SpeakersList";
import SpeakersToolbar from "./SpeakersToolbar";
import { ThemeContext } from "./Layout";

const Speakers = () => {
  const { showSessions } = useContext(ThemeContext);
  return (
    <>
      <SpeakersToolbar />
      <SpeakersList showSessions={showSessions} />
    </>
  );
};

export default Speakers;
