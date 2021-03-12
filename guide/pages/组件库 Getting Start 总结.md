# 组件/工具平台

## 背景介绍

基于小鱼前端现状，没有一个`通用的组件和函数库平台`，各个业务线在独自维护开发自己平台的组件和通用函数工具库，导致开发效率较低，没有办法`统一管理`组件和工具函数。

基于此，2021年，我们考虑搭建自己的PC组件平台和通用工具函数库平台，方便各个业务能够快速开发和使用通用的组件和函数，避免无效的开发。

现已完成搭建的两个平台：
1. XY-Element
2. Toolkit

## XY-Element (组件库)
现在的组件库主要针对 web 端。
下面是xy-element 的相关链接：

> Github: [xy-element](https://github.com/xylink-com/xy-element)
> Docs: [xy-element website](https://xylink-com.github.io/xy-element/zh-CN)
> Npm: [xy-element npm 地址](https://www.npmjs.com/package/xy-element)
> Getting start: [Getting Started](https://xylink-com.github.io/xy-element/zh-CN/pages/getting-started)

### 现状

现在已经推进并完成的相关工作：

- [x] 文档管理与发布
- [x] storybook 开发和预览组件
- [x] 组件打包与部署
- [x] 生成组件模板
- [x] 单元测试

#### TODO
- [ ] 组件库主题配置
- [ ] 组件 UI 和交互规范
- [ ] 基础组件开发
- [ ] 文档同步部署到 CDN

### 构架
- 文档：[dumi](https://d.umijs.org/zh-CN)
- 打包：rollup
- 组件管理：storybook
- 测试：jest
- 开发语言：typescript
- 兼容性：ie11 及其他主流浏览器

 ### 开发指南

#### 拉取项目
从 github 拉取 xy-element 项目：[xy-element](https://github.com/xylink-com/xy-element)

```bash
git clone git@github.com:xylink-com/xy-element.git
```

#### 安装依赖
初始化项目：安装依赖

```bash
yarn init
```

开始开发组件之前，您可以快速生成一个组件模板，执行如下的命令即可。

#### 生成组件

生成目标组件

```bash
yarn generate ComponentNameWithCamelCase
```

或者使用:

```bash
yarn gen ComponentNameWithCamelCase
```

如执行`yarn gen VideoPlayer`之后，将会生成组件模板目录。
生成组件目录如下：

```txt
VideoPlayer
├── demo 引入文档的 demo 目录
├────── basic.tsx 默认的文档 demo 示例
├── VideoPlayer.scss 组件样式文件
├── VideoPlayer.stories.tsx 组件 demo 或者案例文件
├── VideoPlayer.test.tsx 组件测试文件
├── VideoPlayer.tsx 组件主体文件
├── VideoPlayer.types.ts 组件类型文件
├── index.en-US.md 组件英文文档
├── index.zh-CN.md 组件中文文档
└── index.tsx 组件入口，导出相关组件和接口
```

![生成组件目录结构.png](/image/docs/生成组件目录结构.png)

目录中每个文件的使用方法将会在下文中详细介绍。

开发过程中您可以使用 storybook 预览效果、管理组件。

#### 开发组件

启动storybook开发组件

```bash
yarn storybook
```

或者使用:

```bash
yarn story
```

打开浏览器:  [http://localhost:6006](http://localhost:6006)  查看效果。

![打开storybook.png](/image/docs/打开storybook.png)

如果你想详细了解 storybook，请查看[storybook 官方文档](https://storybook.js.org/docs/react/get-started/introduction)。

#### 编写demo

编写组件 demo

在 ***.stories.tsx** 中编写 demo，storybook 允许一个组件有多个 demo,  只要在  story.tsx 文件中 export 多个 demo 实例就可以。

在 demo 目录中以默认导出的方式将组件导出，可以在文档中进行引用。
如在 demo 目录中 basic.tsx:

```TS
/**
 * title: Basic Usage // 案例英文标题
 * desc: Set interval, reset interval and clear interval via setInterval. // 案例英文描述
 *
 * title.zh-CN: 基础用法 // 案例中文标题
 * desc.zh-CN: 通过 setInterval 实现的setInterval, Reset 和 Clear 定时器的用法。 // 案例中文描述
 */
// 从 storybook 中导入组件
import { SimpleContainerWithBar } from '../ContainerWithBar.stories';
// 将组件实例默认导出
export default () => <SimpleContainerWithBar />;
```

demo 在文档中的显示将会是这样：

![demo 用法示例图.png](/image/docs/demo用法示例图.png)

使用 code标签 可以将 demo 案例在文档中引入，如引入 demo 目录下的 basic.tsx 案例：

```html
<code src="./demo/basic.tsx" />
```

或者也可以直接在文档中以 tsx/jsx 的方式引入代码块渲染为 demo。

更多文档的配置项参见：[TSX/JSX 支持的 FrontMatter 配置项](https://d.umijs.org/zh-CN/config/frontmatter#tsxjsx-%E6%94%AF%E6%8C%81%E7%9A%84-frontmatter-%E9%85%8D%E7%BD%AE%E9%A1%B9)

#### 编写文档

在 index.en-US.md 中编写英文文档，在 index.zh-CN.md 中编写中文文档。
文档头部的配置如下：

```txt
---
title: VideoPlayer 组件名称
nav:
  title: Components // 组件在页面顶部导航栏的归属
  path: /components // 组件在页面顶部导航栏的路由
group:
  title: DataDisplay // 组件在左侧导航栏的分组
  path: /data-display // 组件在左侧导航栏分组的路由
legacy: /data-display/video-player // 组件的路由
---
```

相应配置在文档中的显示效果如下：

![dumi 文档头部配置图.png](/image/docs/dumi文档头部配置图.png)

更多文档参考项请参考：[Markdown 支持的 FrontMatter 配置项](https://d.umijs.org/zh-CN/config/frontmatter#markdown-%E6%94%AF%E6%8C%81%E7%9A%84-frontmatter-%E9%85%8D%E7%BD%AE%E9%A1%B9)

#### 预览开发文档

```bash
yarn start
```

 打开浏览器： [http://localhost:8000](http://localhost:8000) ，您可以在本地预览文档效果。

#### 测试组件库

```bash
yarn test
```

或者：

```bash
yarn test:watch
```

#### 打包组件库

```bash
yarn build
```

或者：

```bash
yarn b
```

组件库会被打包到 build 目录。

#### 发布组件库

```bash
yarn pub
```

或者:

```bash
yarn p
```

组件库将会发布到 npm。

查看[xy-element npm 地址](https://www.npmjs.com/package/xy-element)。

发布稳定版本之前请先发布 beta 版本，如 `1.0.1-beta.0`，发布 beta 版本时请递增 beta 版本后，然后再发布 fix 版本、小版本和大版本，如稳定版本 `1.0.1`。

发布beta 版本：

```bash
yarn pub:beta
```

当您提交文档到 master 分支时，文档会在 github 自动打包部署，如果您需要手动发布文档，您查看打包组件文档和发布静态文档步骤。

#### 打包组件文档

```bash
yarn build:doc
```

或者：

```bash
yarn bd
```

文档将会打包到 docs目录，请区分 docs 目录和 guide 目录，guide 目录中存放的是文档原件，docs 目录存放的是可发布的静态文档资源。

快速打包组件库和静态文档：

```bash
yarn go
```

#### 发布静态文档

```bash
yarn pub:doc
```

或者：

```bash
yarn pd
```

静态文档将会发布到 gh-pages 分支，三分钟左右文档将会更新。

#### 如何使用组件库

如果你需要在项目中使用组件库，按照下面的步骤操作即可。

- 安装

```bash
yarn add xy-element
npm i xy-element
```

- 引用

```ts
import { VideoPlayer } from "xy-element";
```

- 使用

```ts
<VideoPlayer
	// autoHidePanel={{timeout: 1000}}
	autoHidePanel={false}
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
	defaultVolume={0.1}
	defaultPlayRate={2.00}
	defaultPlayRateArray={[0.5, 0.75, 1, 1.5, 2, 3, 5]}
/>
```

- 查看效果

![chrome 中使用组件图.png](/image/docs/chrome中使用组件图.png)

- ie11的 兼容性

cra 在开发过程中不支持使用 ie11 预览开发效果，因此执行 `yarn build`打包项目后，执行`serve -s build`在本地打开后如下：

![ie11兼容性图.png](/image/docs/ie11兼容性图.png)

### Q&A

#### 生成的模板文件的详细使用方法？

使用 `yarn gen ExampleComponent` 生成的文件如下：
- ExampleComponent.tsx
这里写组件的主要逻辑，会相应的生成组件的模板代码，如：
 
```tsx | pure
import React from "react";
import ExampleComponentProps from "./ExampleComponent.types";
import "./ExampleComponent.scss";

const ExampleComponent: React.FC<ExampleComponentProps> = (props) => {
  const {...restProps} = props;
  return (
    <div data-testid="ExampleComponent" {...restProps} className=""></div> 
  )
};

ExampleComponent.displayName = "ExampleComponent";
export default ExampleComponent;
```
 
可以专注于写组件的业务逻辑。

- ExampleComponent.scss

这里写组件样式，主题文件会自动引入。

```ts
@import "src/theme.scss";
```

- ExampleComponent.types.ts 

这里写组件的类型、接口等。

```ts
export default interface ExampleComponentProps {
}
```

- ExampleComponent.stories.tsx

这里是组件 demo ，可以打开 storybook 看到实时的开发效果。这里会导出一个默认的 demo 。

```ts
import React from "react";
import ExampleComponent from "./ExampleComponent";

export default {
    title: "ExampleComponent" // storybook 侧边导航栏标题
};

export const BasicExampleComponent = () => <ExampleComponent />;
```

- ExampleComponent.test.tsx
这里是测试文件，可以使用 jest 和 testing-library 进行单元测试。

```ts
import React from "react";
import { render } from "@testing-library/react";

import ExampleComponent from "./ExampleComponent";
import ExampleComponentProps from "./ExampleComponent.types";
```

- index.zh-CN.md 和 index.en-US.md

这里是中英文文档，生成的文件中已经有默认的配置，写文档时只要稍作修改即可。

```md
---
title: ExampleComponent
nav:
  title: Components
  path: /components
group:
  title: Example
  path: /example
legacy: /example/component-name
---

# ExampleComponent
// 组件简介

## 示例

<code src="./demo/basic.tsx" />

## 用法

\`\`\`ts

\`\`\`

### 参数

| 参数 | 描述 | 类型 | 默认值 |
| ---- | ---- | ---- | ------ |

### 接口与类型

\`\`\`ts

\`\`\`

### 工作流

#### TOFIX

#### TODO

```

默认文档中包含了实例、用法、参数、接口与类型、TODO 等项，可以介绍清楚组件的使用方法、案例和开发计划。

- index.tsx

这个文件会帮你导出组件、组件类型，总结组件需要向外暴露的部分。

```ts
import ExampleComponent from "./ExampleComponent";
import ExampleComponentProps from "./ExampleComponent.types";

export { ExampleComponentProps };
export default ExampleComponent;
```

 #### 组件和文档分别是怎样部署的？
 
 - 组件由 master 分支维护，分版本发布到 npm。发布方式为手动发布。
 - 文档的更新与发布：
   - 手动发布方式：文档原件保存在 guide 目录，打包后在 docs 目录。打包文档后执行`yarn pd`，发布到 github-pages。
   - 自动发布方式：开发人员不再关注文档打包和部署，开发者将分支合并至 master 后，由 GitHub action 打包项目文档，并发布到 gh-pages分支作为静态文档发布。发布方式为自动发布，这样开发者只需关注文档编写即可。
 
 #### 为什么要同时使用 dumi 和 storybook？
 
 - storybook 开发组件很方便，但是生成静态文档不是很方便。
 - dumi 只作为文档工具来使用，即我们写的文档最后会被自动打包和发布，开发中最常使用的仍然是 storybook。
 - 后期我们可以将 storybook 的组件文档也进行发布，用户既可以在 storybook 中浏览组件列表，也可以在 dumi 中看到组件的使用方法和开发动向。
 - 开发中只启用 storybook 即可，编写文档时可以本地打开 dumi 查看文档效果。
  
 #### 怎么更改组件模板？
  组件模板可以在 utils/templates 目录中进行修改，可以新增模板文件或者修改现有的模板。
  
  #### storybook 中开发的 demo 能用于文档中吗？
  可以。在 demo 目录中象征性的从 story 文件中导入再默认导出 demo，然在在文档中通过 code 标签直接引用，demo 无需重复编写。
  或者您也可以直接在文档中以 tsx/jsx 代码段从 story 文件中中引入 demo 并显示在文档中。
  
  #### 文档具体是怎么部署到 GitHub pages的？
  
  - 手动部署：使用 gh-page 可手动部署本地 build 目录到远端 gh-pages 分支。
  - 使用 GitHub action 自动部署
  
  在项目中新建.github/workflows 目录，添加 gp-ci.yml 如下：
  
  ```yml
 name: CI

# Controls when the action will run. 
on:
  # Triggers the workflow on push or pull request events but only for the master branch
  push:
    branches: [ master ]
  pull_request:
    branches: [ master ]

  # Allows you to run this workflow manually from the Actions tab
  workflow_dispatch:

# A workflow run is made up of one or more jobs that can run sequentially or in parallel
jobs:
  # This workflow contains a single job called "build"
  publishDoc:
    # The type of runner that the job will run on
    runs-on: ubuntu-latest
    strategy:
      matrix:
        node-version: [12.x]

    # Steps represent a sequence of tasks that will be executed as part of the job
    steps:
      # Checks-out your repository under $GITHUB_WORKSPACE, so your job can access it
      - uses: actions/checkout@v2

      - name: Use Node.js ${{ matrix.node-version }}
        uses: actions/setup-node@v1
        with:
          node-version: ${{ matrix.node-version }}


      - name: Install Packages  # 安装依赖
        run: npm install && npm install yargs-parser
        
      - name: Cache node modules # 缓存依赖
        uses: actions/cache@v1
        with:
          path: node_modules
          key: ${{ runner.os }}-node-${{ hashFiles('**/package-lock.json') }}
          restore-keys: |
            ${{ runner.OS }}-build-${{ env.cache-name }}-
            ${{ runner.OS }}-build-
            ${{ runner.OS }}-

      - name: Build docs # 打包文档
        run: npm run build:doc
      
      - name: Publish docs # 发布文档
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./docs


  ```
  
  这时可以编写文档不用关注文档的打包与发布，直接合并到 master 分支即可，action 会自动打包和发布文档。
  
  参见：[部署文档到 github pages](https://d.umijs.org/guide/faq#deploy-on-github-pages)
  
  #### 开发人员需要做什么？
  只需要关注组件开发和文档编写，不需要关注部署与发布。
  
  > 1. yarn gen Component
  > 2. yarn story
  > 3. 编写组件和 demo
  > 4. 填写文档
  > 5. pull request
 
 
## toolkit (工具库)

> Github: [toolkit](https://github.com/xylink-com/toolkit)
> Docs: [xy-element website](https://xylink-com.github.io/toolkit/zh-CN)
> Getting start: [Getting Started](https://xylink-com.github.io/toolkit/zh-CN/pages/document)

### 现状

现在已经完成的工作：

- [x] 工具打包与部署
- [x] 文档管理
- [x] 文档发布 
- [x] 单元测试
- [x] 部分工具开发

#### TODO
- [ ] 工具整理与开发
- [ ] 完善文档

### 架构
- 文档： dumi
- 打包：rollup
- 开发语言：typescript
- 测试：jest

### 目录结构

```txt
toolkit
├── LICENSE
├── README.en-US.md
├── README.md
├── _test_  // 测试目录
├── config
├── docs  // 生成静态文档
├── guide  // 文档原件
├── lib
├── package.json
├── public
├── rollup.config.js
├── src
├── tsconfig.json
└── yarn.lock
```

### 计划开发的工具类

工具类正在开发，没人每周开发并提交一个工具类，由团队内进行代码审核。

 - [x] broswer: 浏览器相关，如类型检测、版本检测
 - [x] fullscreen(event): 全屏模块
 - store：localStorage 缓存
 - [x] time：时间格式化
 - axios：axios 封装，包括请求拦截器
 - httpclient：网络请求工具封装
 - 节流/防抖
 - websocket：websocket相关方法封装
 - logger：日志模块
 - timeout/interval/requestanimation：定时器相关方法
 - [x] emmit：事件管理模块
 - db：indexedDB封装
 - tranlateMoney(fixed)：货币转换
 - [x] url parms：url 解析
 - [x] mergeDeep：对象深合并
 - [x] cloneDeep：深拷贝
 - array/object/map: 常见数据结构方法封装
 - [x] native(native-js)(android,ios)：native 模块封装


## 演示



