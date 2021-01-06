import React, { useEffect, useState, useRef, useMemo } from "react";
import classnames from "classnames";
import ScrollBarProps from "./index.types";
import "./index.scss";

const ScrollBar: React.FC<ScrollBarProps> = (props) => {
  const {
    className,
    style,
    prefixCls = "xy",
    pos,
    theme = "dark",
    onScroll,
  } = props;
  const defaultPrefixCls = `${prefixCls}-scroll-bar`;
  const classes = classnames(
    defaultPrefixCls,
    `${defaultPrefixCls}-wrapper`,
    `${defaultPrefixCls}-${theme}`
  );

  const [translateY, setTranslateY] = useState(0);
  const scrollBarRef = useRef(null);
  const scrollBarContainerRef = useRef(null);
  const isDragBar = useRef(false);
  const lastY = useRef<number | null>(null);

  const { scrollHeight, top = 0, height } = pos;
  const percent = top / (scrollHeight - height);
  const scrollBarHeight = Math.round((height * height) / scrollHeight) || 50;
  const innerOffsetTop = (height - scrollBarHeight) * percent;
  const offsetTop = useMemo(
    () =>
      Math.max(
        Math.min(
          isDragBar ? innerOffsetTop : translateY,
          height - scrollBarHeight
        ),
        0
      ) || 0,
    [translateY, pos]
  );

  // 当外部滚动触发时，将滚动位置同步到内部
  useEffect(() => {
    // console.log('==>', {percent, innerOffsetTop});
    setTranslateY(innerOffsetTop);
  }, [pos])

  useEffect(() => {
    if(isDragBar.current) {
      onScroll?.(translateY / (height - scrollBarHeight));
    }
  }, [translateY, pos]);

  const handleMouseDown = (e: any) => {
    e.stopPropagation();
    isDragBar.current = true;
  };

  const handleMouseUp = (e: any) => {
    isDragBar.current = false;
    lastY.current = null;
  };

  const handleMouseMove = (e: any) => {
    if (isDragBar.current) handleMove(e);
  };

  const handleMove = (e: any) => {
    // translateY 是整数（px），要求scrollBarHeight也是整数。
    if (lastY.current) {
      let ty = e.clientY - lastY.current + translateY;
      if (ty < 0 || ty > height - scrollBarHeight) return;
      setTranslateY(ty);
    }
    lastY.current = e.clientY;
  };

  window.onmouseup = handleMouseUp;
  window.onmousemove = handleMouseMove;

  return (
    <div className={classes} ref={scrollBarContainerRef}>
      <div className={`${defaultPrefixCls}-inner`}>
        {/* scroll bar */}
        <div
          className={`${defaultPrefixCls}-bar`}
          style={{
            height: scrollBarHeight,
            top: offsetTop,
          }}
          onMouseDown={handleMouseDown}
          ref={scrollBarRef}
        />
      </div>
    </div>
  );
};

export default ScrollBar;
