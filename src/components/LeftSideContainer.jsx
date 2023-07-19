import React, { useContext, useState } from "react";

import Menu from "./Menu";
import BottomBar from "./BottomBar";
import SaveChangesBar from "./SaveChangesBar";
import { PaperDataContext } from "../context/PaperDataContext";

const LeftSideContainer = () => {
  const { paperData, setPaperData } = useContext(PaperDataContext);
  // Global tempdata for all forms
  const [tempData, setTempData] = useState(paperData);

  // Global save changes
  const handleSubmit = (e) => {
    e.preventDefault();
    setPaperData(tempData);
  };

  return (
    <div className="flex-col flex gap-4 flex-1">
      <Menu
        handleSubmit={handleSubmit}
        tempData={tempData}
        setTempData={setTempData}
      />
      <div className="flex gap-4">
        <BottomBar />
        <SaveChangesBar handleSubmit={handleSubmit}/>
      </div>
    </div>
  );
};

export default LeftSideContainer;
