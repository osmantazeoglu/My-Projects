import React from "react";
import "../styles/PlayVideo.css";
import video1 from "../assets/video.mp4";
import like from "../assets/youtube-like.png";
import dislike from "../assets/youtube-dislike.jpg"

function PlayVideo() {
  return (
    <div className="play-video">
      <video src={video1} controls autoPlay muted></video>
      <h3>Best Youtube Channel To Learn Web Developer</h3>
      <div className="play-video-info">
        <p>15k Views &bull; 2 days ago</p>
        <div>
          <span><img src={like} alt="" />4.8k</span>
          <span><img src={dislike} alt="" />2k</span>
        </div>
      </div>
    </div>
  );
}

export default PlayVideo;
