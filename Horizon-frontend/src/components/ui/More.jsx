import { ChevronsRight } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

export const More = () => {
  return (
    <Link
      to="/courses"
      className="flex gap-1 rounded-xl px-5 border-2 border-[#1E4765] p-2 items-center w-fit justify-center cursor-pointer text-[#1E4765] hover:bg-[#1E4765] hover:text-white font-semibold"
    >
      More <ChevronsRight />
    </Link>
  );
};
