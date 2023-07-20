import { useContext, useEffect, useState } from "react";
import { PaperDataContext } from "../../../context/PaperDataContext";
import Actions from "./Actions";
import { v4 as uuidv4 } from "uuid";
import { Toaster, toast } from "react-hot-toast";

const Form = ({ menuStates, handleSubmit, tempData, setTempData }) => {
  const { paperData, setPaperData } = useContext(PaperDataContext);

  const [professionalBlock, setProfessionalBlock] = useState({
    id: uuidv4(),
    company: "",
    title: "",
    date: "",
    desc: "",
    editing: false,
  });

  const [professionalApps, setProfessionalApps] = useState(
    paperData.professional.professionalApps || []
  );
  const [editedBlock, setEditedBlock] = useState({
    company: "",
    title: "",
    date: "",
    desc: "",
  });

  const handleProfessionalBlockSubmit = () => {
    setProfessionalApps((prevProfessionalApps) => [
      ...prevProfessionalApps,
      professionalBlock,
    ]);
    toast("Added new professional block.", {
      icon: <i className="fa-solid fa-briefcase"></i>,
    });

    setProfessionalBlock({
      id: uuidv4(),
      company: "",
      title: "",
      date: "",
      desc: "",
      editing: false,
    });
  };

  useEffect(() => {
    if (professionalApps.length > 0 || professionalApps !== null) {
      setTempData({
        ...tempData,
        professional: { ...tempData.professional, professionalApps },
      });
    }
  }, [setProfessionalApps, professionalApps]);

  return (
    <form
      onSubmit={(e) => handleSubmit(e)}
      className={`${
        !menuStates.professional ? "hidden" : ""
      } text-slate-700 px-6 py-6`}
    >
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
      <hr className="mb-6" />
      <div className="flex flex-col gap-4">
        <div className="flex gap-3 flex-col justify-center">
          <label className="font-medium">Company Name:</label>
          <input
            required
            value={professionalBlock.company}
            type="text"
            className="rounded-sm px-4 py-1 border border-gray-300"
            onChange={(e) =>
              setProfessionalBlock({
                ...professionalBlock,
                company: e.target.value,
              })
            }
          />
        </div>
        <div className="flex gap-3 flex-col justify-center">
          <label className="font-medium">Job Title:</label>
          <input
            required
            value={professionalBlock.title}
            type="text"
            className="rounded-sm px-4 py-1 border border-gray-300"
            onChange={(e) =>
              setProfessionalBlock({
                ...professionalBlock,
                title: e.target.value,
              })
            }
          />
        </div>
        <div className="flex gap-3 flex-col justify-center">
          <label className="font-medium">Dates Active:</label>
          <input
            required
            value={professionalBlock.date}
            type="text"
            className="rounded-sm px-4 py-1 border border-gray-300"
            onChange={(e) =>
              setProfessionalBlock({
                ...professionalBlock,
                date: e.target.value,
              })
            }
          />
        </div>
        <div className="flex gap-3 flex-col justify-center">
          <label className="font-medium">Job Description:</label>
          <textarea
            required
            value={professionalBlock.desc}
            type="text"
            className="rounded-sm px-4 py-1 border border-gray-300"
            onChange={(e) =>
              setProfessionalBlock({
                ...professionalBlock,
                desc: e.target.value,
              })
            }
          />
        </div>
        <input
          onClick={() => handleProfessionalBlockSubmit()}
          type="button"
          value="Add"
          className="w-full cursor-pointer bg-blue-600 col-start-4 self-end hover:bg-blue-500 duration-300 ease-in-out text-white rounded-sm px-4 py-1"
        />
        {/* <input
          onClick={(e) => handleSubmit(e)}
          type="submit"
          value="Save Changes"
          className="cursor-pointer col-span-4 bg-blue-600 hover:bg-blue-500 duration-300 ease-in-out text-white rounded-sm px-4 py-1"
        /> */}
        {professionalApps.length > 0 ? (
          <div className="rounded-sm col-span-4 flex flex-col gap-10">
            {professionalApps.map((block) => (
              <div
                key={block.id}
                className="relative flex justify-between items-center"
              >
                <div className={`grid grid-cols-3 flex-1 pr-4 gap-6`}>
                  {block.editing ? (
                    <>
                      <input
                        className="w-fit focus:outline-none"
                        value={block.company}
                        onChange={(e) =>
                          setProfessionalApps((prevApps) =>
                            prevApps.map((item) => {
                              if (item.id === block.id) {
                                return { ...item, company: e.target.value };
                              }
                              return item;
                            })
                          )
                        }
                      />
                      <input
                        className="w-fit focus:outline-none"
                        value={block.title}
                        onChange={(e) =>
                          setProfessionalApps((prevApps) =>
                            prevApps.map((item) => {
                              if (item.id === block.id) {
                                return { ...item, title: e.target.value };
                              }
                              return item;
                            })
                          )
                        }
                      />
                      <input
                        className="w-fit focus:outline-none"
                        value={block.date}
                        onChange={(e) =>
                          setProfessionalApps((prevApps) =>
                            prevApps.map((item) => {
                              if (item.id === block.id) {
                                return { ...item, date: e.target.value };
                              }
                              return item;
                            })
                          )
                        }
                      />
                      <div className="col-span-4">
                        <textarea
                          className="w-full focus:outline-none h-max"
                          value={block.desc}
                          onChange={(e) =>
                            setProfessionalApps((prevApps) =>
                              prevApps.map((item) => {
                                if (item.id === block.id) {
                                  return { ...item, desc: e.target.value };
                                }
                                return item;
                              })
                            )
                          }
                        />
                      </div>
                    </>
                  ) : (
                    <>
                      <span>{block.company}</span>
                      <span>{block.title}</span>
                      <span>{block.date}</span>
                      <div className="col-span-4">
                        <span>{block.desc}</span>
                      </div>
                    </>
                  )}
                </div>
                <Actions
                  editedBlock={editedBlock}
                  setEditedBlock={setEditedBlock}
                  block={block}
                  professionalApps={professionalApps}
                  setProfessionalApps={setProfessionalApps}
                />
              </div>
            ))}
          </div>
        ) : (
          <p className="col-span-4 flex gap-2 items-center">
            <i className="fa-solid fa-circle-info text-blue-600"></i>
            Professional blocks will be shown here.
          </p>
        )}
      </div>
    </form>
  );
};

export default Form;
