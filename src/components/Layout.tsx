import * as React from "react";
import NavBar from "./NavBar";
import { ThemeContext } from "./ThemeContext";

type Props = {
  children: React.ReactNode;
};
const Layout = ({ children }: Props) => {
  const { backgroundColor, color } = React.useContext(ThemeContext);

  return (
    <div style={{ backgroundColor, color }}>
      <NavBar />

      <div className="container">
        <div className="content">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
