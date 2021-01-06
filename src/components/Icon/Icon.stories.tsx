import React from "react";
import Icon from "./Icon";
import Move from "./demo/move";

export default {
  title: "Icon",
};

export const CustomIcon = () => (
  <div style={{ height: 50, fontSize: 24, fontWeight: 100 }}>
    <Icon style={{ color: "lightblue" }} component={Move} />
    <span>This is a custom icon.Icon lays inline with text.</span>
  </div>
);

export const SpinIcon = () => (
  <div style={{ height: 50, fontSize: 24, fontWeight: 100 }}>
    <Icon style={{ color: "lightblue" }} component={Move} spin/>
  </div>
);

export const RotateIcon = () => (
  <div style={{ height: 50, fontSize: 24, fontWeight: 100 }}>
    <Icon style={{ color: "lightblue" }} component={Move} rotate={50}/>
  </div>
);

export const ClickIcon = () => (
  <div style={{ height: 50, fontSize: 24, fontWeight: 100 }}>
    <Icon style={{ color: "lightblue" }} component={Move} onClick={() => alert("clicked")}/>
  </div>
);

export const BasicIcon = () => (
  <div style={{fontSize: 10}}>
    <Icon color="#888888" size={50} component={Move} onClick={() => alert("clicked")}/>
  </div>
);