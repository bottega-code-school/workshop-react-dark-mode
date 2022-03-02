import * as React from "react";
import NavBar from "./NavBar";
import { ThemeContext } from "./ThemeContext";

type Props = {
  children: React.ReactNode;
};
const Layout = ({ children }: Props) => {
  const { backgroundColor, backgroundColorHighlight, color } =
    React.useContext(ThemeContext);

  return (
    <div style={{ backgroundColor, color, minHeight: "100vh" }}>
      <NavBar />

      <div className="container">
        <div
          className="content"
          style={{ backgroundColor: backgroundColorHighlight }}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
