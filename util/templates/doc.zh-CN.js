module.exports = (componentName) => ({
  content:
`---
title: ${componentName}
nav:
  title: Components
  path: /components
group:
  title: Example
  path: /example
legacy: /example/component-name
---

# ${componentName}

## 示例

<code src="./demo/basic.tsx" />

## 用法

\`\`\`ts

\`\`\`

### 参数

| 参数 | 描述 | 类型 | 默认值 |
| -------- | ----------- | ---- | ------- |

### 接口与类型

\`\`\`ts

\`\`\`

### 工作流

#### TOFIX

#### TODO`,
  extension: `.md`,
  fileName: `index.zh-CN`,
})