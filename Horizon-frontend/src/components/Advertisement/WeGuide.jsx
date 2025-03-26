import manlooking from "@/assets/images/adv.png";
import { SectionHeading } from "../ui/SectionHeading";
import DecryptedText from "../ui/DecryptedText";

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
        <DecryptedText
          text={
            "At Horizon (#1 Online and Distance Education Centre in Kochi, Kerala), we are dedicated to illuminating the path to a prosperous future for every student.\nWe understand that each learner has unique goals, and we are committed to helping you achieve them.\nBy aligning with your aspirations, we strive to create an environment where learning propels you forward—transforming students into leaders, entrepreneurs, and innovators of tomorrow.\nJoin us at Horizon (the top distance education centre in Kerala), and together, we’ll stride towards a brighter future."
          }
          className="text-[#1E4765] w-[50%] max-sm:w-full max-sm:text-sm"
          animateOn="view"
          revealDirection="start"
          maxIterations={13}
          speed={100}
        />
        <img
          src={manlooking}
          alt="advertisement image"
          className="select-none w-96 max-md:w-72"
        />
      </div>
    </div>
  );
};
