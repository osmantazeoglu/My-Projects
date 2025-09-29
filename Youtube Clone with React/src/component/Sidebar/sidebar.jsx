import React from "react";
import "../../styles/Sidebar.css";
import Shortcut from "./Shortcut";
import Youpart from "./You-Part";
import Subscriptions from "./Subscriptions";

function Sidebar() {
  return (
    <div className="sidebar">
      <Shortcut />
      <Youpart />
      <Subscriptions />
    </div>
  );
}

export default Sidebar;
