import history from "../../assets/youtube-history.svg";
import playlist from "../../assets/youtube-playlist.png";
import yourVideos from "../../assets/youtube-yourvideo.svg";
import watchLater from "../../assets/watch-later.svg";
import like from "../../assets/youtube-like.png";
import download from "../../assets/youtube-download.svg";

function Youpart() {
  return (
    <div className="you-part">
      <h4>You</h4>
      <div className="you-list side-list">
        <img src={history} alt="" className="side-img" />
        <p className="side-text">History</p>
      </div>
      <div className="you-list side-list">
        <img src={playlist} alt="" className="side-img" />
        <p className="side-text">Playlist</p>
      </div>
      <div className="you-list side-list">
        <img src={yourVideos} alt="" className="side-img" />
        <p className="side-text">Your Videos</p>
      </div>
      <div className="you-list side-list">
        <img src={watchLater} alt="" className="side-img" />
        <p className="side-text">Watch Later</p>
      </div>
      <div className="you-list side-list">
        <img src={like} alt="" className="side-img" />
        <p className="side-text">Liked Videos</p>
      </div>
      <div className="you-list side-list">
        <img src={download} alt="" className="side-img" />
        <p className="side-text">Downloads</p>
      </div>
      <hr />
    </div>
  );
}

export default Youpart;
