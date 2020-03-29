import React from "react";
import { NavLink } from "react-router-dom";
import "./NavigationItem.scss";

interface NavigationItemProps {
  link: string;
  exact?: boolean;
}

const NavigationItem: React.FunctionComponent<NavigationItemProps> = ({
  children,
  link,
  exact
}) => {
  return (
    <li className="navigation-item">
      <NavLink to={link} exact={exact}>
        {children}
      </NavLink>
    </li>
  );
};
export default NavigationItem;
