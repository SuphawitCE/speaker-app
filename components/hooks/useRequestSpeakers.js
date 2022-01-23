import React, { useEffect, useState } from "react";
import { data } from "../../SpeakerData";

export const REQUEST_STATUS = {
  LOADING: "loading",
  SUCCESS: "success",
  FAILURE: "failure",
};

const useRequestSpeakers = (delayTime = 1000) => {
  const [local, setLocal] = useState({
    speakersData: [],
    // isLoading: true,
    // hasErrored: false,
    error: "",
    requestStatus: REQUEST_STATUS.LOADING,
  });

  const {
    speakersData,
    // isLoading,
    // hasErrored,
    requestStatus,
    error,
  } = local;

  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  useEffect(() => {
    const callDelay = async () => {
      try {
        await delay(delayTime);

        // if want to test error fetching data uncomment throw
        // throw "Error happen in useEffect block";

        setLocal((prevState) => ({
          ...prevState,
          // isLoading: false,
          requestStatus: REQUEST_STATUS.SUCCESS,
          speakersData: data,
        }));
      } catch (e) {
        setLocal((prevState) => ({
          ...prevState,
          // isLoading: false,
          // hasErrored: true,
          requestStatus: REQUEST_STATUS.FAILURE,
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
    // isLoading,
    // hasErrored,
    requestStatus,
    error,
    onFavoriteToggle,
  };
};

export default useRequestSpeakers;
