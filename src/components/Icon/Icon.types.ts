import { ReactNode } from "react";

export interface CustomIconComponentProps {
  width: string | number;
  height: string | number;
  fill: string;
  viewBox?: string;
  className?: string;
  style?: React.CSSProperties;
}

export default interface IconProps extends IconBaseProps {
  viewBox?: string;
  component?: React.ComponentType<CustomIconComponentProps | React.SVGProps<SVGSVGElement>>;
  ariaLabel?: React.AriaAttributes['aria-label'];
  color?: string;
  size?: string | number;
  style?: React.CSSProperties;
  className?: string;
  spin?: boolean;
  rotate?: boolean;
  tabIndex?: number;
  onClick?: () => void;
  children?: ReactNode;
}
