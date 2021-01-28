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

A video player based on video api of html5.
## Examples

<code src="./demo/basic.tsx" />

## Usage

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

### Params

#### VideoPlayerProps

| Property | Description | Type | Default |
| -------- | ----------- | ---- | ------- |
| className | custom class of video wrapper | string | "" |
| style | custom style of video wrapper | CSSProperties | {} |
| src | source url of video | string | ISource[] | |
| width | width of video wrapper | number\|string | "100%" |
| height | height of video wrapper | number\|string | "100%" |
| videoProps | origin html5 video props |  | {} |
| poster | cover of video | string | "" |
| showPanel | show video control panel or not | boolean | true |
| autoHidePanel | auto hide video control panel if set true | boolean | IHidePanelOption | true |
| panelOptions | options for video control panel | IPanelOptions |  |
| defaultVolume | default volume when video loaded | number | 1 |

#### IPanelOptions

| Property | Description | Type | Default |
| -------- | ----------- | ---- | ------- |
| showPlayBackForward | show playback and play forward button or not | boolean | true |
| showPlayDuration | show video played time and duration or not | boolean | true |
| showStop | show stop video button or not | boolean | true |
| showVolume | show volume button or not | boolean | true |
| showFullScreen | show toggle full screen button or not | boolean | true |
| panelGap | distance of control panel and wrapper border | number\|string | 20 |
| panelHeight | height of control panel | number\|string| 28 |
| panelStyle | custom style for control panel | CSSProperties | {} |
| panelClassName | custom class for control panel | string | "" |

#### HidePanelOption

| Property | Description | Type | Default |
| -------- | ----------- | ---- | ------- |
| timeout | duration when moving mouse out before hide control panel (ms) | number |

#### ISource

| Property | Description | Type |
| -------- | ----------- | ---- |
| src | source of video | string |
| type | type of video | string |

### WORKFLOW

#### TOFIX

- 画中画不支持 firefox 和 ie
- 变速播放在 IE 上使用异常

#### TODO

- [√] 支持变速播放
- 进度条支持动拖
- 支持帧预览
- 支持进度条光标
- 支持快捷键
- 支持自定义快捷键
- [√] 支持快捷播放按钮
- [√] 支持画中画播放
- 自定义画中画
- 支持自定义上下文菜单
- 支持简单动画
- 支持操作栏浮动
- 支持字幕
- 支持弹幕
- 支持进度条自定义
- 支持设置
