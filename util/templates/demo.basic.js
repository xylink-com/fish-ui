module.exports = (componentName) => ({
  content:
`/**
 * title: Basic Usage
 * desc: Some desc for basic usage.
 *
 * title.zh-CN: 基础用法
 * desc.zh-CN: 基础用法的描述。
 */

import { ${componentName} } from '../${componentName}.stories';
export default () => <${componentName} />;`,
  extension: `.tsx`,
  fileName: `basic`,
  key: `genBasicDemo`
})