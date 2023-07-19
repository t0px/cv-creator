import { useContext } from "react";
import { PaperDataContext } from "../../../context/PaperDataContext";

const Form = ({menuStates, handleSubmit, tempData, setTempData}) => {

    const { paperData, setPaperData } = useContext(PaperDataContext);

    return (
      <form
        onSubmit={(e) => handleSubmit(e)}
        className={`${
          !menuStates.general ? "hidden" : ""
        } text-slate-700 px-6 py-6`}
      >
        <hr className="mb-6" />
        <div className="grid grid-cols-2 gap-4">
          <div className="flex gap-3 flex-col justify-center">
            <label className="font-medium">Full Name:</label>
            <input
              value={tempData.general.fullName}
              type="text"
              className="rounded-sm px-4 py-1 border border-gray-300"
              onChange={(e) =>
                setTempData({
                  ...tempData,
                  general: {
                    ...tempData.general,
                    fullName: e.target.value,
                  },
                })
              }
            />
          </div>
          <div className="flex gap-3 flex-col justify-center">
            <label className="font-medium">Phone Number:</label>
            <input
              value={tempData.general.phone}
              type="text"
              maxLength={10}
              className="rounded-sm px-4 py-1 border border-gray-300"
              onChange={(e) =>
                setTempData({
                  ...tempData,
                  general: {
                    ...tempData.general,
                    phone: e.target.value,
                  },
                })
              }
            />
          </div>
          <div className="flex gap-3 flex-col justify-center col-span-2">
            <label className="font-medium">Email Address:</label>
            <input
              value={tempData.general.email}
              type="text"
              className="rounded-sm px-4 py-1 border border-gray-300"
              onChange={(e) =>
                setTempData({
                  ...tempData,
                  general: {
                    ...tempData.general,
                    email: e.target.value,
                  },
                })
              }
            />
          </div>
          <input
            type="submit"
            value="Save Changes"
            className="cursor-pointer col-span-2 bg-blue-600 hover:bg-blue-500 duration-300 ease-in-out text-white rounded-sm px-4 py-1"
          />
        </div>
      </form>
    );
}
 
export default Form;