import { useAuth } from "@/context/AuthContext";
import { House, LogOut, UserRound } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { SidebarTrigger } from "../ui/sidebar";

const AdminHeader = () => {
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const handleLogout = async () => {
    const res = logout()
      .then(() => navigate("/login"))
      .catch((err) => toast.error(err));
  };

  console.log(user);
  return (
    <div className=" flex w-full p-4  justify-between items-center">
      <div className="flex items-center gap-3">
        <SidebarTrigger className="text-black" />

        <House onClick={() => navigate("/")} className="cursor-pointer w-5" />
      </div>

      <div className="flex gap-2 items-center">
        <div className="flex max-sm:w-10 max-sm:h-10  rounded-full items-center justify-center bg-[#D9D9D9] w-12 h-12">
          <UserRound />
        </div>

        <div className="font-medium">
          <h2 className="text-black">{user?.name}</h2>
          <h3 className="text-[#7C7C7C]">{user?.email}</h3>
        </div>
        <LogOut onClick={handleLogout} className="text-black cursor-pointer" />
      </div>
    </div>
  );
};

export default AdminHeader;
