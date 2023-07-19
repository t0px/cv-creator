import { useEffect } from "react";
import toast, { ToastBar, Toaster } from "react-hot-toast";

const SaveChangesBar = ({ handleSubmit }) => {
  const notify = () =>
    toast("All changes were saved.", {
      icon: <i className="fa-solid fa-circle-check"></i>,
    });

  const handleSubmissionButton = (e) => {
    handleSubmit(e);
    notify();
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Enter") {
        handleSubmissionButton(e);
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div className="flex-1 bg-white p-6 shadow-2xl justify-center flex items-center rounded-sm">
      <input
        onClick={(e) => handleSubmissionButton(e)}
        type="submit"
        value="Save Changes"
        className="text-lg w-full cursor-pointer col-span-4 bg-blue-600 hover:bg-blue-500 duration-300 ease-in-out text-white rounded-sm px-4 py-1"
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

export default SaveChangesBar;
