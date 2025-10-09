import React, { useState, useEffect } from "react";
import "../../styles/Sidebar.css";
import Shortcut from "./Shortcut";
import Youpart from "./You-Part";
import Subscriptions from "./Subscriptions";
import Explore from "./Explore";

function Sidebar({ sidebar }) {
  const [isSmall, setIsSmall] = useState(window.innerWidth <= 1150);

  useEffect(() => {
    const handleResize = () => {
      setIsSmall(window.innerWidth <= 1150);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      className={`sidebar ${sidebar ? "" : "small-sidebar"} ${
        isSmall ? "small-sidebar" : ""
      }`}
    >
      <Shortcut />
      <Youpart />
      <Subscriptions />
      <Explore />
    </div>
  );
}

export default Sidebar;
