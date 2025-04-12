import manlooking from "@/assets/images/adv.png";
import { SectionHeading } from "../ui/SectionHeading";
import BlurText from "../ui/BlurText";
import AnimatedContent from "../ui/AnimatedContent";

export const WeGuide = () => {
  return (
    <div className="flex justify-between mx-28 py-16 gap-5 flex-col max-md:mx-10 max-sm:mx-5 max-sm:pt-0">
      <SectionHeading
        heading={
          <>
            We Guide you <br /> to a Brighter Future
          </>
        }
      />

      <div className="flex w-full justify-between items-center max-sm:flex-col-reverse max-sm:gap-5">
        <BlurText
          text="At Horizon (#1 Online and Distance Education Centre in Kochi, Kerala), we are dedicated to illuminating the path to a prosperous future for every student. We understand that each learner has unique goals, and we are committed to helping you achieve them. By aligning with your aspirations, we strive to create an environment where learning propels you forward—transforming students into leaders, entrepreneurs, and innovators of tomorrow.Join us at Horizon (the top distance education centre in Kerala), and together, we’ll stride towards a brighter future."
          delay={10}
          animateBy="words"
          direction="top"
          className="text-[#1E4765] w-[50%] max-sm:w-full max-sm:text-sm"
        />

        <AnimatedContent
          distance={150}
          direction="vertical"
          reverse={false}
          config={{ tension: 80, friction: 20 }}
          initialOpacity={0.2}
          animateOpacity
          scale={1.1}
          threshold={0.2}
        >
          <img
            src={manlooking}
            alt="advertisement image"
            className="select-none w-96 max-md:w-72"
          />
        </AnimatedContent>
      </div>
    </div>
  );
};
