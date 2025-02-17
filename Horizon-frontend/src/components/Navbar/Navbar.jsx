import React from "react";
import horizon_logo from "../../assets/horizon_logo.png";
import { Link } from "react-router-dom";
import { PhoneCall } from "lucide-react";

export const Navbar = () => {
  return (
    <div className="flex justify-around h-18 w-full items-center gap-4 shadow-md">
      <Link to="/">
        <img
          src={horizon_logo}
          alt="horizon logo"
          draggable={false}
          className="w-28"
        />
      </Link>

      <div className="flex gap-4">
        <Link to="/">Home</Link>
        <Link to="/">About</Link>
        <Link to="/">Our Courses</Link>
        <Link to="/">Contact</Link>
      </div>

      <div className="flex items-center gap-2 border-2 px-4 py-1 rounded-md">
        <PhoneCall size={16} />
        <p> 888888888</p>
      </div>
    </div>
  );
};
