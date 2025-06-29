import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const SheetContainer = ({ triggerBtn, title, children }) => {
  return (
    <Sheet>
      <SheetTrigger>{triggerBtn}</SheetTrigger>
      <SheetContent className={"bg-[#fff]"}>
        <SheetHeader>
          <SheetTitle>{title}</SheetTitle>
          <SheetDescription></SheetDescription>
        </SheetHeader>
        {children}
      </SheetContent>
    </Sheet>
  );
};

export default SheetContainer;
