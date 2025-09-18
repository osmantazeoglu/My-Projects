const ClearToCartButton = ({ onClearToCart }) => {
  const handleClearCart = () => {
    onClearToCart();
  };

  return (
    <button id="clearCart" onClick={handleClearCart}>Clear</button>
  );
};

export default ClearToCartButton;
