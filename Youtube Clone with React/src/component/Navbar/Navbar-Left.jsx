import { FaBars } from "react-icons/fa";
import youtubeIcon from "../../../Logos/Youtube-icon.svg";

function NavbarLeft() {
  return (
    <nav className="navbar-left flex-div">
      <button className="menu-icon circle-btn">
        <FaBars />
      </button>
      <div className="logo-part flex-div">
        <img src={youtubeIcon} alt="YouTube" className="youtube-icon" />
        <h3 className="youtube-title">Youtube</h3>
      </div>
    </nav>
  );
}

export default NavbarLeft;
