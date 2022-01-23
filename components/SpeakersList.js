import React, { useEffect, useState } from "react";
import Speaker from "./Speaker";
import ReactPlaceholder from "react-placeholder";
import useRequestDelay, { REQUEST_STATUS } from "./hooks/useRequestDelay";
import { data } from "../SpeakerData";

const SpeakersList = ({ showSessions }) => {
  const {
    data: speakersData,
    // isLoading,
    // hasErrored,
    requestStatus,
    error,
    // onFavoriteToggle,
    updateRecord,
  } = useRequestDelay(500, data);

  if (requestStatus === REQUEST_STATUS.FAILURE) {
    return (
      <div className="text-danger">
        <h2>
          Error: <b>Loading Speaker Data Failed cause: {error}</b>
        </h2>
      </div>
    );
  }

  return (
    <div className="container speakers-list">
      <ReactPlaceholder
        type="media"
        row={15}
        className="speakerslist-placeholder"
        ready={requestStatus === REQUEST_STATUS.SUCCESS}
      >
        <div className="row">
          {speakersData.map((speaker) => {
            return (
              <Speaker
                key={speaker.id}
                speaker={speaker}
                showSessions={showSessions}
                onFavoriteToggle={() => {
                  // onFavoriteToggle(speaker.id);
                  updateRecord({
                    ...speaker,
                    favorite: !speaker.favorite,
                  });
                }}
              />
            );
          })}
        </div>
      </ReactPlaceholder>
    </div>
  );
};

export default SpeakersList;
