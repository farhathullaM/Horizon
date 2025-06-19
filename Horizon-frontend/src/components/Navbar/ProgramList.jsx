import React from "react";
import { useNavigate } from "react-router-dom";

const ProgramList = () => {
  const navigate = useNavigate();

  return (
    <p
      onClick={() => navigate("/skillprogram")}
      className=" hover:bg-[#1E4765] hover:text-[#fff] cursor-pointer font-semibold px-2 py-1 rounded-sm transform transition duration-75"
    >
      Microsoft Office skill Certification
    </p>
  );
};

export default ProgramList;
