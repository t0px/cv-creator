import { useContext } from "react";
import { PaperDataContext } from "../context/PaperDataContext";
const Paper = () => {

    const { paperData, setPaperData } = useContext(PaperDataContext);

    return (
      <div className="h-full w-[595px] max-lg:w-full bg-white shadow-2xl rounded-sm p-16 flex flex-col gap-6">

        {/* general */}
        <section className="flex justify-between items-end">
          <h1 className="text-3xl font-bold">{paperData.general.fullName}</h1>
          <div className="flex-col gap-2 text-right">
            <p className="text-gray-600 underline text-xs">
              {paperData.general.email}
            </p>
            <p className="text-gray-600 text-sm">{paperData.general.phone}</p>
          </div>
        </section>
        <hr />

        {/* education */}
        <section className="flex flex-col gap">
          <h1 className="mb-3 py-1 font-bold text-center px-3 bg-slate-200">Education</h1>
          <div className="flex flex-col gap-3 text-sm">
            {paperData?.educational?.educationApps?.map((block) => (
              <div key={block.id} className="flex justify-between">
                <div className="flex flex-col">
                  <strong className="whitespace-nowrap">{block.study}</strong>{" "}
                  <span>{block.school}</span>
                </div>
                <p className="text-right w-1/3">{block.date}</p>
              </div>
            ))}
          </div>
        </section>

        {/* professional */}
        <section className="flex flex-col gap">
          <h1 className="mb-3 py-1 font-bold text-center px-3 bg-slate-200">Professional</h1>
          <div className="flex flex-col gap-3 text-sm">
            {paperData?.professional?.professionalApps?.map((block) => (
              <div key={block.id} className="flex justify-between">
                <div className="flex flex-col">
                  <strong className="whitespace-nowrap">{block.title}</strong>{" "}
                  <span>{block.company}</span>
                  <hr className="my-2"/>
                  <span className="text-xs">{block.desc}</span>
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