export default interface ButtonProps {
  type?: TButtonType;
  size?: TButtonSize;
  shape?: TButtonShape;
  ghost?: boolean;
  disabled?: boolean;
  block?: boolean;
  danger?: boolean;
  icon?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
  tag?: TRenderTag;
  href?: string;
  htmlType?: string;
  loading?: boolean;
  target?: string;
}

type TButtonType = "primary" | "ghost" | "dashed" | "link" | "text" | "default";

type TButtonSize = "large" | "middle" | "small";

type TButtonShape = "circle" | "round" | "square";

type TRenderTag = "div" | "a" | "button"