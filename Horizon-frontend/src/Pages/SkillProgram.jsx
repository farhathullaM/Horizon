import heading_img from "@/assets/images/header.png";
import microsoft from "@/assets/images/microsoft-logo.png";
import { coursePerk } from "@/data/perks";
import { Link } from "react-router-dom";

const SkillProgram = () => {
  return (
    <div>
      <div className=" flex flex-col gap-5">
        <img
          src={heading_img}
          alt="certificate header"
          className=" h-[380px]"
        />
        <div className="px-20 max-lg:px-10 gap-5 flex flex-col">
          <div className="flex justify-between max-md:flex-col-reverse ">
            <h1 className="text-5xl font-bold text-[#1E4765]">
              Microsoft Office Skill Certification
            </h1>
            <img
              src={microsoft}
              alt="microsoft logo"
              className="w-40 max-lg:w-32"
            />
          </div>
          <p className="text-xl">
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

      <section className="px-20 py-10 max-md:px-5">
        <h3 className="text-5xl w-full py-5 font-semibold text-[#1E4765]">
          About the Course
        </h3>
        <p className="text-lg">
          The Microsoft Office Skill Certification course is designed to equip
          learners with hands-on proficiency in essential office software tools
          including Microsoft Word, Excel, PowerPoint, and Outlook. Whether
          you're a student, job seeker, or working professional, mastering these
          tools will boost your productivity and employability.
        </p>
      </section>

      <section className="px-20 py-10 max-md:px-5">
        <h3 className="text-5xl w-full text-center py-5 font-semibold text-[#1E4765]">
          Course Outline
        </h3>
        <div className="grid grid-cols-2 gap-5 ">
          {coursePerk.map((perk) => (
            <div
              key={perk.title}
              className="flex  flex-col p-5 rounded-lg bg-[#1E4765] items-center cursor-pointer gap-3 text-[#d8e2e4]"
            >
              <div className="bg-[#c9d7dc] p-3  rounded-full ">
                <perk.icon className="size-10 animate-pulse text-[#073a4d]" />
              </div>
              <p className="font-medium">{perk.title}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default SkillProgram;
