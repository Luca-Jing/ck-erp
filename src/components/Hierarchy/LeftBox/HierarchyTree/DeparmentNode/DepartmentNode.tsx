import React from "react";
import { hierarchyTypes } from "store/hierarchy";
import ExpandNode from "../ExpandNode";

interface DepartmentNodeProps {
  department: hierarchyTypes.Department;
  currentSelectId: string | null;
  onClick: (id: string) => void;
}

const DepartmentNode: React.FunctionComponent<DepartmentNodeProps> = ({
  department,
  currentSelectId,
  onClick
}) => {
  let childDepartmentNodes = null;
  if (department.childDepartments) {
    childDepartmentNodes = department.childDepartments.map(
      (childDepartment, index) => (
        <li key={index}>
          <DepartmentNode
            department={childDepartment}
            currentSelectId={currentSelectId}
            onClick={onClick}
          />
        </li>
      )
    );
  }
  return (
    <>
      <ExpandNode
        dataType="department"
        currentSelectId={currentSelectId}
        nodeData={department}
        onClick={onClick}
      >
        {childDepartmentNodes}
      </ExpandNode>
    </>
  );
};

export default DepartmentNode;
