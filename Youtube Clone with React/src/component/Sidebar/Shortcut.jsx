import shorts from "../../assets/youtube-shorts.svg";
import home from "../../assets/Youtube-Home.png";
import subscription from "../../assets/youtube-subscriptions.svg";
import music from "../../assets/Youtube-Music.png";

function Shortcut() {
  return (
    <div className="shortcut-link">
      <div className="side-link">
        <img src={home} alt="" />
        <p>Home</p>
      </div>
      <div className="side-link">
        <img src={shorts} alt="" />
        <p>Shorts</p>
      </div>
      <div className="side-link">
        <img src={subscription} alt="" />
        <p>Subscription</p>
      </div>
      <div className="side-link">
        <img src={music} alt="" />
        <p>Youtube Music</p>
      </div>
      <hr />
    </div>
  );
}

export default Shortcut;
