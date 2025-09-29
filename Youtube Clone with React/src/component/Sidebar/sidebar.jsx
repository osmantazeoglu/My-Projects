import React from "react";
import Shortcut from "./Shortcut";
import "../../styles/Sidebar.css";
import Youpart from "./You-Part";

function Sidebar() {
  return (
    <div className="sidebar">
      <Shortcut />
      <Youpart />
    </div>
  );
}

export default Sidebar;
