import React, { useState } from "react";

const useSpeakerFilter = (startingShowSessions, startingEventYear) => {
  const [SpeakerState, setSpeakerState] = useState({
    showSessions: startingShowSessions,
    eventYear: startingEventYear,
    searchQuery: "",
  });

  const { showSessions, eventYear, searchQuery } = SpeakerState;

  const EVENT_YEAR = [
    "2008",
    "2009",
    "2010",
    "2011",
    "2012",
    "2013",
    "2014",
    "2015",
    "2016",
    "2017",
    "2018",
    "2019",
  ];

  const providerValue = {
    showSessions,
    eventYear,
    searchQuery,
    setSpeakerState,
    EVENT_YEAR,
  };

  return providerValue;
};

export default useSpeakerFilter;
