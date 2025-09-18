import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import ClearToCartButton from "./ClearToCartButton";
import "../CartPage.css";

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
      <div className="cart-items">
        {basketItems.map((item) => (
          <ProductCard
            key={item.id}
            product={item}
            setCartCount={setCartCount}
          />
        ))}
      </div>
      <div className="total-part">
        <ClearToCartButton onClearToCart={handleClearCart} />
      </div>
    </div>
  );
};

export default Cart;
