import React, { useContext, useState } from "react";
import { SpeakerFilterContext } from "./contexts/SpeakerFilterContext";
import { SpeakerProvider, SpeakerContext } from "./contexts/SpeakerContext";
import SpeakerDelete from "./SpeakerDelete";

const Session = ({ title, room }) => {
  return (
    <span className="session w-100">
      {title} <strong>Room: {room.name}</strong>
    </span>
  );
};

const Sessions = (/* { sessions } */) => {
  const { eventYear } = useContext(SpeakerFilterContext);
  const { speaker } = useContext(SpeakerContext);
  const sessions = speaker.sessions;

  const renderSession = (sessions) =>
    sessions
      .filter((session) => {
        console.log("5: ", session);
        return session.eventYear === eventYear;
      })
      .map((session) => {
        console.log("6: ", session);
        return (
          <div className="session w-100" key={session.id}>
            <Session {...session} />
          </div>
        );
      });

  return <div className="sessionBox card h-250">{renderSession(sessions)}</div>;
};

const SpeakerImage = (/* { id, first, last } */) => {
  // const speakerObj = useContext(SpeakerContext);
  // const { speaker } = speakerObj;
  // const { id, first, last } = speaker;

  const {
    speaker: { id, first, last },
  } = useContext(SpeakerContext);

  return (
    <div className="speaker-img d-flex flex-row justify-content-center align-items-center h-300">
      <img
        className="contain-fit"
        src={`/images/speaker-${id}.jpg`}
        width="300"
        alt={`${first} ${last}`}
      />
    </div>
  );
};

const SpeakerFavorite = (/* { favorite, onFavoriteToggle } */) => {
  const { speaker, updateRecord } = useContext(SpeakerContext);

  const [local, setLocal] = useState({
    inTransition: false,
  });

  const { inTransition } = local;

  const doneCallback = () => {
    setLocal((prevState) => ({
      ...prevState,
      inTransition: false,
    }));

    console.log(
      `In SpeakerFavorite:doneCallback: ${new Date().getMilliseconds()}`
    );
  };

  return (
    <div className="action padB1">
      <span
        onClick={() => {
          setLocal((prevState) => ({
            ...prevState,
            inTransition: true,
          }));
          // return onFavoriteToggle(doneCallback);

          const recordValue = {
            ...speaker,
            favorite: !speaker.favorite,
          };

          updateRecord(recordValue, doneCallback);
        }}
      >
        <i
          className={
            speaker.favorite ? "fa fa-star orange" : "fa fa-star-o orange"
          }
        ></i>{" "}
        Favorite{" "}
        {inTransition ? <span className="fas fa-circle-notch fa-spin" /> : null}
      </span>
    </div>
  );
};

const SpeakerDemographics = (/* {
  first,
  last,
  bio,
  company,
  twitterHandle,
  favorite,
  onFavoriteToggle,
} */) => {
  const { speaker } = useContext(SpeakerContext);
  const { first, last, bio, company, twitterHandle, favorite } = speaker;

  return (
    <div className="speaker-info">
      <div className="d-flex justify-content-between mb-3">
        <h3 className="text-truncate w-200">
          {first} {last}
        </h3>
      </div>
      <SpeakerFavorite
      // favorite={favorite}
      // onFavoriteToggle={onFavoriteToggle}
      />
      <div>
        <p className="card-description">{bio}</p>
        <div className="social d-flex flex-row mt-4">
          <div className="company">
            <h5>Company</h5>
            <h6>{company}</h6>
          </div>
          <div className="twitter">
            <h5>Twitter</h5>
            <h6>{twitterHandle}</h6>
          </div>
        </div>
      </div>
    </div>
  );
};

const Speaker = ({
  speaker,
  updateRecord /* showSessions, onFavoriteToggle */,
  insertRecord,
  deleteRecord,
}) => {
  const { showSessions } = useContext(SpeakerFilterContext);

  // const { id, first, last, sessions } = speaker;

  return (
    <SpeakerProvider
      speaker={speaker}
      updateRecord={updateRecord}
      insertRecord={insertRecord}
      deleteRecord={deleteRecord}
    >
      <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-sm-12 col-xs-12">
        <div className="card card-height p-4 mt-4">
          {/* picture */}
          <SpeakerImage /* id={id} first={first} last={last} */ />
          {/* speaker info */}
          <SpeakerDemographics
          // {...speaker}
          // onFavoriteToggle={onFavoriteToggle}
          />
          {/* session */}
        </div>
        {showSessions === true ? <Sessions /* sessions={sessions} */ /> : null}
        <SpeakerDelete />
      </div>
    </SpeakerProvider>
  );
};

export default Speaker;
