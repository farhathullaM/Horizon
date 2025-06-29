import { Link } from "react-router-dom";
import {
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar";

/**
 * Renders a list of menu items
 * @param {Array} items - Array of menu item objects with title, url, and icon
 */
function MenuItems({ items }) {
  return (
    <SidebarMenu>
      {items.map((item) => (
        <SidebarMenuItem  key={item.title}>
          <SidebarMenuButton asChild>
            <Link to={item.url}>
              <item.icon />
              <span>{item.title}</span>
            </Link>
          </SidebarMenuButton>
        </SidebarMenuItem>
      ))}
    </SidebarMenu>
  );
}

export default MenuItems;