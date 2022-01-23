import React, { useEffect, useState } from "react";
import { data } from "../../SpeakerData";

const useRequestSpeakers = (delayTime = 1000) => {
  const [local, setLocal] = useState({
    speakersData: [],
    isLoading: true,
    hasErrored: false,
    error: "",
  });

  const { speakersData, isLoading, hasErrored, error } = local;

  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  useEffect(() => {
    const callDelay = async () => {
      try {
        await delay(delayTime);

        // if want to test error fetching data uncomment throw
        // throw "Error happen in useEffect block";

        setLocal((prevState) => ({
          ...prevState,
          isLoading: false,
          speakersData: data,
        }));
      } catch (e) {
        setLocal((prevState) => ({
          ...prevState,
          isLoading: false,
          hasErrored: true,
          error: e,
        }));
      }
    };

    callDelay();
  }, []);

  const onFavoriteToggle = (id) => {
    const speakersRecPrevious = speakersData.find((rec) => rec.id === id);

    const speakerRecUpdated = {
      ...speakersRecPrevious,
      favorite: !speakersRecPrevious.favorite,
    };

    const speakersDataNew = speakersData.map((rec) =>
      rec.id === id ? speakerRecUpdated : rec
    );

    setLocal((prevState) => ({
      ...prevState,
      speakersData: speakersDataNew,
    }));
  };

  return {
    speakersData,
    isLoading,
    hasErrored,
    error,
    onFavoriteToggle,
  };
};

export default useRequestSpeakers;
