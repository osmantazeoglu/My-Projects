import React from "react";
import "../styles/PlayVideo.css";
import video1 from "../assets/video.mp4";
import share from "../assets/share.svg";
import settings from "../assets/settings.svg";
import save from "../assets/saved-icon.svg";
import download from "../assets/youtube-download.svg";
import like from "../assets/youtube-like.png";
import dislike from "../assets/youtube-dislike.png";

function PlayVideo() {
  return (
    <div className="play-video">
      <video src={video1} controls autoPlay muted></video>
      <div className="video-controls">
        <img src={share} alt="share" />
        <img src={settings} alt="settings" />
        <img src={save} alt="save" />
        <img src={download} alt="download" />
        <img src={like} alt="like" />
        <img src={dislike} alt="dislike" />
      </div>
    </div>
  );
}

export default PlayVideo;
