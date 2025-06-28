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
        {content}
        <SheetClose ref={sheetClose}></SheetClose>
      </SheetContent>
    </Sheet>
  );
};

export default SheetDisplay;
