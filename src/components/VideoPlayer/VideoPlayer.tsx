import React, { useState, useRef, useEffect, useMemo } from "react";
import VideoPlayerProps from "./VideoPlayer.types";
import { formatTime } from "../../utils/time";
import "./VideoPlayer.scss";

const VideoPlayer: React.FC<VideoPlayerProps> = (props) => {
  const {
    src,
    width = "100%",
    videoProps = {},
    className = "",
    style = {},
    poster = "",
    showPanel = true,
    height = "100%",
    autoHidePanel = true,
    panelOptions = {},
    defaultVolume = 1,
    ...restProps
  } = props;

  const {
    showPlayBackForward = true,
    showStop = true,
    showVolume = true,
    showFullScreen = true,
    showPlayDuration = true,
    panelClassName = "",
    panelStyle = {},
    panelGap = 20,
    panelHeight = 28,
  } = panelOptions;

  const gap = Math.abs(panelGap);

  const hidePanelTimeout =
    typeof autoHidePanel === "object" && autoHidePanel.timeout
      ? autoHidePanel.timeout
      : 3000;

  const isFullScreen = () =>
    !!(
      document.fullScreen ||
      document.webkitIsFullScreen ||
      document.mozFullScreen ||
      document.msFullscreenElement ||
      document.fullscreenElement
    );

  // ========== State ========== //

  const videoRef = useRef();
  const videoContainerRef = useRef();
  const progressRef = useRef();
  const audioProgressRef = useRef();
  const showProgressTimeout = useRef();
  const autoHidePanelTimeout = useRef();

  const [play, setPlay] = useState<boolean>(false);
  const [mute, setMute] = useState<boolean>(defaultVolume === 0);
  const [duration, setDuration] = useState<number>(0);
  const [played, setPlayed] = useState<number>(0);
  const [fullScreen, setFullScreen] = useState<boolean>(isFullScreen());
  const [showAudioProgress, setShowAudioProgress] = useState<boolean>(false);
  const [showVideoPanel, setShowVideoPanel] = useState<boolean>(!autoHidePanel);

  const supportsVideo = useRef<boolean>(
    !!document.createElement("video").canPlayType
  );
  const fullScreenEnabled = useRef<boolean>(
    document.fullscreenEnabled ||
      document.mozFullScreenEnabled ||
      document.msFullscreenEnabled ||
      document.webkitSupportsFullscreen ||
      document.webkitFullscreenEnabled ||
      document.createElement("video").webkitRequestFullScreen
  );
  const supportsProgress = useRef<boolean>(
    document.createElement("progress").max !== undefined
  );

  // ========== Event ========== //

  const handlePlayClick = () => {
    if (videoRef.current.paused || videoRef.current.ended) video.play();
    else video.pause();
    setPlay(!play);
  };

  const handleStopClick = () => {
    videoRef.current.pause();
    videoRef.current.currentTime = 0;
    progressRef.current.value = 0;
    setPlay(false);
  };

  const handleProgressClick = (e) => {
    const progress = progressRef.current;
    const pos = (e.pageX - progress.offsetParent.offsetParent.offsetLeft - progress.offsetLeft - gap) / progress.offsetWidth;
    // console.log('==>', {x: e.pageX, left: progress.offsetLeft, gap, ow: progress.offsetWidth});
    // console.log('==>', {l: progress.offsetParent.offsetLeft, ll: progress.offsetParent.offsetParent.offsetLeft});
    const value =
      parseInt(
        Math.max(0, Math.min(1, pos)) * videoRef.current.duration * 100
      ) / 100;
    console.log('==>', {value});
    videoRef.current.currentTime = value;
    progress.value = value;
  };

  const handleVideoTimeUpdate = () => {
    const progress = progressRef.current;
    const video = videoRef.current;
    // For mobile browsers, ensure that the progress element's max attribute is set
    if (!progress.getAttribute("max"))
      progress.setAttribute("max", video.duration);
    setPlayed(video.currentTime);
  };

  const handleVideoEnded = () => {
    setPlay(false);
  };

  const handleMuteClick = () => {
    videoRef.current.muted = !video.muted;
    setMute(!mute);
  };

  const handleAudioProgressClick = (e) => {
    const progress = audioProgressRef.current;
    const { top } = progress.getBoundingClientRect();
    const pos = (e.pageY - top) / progress.offsetWidth;
    const value = 1 - Math.max(0, Math.min(1, pos));
    // console.log('==>', {y: e.pageY, top, w: progress.offsetWidth, value, l: 1-value});
    videoRef.current.volume = value;
    progress.value = value;
  };

  const handleMouseMouseEnter = () => {
    if (!showAudioProgress && !mute) {
      setShowAudioProgress(true);
    }
  };
  const handleMouseMouseLeave = () => {
    clearTimeout(showProgressTimeout.current);
    if (showAudioProgress)
      showProgressTimeout.current = setTimeout(
        () => setShowAudioProgress(false),
        200
      );
  };

  const handleVideoVolumeChange = (dir) => {
    if (dir) {
      const currentVolume = Math.floor(videoRef.current.volume * 10) / 10;
      if (dir === "+") {
        if (currentVolume < 1) videoRef.current.volume += 0.1;
      } else if (dir === "-") {
        if (currentVolume > 0) videoRef.current.volume -= 0.1;
      }
      // If the volume has been turned off, also set it as muted
      // Note: can only do this with the custom control set as when the 'volumechange' event is raised, there is no way to know if it was via a volume or a mute change
      if (currentVolume <= 0) videoRef.current.muted = true;
      else videoRef.current.muted = false;
    }
  };

  const handleFullscreen = () => {
    if (isFullScreen()) {
      if (document.exitFullscreen) document.exitFullscreen();
      else if (document.mozCancelFullScreen) document.mozCancelFullScreen();
      else if (document.webkitCancelFullScreen)
        document.webkitCancelFullScreen();
      else if (document.msExitFullscreen) document.msExitFullscreen();
      setFullScreen(false);
    } else {
      const videoContainer = videoContainerRef.current;
      if (videoContainer.requestFullscreen) videoContainer.requestFullscreen();
      else if (videoContainer.mozRequestFullScreen)
        videoContainer.mozRequestFullScreen();
      else if (videoContainer.webkitRequestFullScreen) {
        videoRef.current.webkitRequestFullScreen();
      } else if (videoContainer.msRequestFullscreen)
        videoContainer.msRequestFullscreen();
      setFullScreen(true);
    }
  };

  const handleVideoLoaded = () => {
    const container = videoContainerRef.current;
    const video = videoRef.current;

    setDuration(video?.duration || 0);
    video.volume = defaultVolume;

    if (
      container.clientWidth * video.videoHeight >=
      container.clientHeight * video.videoWidth
    ) {
      video.height = container.clientHeight;
    } else {
      video.width = container.clientWidth;
    }
  };

  const handlePlayOptionClick = (dir: string) => {
    const video = videoRef.current;
    const step: number = 15;
    if (dir === "-") {
      const prev = Math.max(played - step, 0);
      if (prev === played) return;
      video.currentTime = prev;
      setPlayed(prev);
    }
    if (dir === "+") {
      const next = Math.min(played + step, duration);
      if (next === played) return;
      video.currentTime = next;
      setPlayed(next);
    }
  };

  const renderTimeDuration = (t) => {
    const time = formatTime(t * 1000);
    return (
      <li
        className={`video-time ${time.length <= 5 ? "video-time-short" : ""}`}
      >
        <span>{time}</span>
      </li>
    );
  };

  // ========== View ========== //

  return (
    <div
      data-testid="VideoPlayer"
      {...restProps}
      className="video__player--wrapper"
      onContextMenu={(e) => e.preventDefault()}
      style={{ width, height }}
      onMouseEnter={() => {
        clearTimeout(autoHidePanelTimeout.current);
        if (autoHidePanel) setShowVideoPanel(true);
      }}
      onMouseLeave={() => {
        if (autoHidePanel)
          autoHidePanelTimeout.current = setTimeout(
            () => setShowVideoPanel(false),
            hidePanelTimeout
          );
      }}
    >
      <figure className="video__figure--container" ref={videoContainerRef}>
        <video
          {...videoProps}
          style={style}
          className={className}
          id="video"
          preload="metadata"
          poster={poster}
          src={src}
          ref={videoRef}
          onTimeUpdate={handleVideoTimeUpdate}
          onEnded={handleVideoEnded}
          onLoadedMetadata={handleVideoLoaded}
        >
          {/* <source src="video/tears-of-steel-battle-clip-medium.mp4" type="video/mp4" />
          <source src="video/tears-of-steel-battle-clip-medium.webm" type="video/webm" />
          <source src="video/tears-of-steel-battle-clip-medium.ogg" type="video/ogg" /> */}
          {/* <track label="English" kind="subtitles" srclang="en" src="subtitles/vtt/sintel-en.vtt" default>
          <track label="Deutsch" kind="subtitles" srclang="de" src="subtitles/vtt/sintel-de.vtt">
          <track label="Español" kind="subtitles" srclang="es" src="subtitles/vtt/sintel-es.vtt"> */}
        </video>
        {supportsVideo.current && showPanel && showVideoPanel && (
          <ul
            className={`controls__panel--wrapper ${panelClassName}`}
            style={{
              ...panelStyle,
              width: `calc(${width} - ${gap * 2}px)`,
              height: panelHeight,
            }}
          >
            {/* 快退 */}
            {showPlayBackForward && (
              <li>
                <button
                  type="button"
                  data-state="play-back"
                  onClick={() => handlePlayOptionClick("-")}
                />
              </li>
            )}
            {/* 播放、暂停 */}
            <li>
              <button
                type="button"
                data-state={play ? "pause" : "play"}
                onClick={handlePlayClick}
              />
            </li>
            {/* 快进 */}
            {showPlayBackForward && (
              <li>
                <button
                  type="button"
                  data-state="play-front"
                  onClick={() => handlePlayOptionClick("+")}
                />
              </li>
            )}
            {/* 停止播放 */}
            {showStop && (
              <li>
                <button
                  type="button"
                  data-state="stop"
                  onClick={handleStopClick}
                />
              </li>
            )}
            {/* 视频已播放时长 */}
            {showPlayDuration && renderTimeDuration(played)}
            {/* 播放进度条 */}
            <li className="progress">
              <progress
                id="progress"
                value={played}
                min={0}
                max={duration}
                data-state={supportsProgress.current ? "progress" : "fake"}
                ref={progressRef}
                onClick={handleProgressClick}
              >
                {played / duration}
              </progress>
            </li>
            {/* 视频总时长 */}
            {showPlayDuration && renderTimeDuration(duration)}
            {/* 静音 */}
            {showVolume && (
              <li style={{ position: "relative" }}>
                <button
                  className="mute"
                  type="button"
                  onClick={handleMuteClick}
                  data-state={mute ? "mute" : "unmute"}
                  onMouseEnter={handleMouseMouseEnter}
                  onMouseLeave={handleMouseMouseLeave}
                />
                {/* 音量调节 */}
                {showAudioProgress && (
                  <div
                    className="audio__progress--wrapper"
                    onMouseEnter={() => {
                      if (showAudioProgress)
                        clearTimeout(showProgressTimeout.current);
                    }}
                    onMouseLeave={handleMouseMouseLeave}
                  >
                    <progress
                      className="audio__progress--block"
                      value={mute ? 0 : videoRef.current.volume}
                      min={0}
                      max={1}
                      data-state={
                        supportsProgress.current ? "audio-progress" : "fake"
                      }
                      ref={audioProgressRef}
                      onClick={handleAudioProgressClick}
                    />
                  </div>
                )}
              </li>
            )}
            {/* 全屏播放 */}
            {fullScreenEnabled.current && showFullScreen && (
              <li>
                <button
                  type="button"
                  data-state={fullScreen ? "exit-fullscreen" : "fullscreen"}
                  onClick={handleFullscreen}
                />
              </li>
            )}
            {/* <button id="subtitles" type="button" data-state="subtitles" /> */}
          </ul>
        )}
      </figure>
    </div>
  );
};

VideoPlayer.displayName = "VideoPlayer";
export default VideoPlayer;
