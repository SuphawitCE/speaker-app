import React, { useState } from "react";
import Speaker from "./Speaker";
import { data } from "../SpeakerData";

const SpeakersList = ({
  // data,
  showSessions,
}) => {
  // const [speakersData, setSpeakersData] = useState(data);

  const [local, setLocal] = useState({
    speakersData: data,
  });

  const { speakersData } = local;

  const onFavoriteToggle = (id) => {
    const speakersRecPrevious = speakersData.find((rec) => rec.id === id);

    const speakerRecUpdated = {
      ...speakersRecPrevious,
      favorite: !speakersRecPrevious.favorite,
    };

    const speakersDataNew = speakersData.map((rec) =>
      rec.id === id ? speakerRecUpdated : rec
    );

    // setSpeakersData(speakersDataNew);
    setLocal((prevState) => ({
      ...prevState,
      speakersData: speakersDataNew,
    }));
  };

  return (
    <div className="container speakers-list">
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
    </div>
  );
};

export default SpeakersList;
