import React, { useEffect, useState } from "react";
import Speaker from "./Speaker";
import { data } from "../SpeakerData";
import ReactPlaceholder from "react-placeholder";

const SpeakersList = ({ showSessions }) => {
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
        await delay(1000);

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

  if (hasErrored) {
    return (
      <div className="text-danger">
        <h2>
          Error: <b>Loading Speaker Data Failed cause: {error}</b>
        </h2>
      </div>
    );
  }

  // if (isLoading) {
  //   return (
  //     <div>
  //       <h2>Loading... isLoading-State: {JSON.stringify(isLoading)}</h2>
  //     </div>
  //   );
  // }

  return (
    <div className="container speakers-list">
      <ReactPlaceholder
        type="media"
        row={15}
        className="speakerslist-placeholder"
        ready={isLoading === false}
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
