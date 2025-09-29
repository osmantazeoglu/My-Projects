import automobiles from "../../assets/automobiles.png";
import game from "../../assets/game.png";
import sports from "../../assets/sports.png";
import music from "../../assets/music.png";
import entertainment from "../../assets/entertainment.png";
import news from "../../assets/news.png";
import blogs from "../../assets/blogs.png";
import tech from "../../assets/tech.png";

function Explore() {
  return (
    <div className="explore-part">
      <h4>Explore</h4>
      <div className="explore-list side-list">
        <img src={automobiles} alt="" className="side-img" />
        <p className="side-text">Automobiles</p>
      </div>
      <div className="explore-list side-list">
        <img src={game} alt="" className="side-img" />
        <p className="side-text">Game</p>
      </div>
      <div className="explore-list side-list">
        <img src={sports} alt="" className="side-img" />
        <p className="side-text">Sports</p>
      </div>
      <div className="explore-list side-list">
        <img src={music} alt="" className="side-img" />
        <p className="side-text">Music</p>
      </div>
      <div className="explore-list side-list">
        <img src={entertainment} alt="" className="side-img" />
        <p className="side-text">Entertainment</p>
      </div>
      <div className="explore-list side-list">
        <img src={news} alt="" className="side-img" />
        <p className="side-text">News</p>
      </div>
      <div className="explore-list side-list">
        <img src={blogs} alt="" className="side-img" />
        <p className="side-text">Blog</p>
      </div>
      <div className="explore-list side-list">
        <img src={tech} alt="" className="side-img" />
        <p className="side-text">Tech</p>
      </div>
      <hr />
    </div>
  );
}

export default Explore;
