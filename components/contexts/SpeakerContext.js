import { createContext } from "react";

const SpeakerContext = createContext();

const SpeakerProvider = ({
  children,
  speaker,
  updateRecord,
  insertRecord,
  deleteRecord,
}) => {
  const providerSharedState = {
    speaker,
    updateRecord,
    insertRecord,
    deleteRecord,
  };

  return (
    <SpeakerContext.Provider value={providerSharedState}>
      {children}
    </SpeakerContext.Provider>
  );
};

export { SpeakerContext, SpeakerProvider };
