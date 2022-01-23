import React, { useState } from "react";
import Speaker from "./Speaker";
import { data } from "../SpeakerData";

const SpeakersList = ({
  // data,
  showSessions,
}) => {
  const [speakersData, setSpeakersData] = useState(data);

  return (
    <div className="container speakers-list">
      <div className="row">
        {speakersData.map((speaker) => {
          return (
            <Speaker
              key={speaker.id}
              speaker={speaker}
              showSessions={showSessions}
            />
          );
        })}
      </div>
    </div>
  );
};

export default SpeakersList;
