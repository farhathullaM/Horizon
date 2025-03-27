import { GraduationCap } from "lucide-react";
import underline from "@/assets/images/underline.png";
import { cn } from "@/lib/utils";

export const SectionHeading = ({
  heading,
  className,
  img = true,
  invert = false,
}) => {
  return (
    <div className="w-full items-center justify-center flex gap-2 flex-col">
      {img && <GraduationCap size={40} className={`${invert && "invert"}`} />}

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
