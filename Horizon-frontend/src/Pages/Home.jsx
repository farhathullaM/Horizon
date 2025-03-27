import { RightChoice } from "../components/Advertisement/RightChoice";
import { WeGuide } from "../components/Advertisement/WeGuide";
import { Contact } from "../components/Contact/Contact";
import { PopularCourses } from "../components/Courses/PopularCourses";
import { FAQ } from "../components/FAQ/FAQ.jsx";
import { HeroSection } from "../components/Hero/HeroSection";
import { OurUniversity } from "../components/University/OurUniversity";

export const Home = () => {
  return (
    <div className="bg-[#F1F1F1]">
      <HeroSection />
      <PopularCourses />
      <WeGuide />
      <RightChoice />
      <OurUniversity />
      <FAQ />
      <Contact />
    </div>
  );
};
