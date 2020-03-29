import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CaretRightOutlined, CaretDownOutlined } from "@ant-design/icons";
import "./ExpandNode.scss";

interface ExpandNodeProps {
    dataType: "company" | "department" | "hierarchyClassNode";
    nodeData: any;
    currentSelectId: string | null;
    onClick: (id: string) => void;
}

const ExpandNode: React.FunctionComponent<ExpandNodeProps> = ({
    dataType,
    nodeData,
    children,
    currentSelectId,
    onClick
}) => {
    const [visible, setVisible] = useState(false);

    const expandToggleClick = (e: React.MouseEvent<HTMLElement>) => {
        setVisible(preState => !preState);
    };

    let hierarchyNameClassName;

    if (dataType !== "hierarchyClassNode") {
        hierarchyNameClassName =
            currentSelectId === nodeData.id
                ? "hierarchy-node__name--active"
                : "hierarchy-node__name";
    }

    return (
        <>
            <div className={hierarchyNameClassName}>
                <span onClick={expandToggleClick}>
                    {visible ? <CaretRightOutlined /> : <CaretDownOutlined />}
                </span>
                {dataType === "hierarchyClassNode" ? (
                    <span onClick={expandToggleClick}>{nodeData}</span>
                ) : (
                    <Link to="/#" onClick={() => onClick(nodeData.id)}>
                        {nodeData.name}
                    </Link>
                )}
            </div>
            <ul
                style={visible ? { display: "none" } : undefined}
                className="hierarchy-node_child"
            >
                {children}
            </ul>
        </>
    );
};

export default ExpandNode;
