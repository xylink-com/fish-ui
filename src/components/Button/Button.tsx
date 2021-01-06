import React from "react";
import ButtonProps from "./Button.types";
import classnames from "classnames";
import { defaultPrefixCls } from "./Button.config";
import "./Button.scss";

const Button: React.FC<ButtonProps> = (props) => {
  const {
    className = "",
    style = {},
    children,
    type = "default",
    size = "middle",
    shape = "square",
    ghost = false,
    disabled = false,
    block = false,
    onClick = () => {},
    icon = <></>,
    danger = false,
    tag: Tag = "button",
    href = "",
    htmlType = "button",
    loading = false,
    target,
    ...restProps
  } = props;

  const classes = classnames(
    className,
    defaultPrefixCls,
    `${defaultPrefixCls}-${type}`,
    `${defaultPrefixCls}-${size}`,
    `${defaultPrefixCls}-${shape}`,
    {
      [`${defaultPrefixCls}-${ghost}`]: ghost,
      [`${defaultPrefixCls}-${disabled}`]: disabled,
      [`${defaultPrefixCls}-${block}`]: block,
      [`${defaultPrefixCls}-${danger}`]: danger,
      [`${defaultPrefixCls}-${loading}`]: loading,
    }
  );

  return (
    <Tag
      data-testid="Button"
      {...restProps}
      style={style}
      className={classes}
      onClick={onClick}
      href={href}
      type={htmlType}
    >
      {icon}
      <span>{children}</span>
    </Tag>
  );
};

Button.displayName = "Button";
export default Button;
