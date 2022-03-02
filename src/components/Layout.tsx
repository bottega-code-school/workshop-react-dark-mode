import * as React from "react";
import NavBar from "./NavBar";

type Props = {
  children: React.ReactNode;
};
const Layout = ({ children }: Props) => {
  return (
    <div style={{ minHeight: "100vh" }}>
      <NavBar />

      <div className="container">
        <div className="content">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
