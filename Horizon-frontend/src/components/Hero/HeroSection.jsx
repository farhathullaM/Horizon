import box from "@/assets/images/box.png";
import girl from "@/assets/images/lady.png";
import SplitText from "../ui/SplitText";
import { ChevronsRight } from "lucide-react";
import AnimatedContent from "../ui/AnimatedContent";
import { Link } from "react-router-dom";

export const HeroSection = () => {
  return (
    <div className="flex justify-around mx-32 py-16 gap-5 max-md:flex-col-reverse max-md:mx-10 max-sm:mx-5 max-[1100px]:mx-10">
      <div className="w-[54%] flex flex-col gap-4 max-md:w-full">
        <h2 className="text-6xl font-bold text-black text-wrap max-sm:text-4xl">
          Trasform Your Passion into a Profession<br></br> with
          <SplitText
            text=" Horizon"
            className="text-[#1E4765] text-left"
            delay={150}
            animationFrom={{ opacity: 0, transform: "translate3d(0,50px,0)" }}
            animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
            easing="easeOutCubic"
            threshold={0.2}
            rootMargin="-50px"
          />
        </h2>
        <p className="text-[#595959] font-light w-[65%] max-md:w-11/12">
          Elevate your career with globally accreditd degrees. Experience
          education that crosses borders and expands minds. Your jouney to
          success begins here.
        </p>

        <div className="flex gap-3 select-none max-sm:flex-col">
          <Link
            onClick={() => window.scrollTo(0, 0)}
            to={"/contact"}
            className="bg-[#FF9D01] text-white py-3 px-6 font-semibold rounded-xl  cursor-pointer hover:bg-[#ff8801]"
          >
            Get a free Consultation
          </Link>
          <Link
            onClick={() => window.scrollTo(0, 0)}
            to="/courses"
            className="text-[#1E4765] border-2 border-[#1E4765] py-3 px-6 cursor-pointer hover:bg-[#daebf6] flex items-center gap-1  font-semibold rounded-xl"
          >
            View Programmes
            <ChevronsRight size={20} />
          </Link>
        </div>

        <div className="flex gap-3">
          <div className="w-52 rounded-2xl h-48 bg-[#D9D9D9]"></div>
          <div className="w-52 rounded-2xl h-48 bg-[#D9D9D9]"></div>
        </div>
      </div>

      <AnimatedContent
        distance={150}
        direction="horizontal"
        reverse={false}
        config={{ tension: 80, friction: 20 }}
        initialOpacity={0.2}
        animateOpacity
        scale={1.1}
        threshold={0.2}
      >
        <div className="flex items-end justify-center relative">
          <img
            src={girl}
            alt="girl with book"
            className="select-none absolute right-10 max-md:h-96 shrink-0 max-sm:w-80 max-sm:h-96 object-cover"
          />
          <img
            src={box}
            alt="background box"
            draggable={false}
            className="select-none max-[1100px]:w-80  h-[80%] max-md:w-96 max-md:h-96 shrink-0 max-sm:w-80 max-sm:h-80 object-cover"
          />
        </div>
      </AnimatedContent>
    </div>
  );
};
