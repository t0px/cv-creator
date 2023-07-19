// Menu.jsx
import React, { useContext, useState } from "react";
import General from "./sections/general/General";
import Education from "./sections/education/Education";
import Professional from "./sections/professional/Professional";
import { PaperDataContext } from "../context/PaperDataContext";

const Menu = ({ handleSubmit, tempData, setTempData }) => {

  const [menuStates, setMenuStates] = useState({
    general: false,
    education: false,
    professional: false,
  });



  return (
    <div className="flex flex-col overflow-y-scroll p-6 bg-white shadow-2xl rounded-sm flex-1 gap-4">
      <General
        menuStates={menuStates}
        setMenuStates={setMenuStates}
        handleSubmit={handleSubmit}
        tempData={tempData}
        setTempData={setTempData}
      />
      <hr />
      <Education
        menuStates={menuStates}
        setMenuStates={setMenuStates}
        handleSubmit={handleSubmit}
        tempData={tempData}
        setTempData={setTempData}
      />
      <hr />
      <Professional
        menuStates={menuStates}
        setMenuStates={setMenuStates}
        handleSubmit={handleSubmit}
        tempData={tempData}
        setTempData={setTempData}
      />
      <hr />
    </div>
  );
};

export default Menu;
