import * as React from "react";
import { NavLink } from "react-router-dom";
import { ThemeContext } from "./ThemeContext";
import Switch from "react-switch";
import { MdDarkMode, MdWbSunny } from "react-icons/md";

const logo = require("../../static/assets/images/logo.png");
const logoLight = require("../../static/assets/images/logo-light.png");

const ThemeIcon = ({ theme }: { theme: string }) => {
  const iconSize = "1.25rem";
  const icon =
    theme === "light" ? (
      <MdWbSunny size={iconSize} />
    ) : (
      <MdDarkMode size={iconSize} style={{ color: "white" }} />
    );

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
      }}
    >
      {icon}
    </div>
  );
};

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

const NavBar = () => {
  const { setTheme, backgroundColorHighlight, color, theme, tintColor } =
    React.useContext(ThemeContext);

  return (
    <div className="nav" style={{ backgroundColor: backgroundColorHighlight }}>
      <div className="nav__content">
        <div>
          <img
            src={theme === "dark" ? logoLight : logo}
            alt="Logo"
            className="logo"
          />
        </div>

        <div className="nav-links">
          {links.map(({ to, label }) => (
            <NavLink
              to={to}
              key={to}
              style={{ color: tintColor }}
              activeStyle={{ backgroundColor: "#129fc0", color: "white" }}
              exact
            >
              {label}
            </NavLink>
          ))}

          <div className="theme-toggler">
            <Switch
              onChange={() => setTheme(theme === "dark" ? "light" : "dark")}
              checked={theme === "dark"}
              checkedIcon={<ThemeIcon theme="light" />}
              uncheckedIcon={<ThemeIcon theme="dark" />}
              onColor="#129fc0"
              offColor="#141926"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
