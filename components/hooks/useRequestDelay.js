import React, { useEffect, useState } from "react";

export const REQUEST_STATUS = {
  LOADING: "loading",
  SUCCESS: "success",
  FAILURE: "failure",
};

const useRequestDelay = (delayTime = 1000, initialData = []) => {
  const [local, setLocal] = useState({
    data: initialData,
    error: "",
    requestStatus: REQUEST_STATUS.LOADING,
  });

  const { requestStatus, error, data } = local;

  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  useEffect(() => {
    const callDelay = async () => {
      try {
        await delay(delayTime);

        // if want to test error fetching data uncomment throw
        // throw "Error happen in useEffect block";

        setLocal((prevState) => ({
          ...prevState,
          requestStatus: REQUEST_STATUS.SUCCESS,
        }));
      } catch (e) {
        setLocal((prevState) => ({
          ...prevState,
          requestStatus: REQUEST_STATUS.FAILURE,
          error: e,
        }));
      }
    };

    callDelay();
  }, []);

  const updateRecord = (recordUpdated, doneCallback) => {
    const originalRecords = [...data];
    const newRecords = data.map((rec) =>
      rec.id === recordUpdated.id ? recordUpdated : rec
    );

    const delayFunction = async () => {
      try {
        setLocal((prevState) => ({
          ...prevState,
          data: newRecords,
        }));

        await delay(delayTime);

        if (doneCallback) doneCallback();
      } catch (e) {
        console.log("error thrown inside delayFunction", e);
        if (doneCallback) doneCallback();

        setLocal((prevState) => ({
          ...prevState,
          data: originalRecords,
        }));
      }
    };

    delayFunction();
  };

  return {
    data,
    requestStatus,
    error,
    updateRecord,
  };
};

export default useRequestDelay;
