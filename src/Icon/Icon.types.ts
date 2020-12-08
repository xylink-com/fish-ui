export default interface IconProps {
  icon: React.ReactElement<HTMLOrSVGImageElement>;
  size?: sizeType;
  children?: React.ReactNode;
  color?: string;
  type?: "default" | "success" | "warning" | "danger" | "info";
}

type sizeType = "small" | "medium" | "large" | number;

