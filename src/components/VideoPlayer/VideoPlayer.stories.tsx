import React from "react";
import VideoPlayer from "./VideoPlayer";

export default {
  title: "VideoPlayer",
};

const src =
  "https://edutxdevcdn.xylink.com//edu/video/20200206/410082962739036160.mp4";
// const src = "http://jonsam.site/wp-content/uploads/2019/06/timervideo_2.mp4";

export const BasicVideoPlayer = () => (
  <div style={{ width: 600, height: 400 }}>
    <VideoPlayer
      autoHidePanel={{timeout: 1000}}
      // autoHidePanel={false}
      src={src}
      poster="https://img.alicdn.com/tfscom/TB19dgvGFXXXXXPXpXXSutbFXXX.jpg_200x200.jpg"
      panelOptions={{
        // showPlayBackForward: false,
        // showStop: false,
        // showVolume: false,
        // showFullScreen: false,
        // panelHeight: "35px",
        // panelGap: 400,
        // showPlayDuration: false,
        panelStyle: {
          // backgroundColor: "rgba(0,0,0,0.5)",
          bottom: 8
        },
      }}
      defaultVolume={0.5}
    />
  </div>
);
