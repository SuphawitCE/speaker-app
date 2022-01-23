import React, { useEffect, useState } from "react";
import Speaker from "./Speaker";
import ReactPlaceholder from "react-placeholder";
import useRequestSpeakers, { REQUEST_STATUS } from "./hooks/useRequestSpeakers";

const SpeakersList = ({ showSessions }) => {
  const {
    speakersData,
    // isLoading,
    // hasErrored,
    requestStatus,
    error,
    onFavoriteToggle,
  } = useRequestSpeakers(1000);

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
                  onFavoriteToggle(speaker.id);
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
