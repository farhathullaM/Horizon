import React from "react";
import { SectionHeading } from "../ui/SectionHeading";
import { ChoiceItem } from "./ChoiceItem";
import { features } from "./list";

export const RightChoice = () => {
  return (
    <div className="flex flex-col justify-center items-center  max-sm:pb-0 ">
      <div className="w-full bg-[#1E4765] pt-8 pb-20">
        <SectionHeading
          className={"text-white"}
          heading={
            <>
              Why Horizon is the
              <br /> Right Choice for You
            </>
          }
        />
      </div>

      <div className="-mt-16 rounded-4xl p-5 grid grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 gap-4 flex-wrap border border-[#1E4765] bg-[#dfdada]">
        {features.map((feature) => (
          <ChoiceItem
            key={feature.iconName}
            heading={feature.heading}
            iconName={feature.iconName}
            icon={feature.icon}
            img={feature.img}
          />
        ))}
      </div>
    </div>
  );
};
