import { useContext } from "react";
import { PaperDataContext } from "../context/PaperDataContext";
const Paper = () => {

    const { paperData, setPaperData } = useContext(PaperDataContext);

    return (
      <div className="h-full w-[595px] bg-white shadow-2xl rounded-sm p-16 flex flex-col gap-6">
        {/* general */}
        <section className="flex justify-between">
          <h1 className="text-3xl font-bold">{paperData.general.fullName}</h1>
          <div className="flex-col gap-2 text-right">
            <p className="text-gray-600 underline text-sm">
              {paperData.general.email}
            </p>
            <p className="text-gray-600 text-sm">{paperData.general.phone}</p>
          </div>
        </section>
        <hr />

        {/* education */}
        <section className="flex flex-col gap">
          <h1 className="text-lg font-bold">Education</h1>
          <hr className="bg-black h-[2px] w-full mb-4" />
          <div className="flex flex-col gap-3">
            {paperData?.educational?.educationApps?.map((block) => (
              <div key={block.id} className="flex justify-between text-sm">
                <div className="flex flex-col">
                  <strong className="whitespace-nowrap">{block.study}</strong>{" "}
                  <span>{block.school}</span>
                </div>
                <p className="text-right w-1/3">{block.date}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    );
}
 
export default Paper;