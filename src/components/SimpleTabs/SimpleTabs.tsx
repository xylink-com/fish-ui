import React, { useState } from "react";
import SimpleTabsProps, { ITab, ITabKey } from "./SimpleTabs.types";
import "./SimpleTabs.scss";

const SimpleTabs: React.FC<SimpleTabsProps> = (props) => {
  const { onChange = () => {}, className = "", data } = props;
  const defaultActiveKey = props.defaultActiveKey || data[0].key;

  const [activeKey, setActiveKey] = useState<ITabKey>(defaultActiveKey);

  return (
    <div className={`simple_tab_container ${className}`}>
      {data.map((tab: ITab) => {
        const isActive = activeKey === tab.key;
        return (
          <div
            className={`tab_item ${isActive ? "active" : ""}`}
            onClick={() => {
              setActiveKey(tab.key);
              onChange(tab.key);
            }}
            key={tab.key}
          >
            <div className="tab_inner_block">{tab.text}</div>
          </div>
        );
      })}
    </div>
  );
};

export default SimpleTabs;
