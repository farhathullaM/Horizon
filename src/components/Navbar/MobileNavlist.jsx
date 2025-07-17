import React, { useState } from "react";
import ItemDisplay from "./ItemDisplay";
import { Link, useLocation } from "react-router-dom";
import { getUniversityList } from "@/services/public/publicRoutes";
import { useQuery } from "@tanstack/react-query";

const MobileNavlist = () => {
  const location = useLocation();
  const [showUniv, setShowUniv] = useState(false);
  const [showSkill, setShowSkill] = useState(false);

  const {
    data: universityData,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["universityList"],
    queryFn: () => getUniversityList(),
    staleTime: 5 * 60 * 1000,
  });

  return (
    <div className="flex gap-2 flex-col pl-5">
      <ItemDisplay label={"Home"} pathname="/" />
      <ItemDisplay label={"About Us"} pathname="/about" />
      <div
        className={`font-medium hover:font-semibold items-center flex text-lg transform flex-col cursor-pointer duration-200  hover:text-[#1E4765] ${
          location.pathname.includes("/university")
            ? "text-[#3b8eca] font-semibold"
            : "text-[#595959]"
        }`}
      >
        <span
          className="text-start w-full"
          onClick={() => setShowUniv(!showUniv)}
        >
          Universities
        </span>
        <div className={`flex flex-col pl-5 ${showUniv ? "block" : "hidden"}`}>
          {isError ? (
            <div>Error</div>
          ) : isLoading ? (
            <div>Loading...</div>
          ) : (
            universityData.map((univ) => (
              <Link
                key={univ._id}
                to={`/university/${univ._id}`}
                className="hover:bg-[#1E4765] hover:text-[#fff] cursor-pointer font-semibold px-2 py-1 text-nowrap text-sm rounded-sm transform transition duration-75"
              >
                {univ.name}
              </Link>
            ))
          )}
        </div>
      </div>
      <ItemDisplay label={"Open School"} pathname="/openschool" />
      <div
        className={`font-medium hover:font-semibold items-center flex text-lg transform flex-col cursor-pointer duration-200  hover:text-[#1E4765] ${
          location.pathname.includes("/skillprogram")
            ? "text-[#3b8eca] font-semibold"
            : "text-[#595959]"
        }`}
      >
        <span
          className="text-start w-full"
          onClick={() => setShowSkill(!showSkill)}
        >
          Skill Programs
        </span>
        <div className={`flex flex-col pl-5 ${showSkill ? "block" : "hidden"}`}>
          <Link
            to="skillprogram"
            className="hover:bg-[#1E4765] hover:text-[#fff] cursor-pointer font-semibold px-2 py-1 text-nowrap text-sm rounded-sm transform transition duration-75"
          >
            Microsoft Office skill Certification
          </Link>
        </div>
      </div>
      <ItemDisplay label={"Contact Us"} pathname="/contact" />
      <ItemDisplay label={"FAQ"} pathname="/faq" />
      <ItemDisplay label={"Blogs"} pathname="/blogs" />
      <ItemDisplay label={"Get Suggestion"} pathname="/apply" />
    </div>
  );
};

export default MobileNavlist;
