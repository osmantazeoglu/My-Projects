import { FaBell } from "react-icons/fa";
function NavbarRight() {
  return (
    <nav className="navbar-right flex-div">
      <button className="create-btn">
        <span className="plus-icon">+</span>
        Create
      </button>
      <button className="notification-btn circle-btn">
        <FaBell />
      </button>
      <button className="avatar-btn circle-btn">O</button>
    </nav>
  );
}

export default NavbarRight;
