import React from "react";
import { Outlet } from "react-router-dom";
import { FooterComponent, NavbarComponent } from "../components";

const LayoutPage = () => {
  return (
    <>
      <NavbarComponent />
      <section className="page">
        <Outlet />
      </section>

      {/* <FooterComponent /> */}
    </>
  );
};

export default LayoutPage;
