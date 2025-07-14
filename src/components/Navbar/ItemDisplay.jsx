import { Link, useLocation } from "react-router-dom";

const ItemDisplay = ({ label, pathname }) => {
  const location = useLocation();
  return (
    <Link
      className={`font-medium hover:font-semibold max-lg:text-base text-nowrap text-lg transform duration-200 hover:scale-105 hover:text-[#1E4765] select-none ${
        location.pathname === pathname
          ? "text-[#3b8eca] font-semibold"
          : "text-[#595959]"
      }`}
      to={pathname}
    >
      {label}
    </Link>
  );
};

export default ItemDisplay;
