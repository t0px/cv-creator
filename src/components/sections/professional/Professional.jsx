import { PaperDataContext } from "../../../context/PaperDataContext";
import Form from "./Form";
import { useContext } from "react";

const Professional = ({
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
          setMenuStates({
            ...menuStates,
            professional: !menuStates.professional,
          })
        }
      >
        <div className="flex gap-4 items-baseline">
          <i className="fa-solid fa-briefcase"></i>
          <div>
            <h1 className="text-xl font-semibold z-50">Professional</h1>
            {paperData.professional.professionalApps && (
              <div className="text-xs text-gray-500 flex gap-2">
                {paperData.professional?.professionalApps?.map((block) => (
                  <span key={block.id}>
                    {block.title} - <strong>{block.company}</strong>
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
        <i
          className={`fa-solid fa-chevron-down ${
            menuStates.professional ? "rotate-180" : ""
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

export default Professional;
