import React from "react";
import "../styles/PlayVideo.css";
import video1 from "../assets/video.mp4";
import like from "../assets/youtube-like.png";
import dislike from "../assets/youtube-dislike.jpg";
import share from "../assets/share.svg";
import save from "../assets/saved-icon.svg";
import download from "../assets/youtube-download.svg";
import jack from "../assets/jack.png";

function PlayVideo() {
  return (
    <div className="play-video">
      <video src={video1} controls autoPlay muted></video>
      <h3>Best Youtube Channel To Learn Web Developer</h3>
      <div className="play-video-info">
        <p>15k Views &bull; 2 days ago</p>
        <div>
          <span>
            <img src={like} alt="" />
            4.8k
          </span>
          <span>
            <img src={dislike} alt="" />
            2k
          </span>
          <span>
            <img src={share} alt="" />
            Share
          </span>
          <span>
            <img src={save} alt="" />
            Save
          </span>
          <span>
            <img src={download} alt="" />
            Download
          </span>
        </div>
      </div>
      <div className="publisher">
        <img src={jack} alt="" />
        <div>
          <p>Greatstcak</p>
          <p>2.5M Subscribers</p>
        </div>
        <button>Subscribe</button>
      </div>
      <div className="video-description">
        <p>Channel that makes learning easy</p>
        <p>Subscribe Greatstcak to watch more videos</p>
        <h4>130 Comments</h4>
        <div className="comment">
          <img src={jack} alt="" />
          <div>
            <h3>
              Jack Nelson <span>2 days ago</span>
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
              quos.
            </p>
            <div className="comment-action">
              <img src={like} alt="" className="side-img" />
              <span>244</span>
              <img src={dislike} alt="" className="side-img" />
              <span>175</span>
            </div>
          </div>
        </div>
        <div className="comment">
          <img src={jack} alt="" />
          <div>
            <h3>
              Jack Nelson <span>2 days ago</span>
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
              quos.
            </p>
            <div className="comment-action">
              <img src={like} alt="" className="side-img" />
              <span>244</span>
              <img src={dislike} alt="" className="side-img" />
              <span>175</span>
            </div>
          </div>
        </div>
        <div className="comment">
          <img src={jack} alt="" />
          <div>
            <h3>
              Jack Nelson <span>2 days ago</span>
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
              quos.
            </p>
            <div className="comment-action">
              <img src={like} alt="" className="side-img" />
              <span>244</span>
              <img src={dislike} alt="" className="side-img" />
              <span>175</span>
            </div>
          </div>
        </div>
        <div className="comment">
          <img src={jack} alt="" />
          <div>
            <h3>
              Jack Nelson <span>2 days ago</span>
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
              quos.
            </p>
            <div className="comment-action">
              <img src={like} alt="" className="side-img" />
              <span>244</span>
              <img src={dislike} alt="" className="side-img" />
              <span>175</span>
            </div>
          </div>
        </div>
        <div className="comment">
          <img src={jack} alt="" />
          <div>
            <h3>
              Jack Nelson <span>2 days ago</span>
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
              quos.
            </p>
            <div className="comment-action">
              <img src={like} alt="" className="side-img" />
              <span>244</span>
              <img src={dislike} alt="" className="side-img" />
              <span>175</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PlayVideo;
