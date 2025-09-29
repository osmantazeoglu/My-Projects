import React from "react";
import "./Home.css";
import Sidebar from "../../component/Sidebar/sidebar";

function HomePage({ sidebar }) {
  return (
    <>
      <Sidebar sidebar={sidebar} />
    </>
  );
}

export default HomePage;
