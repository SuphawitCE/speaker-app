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

  const updateRecord = (record, doneCallback) => {
    const originalRecords = [...data];
    const newRecords = data.map((rec) => (rec.id === record.id ? record : rec));

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

  const insertRecord = (record, doneCallback) => {
    const originalRecords = [...data];
    const newRecords = [record, ...data];

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

  const deleteRecord = (record, doneCallback) => {
    const originalRecords = [...data];
    const newRecords = data.filter((rec) => rec.id !== record.id);

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
    insertRecord,
    deleteRecord,
  };
};

export default useRequestDelay;
