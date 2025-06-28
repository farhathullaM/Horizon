import { Count } from "@/components/Count/Count";
import { RightChoice } from "../components/Advertisement/RightChoice";
import { WeGuide } from "../components/Advertisement/WeGuide";
import { Contact } from "../components/Contact/Contact";
import { PopularCourses } from "../components/Courses/PopularCourses";
import { FAQ } from "../components/FAQ/FAQ.jsx";
import { HeroSection } from "../components/Hero/HeroSection";
import { OurUniversity } from "../components/University/OurUniversity";
import Explore from "@/components/Advertisement/Explore";
import Doubt from "@/components/Contact/Doubt";

export const Home = () => {
  return (
    <div className="bg-[#F1F1F1]">
      <HeroSection />
      <Count />
      <Explore />
      <PopularCourses isHomePage={true} />
      <WeGuide />
      <RightChoice />
      <OurUniversity />
      <FAQ />
      <Doubt heading={"Still have Doubt?"} />
      <Contact />
    </div>
  );
};
