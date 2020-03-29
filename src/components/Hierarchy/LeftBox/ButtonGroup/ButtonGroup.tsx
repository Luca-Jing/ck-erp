import React from "react";
import "./ButtonGroup.scss";

const ButtonGroup: React.FunctionComponent<{}> = () => {
  return (
    <div className="hierarchy__leftbox__button-group">
      <div className="hierarchy__leftbox__button-group__button--left hierarchy__leftbox__button-group__button--check">
        组织架构
      </div>
      <div className="hierarchy__leftbox__button-group__button--right">
        角色
      </div>
    </div>
  );
};

export default ButtonGroup;
