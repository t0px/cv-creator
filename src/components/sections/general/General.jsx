import { useContext } from "react";
import { Secondary } from "../../buttons/Button";
import Form from "./Form";
import { PaperDataContext } from "../../../context/PaperDataContext";

const General = ({
  menuStates,
  setMenuStates,
  handleSubmit,
  tempData,
  setTempData,
}) => {

    const {paperData, setPaperData} = useContext(PaperDataContext);

  return (
    <div className="relative flex flex-col gap-3">
      <div
        className="w-full justify-between flex cursor-pointer"
        onClick={() =>
          setMenuStates({ ...menuStates, general: !menuStates.general })
        }
      >
        <div className="flex gap-4 items-baseline">
          <i className="fa-solid fa-user w-4"></i>
          <div>
            <h1 className="text-xl font-semibold z-50">General</h1>
            {paperData.general && (
              <span className="text-xs text-gray-500">
                {" "}{paperData.general?.fullName}, {paperData.general?.phone},{" "}
                {paperData.general?.email}{" "}
              </span>
            )}
          </div>
        </div>
        <i
          className={`fa-solid fa-chevron-down ${
            menuStates.general ? "rotate-180" : ""
          }`}
        ></i>
      </div>
      <Form
        menuStates={menuStates}
        handleSubmit={handleSubmit}
        tempData={tempData}
        setTempData={setTempData}
      />
    </div>
  );
};

export default General;
