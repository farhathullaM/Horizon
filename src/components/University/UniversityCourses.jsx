import React from "react";
import UnivCourseItem from "../Courses/UnivCourseItem";
import { univCourses } from "../Courses/courseDetails";

const UniversityCourses = () => {
  return (
    <div className="flex items-center flex-col gap-3 p-5 max-md:p-2">
      <h3 className="text-4xl font-semibold text-[#fff] ">
        Choose Your Course
      </h3>
      <p className=" text-[#B7C3D8] max-md:w-11/12 w-2/3 text-wrap text-center">
        We provide access to high-quality academic opportunities through a
        variety of strategies, technologies and exemplary support services to
        help students achieve their educational goals.
      </p>

      <div className="flex flex-wrap gap-5 justify-center mt-5">
        {univCourses.map((course, index) => (
          <UnivCourseItem
            key={index}
            courseName={course.courseName}
            eligibility={course.eligibility}
            duration={course.duration}
            mode={course.mode}
          />
        ))}
      </div>
    </div>
  );
};

export default UniversityCourses;
