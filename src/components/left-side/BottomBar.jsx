const BottomBar = () => {
    return (
      <div className="bg-white flex-1 p-6 shadow-2xl justify-between flex items-baseline rounded-sm">
        <div className="flex gap-2 items-center">
          <i className="fa-solid fa-file-export"></i>
          <span>Export Your Resume</span>
        </div>
        <input
          type="button"
          value="Download"
          className="cursor-pointer bg-gray-300 col-start-4 self-end hover:bg-gray-400 duration-300 ease-in-out rounded-sm px-4 py-1"
        />
      </div>
    );
}
 
export default BottomBar;