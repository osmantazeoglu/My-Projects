import React, { useState } from "react";
import HomePage from "./Pages/Home-Pages/Home";
import VideoPage from "./Pages/Video-Pages/Video";
import Navbar from "./component/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";

function App() {
  const [sidebar, setSidebar] = useState(true);

  return (
    <div>
      <Navbar setSidebar={setSidebar} />
      <Routes>
        <Route path="/" element={<HomePage sidebar={sidebar} />} />
        <Route path="/video/:categoryId/:videoId" element={<VideoPage />} />
      </Routes>
    </div>
  );
}

export default App;
