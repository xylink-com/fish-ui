module.exports = (componentName) => ({
  content: 
`import ${componentName} from "./${componentName}";
import ${componentName}Props from "./${componentName}.types";

export { ${componentName}Props };
export default ${componentName};`,
  extension: `.tsx`,
  fileName: `index`
})