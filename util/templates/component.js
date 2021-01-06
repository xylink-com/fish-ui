module.exports = (componentName) => ({
  content: `import React from "react";
import ${componentName}Props from "./${componentName}.types";
import "./${componentName}.scss";

const ${componentName}: React.FC<${componentName}Props> = (props) => {
  const {...restProps} = props;
  return (
    <div data-testid="${componentName}" {...restProps} className="" /> 
  )
};

${componentName}.displayName = "${componentName}";
export default ${componentName};
`,
  extension: `.tsx`,
});
