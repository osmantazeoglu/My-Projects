import { FaMicrophone, FaSearch } from "react-icons/fa";

function NavbarCenter() {
  return (
    <nav className="navbar-center flex-div">
      <div className="search-box">
        <input type="text" placeholder="Search" />
      </div>
      <button className="search-icon">
        <FaSearch />
      </button>

      <button className="mic-icon">
        <FaMicrophone />
      </button>
    </nav>
  );
}
export default NavbarCenter;
