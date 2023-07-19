import { Primary } from "./buttons/Button";

const BottomBar = () => {
    return (
      <div className="bg-white w-10/12 p-6 shadow-2xl justify-between flex items-baseline rounded-sm">
        <div className="flex gap-2 items-center">
          <i className="fa-solid fa-file-export"></i>
          <span>Export Your Resume</span>
        </div>
        <Primary text="Download" href=""/>
      </div>
    );
}
 
export default BottomBar;