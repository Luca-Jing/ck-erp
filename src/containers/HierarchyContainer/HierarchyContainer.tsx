import React from "react";
import { LeftBox, RightBox } from "components/Hierarchy";
import "./HierarchyContainer.scss";

const HierarchyContainer: React.FunctionComponent<{}> = () => {
  return (
    <div className="hierarchy">
      <LeftBox />
      <RightBox />
    </div>
  );
};

export default HierarchyContainer;
