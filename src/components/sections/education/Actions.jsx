import { useState } from "react";

const Actions = ({ block, educationApps, setEducationApps, isOpenEditModal, setIsOpenEditModal }) => {
  const handleDeleteBlock = () => {
    setEducationApps(educationApps.filter((item) => !block.id === item.id));
  };
  const handleEditBlock = () => {
    setIsOpenEditModal((prev) => (prev = !isOpenEditModal));
  };

  const handleConfirmEditBlock = () => {
    setIsOpenEditModal((prev) => (prev = !isOpenEditModal));
    setEducationApps(
      educationApps.map((item) => {
        if (item.id === block.id) {
          return { ...item, block };
        }
        return item;
      })
    );
  };

  return (
    <div className="border-l pl-4 flex gap-3">
      {!isOpenEditModal ? (
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
