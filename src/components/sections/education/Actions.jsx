import { useState } from "react";

const Actions = ({ block, educationApps, setEducationApps }) => {

  const handleDeleteBlock = () => {
    setEducationApps(educationApps.filter((item) => block.id !== item.id));
  };
  const handleEditBlock = () => {
    setEducationApps(prevApps => prevApps.map(item => {
        if (item.id === block.id) {
            return {...item, editing: !item.editing}
        }
        return item;
    }))
  };

  const handleConfirmEditBlock = () => {
        setEducationApps((prevApps) =>
          prevApps.map((item) => {
            if (item.id === block.id) {
              return { ...item, editing: !item.editing };
            }
            return item;
          })
        );
  };

  return (
    <div className="border-l pl-4 flex gap-3">
      {!block.editing ? (
        <span
          className="cursor-pointer select-none"
          onClick={() => handleEditBlock()}
        >
          <i className="fa-solid fa-pen-to-square text-blue-600"></i>
        </span>
      ) : (
        <span
          className="cursor-pointer select-none"
          onClick={() => handleConfirmEditBlock()}
        >
          <i className="fa-solid fa-check text-blue-600"></i>
        </span>
      )}

      <span
        className="cursor-pointer select-none"
        onClick={() => handleDeleteBlock()}
      >
        <i className="fa-solid fa-trash text-blue-600"></i>
      </span>
    </div>
  );
};

export default Actions;
