import { useState, useEffect } from 'react';
import './App.css'
import { FaMapMarkerAlt, FaSearch, FaCaretDown } from "react-icons/fa";
import { BsCart3 } from "react-icons/bs";

function NavbarLeft() {
    return (
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
    )
}

function NavbarCenter() {
    return (
        <div className='navbar-center'>
            <div className="category-select"></div>
            <input type="text" name="" id="searchbox" placeholder="Search Amazon.com.tr" className="search-box" />
            <button type="submit" className="search-button">
                <FaSearch />
            </button>
        </div>
    )
}

function NavbarRight() {
    return (
        <div className="navbar-right">
            <div class="nav-div">
                <div class="div-text">
                    <span id="text3">Osman</span>
                    <span id="text4">Accounts and Lists</span>
                </div>
                <FaCaretDown className="down-icon" />
            </div>
            <div class="nav-history">
                <span id="text5">Refunds</span>
                <span id="text6">and Orders</span>
            </div>
            <div class="nav-cart">
                <BsCart3 className='cart-icon' />
                <span className="cart-count">0</span>
                <div className="cart-text">
                    <span>Order</span>
                    <span>Cart</span>
                </div>
            </div>
        </div>
    )
}

function App() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3001/api/products")
            .then(res => res.json())
            .then(data => {
                console.log("api den gelen veri:", data);
                setProducts(data);
            })
            .catch(err => console.log('hata', err));
    }, []);
    return (
        <div>
            <div className='navbar-main'>
                <NavbarLeft />
                <NavbarCenter />
                <NavbarRight />
            </div>

            <div style={{ padding: "20px" }}>
                <h2>Ürünler</h2>
                <ul>
                    {products.map((p, index) => (
                        <li key={index}>{JSON.stringify(p)}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default App
