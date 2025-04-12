import FuzzyText from "@/components/ui/FuzzyText";
import { House } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

export const ErrorPage = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen gap-5">
      <FuzzyText
        baseIntensity={0.2}
        hoverIntensity={0.5}
        enableHover={true}
        // fontWeight={900}
        fontSize={"clamp(1rem, 8vw, 8rem)"}
        fontFamily={"inherit"}
        color={"#1E4765"}
      >
        404 Page Not Found
      </FuzzyText>

      <div>
        <Link
          to="/"
          className="bg-[#098e9d] mt-20 shadow-2xl  flex gap-2 text-white py-3 px-4 font-semibold rounded-xl  cursor-pointer hover:bg-[#405876] active:bg-[#1E4765]"
        >
          <House className="w-5" />
          Home
        </Link>
      </div>
    </div>
  );
};
