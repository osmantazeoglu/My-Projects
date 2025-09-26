import { FaMicrophone, FaSearch } from "react-icons/fa";

function NavbarCenter() {
  return (
    <nav className="navbar-center">
      <input className="Search-part" type="text" placeholder="Search" />
      <button className="Search-icon">
        <FaSearch />
      </button>

      <button className="mic-icon">
        <FaMicrophone/>
      </button>
    </nav>
  );
}
export default NavbarCenter;
