import React from "react";
import IconProps, { CustomIconComponentProps } from "./Icon.types";
import classnames from "classnames";
import { warning } from "../../utils";
import useInsertStyles from "../../hooks/useInsertStyles";
import { iconStyles, svgBaseProps } from "./Icon.config";

const Icon: React.FC<IconProps> = (props, ref) => {
  const {
    className,
    component: Component, // 以组件引用
    viewBox,
    spin,
    rotate,
    tabIndex,
    onClick,
    children,
    color,
    size,
    style,
    ...restProps
  } = props;

  warning(
    Boolean(children || Component),
    "Icon should have `component` prop or `children`."
  );

  useInsertStyles(iconStyles);

  const innerSvgProps: CustomIconComponentProps = {
    ...svgBaseProps,
    className: classnames({
      "xyicon-spin": !!spin,
    }),
    style: rotate && {
      msTransform: `rotate(${rotate}deg)`,
      transform: `rotate(${rotate}deg)`,
    },
    viewBox,
  };

  if (!viewBox) delete innerSvgProps.viewBox;

  const renderInnerNode = () => {
    if (Component) return <Component {...innerSvgProps}>{children}</Component>;

    if (children) {
      warning(
        Boolean(viewBox) ||
          (React.Children.count(children) === 1 &&
            React.isValidElement(children) &&
            React.Children.only(children).type === 'use'),
        'Make sure that you provide correct `viewBox`' +
        ' prop (default `0 0 1024 1024`) to the icon.',
      );

      return (
        <svg {...innerSvgProps}>
          {children}
        </svg>
      );
    }
  };

  return (
    <span
      data-testid="Icon"
      role="img"
      {...restProps}
      ref={ref}
      tabIndex={tabIndex === undefined && onClick ? -1 : tabIndex}
      onClick={onClick}
      className={classnames("xyicon", className)}
      style={{
        color: color || "inherit",
        fontSize: size || "inherit",
        ...style,
      }}
    >
      {renderInnerNode()}
    </span>
  );
};
Icon.displayName = 'XyIcon';

export default React.forwardRef<HTMLSpanElement, IconProps>(Icon);
