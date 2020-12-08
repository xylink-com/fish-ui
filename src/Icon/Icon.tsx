import React from "react";
import IconProps from "./Icon.types";
import "./Icon.scss";

export const mergedSizeProp = (
  size: sizeType | undefined,
  defaultSize: sizeType
): number => {
  let mergedSize: number;
  if (!size) {
    size = defaultSize;
  }
  if (size === "small") {
    mergedSize = 16;
  } else if (size === "medium") {
    mergedSize = 32;
  } else if (size === "large") {
    mergedSize = 64;
  } else if (typeof size === "number") {
    mergedSize = size;
  } else {
    mergedSize = 32;
  }
  return mergedSize;
};

const suffixCls: string = "xy";

const Icon: React.FC<IconProps> = (
  props
): React.ReactElement<HTMLSpanElement> => {
  const { icon, size, color = "#000000" } = props;
  const iconSize: number = mergedSizeProp(size, "medium");

  return (
    <span
      className={`${suffixCls}-icon`}
      style={{
        marginRight: 8,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <svg
        viewBox="0 0 1024 1024"
        xmlns="http://www.w3.org/2000/svg"
        width={iconSize}
        height={iconSize}
        fill={color}
      >
        {icon}
      </svg>
      <span
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        {props.children}
      </span>
    </span>
  );
};

export default Icon;
