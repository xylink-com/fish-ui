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

## Examples

<code src="./demo/basic.tsx" />

## Usage

\`\`\`ts

\`\`\`

### Params

| 参数 | 描述 | 类型 | 默认值 |
| -------- | ----------- | ---- | ------- |

### Result

| 参数 | 描述 | 类型 |
| -------- | ----------- | ---- |

### Types

\`\`\`ts

\`\`\`

### WORKFLOW

#### TOFIX

#### TODO`,
  extension: `.md`,
  fileName: `index.zh-CN`,
})