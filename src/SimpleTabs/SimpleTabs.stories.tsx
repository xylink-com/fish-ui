import React from "react";
import SimpleTabs from "./SimpleTabs";

export default {
  title: "simpleTabs",
};

const tabData = [
  {
    key: "clip",
    text: "video_clips",
  },
  {
    key: "cover",
    text: "video_covers",
  },
];

const handleTabChange = (key) => {
  console.log("key", key);
};

export const simpleTabs = () => (
  <SimpleTabs
    defaultActiveKey="clip"
    data={tabData}
    onChange={handleTabChange}
  />
);
