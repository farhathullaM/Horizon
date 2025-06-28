import whatsapp_icon from "@/assets/icons/Whatsapp.svg";
import { Link } from "react-router-dom";

export const Whatsapp = () => {
  return (
    <Link
      to="https://wa.me/918086027773"
      target="_blank"
      className="fixed bottom-5 right-5 transform hover:scale-110 ease-in-out duration-150  bg-white cursor-pointer p-3 max-sm:p-2 z-40 rounded-full"
    >
      <img
        src={whatsapp_icon}
        alt="whatsapp"
        className="w-10 max-md:w-8 max-sm:w-6 select-none z-50"
      />
    </Link>
  );
};
