import { createContext, useEffect, useState } from "react";
import { data } from "./data";

export const PaperDataContext = createContext(null);

const PaperProvider = ({ children }) => {
  const savedData = localStorage.getItem("paperData") || data;
  const [paperData, setPaperData] = useState(JSON.parse(savedData));

  // Save to local storage
  useEffect(() => {
    localStorage.setItem("paperData", JSON.stringify(paperData));
  }, [paperData]);

  useEffect(() => {
    if (savedData) {
      setPaperData(JSON.parse(savedData));
    }
  }, []);

  return (
    <PaperDataContext.Provider value={{ paperData, setPaperData }}>
      {children}
    </PaperDataContext.Provider>
  );
};

export default PaperProvider;
