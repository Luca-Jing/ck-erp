import React from "react";
import { Navigation } from "components";
import "./MainLayout.scss";

const MainLayout: React.FunctionComponent<{}> = ({ children }) => {
  return (
    <>
      <Navigation.Toolbar />
      <main className="main-content">{children}</main>
    </>
  );
};

export default MainLayout;
