import { FaBars } from "react-icons/fa";
import youtubeIcon from "../../Logos/Youtube-icon.svg";

function NavbarLeft() {
  return (
    <nav className="navbar-left">
      <FaBars className="menu-icon" />
      <img src={youtubeIcon} alt="YouTube" className="youtube-icon" />
      <h3 className="youtube-title">Youtube</h3>
    </nav>
  );
}

export default NavbarLeft;
