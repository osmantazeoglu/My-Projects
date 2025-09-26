import React from "react";
import NavbarLeft from "./component/Navbar-Left";
import NavbarCenter from "./component/Navbar-Center";
import NavbarRight from "./component/Navbar-Right";


function App() {
  return (
    <div>
      <div className="navbar-main">
        <NavbarLeft/>
        <NavbarCenter/>
        <NavbarRight/>
      </div>
    </div>
  );
}

export default App;
