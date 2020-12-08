module.exports = (componentName) => ({
  content: `export default interface ${componentName}Props {
}
`,
  extension: `.types.ts`,
});
