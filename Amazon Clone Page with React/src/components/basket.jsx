import { useEffect, useState } from "react";
import CartProductCard from "./CartProductCard";
import ClearToCartButton from "./ClearToCartButton";
import "../styles/pages/CartPage.css";

const Cart = ({ setCartCount }) => {
  const [basketItems, setBasketItems] = useState([]);
  const handleClearCart = () => {
    fetch("http://localhost:3001/api/basket/clear", {
      method: "POST",
    })
      .then((res) => res.json())
      .then(() => {
        setBasketItems([]);
        setCartCount(0);
      })
      .catch((err) => console.log("Clear cart error", err));
  };

  const handleRemoveItem = (productId) => {
    fetch(`http://localhost:3001/api/remove-from-basket/${productId}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        setBasketItems(data);
        setCartCount(data.length);
      })
      .catch((err) => console.log("Remove item error", err));
  };

  useEffect(() => {
    fetch("http://localhost:3001/api/basket")
      .then((res) => res.json())
      .then((data) => {
        setCartCount(data.length);
        setBasketItems(data);
      })
      .catch((err) => console.error("Sepeti alma hatasi:", err));
  }, [setCartCount]);

  if (!basketItems || basketItems.length === 0) {
    return (
      <div className="Cart-Page">
        <div className="Carttext-Part">
          <h2>Amazon sepetiniz bos</h2>
          <p>
            Alişveriş Sepetiniz size hizmet etmek için var. Market ürünleri,
            giyim, ev malzemeleri, elektronik ürünler ve daha fazlasi ile
            doldurarak ona bir amaç verin.
          </p>
          <p>
            Amazon.com.tr sayfasinda alişverişe devam edin, günün firsatlari
            hakkinda bilgi alin veya İstek Listesi bağlantisini kullanarak
            listelerinize göz atin.
          </p>
        </div>
        <div className="total-part"></div>
      </div>
    );
  }
  return (
    <div className="Cart-Page">
      <div className="cart-container">
        <div className="cart-header">
          <h2>Shopping Cart</h2>
          <p>Price</p>
        </div>
        <div className="cart-items">
          {basketItems.map((item) => (
            <CartProductCard key={item.productId} item={item} onRemove={handleRemoveItem} />
          ))}
        </div>
      </div>
      <div className="clear-part">
        <ClearToCartButton onClearToCart={handleClearCart} />
        <div className="cart-card-subtotal">
          <span className="cart-subtotal-label">Subtotal:</span>
          <span className="cart-subtotal-value">
            ₺{Number(basketItems.subtotal || 0).toFixed(2)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Cart;
