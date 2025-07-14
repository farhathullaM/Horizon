import React from "react";
import { Link, useNavigate } from "react-router-dom";

const ProgramList = ({ text, path }) => {
  const navigate = useNavigate();

  return (
    <Link
      to={path}
      className=" hover:bg-[#1E4765] hover:text-[#fff] cursor-pointer font-semibold px-2 py-1 rounded-sm transform transition duration-75"
    >
      {text}
    </Link>
  );
};

export default ProgramList;
