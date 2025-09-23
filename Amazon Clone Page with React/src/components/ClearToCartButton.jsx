import "../styles/pages/CartPage.css";

const ClearToCartButton = ({ onClearToCart }) => {
  const handleClearCart = () => {
    onClearToCart();
  };

  return (
    <button id="clearCart" onClick={handleClearCart}>Clear Cart</button>
  );
};

export default ClearToCartButton;
