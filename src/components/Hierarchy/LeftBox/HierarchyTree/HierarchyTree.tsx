import React from "react";
import { hierarchyTypes } from "store/hierarchy";
import DepartmentNode from "./DeparmentNode";
import ExpandNode from "./ExpandNode";

interface TreeProps {
  company: hierarchyTypes.Company;
  currentSelectId: string | null;
  onClick: (id: string) => void;
}
const Tree: React.FunctionComponent<TreeProps> = ({
  company,
  currentSelectId,
  onClick
}) => {
  let companyNodes;
  let departmentNodes;

  if (company.childCompanies) {
    companyNodes = company.childCompanies.map((child, index) => {
      return (
        <li key={index}>
          <Tree
            company={child}
            currentSelectId={currentSelectId}
            onClick={onClick}
          />
        </li>
      );
    });
  }
  if (company.departments) {
    departmentNodes = company.departments.map((department, index) => {
      return (
        <li key={index}>
          <DepartmentNode
            department={department}
            currentSelectId={currentSelectId}
            onClick={onClick}
          />
        </li>
      );
    });
  }

  return (
    <>
      <ExpandNode
        dataType="company"
        nodeData={company}
        currentSelectId={currentSelectId}
        onClick={onClick}
      >
        <li>
          <ExpandNode
            dataType="hierarchyClassNode"
            nodeData="下级部门"
            currentSelectId={currentSelectId}
            onClick={onClick}
          >
            {departmentNodes}
          </ExpandNode>
        </li>
        <li>
          <ExpandNode
            dataType="hierarchyClassNode"
            nodeData="分子公司"
            currentSelectId={currentSelectId}
            onClick={onClick}
          >
            {companyNodes}
          </ExpandNode>
        </li>
      </ExpandNode>
    </>
  );
};

export default Tree;
