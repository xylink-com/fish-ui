import React, { useState } from "react";
import "./index.scss";

export const defaultMaskConfig = {
  defaultBackground: "rgba(0,0,0,.45)",
};

export interface MaskProps {
  visible: boolean;
  style?: React.CSSProperties;
  zIndex?: number;
  transparent?: boolean;
  background?: string;
  onMaskClick?: (e: React.SyntheticEvent) => void;
  className?: string;
  prefixCls?: string;
}

const Mask: React.FC<MaskProps> = (props) => {
  const { defaultBackground } = defaultMaskConfig;
  const {
    visible,
    style = {},
    zIndex = 999,
    transparent = false,
    background = defaultBackground,
    onMaskClick,
    className = "",
    prefixCls = "xy-mask",
  } = props;

  const maskWrapperClasses = `${prefixCls} ${className} ${
    visible ? prefixCls + "-visible" : prefixCls + "-hidden"
  } ${transparent ? prefixCls + "-transparent" : ""}`;

  const handleMaskClick: React.EventHandler = (
    e: React.SyntheticEvent
  ): void => {
    onMaskClick?.(e);
  };

  return (
    <div
      className={maskWrapperClasses}
      style={{
        display: visible ? "block" : "none",
        zIndex: zIndex,
        background: transparent ? "transparent" : background,
        ...style,
      }}
      onClick={handleMaskClick}
    />
  );
};

export default Mask;
