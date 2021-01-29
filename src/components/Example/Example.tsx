import React from "react";
import ExampleProps from "./Example.types";
import "./Example.scss";

const Example: React.FC<ExampleProps> = (props) => {
  const {title, ...restProps} = props;
  return (
    <div data-testid="Example" {...restProps} className="" >{title}</div> 
  )
};

Example.displayName = "Example";
export default Example;
