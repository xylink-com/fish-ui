import React from "react";
import ExampleComponentProps from "./ExampleComponent.types";
import "./ExampleComponent.scss";

const ExampleComponent: React.FC<ExampleComponentProps> = (props) => {
  const {title, ...restProps} = props;
  return (
    <div data-testid="ExampleComponent" {...restProps} className="">{title}</div> 
  )
};

ExampleComponent.displayName = "ExampleComponent";
export default ExampleComponent;
