import React, { useState, useEffect } from "react";
import Scroller from "./Scroller";

export default {
  title: "Scroller",
};

export const simpleScroller = () => {
  const [hasMore, setHasMore] = useState<boolean>(true);
  const [page, setPage] = useState<number>(0);
  const [list, setList] = useState<number[]>([]);
  const [tip, setTip] = useState("loading...");

  const totalPage: number = 3;

  const genNewDate = (): number[] => {
    let newData = [];
    for (let i = 0; i < 10; i++) {
      newData.push(parseInt(1000 * Math.random()));
    }
    return newData;
  };

  useEffect(() => {
    console.log("==>", hasMore, page, list.length);
  }, [list.length]);

  const handleLoadMore = () => {
    setTimeout(() => {
      // setList([]);
      setList([...list, ...genNewDate()]);
    }, 500);
    if(page >= totalPage - 1) {
      setHasMore(false);
    }
    setPage((page) => ++page);
  };

  return (
    <Scroller
      hasMore={hasMore}
      loadMore={handleLoadMore}
      style={{
        width: 600,
        height: 500,
        background: "lightcoral",
      }}
      loader={tip}
      onLoadAll={() => alert("All data loaded!")}
    >
      {list.map((data, idx) => (
        <div
          style={{
            width: "100%",
            height: "60px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "white",
            background: "#ccc",
            border: "5px solid lightblue",
          }}
          key={idx}
        >
          {data}
        </div>
      ))}
    </Scroller>
  );
};
