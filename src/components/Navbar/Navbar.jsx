import horizon_logo from "@/assets/logo/horizon_blue.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { LogOut, Menu, PhoneCall, User } from "lucide-react";
import Hover from "../ui/Hover";
import UniversityList from "./UniversityList";
import ProgramList from "./ProgramList";
import SheetDisplay from "../ui/SheetDisplay";
import ItemDisplay from "./ItemDisplay";
import MobileNavlist from "./MobileNavlist";
import { useAuth } from "@/context/AuthContext";

export const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = async () => {
    const res = await logout()
      .then(() => navigate("/login"))
      .catch((err) => toast.error(err));
  };

  return (
    <header className="flex justify-between items-center h-18 w-full gap-4  max-sm:justify-between px-15  sticky top-0 bg-[#d6d9df] z-40 max-lg:px-5 ">
      <Link to="/">
        <img
          src={horizon_logo}
          alt="horizon logo"
          draggable={false}
          className="w-40 shrink-0 max-md:w-36"
        />
      </Link>

      <div className="flex items-center gap-4 max-lg:gap-2">
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
            content={
              <ProgramList
                text={"Microsoft Office skill Certification"}
                path="/skillprogram"
              />
            }
          />

          <Hover
            label={"More"}
            pathname={"/apply /contact /blogs /faq"}
            content={
              <div className="flex flex-col gap-2">
                <ProgramList text={"Contact Us"} path="/contact" />
                <ProgramList text={"Apply"} path="/apply" />
                <ProgramList text={"Blogs"} path="/blogs" />
                <ProgramList text={"FAQ"} path="/faq" />
              </div>
            }
          />
        </div>

        <SheetDisplay
          trigger={
            <Menu className="hidden text-[#cdcbcb] max-sm:block border-2 rounded-sm  cursor-pointer bg-[#1E4765] hover:text-white p-1 w-8 h-8" />
          }
          content={<MobileNavlist />}
        />

        <Link
          to="tel:8086027773"
          className="flex items-center gap-2 border-2 px-4 py-2 rounded-lg max-lg:hidden text-white bg-[#1E4765]  hover:bg-[#3a4f5f]"
        >
          <PhoneCall size={16} color="white" />
          <p> 8086027773</p>
        </Link>

        {user &&
          (user?.role === "admin" || user?.role === "super_admin" ? (
            <User className="cursor-pointer" onClick={() => navigate("/admin")} />
          ) : (
            <LogOut className="cursor-pointer" onClick={handleLogout} />
          ))}
      </div>
    </header>
  );
};
