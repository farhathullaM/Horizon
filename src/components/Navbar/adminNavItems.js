import { Box, LayoutDashboard, MessageCircle, ShoppingBag, User } from "lucide-react";

export const mainMenuItems = [
  {
    title: "University",
    url: "/admin",
    icon: LayoutDashboard,
  },
  {
    title: "Courses",
    url: "/admin/courses",
    icon: ShoppingBag,
  },
  {
    title: "FAQ",
    url: "/admin/faqs",
    icon: Box,
  },
  {
    title: "Testimonials",
    url: "/admin/testimonials",
    icon: User,
  },
  {
    title: "Blogs",
    url: "/admin/blogs",
    icon: LayoutDashboard,
  },
  {
    title: "Contacts",
    url: "/admin/contacts",
    icon: ShoppingBag,
  },
  {
    title: "Applications",
    url: "/admin/Applications",
    icon: Box,
  },
  {
    title: "Suggestion Request",
    url: "/admin/suggestions",
    icon: MessageCircle,
  },
  {
    title: "Users",
    url: "/admin/users",
    icon: User,
  }
];
