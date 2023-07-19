import { useEffect } from "react";
import toast, { ToastBar, Toaster } from "react-hot-toast";

const ToolTipBar = ({ handleSubmit }) => {
  const notify = () =>
    toast("All changes were saved.", {
      icon: <i className="fa-solid fa-circle-check"></i>,
    });

  const handleSubmissionButton = (e) => {
    handleSubmit(e);
    notify();
  };

  useEffect(() => {
    const handleEnter = (e) => {
      if (e.key === "Enter") {
        handleSubmissionButton(e)
      }
    };
    window.addEventListener("keydown", handleEnter);

    return () => {
      window.removeEventListener("keydown", handleEnter);
    };
  }, []);

  return (
    <div className="bg-white p-6 shadow-2xl gap-4 flex items-center rounded-sm">
      <input
        onClick={(e) => handleSubmissionButton(e)}
        type="submit"
        value="Save All"
        className="flex-1 text-lg cursor-pointer col-span-4 bg-blue-600 hover:bg-blue-500 duration-300 ease-in-out text-white rounded-sm px-4 py-1"
      />
      <input
        onClick={(e) => handleSubmissionButton(e)}
        type="submit"
        value="Start Over"
        className="text-lg cursor-pointer col-span-4 bg-blue-600 hover:bg-blue-500 duration-300 ease-in-out text-white rounded-sm px-4 py-1"
      />
      <input
        onClick={(e) => handleSubmissionButton(e)}
        type="submit"
        value="Share"
        className="text-lg cursor-pointer col-span-4 bg-blue-600 hover:bg-blue-500 duration-300 ease-in-out text-white rounded-sm px-4 py-1"
      />
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
          duration: 1000,
        }}
      />
    </div>
  );
};

export default ToolTipBar;
