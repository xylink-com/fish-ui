module.exports = (componentName) => ({
  content: `import React from "react";
import ${componentName} from "./${componentName}";

export default {
    title: "${componentName}"
};

export const Basic${componentName} = () => <${componentName} />;
`,
  extension: `.stories.tsx`
});
