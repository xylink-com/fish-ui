import React, { useRef, useState, useEffect } from "react";
import classnames from "classnames";
import ScrollBar from "./ScrollBar";
import { useScrollPlus } from "xy-hooks/packages/hooks";
import ContainerWithBarProps from "./ContainerWithBar.types";
import "./ContainerWithBar.scss";

const ContainerWithBar: React.FC<ContainerWithBarProps> = (props) => {
  const { className, style, prefixCls = "xy", children = <div /> } = props;
  const defaultPrefixCls = `${prefixCls}-scroll-container`;
  const classes = classnames(defaultPrefixCls, `${defaultPrefixCls}-wrapper`);
  const containerRef = useRef(null);

  // 初始化时获取height和scrollHeight

  const { top } = useScrollPlus(containerRef.current);
  const scrollHeight = containerRef.current?.scrollHeight;
  const height = containerRef.current?.clientHeight;
  console.log('==>', {scrollHeight, height});

  const handleScroll = (percent) => {
    // 滚动页面至相应的位置
    containerRef.current?.scrollTo({
      top: (scrollHeight - height) * percent,
      behavior: "auto",
    });
  };

  return (
    <div
      data-testid="ContainerWithBar"
      className={classes}
      style={{ ...style }}
    >
      <div className={`${defaultPrefixCls}-inner-wrapper`} ref={containerRef}>
        {children}
      </div>
      <ScrollBar pos={{ scrollHeight, top, height }} onScroll={handleScroll} />
    </div>
  );
};

export default ContainerWithBar;
