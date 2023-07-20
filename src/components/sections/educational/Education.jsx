import { PaperDataContext } from "../../../context/PaperDataContext";
import Form from "./Form";
import { useContext } from "react";

const Education = ({
  menuStates,
  setMenuStates,
  handleSubmit,
  tempData,
  setTempData,
}) => {
  const { paperData, setPaperData } = useContext(PaperDataContext);

  return (
    <div className="relative flex flex-col gap-3">
      <div
        className="w-full justify-between flex cursor-pointer"
        onClick={() =>
          setMenuStates({ ...menuStates, education: !menuStates.education })
        }
      >
        <div className="flex gap-4 items-baseline">
          <i className="fa-solid fa-graduation-cap w-4"></i>
          <div>
            <h1 className="text-xl font-semibold z-50">Education</h1>
            {paperData.educational.educationApps && (
              <div className="text-xs text-gray-500 flex gap-2">
                {paperData.educational?.educationApps?.map((block) => (
                  <span key={block.id}>
                    {block.study} - <strong>{block.school}</strong>
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
        <i
          className={`fa-solid fa-chevron-down ${
            menuStates.education ? "rotate-180" : ""
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

export default Education;
