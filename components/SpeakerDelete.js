import React, { useContext, useState } from "react";
import { SpeakerContext } from "./contexts/SpeakerContext";

const SpeakerDelete = () => {
  const { speaker, deleteRecord } = useContext(SpeakerContext);

  console.log("sss: ", speaker);

  const handleDeleteRecord = (e) => {
    e.preventDefault();
    if (
      confirm(`Are you sure to delete this ${speaker.first} ${speaker.last}`)
    ) {
      deleteRecord(speaker);
    }
  };

  return (
    <span className="session w-100">
      <a href="#" className="remSes">
        {/* <i onClick={handleDeleteRecord}> - </i> */}
        <i onClick={handleDeleteRecord}>-</i>
      </a>
      <span className="padL2">Delete Speaker</span>
    </span>
  );
};

export default SpeakerDelete;
