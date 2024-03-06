import React from "react";
import { Outlet } from "react-router-dom";
import { FooterComponent, NavbarComponent } from "../components";

const LayoutPage = () => {
  return (
    <>
      <NavbarComponent />
      <Outlet />
      <FooterComponent />
    </>
  );
};

export default LayoutPage;
