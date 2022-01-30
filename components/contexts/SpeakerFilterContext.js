import React, { createContext } from "react";
import useSpeakerFilter from "../hooks/useSpeakerFilter";
const SpeakerFilterContext = createContext();

const SpeakerFilterProvider = ({
  children,
  startingShowSessions = false,
  startingEventYear = "2019",
}) => {
  const {
    showSessions,
    setShowSessions,
    eventYear,
    setEventYear,
    searchQuery,
    setSearchQuery,
    EVENT_YEAR,
  } = useSpeakerFilter(startingShowSessions, startingEventYear);

  const providerSharedState = {
    showSessions,
    setShowSessions,
    eventYear,
    setEventYear,
    searchQuery,
    setSearchQuery,
    EVENT_YEAR,
  };

  return (
    <SpeakerFilterContext.Provider value={providerSharedState}>
      {children}
    </SpeakerFilterContext.Provider>
  );
};

export { SpeakerFilterContext, SpeakerFilterProvider };
