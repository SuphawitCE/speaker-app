import React, { useContext, useEffect, useState } from "react";
import Speaker from "./Speaker";
import ReactPlaceholder from "react-placeholder";
// import useRequestDelay, { REQUEST_STATUS } from "./hooks/useRequestDelay";
import useRequestRest, { REQUEST_STATUS } from "./hooks/useRequestRest";
import { data } from "../SpeakerData";
import { SpeakerFilterContext } from "./contexts/SpeakerFilterContext";
import SpeakerAdd from "./SpeakerAdd";

const SpeakersList = (/*{ showSessions } */) => {
  const {
    data: speakersData,
    requestStatus,
    error,
    updateRecord,
    insertRecord,
    deleteRecord,
  } = useRequestRest();

  const { searchQuery, eventYear } = useContext(SpeakerFilterContext);

  if (requestStatus === REQUEST_STATUS.FAILURE) {
    return (
      <div className="text-danger">
        <h2>
          Error: <b>Loading Speaker Data Failed cause: {error}</b>
        </h2>
      </div>
    );
  }

  const searchRender = (speakersData) => {
    return speakersData
      .filter((speaker) => {
        // console.log("1: ", speaker);
        return (
          speaker.first.toLowerCase().includes(searchQuery) ||
          speaker.last.toLowerCase().includes(searchQuery)
        );
      })
      .filter((speaker) => {
        // console.log("2: ", speaker);
        return speaker.sessions.find((session) => {
          // console.log("3: ", session);
          return session.eventYear === eventYear;
        });
      })
      .map((speaker) => {
        // console.log("4: ", speaker);
        return (
          <Speaker
            key={speaker.id}
            speaker={speaker}
            // showSessions={showSessions}
            // onFavoriteToggle={(doneCallback) => {
            //   updateRecord(
            //     {
            //       ...speaker,
            //       favorite: !speaker.favorite,
            //     },
            //     doneCallback
            //   );
            // }}
            updateRecord={updateRecord}
            insertRecord={insertRecord}
            deleteRecord={deleteRecord}
          />
        );
      });
  };

  return (
    <div className="container speakers-list">
      <ReactPlaceholder
        type="media"
        row={15}
        className="speakerslist-placeholder"
        ready={requestStatus === REQUEST_STATUS.SUCCESS}
      >
        <SpeakerAdd eventYear={eventYear} insertRecord={insertRecord} />
        <div className="row">{searchRender(speakersData)}</div>
      </ReactPlaceholder>
    </div>
  );
};

export default SpeakersList;
