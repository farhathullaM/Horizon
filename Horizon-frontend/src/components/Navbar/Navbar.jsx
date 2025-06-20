import horizon_logo from "@/assets/logo/horizon_blue.png";
import { Link, useLocation } from "react-router-dom";
import { Menu, PhoneCall } from "lucide-react";
import { navList } from "./navList";
import Hover from "../ui/Hover";
import UniversityList from "./UniversityList";
import ProgramList from "./ProgramList";
import SheetDisplay from "../ui/SheetDisplay";
import ItemDisplay from "./ItemDisplay";
import MobileNavlist from "./MobileNavlist";

export const Navbar = () => {
  const location = useLocation();

  return (
    <header className="flex justify-between items-center h-18 w-full gap-4  max-sm:justify-between px-15 max-md:px-5 sticky top-0 bg-[#d6d9df] z-40">
      <Link to="/">
        <img
          src={horizon_logo}
          alt="horizon logo"
          draggable={false}
          className="w-40"
        />
      </Link>

      <div className="flex items-center gap-4">
        <div className="flex gap-5 max-sm:hidden">
          <ItemDisplay label={"Home"} pathname="/" />
          <ItemDisplay label={"About Us"} pathname="/about" />
          <Hover
            label={"Universities"}
            pathname={"/university"}
            content={<UniversityList />}
          />
          <ItemDisplay label={"Open School"} pathname="/openschool" />
          <Hover
            label={"Skill Programs"}
            pathname={"/skillprogram"}
            content={<ProgramList />}
          />
          <ItemDisplay label={"Contact Us"} pathname="/contact" />
        </div>

        <SheetDisplay
          trigger={
            <Menu className="hidden text-[#cdcbcb] max-sm:block border-2 rounded-sm  cursor-pointer bg-[#1E4765] hover:text-white p-1 w-8 h-8" />
          }
          content={<MobileNavlist />}
        />

        <Link
          to="tel:8086027773"
          className="flex items-center gap-2 border-2 px-4 py-2 rounded-lg max-sm:hidden text-white bg-[#1E4765]  hover:bg-[#3a4f5f]"
        >
          <PhoneCall size={16} color="white" />
          <p> 8086027773</p>
        </Link>
      </div>
    </header>
  );
};
