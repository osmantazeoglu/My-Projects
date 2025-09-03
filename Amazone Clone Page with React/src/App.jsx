import { useState, useEffect } from 'react';
import './App.css'
import './ProductCard.css'
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
            <div className="nav-div">
                <div className="div-text">
                    <span id="text3">Osman</span>
                    <span id="text4">Accounts and Lists</span>
                </div>
                <FaCaretDown className="down-icon" />
            </div>
            <div className="nav-history">
                <span id="text5">Refunds</span>
                <span id="text6">and Orders</span>
            </div>
            <div className="nav-cart">
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

function ProductCard({ product }) {
    const formatPrice = (price) => {
        const [whole, decimal] = price.toString().split('.');
        return {
            whole: whole,
            decimal: decimal ? decimal : '00'
        };
    };

    const formatDeliveryDate = (deliveryText) => {
        // Extract dates from delivery text and format them
        const dateRegex = /(\w+),?\s+(\w+)\s+(\d+)/g;
        let formattedText = deliveryText;
        let match;
        
        while ((match = dateRegex.exec(deliveryText)) !== null) {
            const [fullMatch, day, month, date] = match;
            const formattedDate = `${date} ${month} ${day}`;
            formattedText = formattedText.replace(fullMatch, formattedDate);
        }
        
        return formattedText;
    };

    const priceParts = formatPrice(product.price);
    const formattedDelivery = formatDeliveryDate(product.deliveryDate);

    return (
        <div className="product-card">
            <div className="product-image">
                <img src={product.image} alt={product.title} className="product-img" />
            </div>
            <div className="product-info">
                <h3 className="product-title">{product.title}</h3>
                <p className="product-author">{product.author}</p>
                
                <div className="product-rating">
                    <span className="stars">
                        {'★'.repeat(Math.floor(product.rating))}
                        {'☆'.repeat(5 - Math.floor(product.rating))}
                    </span>
                    <span className="rating-text">{product.rating}</span>
                    <span className="review-count">({product.reviewCount})</span>
                </div>
                
                <div className="product-price">
                    <span className="price-whole">{priceParts.whole}</span>
                    <span className="price-decimal">,{priceParts.decimal}</span>
                    <span className="price-currency"> TL</span>
                </div>
                
                <div className="product-discount">
                    {product.discount.toFixed(2)} TL oranında indirim
                </div>
                <p className="discount-text">promosyonu mevcut</p>
                
                <p className="delivery">
                    {formattedDelivery}
                </p>
                
                <button id="addcart">Sepete ekle</button>
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
            <div className="product-main">
                {products.length > 0 ? (products.map(p => (<ProductCard key={p.id} product={p} />))) : (<div className="loading">Yükleniyor...</div>)}
            </div>

        </div>
    )
}

export default App
