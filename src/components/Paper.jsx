import { useContext } from "react";
import { PaperDataContext } from "../context/PaperDataContext";
const Paper = () => {

    const { paperData, setPaperData } = useContext(PaperDataContext);

    return (
      <div className="h-full w-[595px] bg-white shadow-2xl rounded-sm p-16 flex flex-col gap-6">
        <section className="flex justify-between items-end">
          <h1 className="text-3xl font-bold">{paperData.general.fullName}</h1>
          <div className="flex-col gap-2">
            <p className="text-gray-600 underline text-sm">
              {paperData.general.email}
            </p>
            <p className="text-gray-600 text-sm">{paperData.general.phone}</p>
          </div>
        </section>
        <hr />
        <section className="flex flex-col gap-2">
          <h1 className="text-xl font-bold">Education</h1>
          <hr className="bg-black h-[2px] w-full mb-2"/>
          {paperData?.educational?.educationApps?.map((block) => (
            <div key={block.id} className="flex justify-between items-center">
                <p><strong>{block.study},</strong> {block.school}</p>
                <p className="text-right">{block.date}</p>
            </div>
          ))}
        </section>
      </div>
    );
}
 
export default Paper;