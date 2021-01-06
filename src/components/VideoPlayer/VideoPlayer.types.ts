import { CSSProperties } from "react";

interface ISource {
  src: string;
  type: string;
}

interface HidePanelOption {
  timeout?: number;
}

interface IPanelOptions {
  showPlayBackForward?: boolean;
  showPlayDuration?: boolean;
  showStop?: boolean;
  showVolume?: boolean;
  showFullScreen?: boolean;
  panelGap?: number | string;
  panelHeight?: number | string;
  panelStyle?: CSSProperties;
  panelClassName?: string;
}

export default interface VideoPlayerProps {
  className?: string;
  style?: CSSProperties;
  src: string | ISource[]
  width?: number | string;
  height?: number | string;
  videoProps?: {};
  poster?: string;
  showPanel?: boolean;
  autoHidePanel?: boolean | IHidePanelOption;
  panelOptions?: IPanelOptions;
  defaultVolume?: number;
}
