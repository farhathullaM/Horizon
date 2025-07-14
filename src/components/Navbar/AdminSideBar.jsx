import { Link } from "react-router-dom";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
} from "../ui/sidebar";
import { mainMenuItems } from "./adminNavItems";
import MenuItems from "./MenuItems";
import logo from "@/assets/logo/horizon_blue.png";
import { LogOut } from "lucide-react";

const AdminSideBar = () => {
  return (
    <Sidebar>
      <SidebarHeader className="bg-white">
        <Link to="/">
          <img src={logo} alt="horizon logo" className="w-40 py-5" />
        </Link>
      </SidebarHeader>

      <SidebarContent className="flex gap-0  bg-white">
        <SidebarGroup>
          <SidebarGroupContent>
            <MenuItems items={mainMenuItems} />
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>


      <SidebarFooter>
        <LogOut />
      </SidebarFooter>
    </Sidebar>
  );
};

export default AdminSideBar;
