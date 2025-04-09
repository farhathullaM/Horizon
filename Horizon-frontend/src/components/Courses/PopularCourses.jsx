import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useEffect, useRef, useState } from "react";
import capitalizeFirstLetter from "../../utils/capitalizeFirstLetter";
import { CourseBox } from "./CourseBox";
import { tabList } from "./tabList";
import { SectionHeading } from "../ui/SectionHeading";
import { handleHorizontalScroll } from "../../utils/handleHorizontalScroll";
import {
  undergraduate,
  postgraduate,
  diploma,
  diplomaEngineering,
  postgraduateDiploma,
  btech,
  mtech,
} from "./courseDetails";
import { More } from "../ui/More";

export const PopularCourses = ({ isHomePage = false }) => {
  const tabsListRef = useRef(null);
  const [selectedTab, setSelectedTab] = useState("all");

  useEffect(() => {
    const scrollHandler = handleHorizontalScroll(tabsListRef);
    scrollHandler.attach();

    return () => {
      scrollHandler.detach();
    };
  }, []);

  // Object containing categorized courses
  const coursesByCategory = {
    all: [...undergraduate, ...postgraduate],
    bachelors: undergraduate,
    masters: postgraduate,
    diploma: diploma,
    postdiploma: postgraduateDiploma,
    engdiploma: diplomaEngineering,
    btech: btech,
    mtech: mtech,
  };

  // Filtered list based on selected tab
  const filteredCourses = coursesByCategory[selectedTab] || [];

  // Show limited courses if on the homepage
  const displayCourses = isHomePage
    ? filteredCourses.slice(0, 6)
    : filteredCourses;

  return (
    <div className="flex  justify-between items-center mx-28  gap-5 flex-col max-md:mx-10 max-sm:mx-5 max-sm:gap-0 max-sm:pt-0">
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

        <TabsContent value={selectedTab}>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
            {displayCourses.length > 0 ? (
              displayCourses.map((course, index) => (
                <CourseBox
                  key={index}
                  courseName={course.name}
                  eligibility={course.eligibility}
                  duration={course.duration}
                  mode={course.mode}
                />
              ))
            ) : (
              <p className="text-gray-500 text-center col-span-3">
                No courses available.
              </p>
            )}
          </div>
        </TabsContent>
      </Tabs>

      {isHomePage && <More />}
    </div>
  );
};
