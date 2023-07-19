import { Secondary } from "../../buttons/Button";
import Form from "./Form";

const Professional = ({
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
          setMenuStates({ ...menuStates, professional: !menuStates.professional })
        }
      >
        <span className={`w-fit ${menuStates.professional ? "rotate-90" : ""}`}>
          ▶
        </span>
        <h1 className="text-xl font-semibold z-50">Professional</h1>
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
