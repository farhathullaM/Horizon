import { Footer } from "@/components/Footer/Footer";
import { Navbar } from "@/components/Navbar/Navbar";
import { Whatsapp } from "@/components/ui/Whatsapp";
import React from "react";
import { Outlet } from "react-router-dom";

const PublicLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Whatsapp />
      <Footer />
    </>
  );
};

export default PublicLayout;
