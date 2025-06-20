import Doubt from "@/components/Contact/Doubt";
import AboutCourse from "@/components/SkillPrograms/AboutCourse";
import Benifits from "@/components/SkillPrograms/Benifits";
import CoursePerks from "@/components/SkillPrograms/CoursePerks";
import SkillHeading from "@/components/SkillPrograms/SkillHeading";

const SkillProgram = () => {
  return (
    <>
      <SkillHeading />
      <AboutCourse />
      <CoursePerks />
      <Benifits />
      <Doubt heading={"Still have Doubt"} />
    </>
  );
};

export default SkillProgram;
