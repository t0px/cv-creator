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
        className="flex gap-2 items-center cursor-pointer"
        onClick={() =>
          setMenuStates({ ...menuStates, education: !menuStates.education })
        }
      >
        <span className={`w-fit ${menuStates.education ? "rotate-90" : ""}`}>
          ▶
        </span>
        <h1 className="text-xl font-semibold z-50">Education</h1>
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
