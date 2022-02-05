import React, { createContext } from "react";
import useSpeakerFilter from "../hooks/useSpeakerFilter";

const SpeakerFilterContext = createContext();

const SpeakerFilterProvider = ({
  children,
  startingShowSessions = false,
  startingEventYear = "2019",
}) => {
  const { showSessions, eventYear, searchQuery, EVENT_YEAR, setSpeakerState } =
    useSpeakerFilter(startingShowSessions, startingEventYear);

  const providerSharedState = {
    showSessions,
    eventYear,
    searchQuery,
    EVENT_YEAR,
    setSpeakerState,
  };

  return (
    <SpeakerFilterContext.Provider value={providerSharedState}>
      {children}
    </SpeakerFilterContext.Provider>
  );
};

export { SpeakerFilterContext, SpeakerFilterProvider };
