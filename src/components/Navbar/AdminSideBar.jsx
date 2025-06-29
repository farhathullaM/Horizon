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

const AdminSideBar = () => {
  return (
    <Sidebar>
      {/* <SidebarHeader className="bg-white">
        <Header />
      </SidebarHeader> */}

      <SidebarContent className="flex gap-0  bg-white">
        <SidebarGroup>
          <SidebarGroupContent>
            <MenuItems items={mainMenuItems} />
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      {/* Footer - Uncomment if needed */}
      {/* <SidebarFooter>
        <MenuItems items={footerMenuItems} />
      </SidebarFooter> */}
    </Sidebar>
  );
};

export default AdminSideBar;
