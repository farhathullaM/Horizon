import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { useLocation } from "react-router-dom";

const Hover = ({ label, pathname, content }) => {
  const location = useLocation();

  return (
    <HoverCard openDelay={100}>
      <HoverCardTrigger
        className={`font-medium hover:font-semibold items-center flex text-lg transform cursor-pointer duration-200 hover:scale-105 hover:text-[#1E4765] max-lg:text-base text-nowrap ${
          location.pathname.includes(pathname)
            ? "text-[#3b8eca] font-semibold"
            : "text-[#595959]"
        }`}
      >
        {label} <span className="text-xl text-[#838689] pl-1 max-lg:text-base text-nowrap">+</span>
      </HoverCardTrigger>
      <HoverCardContent
        className={"text-[#1E4765] bg-[#fff] border-none w-fit"}
      >
        {content}
      </HoverCardContent>
    </HoverCard>
  );
};

export default Hover;
