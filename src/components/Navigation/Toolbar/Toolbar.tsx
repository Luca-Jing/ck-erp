import React from "react";
import NavigationItems from "../NavigationItems";
import "./Toolbar.scss";

const Toolbar: React.FunctionComponent<{}> = () => {
  return (
    <header className="toolbar">
      <nav>
        <NavigationItems />
      </nav>
    </header>
  );
};

export default Toolbar;
