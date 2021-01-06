---
title: Scroller
nav:
  title: Components
  path: /components
group:
  title: Other
  path: /other
legacy: /other/scroller
---

# Scroller

A scroll container to load more data when scroll to bottom.

## Examples

<code src="./demo/basic.tsx" />

## Usage

```ts
import Scroller from "xy-element";

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
```

### Params

| Property | Description | Type | Default |
| -------- | ----------- | ---- | ------- |

### Result

| Property | Description | Type |
| -------- | ----------- | ---- |

### Types

```ts

```

### WORKFLOW

#### TODO 

- 组件加载时，如果数据加载太少没有触发滚动，自动发请求直到能够滚动
- 添加无数据的处理