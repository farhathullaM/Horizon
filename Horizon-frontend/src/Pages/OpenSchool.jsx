import Doubt from "@/components/Contact/Doubt";
import AboutBosse from "@/components/OpenSchool/AboutBosse";
import Eligible from "@/components/OpenSchool/Eligible";
import HeroOpenSchool from "@/components/OpenSchool/HeroOpenSchool";
import WhoCan from "@/components/OpenSchool/WhoCan";
import WhyChooseBosse from "@/components/OpenSchool/WhyChooseBosse";

const OpenSchool = () => {
  return (
    <>
      <HeroOpenSchool />
      <AboutBosse />
      <WhyChooseBosse />
      <Eligible />
      <WhoCan />
      <Doubt heading="Want to Register" />
    </>
  );
};

export default OpenSchool;
