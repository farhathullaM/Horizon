import { PopularCourses } from "../components/Courses/PopularCourses";
import { HeroSection } from "../components/Hero/HeroSection";

export const Home = () => {
  return (
    <div className="bg-[#F1F1F1]">
      <HeroSection />
      <PopularCourses />
    </div>
  );
};
