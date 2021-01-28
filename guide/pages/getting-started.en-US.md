---
order: 1
nav:
  title: Guide
  order: 1
---

# Getting Started

## Development Guide

1. 从 github 拉取 xy-element 项目：[xy-element](https://github.com/xylink-com/xy-element)

```bash
git clone git@github.com:xylink-com/xy-element.git
```

2. 初始化项目：安装依赖

```bash
yarn init
```

3. 生成目标组件

```bash
yarn generate ComponentNameWithCamelCase
```

或者使用:

```bash
yarn gen ComponentNameWithCamelCase
```

生成组件目录如下：

```txt
Scroller
├── demo 引入文档的 demo 目录
├────── basic.tsx 默认的文档 demo 示例
├── Scroller.scss 组件样式文件
├── Scroller.stories.tsx 组件 demo 或者案例文件
├── Scroller.test.tsx 组件测试文件
├── Scroller.tsx 组件主体文件
├── Scroller.types.ts 组件类型文件
├── index.en-US.md 组件英文文档
├── index.zh-CN.md 组件中文文档
└── index.tsx 组件入口，导出相关组件和接口
```

![[生成组件目录结构.png]]

4. 启动story book开发组件

```bash
yarn storybook
```

或者使用:

```bash
yarn story
```

打开浏览器: http://localhost:6006

5. 编写组件 demo

在 ***.stories.tsx** 中编写 demo，并且在 demo 目录中以默认导出的方式导出。
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

demo 案例可以在文档中引入，如：

```html
<code src="./demo/basic.tsx" />
```

或者也可以直接在文档中以 tsx/jsx 的方式引入代码块渲染为 demo。

更多文档的配置项参见：[TSX/JSX 支持的 FrontMatter 配置项](https://d.umijs.org/zh-CN/config/frontmatter#tsxjsx-%E6%94%AF%E6%8C%81%E7%9A%84-frontmatter-%E9%85%8D%E7%BD%AE%E9%A1%B9)

6. 编写文档

在 index.en-US.md 中编写英文文档，在 index.zh-CN.md 中编写中文文档。
文档头部的配置如下：

```txt
---
title: ContainerWithBar 组件名称
nav:
  title: Components // 组件在页面顶部导航栏的归属
  path: /components // 组件在页面顶部导航栏的路由
group:
  title: Scroll // 组件在左侧导航栏的分组
  path: /scroll // 组件在左侧导航栏分组的路由
legacy: /scroll/container-with-bar // 组件的路由
---
```

更多文档参考项请参考：[Markdown 支持的 FrontMatter 配置项](https://d.umijs.org/zh-CN/config/frontmatter#markdown-%E6%94%AF%E6%8C%81%E7%9A%84-frontmatter-%E9%85%8D%E7%BD%AE%E9%A1%B9)

7. 预览开发文档

```bash
yarn start
```

 打开浏览器： http://localhost:8000

8. 测试组件库

```bash
yarn test
```

或者：

```bash
yarn test:watch
```

9. 打包组件库

```bash
yarn build
```

或者：

```bash
yarn b
```

- 打包组件文档

```bash
yarn build:doc
```

或者：

```bash
yarn bd
```

快速打包组件库和静态文档：

```bash
yarn go
```

10. 发布组件库

```bash
yarn pub
```

或者:

```bash
yarn p
```

11. 发布静态文档

```bash
yarn pub:doc
```

或者：

```bash
yarn pd
```
