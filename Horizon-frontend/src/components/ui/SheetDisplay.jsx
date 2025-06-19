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
import { navList } from "../Navbar/navList";
import { Link } from "react-router-dom";

const SheetDisplay = ({ trigger, content }) => {
  const sheetClose = useRef();

  const handleMobNav = () => {
    window.scrollTo(0, 0);
    sheetClose.current.click();
  };

  return (
    <Sheet>
      <SheetTrigger>{trigger}</SheetTrigger>
      <SheetContent className="w-60  bg-white">
        <SheetHeader>
          <SheetTitle></SheetTitle>
          <SheetDescription></SheetDescription>
        </SheetHeader>

        <div className="flex flex-col px-10 gap-2 ">
          {navList.map((item) => (
            <Link
              onClick={handleMobNav}
              key={item.id}
              className={`hover:font-bold font-semibold text-2xl transform duration-200 hover:scale-105 hover:text-[#1E4765]  ${
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

        {content}

        <SheetClose ref={sheetClose}></SheetClose>
      </SheetContent>
    </Sheet>
  );
};

export default SheetDisplay;
