import { GraduationCap } from "lucide-react";
import underline from "@/assets/images/underline.png";
import { cn } from "@/lib/utils";

export const SectionHeading = ({ heading, className }) => {
  return (
    <div className="w-full items-center justify-center flex gap-2 flex-col">
      <GraduationCap
        className={cn(
          "w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16",
          className
        )}
      />

      <h3
        className={cn(
          "text-5xl font-semibold text-center max-md:text-3xl max-sm:text-2xl",
          className
        )}
      >
        {heading}{" "}
      </h3>
      <img
        src={underline}
        alt="underline image"
        className="select-none w-60 -ml-10 max-md:w-40 max-sm:w-32"
      />
    </div>
  );
};
