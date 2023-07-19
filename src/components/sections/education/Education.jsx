import { Secondary } from "../../buttons/Button";
import Form from "./Form";

const Education = ({
  menuStates,
  setMenuStates,
  handleSubmit,
  tempData,
  setTempData,
}) => {

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
            {paperData.educational && (
              <span className="text-xs text-gray-500">
                ({paperData.general?.fullName}, {paperData.general?.phone},{" "}
                {paperData.general?.email})
              </span>
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
