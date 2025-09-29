import React from "react";
import Navbar from "./component/Navbar/Navbar";
import { Routes } from "react-router-dom";


function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/video/:categoryId/:videoId' element={<Video/>} />
      </Routes>
    </div>
  );
}

export default App;
