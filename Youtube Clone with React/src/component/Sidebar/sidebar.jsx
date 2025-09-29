import React from "react";
import Shortcut from "./Shortcut";
import "../../styles/Sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">
      <Shortcut />
      <div className="subscribe-list">
        <h3>Subscriptions</h3>
      </div>
    </div>
  );
}

export default Sidebar;
