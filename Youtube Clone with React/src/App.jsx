import "./styles/App.css";
import "./styles/Navbar.css";
import NavbarLeft from "./component/Navbar-Left";
import NavbarCenter from "./component/Navbar-Center";
import NavbarRight from "./component/Navbar-Right";

function App() {
  return (
    <div className="container">
      <div className="navbar-main">
        <NavbarLeft />
        <NavbarCenter />
        <NavbarRight />
      </div>

      <div className="video-main">
        <iframe
          width="600"
          height="400"
          src="https://www.youtube.com/embed/dQw4w9WgXcQ"
          frameborder="0"
          title="YouTube video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}

export default App;
