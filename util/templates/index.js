const component = require("./component");
const componentTypes = require("./component.types");
const componentStories = require("./component.stories");
const componentTests = require("./component.test");
const componentStyles = require("./component.scss");
const exportIndex = require("./export.index");
const docEnUS = require("./doc.en-US");
const docZhCN = require("./doc.zh-CN");
const demoBasic = require("./demo.basic");

module.exports = [
  component,
  componentTypes,
  componentStories,
  componentTests,
  componentStyles,
  exportIndex,
  docEnUS,
  docZhCN,
  demoBasic
];
