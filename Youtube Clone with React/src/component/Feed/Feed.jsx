import React from "react";
import "../../styles/Feed.css";
import thumbnail1 from "../../assets/thumbnail1.png";

function Feed() {
  return (
    <div className="card">
      <img src={thumbnail1} alt="" />
      <h2>Best channel to learn coding that help you to be a web developer</h2>
    </div>
  );
}

export default Feed;
