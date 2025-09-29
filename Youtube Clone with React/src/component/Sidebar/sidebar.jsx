import React from "react";
import "../../styles/Sidebar.css";
import Shortcut from "./Shortcut";
import Youpart from "./You-Part";
import Subscriptions from "./Subscriptions";
import Explore from "./Explore";

function Sidebar({ sidebar }) {
  return (
    <div className={`sidebar ${sidebar ? "" : "small-sidebar"}`}>
      <Shortcut />
      <Youpart />
      <Subscriptions />
      <Explore />
    </div>
  );
}

export default Sidebar;
