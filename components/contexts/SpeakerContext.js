import { createContext } from "react";

const SpeakerContext = createContext();

const SpeakerProvider = ({ children, speaker, updateRecord }) => {
  const providerSharedState = {
    speaker,
    updateRecord,
  };

  return (
    <SpeakerContext.Provider value={providerSharedState}>
      {children}
    </SpeakerContext.Provider>
  );
};

export { SpeakerContext, SpeakerProvider };
