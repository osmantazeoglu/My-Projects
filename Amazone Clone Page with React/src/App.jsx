import './App.css'
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";

function App() {
    return (
        <div className='navbar-main'>
            <div className='navbar-left'>
                <div className="navlogo">
                    <img src="/Logos/full.jpg" alt="Amazon Logo" className='logo' />
                    <span className='logotext'>.com.tr</span>
                </div>
                <div className="navglobal">
                    <FaMapMarkerAlt id='mapicon' />
                    <div className="maptext">
                        <span id='text1'>Buyer:Osman</span>
                        <span id='text2'>Gaziantep 27580</span>
                    </div>
                </div>
            </div>
            <div className='navbar-center'>
                <div className="category-select"></div>
                <input type="text" name="" id="searchbox" placeholder="Search Amazon.com.tr" class="search-box" />
                <button type="submit" className="search-button">
                    <FaSearch />
                </button>
            </div>
            <div className='navbar-right'></div>
        </div>
    )
}

export default App
