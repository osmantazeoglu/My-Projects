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
        <div className="Carttext-Part">
          <h2>Amazon sepetiniz bos</h2>
          <p>
            Alışveriş Sepetiniz size hizmet etmek için var. Market ürünleri,
            giyim, ev malzemeleri, elektronik ürünler ve daha fazlası ile
            doldurarak ona bir amaç verin.
          </p>
          <p>
            Amazon.com.tr sayfasında alışverişe devam edin, günün fırsatları
            hakkında bilgi alın veya İstek Listesi bağlantısını kullanarak
            listelerinize göz atın.
          </p>
        </div>
    );
  }
  return (
    <div className="product-main">
      <ClearToCartButton onClearToCart={handleClearCart} />
      {basketItems.map((item, index) => (
        <ProductCard
          key={item.id || `item-${index}`}
          product={item}
          setCartCount={setCartCount}
        />
      ))}
    </div>
  );
};

export default Cart;
