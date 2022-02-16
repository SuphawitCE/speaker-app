import React from "react";

const SpeakerAdd = ({ eventYear, insertRecord }) => {
  const handleInsertRecord = (e) => {
    e.preventDefault();
    const firstLast = window.prompt("Enter first and last name: ", "");
    const firstLastValue = firstLast.split(" ");
    const generateUniqueId = String(Math.floor(Math.random() * 99999) + 1);
    // Date.now().toString(36) + Math.random().toString(36).substr(2);

    const insertValueRecord = {
      id: "99999",
      first: firstLastValue[0],
      last: firstLastValue[1],
      bio: "Bio not availiable",
      sessions: [
        {
          id: generateUniqueId,
          title: `New Session for ${firstLastValue[0]}`,
          room: {
            name: "Main Townhall",
          },
          eventYear,
        },
      ],
    };

    insertRecord(insertValueRecord);
  };

  return (
    <a href="#" className="addSes">
      {/* <i onClick={(e) => handleInsertRecord(e)}>+</i> */}
      <i onClick={handleInsertRecord}> + </i>
    </a>
  );
};

export default SpeakerAdd;
