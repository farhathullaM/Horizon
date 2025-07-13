import logo from "@/assets/logo/horizon_blue.png";
import React from "react";
import { useNavigate } from "react-router-dom";

export const Heading = () => {
  const navigate = useNavigate();

  return (
    <div
      className="flex gap-4 items-center cursor-pointer select-none justify-center py-5"
      onClick={() => navigate("/")}
    >
      <img src={logo} className="w-48" alt="" />
    </div>
  );
};
