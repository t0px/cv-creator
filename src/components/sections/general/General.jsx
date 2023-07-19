import { Secondary } from "../../buttons/Button";
import Form from "./Form";

const General = ({
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
          setMenuStates({ ...menuStates, general: !menuStates.general })
        }
      >
        <div className="flex gap-2 items-center">
          <span className={`w-fit ${menuStates.general ? "rotate-90" : ""}`}>
            ▶
          </span>
          <h1 className="text-xl font-semibold z-50">General</h1>
        </div>
        <i className="fa-solid fa-chevron-down"></i>
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
