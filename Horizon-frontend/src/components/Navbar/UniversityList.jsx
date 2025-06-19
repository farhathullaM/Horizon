import { Link } from "react-router-dom";
import { universityData } from "../University/universities";

const UniversityList = () => {
  return (
    <div className="flex flex-col gap-2">
      {universityData.map((univ) => (
        <Link
          to={`/university/${univ.id}`}
          className=" hover:bg-[#1E4765] hover:text-[#fff] cursor-pointer font-semibold px-2 py-1 rounded-sm transform transition duration-75"
        >
          {univ.name}
        </Link>
      ))}
    </div>
  );
};

export default UniversityList;
