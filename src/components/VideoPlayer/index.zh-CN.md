---
title: VideoPlayer
nav:
  title: Components
  path: /components
group:
  title: DataDisplay
  path: /data-display
legacy: /data-display/video-player
---

# VideoPlayer
基于 html5 video 的视频播放器。

## 示例

<code src="./demo/basic.tsx" />

## 用法

```ts
<div style={{ width: 600, height: 400 }}>
  <VideoPlayer
    autoHidePanel={{timeout: 1000}}
    // autoHidePanel={false}
    src={src}
    poster="https://img.alicdn.com/tfscom/TB19dgvGFXXXXXPXpXXSutbFXXX.jpg_200x200.jpg"
    panelOptions={{
      // showPlayBackForward: false,
      // showStop: false,
      // showVolume: false,
      // showFullScreen: false,
      // panelHeight: "35px",
      // panelGap: 400,
      // showPlayDuration: false,
      panelStyle: {
        // backgroundColor: "rgba(0,0,0,0.5)",
        bottom: 8
      },
    }}
    defaultVolume={0.5}
  />
</div>
```

### 参数

| 参数 | 描述 | 类型 | 默认值 |
| -------- | ----------- | ---- | ------- |


### 返回值

| 参数 | 描述 | 类型 |
| -------- | ----------- | ---- |

### 工作流

#### TOFIX

#### TODO

  