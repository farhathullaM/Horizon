import AdminHeader from "@/components/Navbar/AdminHeader";
import AdminSideBar from "@/components/Navbar/AdminSideBar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { ProtectedRoute } from "@/routes/ProtectedRoutes";
import React from "react";
import { Outlet } from "react-router-dom";

const AdminLayout = () => {
  return (
    // <ProtectedRoute requiredRoles={["admin", "super_admin"]}>
    <SidebarProvider>
      <AdminSideBar />
      <main style={{ flexGrow: 1, backgroundColor: "#f9f9f9" }}>
        <AdminHeader />
        <Outlet />
      </main>
    </SidebarProvider>
    // </ProtectedRoute>
  );
};

export default AdminLayout;
