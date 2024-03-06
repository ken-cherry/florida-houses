import React from "react";
import { NavLink } from "react-router-dom";

const NavbarComponent = () => {
  return (
    <>
      <nav>
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
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavbarComponent;
