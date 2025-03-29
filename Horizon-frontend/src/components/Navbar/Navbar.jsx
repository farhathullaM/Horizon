import horizon_logo from "@/assets/logo/horizon_blue.png";
import { Link, useLocation } from "react-router-dom";
import { PhoneCall } from "lucide-react";
import { navList } from "./navList";

export const Navbar = () => {
  const location = useLocation();

  return (
    <header className="flex justify-around h-18 w-full items-center gap-4 shadow-md max-sm:justify-between max-sm:pr-5 sticky top-0 bg-white z-40">
      <Link to="/">
        <img
          src={horizon_logo}
          alt="horizon logo"
          draggable={false}
          className="w-40"
        />
      </Link>

      <div className="flex gap-10 max-sm:hidden">
        {navList.map((item) => (
          <Link
            key={item.id}
            className={`font-medium hover:font-semibold transform duration-200 hover:scale-105 hover:text-[#1E4765] ${
              location.pathname === item.link
                ? "text-[#3b8eca] font-semibold"
                : "text-[#595959]"
            }`}
            to={item.link}
          >
            {item.name}
          </Link>
        ))}
      </div>

      <div className="flex items-center gap-2 border-2 px-4 py-1 rounded-md">
        <PhoneCall size={16} />
        <p> 8089027774</p>
      </div>
    </header>
  );
};
