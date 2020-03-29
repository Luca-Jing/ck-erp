import React from "react";
import NavigationItem from "./NavigationItem";
import "./NavigationItems.scss";

const links = [
  {
    link: "/hierarchy",
    exact: undefined,
    children: "Hierarchy"
  },

  {
    link: "/departments",
    exact: undefined,
    children: "Departments"
  },

  {
    link: "/externalConcacts",
    exact: undefined,
    children: "External Contacts"
  }
];

const NavigationItems: React.FunctionComponent<{}> = () => {
  return (
    <ul className="navigation-items">
      {links.map((link, index) => {
        return (
          <NavigationItem link={link.link} exact={link.exact} key={index}>
            {link.children}
          </NavigationItem>
        );
      })}
    </ul>
  );
};

export default NavigationItems;
