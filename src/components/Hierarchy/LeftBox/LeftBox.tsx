import React from "react";
import "./LeftBox.scss";
import Search from "./Search";
import ButtonGroup from "./ButtonGroup";

const LeftBox: React.FunctionComponent<{}> = () => {
  return (
    <div className="hierarchy__leftbox">
      <Search />
      <ButtonGroup />
      <div>hierarchy tree</div>
    </div>
  );
};

export default LeftBox;
