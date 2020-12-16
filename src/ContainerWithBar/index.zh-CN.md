---
title: ContainerWithBar
nav:
  title: Components
  path: /components
group:
  title: Scroll
  path: /scroll
legacy: /scroll/container-with-bar
---

# ContainerWithBar

带自定义滚动条的滚动容器。

## Examples

<code src="./demo/basic.tsx" />

## Usage

```ts
import ContainerWithBar from "xy-element";

<ContainerWithBar
  style={{
    width: "100%",
    height: 600,
  }}
>
  {data.split("").map((char, idx) => (
    <div
      style={{
        width: "100%",
        height: 60,
        backgroundColor: "lightcoral",
        boxSizing: "border-box",
        borderBottom: "1px solid #fff",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        userSelect: "none",
      }}
      key={idx}
    >
      {char}
    </div>
  ))}
</ContainerWithBar>
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

#### TOFIX

- 添加数据时滚动条状态变化有延迟。
- Firefox 下拉动滚动条运动缓慢。

#### TODO

- 结合滚动加载组件开发带自定义滚动条的滚动加载容器。
- 滚动条支持主题更换和样式自定义。
