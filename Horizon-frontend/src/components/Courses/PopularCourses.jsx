import { GraduationCap } from "lucide-react";
import underline from "@/assets/images/underline.png";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";
import capitalizeFirstLetter from "../../utils/capitalizeFirstLetter";
import { CourseBox } from "./CourseBox";
import { tabList } from "./tabList";

export const PopularCourses = () => {
  const [selectedTab, setSelectedTab] = useState("all");

  return (
    <div className="flex justify-between mx-28 py-16 gap-5 flex-col max-md:mx-10 max-sm:mx-5">
      <div className="w-full items-center justify-center flex gap-2 flex-col">
        <GraduationCap size={60} />
        <h3 className="text-5xl font-semibold ">Popular Courses</h3>
        <img
          src={underline}
          alt="underline image"
          className="select-none w-60 -ml-10"
        />
      </div>

      <div>
        <Tabs defaultValue="all" className="w-full my-10">
          <TabsList className="border-[#C9C9C9] border w-full rounded-xl p-1 flex flex-nowrap overflow-x-scroll"
             style={{scrollbarWidth:"none"}}
          >
            {tabList.map((tab) => (
              <TabsTrigger
                key={tab.name}
                value={tab.name}
                onClick={() => setSelectedTab(tab.name)}
                className={`px-5 py-2 rounded-lg border-[#C9C9C9] border-[1px] mx-1 font-semibold text-nowrap  ${
                  selectedTab === tab.name
                    ? "bg-[#1E4765] text-white"
                    : "bg-[#F1F1F1] text-[#1E4765]"
                }`}
              >
                {capitalizeFirstLetter(tab.label)}
              </TabsTrigger>
            ))}
          </TabsList>
          <TabsContent value="all">
            <CourseBox />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};
