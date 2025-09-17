import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

const Cart = ({ setCartCount }) => {
  const [basketItems, setBasketItems] = useState([]);

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
      <div className="product-main">
        <div className="Carttext-Part">
          <h2>Amazone Sepetiniz Bos</h2>
        </div>
      </div>
    );
  }
  return (
    <div className="product-main">
      {basketItems.map((item, index) => (
        <ProductCard key={item.id || `item-${index}`} product={item} setCartCount={setCartCount} />
      ))}
    </div>
  );
};

export default Cart;
