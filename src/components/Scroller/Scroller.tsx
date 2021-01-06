import React, { useEffect, useState, useRef, useMemo, forwardRef } from "react";
import ScrollerProps from "./Scroller.types";
import classnames from "classnames";
import { useScrollPlus } from "xy-hooks/packages/hooks";
import useDebounceFn from "../../hooks/useDebounceFn";
import "./Scroller.scss";

const Scroller: React.FC<ScrollerProps> = (props) => {
  const {
    hasMore = false,
    loadMore,
    isReverse = false,
    loader = "loading",
    threshold = 250,
    children,
    prefixCls = "xy",
    className = "",
    style = {},
    onLoadAll,
    noData = "No data",
    innerStyle = {},
    hiddenScrollBar = false,
  } = props;

  const [loading, setLoading] = useState<boolean>(false);
  const scrollerRef = useRef(null);
  const innerScrollRef = useRef(null);
  const mountRef = useRef<boolean>(null);
  let loadingLock: boolean = true;
  const { leftHeight } = useScrollPlus(scrollerRef.current);
  const { run } = useDebounceFn(
    () => {
      loadMore();
      setLoading(false);
      loadingLock = true;
    },
    {
      wait: 500,
    }
  );

  // ========== Function ========== //

  // const canScroll = useMemo<boolean>(
  //   () =>
  //     scrollerRef.current?.clientHeight < innerScrollRef.current?.scrollHeight,
  //   [children]
  // );

  // useEffect(() => {
  //   if(!canScroll && leftHeight <=0) {
  //     loadMore();
  //   }
  // }, [canScroll])

  useEffect(() => {
    console.log('==>', {leftHeight});
    if (hasMore && leftHeight <= threshold) {
      if (!loading && loadingLock) {
        setLoading(true);
        loadingLock = false;
      }
      run();
    }
  }, [leftHeight]);

  useEffect(() => {
    if (!hasMore) {
      onLoadAll?.();
    }
  }, [hasMore]);

  const scrollerClasses = classnames(className, `${prefixCls}-scroller`);
  const innerScrollerClasses = classnames(`${prefixCls}-scroller-inner`, {
    [`${prefixCls}-hidden-bar`]: hiddenScrollBar,
  });

  // ========== Render ========== //
  return (
    <div
      className={scrollerClasses}
      style={{
        ...style,
      }}
      ref={scrollerRef}
    >
      <div
        className={innerScrollerClasses}
        ref={innerScrollRef}
        style={{ ...innerStyle }}
      >
        {children}
      </div>
      {loading && loader}
    </div>
  );
};

export default Scroller;
