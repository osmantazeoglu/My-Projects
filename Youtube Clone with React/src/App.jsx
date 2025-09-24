import './styles/App.css';
import './styles/Navbar.css'
import Navbar from './component/Navbar';

function App() {
    return(
        <div className='container'>
            <div className="navbar-main">
                <Navbar/>
            </div>
        </div>
    );
}

export default App
