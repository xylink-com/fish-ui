import React from "react";
import MyExampleProps from "./MyExample.types";
import "./MyExample.scss";

const MyExample: React.FC<MyExampleProps> = (props) => {
  const { title, ...restProps } = props;
  return (
    <div data-testid="MyExample" {...restProps} className="">
      {title}
    </div>
  );
};

MyExample.displayName = "MyExample";
export default MyExample;
