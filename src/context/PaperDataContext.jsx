import { createContext, useEffect, useState } from "react";
import { data } from "./data";

export const PaperDataContext = createContext(null);

const PaperProvider = ({ children }) => {
  const savedData = JSON.parse(localStorage.getItem("paperData")) || data;

  const [paperData, setPaperData] = useState(savedData);

  // save to local storage whenever paperData changes
  useEffect(() => {
    localStorage.setItem("paperData", JSON.stringify(paperData));
  }, [paperData]);

  return (
    <PaperDataContext.Provider value={{ paperData, setPaperData }}>
      {children}
    </PaperDataContext.Provider>
  );
};

export default PaperProvider;
