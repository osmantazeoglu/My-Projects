import { useState, useEffect } from "react";
import "./App.css";
import "./ProductCard.css";
import "./CartPage.css";
import { FaMapMarkerAlt, FaSearch, FaCaretDown } from "react-icons/fa";
import { BsCart3 } from "react-icons/bs";
import ProductCard from "./components/ProductCard";
import Cart from "./components/basket";

function NavbarLeft() {
  return (
    <div className="navbar-left">
      <div className="navlogo">
        <img src="/Logos/full.jpg" alt="Amazon Logo" className="logo" />
        <span className="logotext">.com.tr</span>
      </div>
      <div className="navglobal">
        <FaMapMarkerAlt id="mapicon" />
        <div className="maptext">
          <span id="text1">Buyer: Osman</span>
          <span id="text2">Gaziantep 27580</span>
        </div>
      </div>
    </div>
  );
}

function NavbarCenter() {
  return (
    <div className="navbar-center">
      <div className="category-select"></div>
      <input
        type="text"
        id="searchbox"
        placeholder="Search Amazon.com.tr"
        className="search-box"
      />
      <button type="submit" className="search-button">
        <FaSearch />
      </button>
    </div>
  );
}

function NavbarRight({ cartCount, handleDisplayCart }) {
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
      <div className="nav-cart" onClick={handleDisplayCart}>
        <BsCart3 className="cart-icon" />
        <span className="cart-count">{cartCount}</span>
        <div className="cart-text">
          <span>Order</span>
          <span>Cart</span>
        </div>
      </div>
    </div>
  );
}

function App() {
  const [products, setProducts] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleDisplayCart = () => {
    setIsCartOpen ((prev) => !prev);
  };

  useEffect(() => {
    fetch("http://localhost:3001/api/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      })
      .catch((err) => console.log("hata", err));
  }, []);

  return (
    <div>
      <div className="navbar-main">
        <NavbarLeft />
        <NavbarCenter />
        <NavbarRight cartCount={cartCount} handleDisplayCart={handleDisplayCart} />
      </div>

      {isCartOpen ? (
        <div>
          <Cart setCartCount={setCartCount} />
        </div>
      ) : (
        <div className="product-main">
          {products.length > 0 ? (
            products.map((p) => (
              <ProductCard key={p.id} product={p} setCartCount={setCartCount} />
            ))
          ) : (
            <div className="loading">Yükleniyor...</div>
          )}
        </div>
      )}
    </div>
  );
}

export default App;
