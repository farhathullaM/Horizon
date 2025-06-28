import React from "react";
import { SectionHeading } from "../ui/SectionHeading";
import { universities } from "./universities";

export const OurUniversity = () => {
  return (
    <div className="flex justify-between mx-28 py-16 gap-5 flex-col max-md:mx-10 max-sm:mx-5 ">
      <SectionHeading heading={"Our University Partners"} />

      <div className="grid grid-cols-5 gap-5 pt-8 max-md:grid-cols-3 max-sm:grid-cols-2 max-sm:gap-3 max-sm:pt-4">
        {universities.map((univ) => (
          <div key={univ.name} className="overflow-hidden px-4 h-28 border border-[#161a1d] items-center flex justify-center rounded-2xl bg-white max-md:h-20 max-md:px-3 ">
            <img src={univ.src} alt={`${univ.name} logo`} className="select-none" />
          </div>
        ))}
      </div>
    </div>
  );
};
