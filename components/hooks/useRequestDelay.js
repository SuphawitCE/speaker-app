import React, { useEffect, useState } from "react";
// import { data } from "../../SpeakerData";

export const REQUEST_STATUS = {
  LOADING: "loading",
  SUCCESS: "success",
  FAILURE: "failure",
};

const useRequestDelay = (delayTime = 1000, initialData = []) => {
  const [local, setLocal] = useState({
    data: initialData,
    // isLoading: true,
    // hasErrored: false,
    error: "",
    requestStatus: REQUEST_STATUS.LOADING,
  });

  const {
    // speakersData,
    // isLoading,
    // hasErrored,
    requestStatus,
    error,
    data,
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
          // speakersData: data,
          // data,
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

  const updateRecord = (recordUpdated) => {
    const newRecords = data.map((rec) =>
      rec.id === recordUpdated.id ? recordUpdated : rec
    );

    const delayFunction = async () => {
      try {
        await delay(delayTime);
        setLocal((prevState) => ({
          ...prevState,
          data: newRecords,
        }));
      } catch (e) {
        console.log("error thrown inside delayFunction", e);
      }
    };

    delayFunction();
  };

  // const onFavoriteToggle = (id) => {
  //   const speakersRecPrevious = speakersData.find((rec) => rec.id === id);

  //   const speakerRecUpdated = {
  //     ...speakersRecPrevious,
  //     favorite: !speakersRecPrevious.favorite,
  //   };

  //   const speakersDataNew = speakersData.map((rec) =>
  //     rec.id === id ? speakerRecUpdated : rec
  //   );

  //   setLocal((prevState) => ({
  //     ...prevState,
  //     speakersData: speakersDataNew,
  //   }));
  // };

  return {
    // speakersData,
    data,
    // isLoading,
    // hasErrored,
    requestStatus,
    error,
    // onFavoriteToggle,
    updateRecord,
  };
};

export default useRequestDelay;
