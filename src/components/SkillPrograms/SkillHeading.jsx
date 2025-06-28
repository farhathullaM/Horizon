import heading_img from "@/assets/images/header.png";
import microsoft from "@/assets/images/microsoft-logo.png";
import { Link } from "react-router-dom";

const SkillHeading = () => {
  return (
    <div className=" flex flex-col gap-5 min-h-[80dvh]">
      <img
        src={heading_img}
        alt="certificate header"
        className=" h-[380px] max-lg:h-[300px] max-md:h-[200px] w-full "
      />
      <div className="px-20 max-md:px-5 max-lg:px-10 gap-5 flex flex-col">
        <div className="flex justify-between max-md:flex-col-reverse ">
          <h1 className="text-5xl font-bold text-[#1E4765] max-md:text-4xl">
            Microsoft Office Skill Certification
          </h1>
          <img
            src={microsoft}
            alt="microsoft logo"
            className="w-40 max-lg:w-32 max-md:w-28"
          />
        </div>
        <p className="text-xl max-md:text-lg">
          Master the essential digital skills required in every professional
          environement with our Certified Microsoft Office Course
        </p>
        <Link
          target="_blank"
          to="https://wa.me/918086027773?text=I want to know more about Microsoft Office Skill Certification Course"
          className="bg-[#1E4765] w-60 font-semibold text-xl  text-white text-center py-3 cursor-pointer hover:bg-[#425b71] rounded-md"
        >
          Enroll For Free
        </Link>
      </div>
    </div>
  );
};

export default SkillHeading;
