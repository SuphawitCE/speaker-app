import React, { useContext } from "react";
import SpeakersList from "./SpeakersList";
import SpeakersToolbar from "./SpeakersToolbar";
import { ThemeContext } from "./contexts/ThemeContext";
import { SpeakerFilterProvider } from "./contexts/SpeakerFilterContext";

const Speakers = () => {
  // const { showSessions } = useContext(ThemeContext);
  return (
    <SpeakerFilterProvider startingShowSessions={false}>
      <SpeakersToolbar />
      <SpeakersList />
    </SpeakerFilterProvider>
  );
};

export default Speakers;
