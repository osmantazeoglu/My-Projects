import React from "react";
import "./Home.css";
import Sidebar from "../../component/Sidebar/sidebar";
import Feed from "../../component/Feed/Feed";

function HomePage({ sidebar }) {
  return (
    <>
      <Sidebar sidebar={sidebar} />
      <div className={`container ${sidebar ? "" : "large-container"}`}>
        <Feed />
      </div>
    </>
  );
}

export default HomePage;
