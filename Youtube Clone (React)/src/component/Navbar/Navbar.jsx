import React from "react";
import "../../styles/Navbar.css";
import NavbarLeft from "./Navbar-Left";
import NavbarCenter from "./Navbar-Center";
import NavbarRight from "./Navbar-Right";

function Navbar({ setSidebar }) {
  return (
    <div className="navbar-main flex-div">
      <NavbarLeft setSidebar={setSidebar} />
      <NavbarCenter />
      <NavbarRight />
    </div>
  );
}

export default Navbar;
