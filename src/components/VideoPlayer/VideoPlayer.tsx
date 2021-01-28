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
    defaultPlayRate = 1.0,
    defaultPlayRateArray = [0.5, 0.75, 1, 1.5, 2],
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
    showPlayRate = true,
    showPlayButton = true,
    showPicInPic = true,
  } = panelOptions;

  const gap = Math.abs(panelGap);

  const hidePanelTimeout =
    typeof autoHidePanel === "object" && autoHidePanel.timeout
      ? autoHidePanel.timeout
      : 3000;
  const document: any = window.document;
  const isFullScreen = () =>
    !!(
      document.fullScreen ||
      document.webkitIsFullScreen ||
      document.mozFullScreen ||
      document.msFullscreenElement ||
      document.fullscreenElement
    );

  // ========== State ========== //

  const videoRef: any = useRef();
  const videoContainerRef: any = useRef();
  const progressRef: any = useRef();
  const audioProgressRef: any = useRef();
  const showProgressTimeout: any = useRef();
  const showPlayRateSelectorTimeout: any = useRef();
  const autoHidePanelTimeout: any = useRef();

  const [play, setPlay] = useState<boolean>(false);
  const [mute, setMute] = useState<boolean>(defaultVolume === 0);
  const [duration, setDuration] = useState<number>(0);
  const [played, setPlayed] = useState<number>(0);
  const [playRate, setPlayRate] = useState<number>(defaultPlayRate);
  const [fullScreen, setFullScreen] = useState<boolean>(isFullScreen());
  const [picInPic, setPicInPic] = useState<boolean>(
    document.pictureInPictureElement
  );
  const [showAudioProgress, setShowAudioProgress] = useState<boolean>(false);
  const [showPlayRateSelector, setShowPlayRateSelector] = useState<boolean>(
    false
  );
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
  const supportPicInPic = 'pictureInPictureEnabled' in document;

  // ========== Effect ========== //

  const handleLeavePicInPic = (event) => {
    if(picInPic) setPicInPic(false);
    const video: any = videoRef.current;
    video?.pause?.();
    setPlay(false);
  };

  useEffect(() => {
    const video: any = videoRef.current;
    video.addEventListener("leavepictureinpicture", handleLeavePicInPic);
    return () => {
      video.removeEventListener("leavepictureinpicture", handleLeavePicInPic);
    };
  }, []);

  // ========== Event ========== //

  const handlePlayClick = () => {
    const video: any = videoRef.current;
    if (video.paused || video.ended) {
      video.playbackRate = playRate;
      video.play();
    } else video.pause();
    setPlay(!play);
  };

  const handleStopClick = () => {
    const video: any = videoRef.current;
    const progress: any = progressRef.current;
    video?.pause();
    video.currentTime = 0;
    progress.value = 0;
    setPlay(false);
  };

  const handleProgressClick = (e) => {
    const progress: any = progressRef.current;
    const video: any = videoRef.current;
    const pos =
      (e.pageX -
        progress.offsetParent.offsetParent.offsetLeft -
        progress.offsetLeft -
        gap) /
      progress.offsetWidth;
    // console.log('==>', {x: e.pageX, left: progress.offsetLeft, gap, ow: progress.offsetWidth});
    // console.log('==>', {l: progress.offsetParent.offsetLeft, ll: progress.offsetParent.offsetParent.offsetLeft});
    const value =
      Math.floor(
        Math.max(0, Math.min(1, pos)) * video.duration * 100
      ) / 100;
    console.log("==>", { value });
    video.currentTime = value;
    progress.value = value;
  };

  const handleVideoTimeUpdate = () => {
    const progress: any = progressRef.current;
    const video: any = videoRef.current;
    // For mobile browsers, ensure that the progress element's max attribute is set
    if (!progress.getAttribute("max"))
      progress.setAttribute("max", video.duration);
    setPlayed(video.currentTime);
  };

  const handleVideoEnded = () => {
    setPlay(false);
  };

  const handleMuteClick = () => {
    const video: any = videoRef.current;
    video.muted = !video.muted;
    setMute(!mute);
  };

  const handleAudioProgressClick = (e) => {
    const progress: any = audioProgressRef.current;
    const video: any = videoRef.current;
    const { top } = progress.getBoundingClientRect();
    const pos = (e.pageY - top) / progress.offsetWidth;
    const value = 1 - Math.max(0, Math.min(1, pos));
    // console.log('==>', {y: e.pageY, top, w: progress.offsetWidth, value, l: 1-value});
    video.volume = value;
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

  const handlePlayRateMouseEnter = () => {
    if (!showPlayRateSelector) setShowPlayRateSelector(true);
  };

  const handlePlayRateMouseLeave = () => {
    clearTimeout(showPlayRateSelectorTimeout.current);
    if (showPlayRateSelector)
      showPlayRateSelectorTimeout.current = setTimeout(
        () => setShowPlayRateSelector(false),
        200
      );
  };

  const handleVideoVolumeChange = (dir) => {
    const video: any = videoRef.current;
    if (dir) {
      const currentVolume = Math.floor(video.volume * 10) / 10;
      if (dir === "+") {
        if (currentVolume < 1) video.volume += 0.1;
      } else if (dir === "-") {
        if (currentVolume > 0) video.volume -= 0.1;
      }
      // If the volume has been turned off, also set it as muted
      // Note: can only do this with the custom control set as when the 'volumechange' event is raised, there is no way to know if it was via a volume or a mute change
      if (currentVolume <= 0) video.muted = true;
      else video.muted = false;
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
      const videoContainer: any = videoContainerRef.current;
      const video: any = videoRef.current;
      if (videoContainer.requestFullscreen) videoContainer.requestFullscreen();
      else if (videoContainer.mozRequestFullScreen)
        videoContainer.mozRequestFullScreen();
      else if (videoContainer.webkitRequestFullScreen) {
        video.webkitRequestFullScreen();
      } else if (videoContainer.msRequestFullscreen)
        videoContainer.msRequestFullscreen();
      setFullScreen(true);
    }
  };

  const handleVideoLoaded = () => {
    const container: any = videoContainerRef.current;
    const video: any = videoRef.current;

    setDuration(video?.duration || 0);
    video.volume = defaultVolume;
    video.defaultPlaybackRate = defaultPlayRate;

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
        <button>{time}</button>
      </li>
    );
  };

  const handlePlayRateClick = () => {
    const video = videoRef.current;
    // Works on Chrome 43+, Firefox 20+, IE 9+, Edge 12+.
    video.playbackRate = 5.0;
  };

  const handleRateChange = (rate: number) => {
    if (!rate) return;
    setPlayRate(rate);
    videoRef.current.playbackRate = rate;
    setShowPlayRateSelector(false);
  };

  const handlePicInPic = async () => {
    const video = videoRef.current;
    try {
      if (video !== document.pictureInPictureElement) {
        await video.requestPictureInPicture();
        setPicInPic(true);
      } else {
        await document.exitPictureInPicture();
        setPlay(!(video.paused || video.ended));
        setPicInPic(false);
      }
    } catch (err) {
      console.log("==>", "Enter pic-in-pic mode failed!");
    }
  };

  const isPlayRateActive = (rate: number) => rate === playRate;

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
                // min={0}
                max={duration}
                data-state={supportsProgress.current ? "progress" : "fake"}
                ref={progressRef}
                onClick={handleProgressClick}
              />
              {/* <div className="progress-indicator" style={{width: `${(played / duration)*100}%`}}/>  */}
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
                      // min={0}
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
            {/* 播放速度调节 */}
            {showPlayRate && (
              <li className="video-rate">
                <button
                  onClick={handlePlayRateClick}
                  onMouseEnter={handlePlayRateMouseEnter}
                  onMouseLeave={handlePlayRateMouseLeave}
                >{`x${playRate}`}</button>
                {showPlayRateSelector && (
                  <div
                    className="player__rate--wrapper"
                    onMouseEnter={() => {
                      if (showPlayRateSelector)
                        clearTimeout(showPlayRateSelectorTimeout.current);
                    }}
                    onMouseLeave={handlePlayRateMouseLeave}
                  >
                    <ul>
                      {defaultPlayRateArray.map((rate: number) => (
                        <li
                          key={`${rate}-${Math.random() * 100}`}
                          onClick={() => handleRateChange(rate)}
                          className={isPlayRateActive(rate) ? "active" : ""}
                        >
                          {rate}
                        </li>
                      ))}
                    </ul>
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
            {/* 画中画 */}
            {supportPicInPic && showPicInPic && (
              <li>
                <button
                  type="button"
                  data-state={picInPic ? "exit-pic-in-pic" : "pic-in-pic"}
                  onClick={handlePicInPic}
                />
              </li>
            )}
            {/* <button id="subtitles" type="button" data-state="subtitles" /> */}
          </ul>
        )}
        {showPlayButton && (
          <div
            className={`fast__play--btn ${play ? "" : "not-play"}`}
            data-state={play ? "pause" : "play"}
            onClick={handlePlayClick}
          />
        )}
      </figure>
    </div>
  );
};

VideoPlayer.displayName = "VideoPlayer";
export default VideoPlayer;
