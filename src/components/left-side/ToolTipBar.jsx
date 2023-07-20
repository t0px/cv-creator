import { useEffect } from "react";
import toast, { ToastBar, Toaster } from "react-hot-toast";

const ToolTipBar = ({ handleSubmit }) => {
  const handleSubmissionButton = (e) => {
    handleSubmit(e);
        toast("All changes were saved.", {
          icon: <i className="fa-solid fa-circle-check"></i>,
        });
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
          value="Save Changes"
          className="cursor-pointer bg-gray-300 col-start-4 self-end hover:bg-gray-400 duration-300 ease-in-out rounded-sm px-4 py-1"
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
          duration: 2000,
        }}
      />
    </div>
  );
};

export default ToolTipBar;
