import shorts from "../../assets/youtube-shorts.svg";
import home from "../../assets/Youtube-Home.png";
import subscription from "../../assets/youtube-subscriptions.svg";
import music from "../../assets/Youtube-Music.png";

function Shortcut() {
  return (
    <div className="shortcut-link">
      <div className="side-link side-list">
        <img src={home} alt="" className="side-img" />
        <p className="side-text">Home</p>
      </div>
      <div className="side-link side-list">
        <img src={shorts} alt="" className="side-img" />
        <p className="side-text">Shorts</p>
      </div>
      <div className="side-link side-list">
        <img src={subscription} alt="" className="side-img" />
        <p className="side-text">Subscription</p>
      </div>
      <div className="side-link side-list">
        <img src={music} alt="" className="side-img" />
        <p className="side-text">Youtube Music</p>
      </div>
      <hr />
    </div>
  );
}

export default Shortcut;
