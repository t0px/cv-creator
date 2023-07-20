import { useState } from "react";
import { Toaster, toast } from "react-hot-toast";

const Actions = ({ block, educationApps, setEducationApps }) => {
  const handleDeleteBlock = () => {
    setEducationApps(educationApps.filter((item) => block.id !== item.id));
    toast(`Successfully deleted ${block.study} block.`, {
      icon: <i className="fa-solid fa-trash"></i>,
    });
  };

  const changeEditState = () => {
    setEducationApps((prevApps) =>
      prevApps.map((item) => {
        if (item.id === block.id) {
          return { ...item, editing: !item.editing };
        }
        return item;
      })
    );
  }

  return (
    <div className="border-l pl-4 flex gap-3">
      {!block.editing ? (
        <span
          className="cursor-pointer select-none"
          onClick={() => changeEditState()}
        >
          <i className="fa-solid fa-pen-to-square text-blue-600"></i>
        </span>
      ) : (
        <span
          className="cursor-pointer select-none"
          onClick={() => changeEditState()}
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
      <Toaster
        reverseOrder={true}
        position="bottom-right"
        gutter={-10}
        toastOptions={{
          style: {
            color: "white",
            backgroundColor: "#2563eb",
            borderRadius: "2px",
          },
          duration: 2000,
        }}
      />
    </div>
  );
};

export default Actions;
