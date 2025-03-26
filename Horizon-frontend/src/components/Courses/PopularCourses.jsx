import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useEffect, useRef, useState } from "react";
import capitalizeFirstLetter from "../../utils/capitalizeFirstLetter";
import { CourseBox } from "./CourseBox";
import { tabList } from "./tabList";
import { SectionHeading } from "../ui/SectionHeading";
import { handleHorizontalScroll } from "../../utils/handleHorizontalScroll";

export const PopularCourses = () => {
  const tabsListRef = useRef(null);
  const [selectedTab, setSelectedTab] = useState("all");

  useEffect(() => {
    const scrollHandler = handleHorizontalScroll(tabsListRef);
    scrollHandler.attach();

    return () => {
      scrollHandler.detach();
    };
  }, []);

  return (
    <div className="flex justify-between mx-28 py-16 gap-5 flex-col max-md:mx-10 max-sm:mx-5 max-sm:gap-0 max-sm:pt-0">
      <SectionHeading heading={"Popular Courses"} />

      <Tabs defaultValue="all" className="w-full my-10">
        <TabsList className="flex w-full items-center justify-center">
          <div
            className="border-[#C9C9C9] border w-[100vw] transform ease-in-out  overflow-x-auto rounded-xl p-1 flex flex-nowrap no-scrollbar"
            ref={tabsListRef}
          >
            {tabList.map((tab) => (
              <TabsTrigger
                key={tab.name}
                value={tab.name}
                onClick={() => setSelectedTab(tab.name)}
                className={`px-5 py-2 rounded-lg select-none cursor-pointer border-[#C9C9C9] border-[1px] mx-1 font-semibold text-nowrap  ${
                  selectedTab === tab.name
                    ? "bg-[#1E4765] text-white"
                    : "bg-[#F1F1F1] text-[#1E4765]"
                }`}
              >
                {capitalizeFirstLetter(tab.label)}
              </TabsTrigger>
            ))}
          </div>
        </TabsList>
        <TabsContent value="all">
          <CourseBox />
        </TabsContent>
      </Tabs>
    </div>
  );
};
