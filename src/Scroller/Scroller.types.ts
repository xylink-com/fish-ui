export default interface ScrollerProps {
  hasMore: boolean;
  loadMore: () => void;
  isReverse?: boolean;
  loader?: React.ReactNode;
  threshold?: number;
  prefixCls?: string;
  className?: string;
  style?: React.CSSProperties;
  onLoadAll?: () => void;
  noData?: React.ReactNode;
  innerStyle?: React.CSSProperties;
  hiddenScrollBar?: boolean;
}
