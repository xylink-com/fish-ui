module.exports = (componentName) => ({
  content:
`/**
 * title: Basic Usage
 * desc: Some desc for basic usage.
 *
 * title.zh-CN: 基础用法
 * desc.zh-CN: 基础用法的描述。
 */

import { Basic${componentName} } from '../${componentName}.stories';
export default () => <Basic${componentName} />;`,
  extension: `.tsx`,
  fileName: `basic`,
  key: `genBasicDemo`
})