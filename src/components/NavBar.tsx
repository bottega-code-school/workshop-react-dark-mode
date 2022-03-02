import * as React from "react";
import { NavLink } from "react-router-dom";

const logo = require("../../static/assets/images/logo.png");
const logoLight = require("../../static/assets/images/logo-light.png");

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

const NavBar = () => {
  return (
    <div className="nav">
      <div className="nav__content">
        <div>
          <img src={logo} alt="Logo" className="logo" />
        </div>

        <div className="nav-links">
          {links.map(({ to, label }) => (
            <NavLink
              to={to}
              key={to}
              activeStyle={{ backgroundColor: "#129fc0", color: "white" }}
              exact
            >
              {label}
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
