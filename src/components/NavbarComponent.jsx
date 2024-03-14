import React from "react";
import { NavLink } from "react-router-dom";
import Wrapper from "../assets/wrappers/Navbar";

const NavbarComponent = () => {
  return (
    <>
      <Wrapper>
        <div className="nav-center">
          <span className="logo">House Hunting</span>
          <div className="nav-links">
            <NavLink to="/" className="nav-link">
              Home
            </NavLink>
            <NavLink to="/orlando" className="nav-link">
              Orlando
            </NavLink>
            <NavLink to="/poinciana" className="nav-link">
              Poinciana
            </NavLink>
            <NavLink to="/kissimmee" className="nav-link">
              Kissimmee
            </NavLink>
          </div>
        </div>
      </Wrapper>
    </>
  );
};

export default NavbarComponent;
