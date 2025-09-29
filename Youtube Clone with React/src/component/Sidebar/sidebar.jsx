import React from "react";
import "../../styles/Sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sortcut-link">
        <div className="side-link">
          <p>Home</p>
        </div>
        <div className="side-link"></div>
        <div className="side-link"></div>
        <div className="side-link"></div>
        <hr />
      </div>
      <div className="subscribe-list">
        <h3>Subscriptions</h3>
      </div>
    </div>
  );
}

export default Sidebar;
