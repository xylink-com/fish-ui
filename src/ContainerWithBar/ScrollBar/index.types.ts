export default interface ScrollBarProps {
  className?: string;
  style?: React.CSSProperties;
  prefixCls?: string;
  pos: {
    scrollHeight: number,
    top: number,
    height: number,
  };
  theme?: "dark";
  onScroll: (percent: number) => void;
}
