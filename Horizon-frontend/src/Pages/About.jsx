import aboutbg from "@/assets/images/aboutbg.jpg";
import { MissionBox } from "@/components/About/MissionBox";
import BlurText from "@/components/ui/BlurText";
import DecryptedText from "@/components/ui/DecryptedText";
import ScrollReveal from "@/components/ui/ScrollReveal";
import TrueFocus from "@/components/ui/TrueFocus";
import VariableProximity from "@/components/ui/VariableProximity";

export const About = () => {
  return (
    <div className="bg-[#F1F1F1] min-h-screen">
      <div className="min-h-screen w-full relative flex items-center justify-center">
        <img
          src={aboutbg}
          alt="backgound image of about"
          className="w-full object-cover absolute top-0 left-0 z-0 h-screen"
        />
        <div className="flex justify-center items-center h-screen z-10 max-w-lg flex-col gap-4 mx-5">
          <TrueFocus
            sentence="About Horizon"
            manualMode={false}
            blurAmount={5}
            borderColor="#1E4765"
            animationDuration={2}
            className="text-4xl font-bold text-[#1E4765]"
            pauseBetweenAnimations={1}
          />

          <DecryptedText
            text="Horizon is a leading provider of distance education. The programs offered by Horizon are intended to serve the needs of mature adults, individuals who are serious about completing a degree program. With Horizon's flexible study options, you can study from home, work, or anywhere in the world, at a time that suits you and your lifestyle. Depending upon the degree program you select, you can choose offline or online."
            parentClassName="text-lg font-semibold text-[#595959]"
            animateOn="view"
            revealDirection="start"
            maxIterations={13}
            speed={80}
            // sequential={true}
            useOriginalCharsOnly={true}
            encryptedClassName="text-lg font-semibold text-[#595959]"
          />
        </div>
      </div>

      <div className="flex flex-col gap-4 max-md:-mt-10 items-center justify-center py-10 bg-[#F1F1F1] mx-10 max-sm:mx-4">
        <BlurText
          text="Who We Are"
          delay={150}
          animateBy="words"
          direction="top"
          className="text-4xl font-semibold text-[#1E4765]"
        />
        <p className=" w-1/2 max-sm:w-full mx-10 text-center font-medium">
          Horizon is more than just an educational consultancy—we are a bridge
          between aspiring learners and top universities. With a commitment to
          excellence, we assist students in choosing the right courses, ensuring
          a smooth admission process, and providing career guidance to help them
          achieve their dreams.
        </p>
      </div>

      <div className="flex gap-3 items-center mx-4 justify-around py-10  max-md:flex-col">
        <MissionBox
          title="Our Mission"
          bgblue={true}
          text="
            At Horizon, our mission is to bridge the gap between learners and
            quality education by offering accessible, flexible, and globally
            recognized distance learning opportunities. We strive to empower
            students and working professionals with the knowledge and skills
            needed to achieve their academic and career goals. Through expert
            guidance, accredited programs, and industry-aligned courses, we
            ensure that every learner has the opportunity to grow and succeed—no
            matter where they are."
        />
        <MissionBox
          title="Our Vision"
          bgblue={false}
          text=" Our vision is to become a leading consultancy in distance education,
            transforming the way people access and experience learning. We aim
            to create a future where education is borderless, inclusive, and
            adaptable to the evolving needs of students and industries. By
            continuously innovating and collaborating with top institutions, we
            aspire to shape a world where everyone has the opportunity to learn,
            grow, and thrive."
        />
      </div>
    </div>
  );
};
