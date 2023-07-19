import { useContext, useEffect, useState } from "react";
import { PaperDataContext } from "../../../context/PaperDataContext";
import Actions from "./Actions";
import { v4 as uuidv4 } from "uuid";

const Form = ({ menuStates, handleSubmit, tempData, setTempData }) => {
  const { paperData, setPaperData } = useContext(PaperDataContext);
    const [isOpenEditModal, setIsOpenEditModal] = useState(false);

  const [educationBlock, setEducationBlock] = useState({
    id: uuidv4(),
    school: "",
    study: "",
    date: "",
  });

  const [educationApps, setEducationApps] = useState(paperData.educational.educationApps || []);
  const [editedBlock, setEditedBlock] = useState({
    school: "",
    study: "",
    date: "",
  })

const handleEducationBlockSubmit = () => {
  setEducationApps((prevEducationApps) => [
    ...prevEducationApps,
    educationBlock,
  ]);

  setEducationBlock({
    id: uuidv4(),
    school: "",
    study: "",
    date: "",
  });
};


  useEffect(() => {
    if (educationApps.length > 0 || educationApps !== null) {
      setTempData({
        ...tempData,
        educational: { ...tempData.educational, educationApps },
      });
    }
  }, [setEducationApps, educationApps]);

  return (
    <form
      onSubmit={(e) => handleSubmit(e)}
      className={`${
        !menuStates.education ? "hidden" : ""
      } text-slate-700 px-6 py-6`}
    >
      <hr className="mb-6" />
      <div className="grid grid-cols-4 gap-4">
        <div className="flex gap-3 flex-col justify-center">
          <label className="font-medium">School Name:</label>
          <input
            value={educationBlock.school}
            type="text"
            className="rounded-sm px-4 py-1 border border-gray-300"
            onChange={(e) =>
              setEducationBlock({ ...educationBlock, school: e.target.value })
            }
          />
        </div>
        <div className="flex gap-3 flex-col justify-center">
          <label className="font-medium">Title of Study:</label>
          <input
            value={educationBlock.study}
            type="text"
            className="rounded-sm px-4 py-1 border border-gray-300"
            onChange={(e) =>
              setEducationBlock({ ...educationBlock, study: e.target.value })
            }
          />
        </div>
        <div className="flex gap-3 flex-col justify-center">
          <label className="font-medium">Dates of Study:</label>
          <input
            value={educationBlock.date}
            type="text"
            className="rounded-sm px-4 py-1 border border-gray-300"
            onChange={(e) =>
              setEducationBlock({ ...educationBlock, date: e.target.value })
            }
          />
        </div>
        <input
          onClick={() => handleEducationBlockSubmit()}
          type="button"
          value="Add"
          className="cursor-pointer bg-blue-600 col-start-4 self-end hover:bg-blue-500 duration-300 ease-in-out text-white rounded-sm px-4 py-1"
        />
        {/* <input
          onClick={(e) => handleSubmit(e)}
          type="submit"
          value="Save Changes"
          className="cursor-pointer col-span-4 bg-blue-600 hover:bg-blue-500 duration-300 ease-in-out text-white rounded-sm px-4 py-1"
        /> */}
        {educationApps.length > 0 ? (
          <div className="rounded-sm col-span-4 flex flex-col gap-4">
            {educationApps.map((block) => (
              <div
                key={block.id}
                className="relative flex justify-between items-center"
              >
                <div className="grid grid-cols-3 flex-1 pr-4 gap-6">
                  <span
                    contentEditable={isOpenEditModal}
                    onBlur={(e) =>
                      setEducationApps(
                        educationApps.map((item) => {
                          if (item.id === block.id) {
                            item.school = e.target.innerText;
                          }
                          return item;
                        })
                      )
                    }
                    className={`${
                      isOpenEditModal ? "border-b border-black text-center" : ""
                    }`}
                  >
                    {block.school}
                  </span>
                  <span
                    contentEditable={isOpenEditModal}
                    onBlur={(e) =>
                      setEducationApps(
                        educationApps.map((item) => {
                          if (item.id === block.id) {
                            item.study = e.target.innerText;
                          }
                          return item;
                        })
                      )
                    }
                    className={`${
                      isOpenEditModal ? "border-b border-black text-center" : ""
                    }`}
                  >
                    {block.study}
                  </span>
                  <span
                    contentEditable={isOpenEditModal}
                    onBlur={(e) =>
                      setEducationApps(
                        educationApps.map((item) => {
                          if (item.id === block.id) {
                            item.date = e.target.innerText;
                          }
                          return item;
                        })
                      )
                    }
                    className={`${
                      isOpenEditModal ? "border-b border-black text-center" : ""
                    }`}
                  >
                    {block.date}
                  </span>
                </div>
                <Actions
                  editedBlock={editedBlock}
                  setEditedBlock={setEditedBlock}
                  block={block}
                  educationApps={educationApps}
                  setEducationApps={setEducationApps}
                  isOpenEditModal={isOpenEditModal}
                  setIsOpenEditModal={setIsOpenEditModal}
                />
              </div>
            ))}
          </div>
        ) : (
          <p className="col-span-4 flex gap-2 items-center">
            <i className="fa-solid fa-circle-info text-blue-600"></i>Education
            blocks will be shown here.
          </p>
        )}
      </div>
    </form>
  );
};

export default Form;
