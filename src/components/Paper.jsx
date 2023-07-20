import { useContext } from "react";
import { PaperDataContext } from "../context/PaperDataContext";
const Paper = () => {
  const { paperData, setPaperData } = useContext(PaperDataContext);

  return (
    <div className="relative h-full w-[595px] max-lg:w-full bg-white shadow-2xl rounded-sm p-10 flex flex-col gap-6">
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
      {paperData?.educational.educationApps?.length > 0 ? (
        <section className="flex flex-col gap">
          <h1 className="mb-3 py-1 font-bold text-center px-3 bg-slate-200">
            Education
          </h1>
          <div className="flex flex-col gap-3 text-sm">
            {paperData?.educational?.educationApps?.map((block) => (
              <div
                key={block.id}
                className="flex justify-between items-baseline"
              >
                <div className="flex flex-col">
                  <strong className="whitespace-nowrap">{block.study}</strong>{" "}
                  <span>{block.school}</span>
                </div>
                <p className="text-right w-1/3 text-xs">{block.date}</p>
              </div>
            ))}
          </div>
        </section>
      ) : (
        ""
      )}

      {/* professional */}
      {paperData?.professional.professionalApps?.length > 0 ? (
        <section className="flex flex-col gap">
          <h1 className="mb-3 py-1 font-bold text-center px-3 bg-slate-200">
            Professional
          </h1>
          <div className="flex flex-col gap-3 text-sm">
            {paperData?.professional?.professionalApps?.map((block) => (
              <div
                key={block.id}
                className="flex justify-between items-baseline"
              >
                <div className="flex flex-col">
                  <strong className="whitespace-nowrap">{block.title}</strong>{" "}
                  <span>{block.company}</span>
                  <hr className="my-2" />
                  <span className="text-xs">{block.desc}</span>
                </div>
                <p className="text-right w-1/3 text-xs">{block.date}</p>
              </div>
            ))}
          </div>
        </section>
      ) : (
        ""
      )}

      <p className="absolute bottom-16 left-0 right-0 text-center w-full text-sm">
        Resume
      </p>
    </div>
  );
};

export default Paper;
