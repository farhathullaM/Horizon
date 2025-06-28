import { ArrowUpRight } from "lucide-react";
import course_img from "@/assets/images/course.webp";

const UnivCourseItem = ({ courseName, eligibility, duration, mode }) => {
  return (
    <div className="flex flex-col w-80 gap-3 bg-white p-2 rounded-3xl  max-sm:w-full">
      <img
        src={course_img}
        alt="couse image"
        className="w-full rounded-t-2xl h-40 object-cover"
      />

      <div className="flex flex-col">
        <p className=" text-[#3D6B8C] text-sm">Course Name</p>
        <p className="font-bold text-[#1E4765]">{courseName}</p>
      </div>

      <div>
        <p className=" text-[#3D6B8C] text-sm"> Eligibility</p>
        <p className="font-bold text-[#1E4765] text-wrap">{eligibility}</p>
      </div>

      <div className="flex gap-4 bg-[#FAFAFA] rounded-xl p-2">
        <div className="w-1/2">
          <p className=" text-[#3D6B8C] text-sm">Duration</p>
          <p className="font-bold text-[#1E4765]">{duration + " Years"}</p>
        </div>

        <div className="w-1/2">
          <p className=" text-[#3D6B8C] text-sm ">Mode</p>
          <p className="font-bold text-[#1E4765]">{mode}</p>
        </div>
      </div>

      <div className="rounded-full self-end bg-[#978A29] p-2 hover:rounded-2xl hover:w-full text-[#fff] flex items-center justify-center  transform transition ease-in-out delay-75 duration-700 cursor-pointer group gap-1">
        <span className="hidden group-hover:block">Learn More</span>
        <ArrowUpRight className=" w-8 h-8" />
      </div>
    </div>
  );
};

export default UnivCourseItem;
