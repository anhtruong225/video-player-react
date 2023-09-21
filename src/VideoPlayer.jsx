import React from "react";
import { DefaultPlayer as Video } from "react-html5video";
import "react-html5video/dist/styles.css";
import introVideo from "./assets/image/video-britianGotTalent.mp4";
import thum from "./assets/image/britain-god-talent.jpg";
import "./App.css";

function VideoPlayer() {
  const videoStyle = {
    width: "750px",
    height: "500px",
    display: "flex",
    justifyContent: "center",
    marginInline: "auto",
  };
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          width: "100vw",
        }}
      >
        <h1>Britian's God Talent</h1>
        <Video
          autoPlay
          loop
          poster={thum}
          style={videoStyle}
          className="video-frame"
        >
          <source src={introVideo} type="video/webm" />
        </Video>
      </div>
    </>
  );
}

export default VideoPlayer;
