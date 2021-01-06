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

| Property | Description | Type | Default |
| -------- | ----------- | ---- | ------- |

### Types

\`\`\`ts

\`\`\`

### WORKFLOW

#### TOFIX

#### TODO`,
  extension: `.md`,
  fileName: `index.en-US`,
})