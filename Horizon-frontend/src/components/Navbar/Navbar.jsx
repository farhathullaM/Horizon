import horizon_logo from "@/assets/logo/horizon_blue.png";
import { Link, useLocation } from "react-router-dom";
import { Menu, PhoneCall } from "lucide-react";
import { navList } from "./navList";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useRef } from "react";

export const Navbar = () => {
  const sheetClose = useRef();
  const location = useLocation();
  const handleMobNav = () => {
    window.scrollTo(0, 0);
    sheetClose.current.click();
  };

  return (
    <header className="flex justify-around h-18 w-full items-center gap-4 shadow-md max-sm:justify-between max-sm:px-5 sticky top-0 bg-white z-40">
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
            onClick={() => window.scrollTo(0, 0)}
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

      <Sheet>
        <SheetTrigger>
          <Menu className="hidden max-sm:block border-2 rounded-sm border-black cursor-pointer hover:bg-[#1E4765] hover:text-white p-1 w-8 h-8" />
        </SheetTrigger>
        <SheetContent className="w-60">
          <SheetHeader>
            <SheetTitle></SheetTitle>
            <SheetDescription></SheetDescription>
          </SheetHeader>

          <div className="flex flex-col px-10 gap-2 ">
            {navList.map((item) => (
              <Link
                onClick={handleMobNav}
                key={item.id}
                className={`font-medium hover:font-semibold text-2xl transform duration-200 hover:scale-105 hover:text-[#1E4765] ${
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

          <SheetClose ref={sheetClose}></SheetClose>
        </SheetContent>
      </Sheet>
      
      <div className="flex items-center gap-2 border-2 px-4 py-1 rounded-md max-sm:hidden">
        <PhoneCall size={16} />
        <p> 8086027773</p>
      </div>
    </header>
  );
};
