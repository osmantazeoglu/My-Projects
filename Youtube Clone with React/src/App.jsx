import React from "react";
import HomePage from "./Pages/Home-Pages/Home"
import VideoPage from "./Pages/Video-Pages/Video"
import Navbar from "./component/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";


function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/video/:categoryId/:videoId' element={<VideoPage/>} />
      </Routes>
    </div>
  );
}

export default App;
