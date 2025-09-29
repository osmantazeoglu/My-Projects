import React from "react";
import "../../styles/Sidebar.css";
import Shortcut from "./Shortcut";
import Youpart from "./You-Part";
import Subscriptions from "./Subscriptions";
import Explore from "./Explore";

function Sidebar() {
  return (
    <div className="sidebar">
      <Shortcut />
      <Youpart />
      <Subscriptions />
      <Explore />
    </div>
  );
}

export default Sidebar;
