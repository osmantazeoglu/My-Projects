const IncreaseCardButton = ({ onAddToCart }) => {
  const handleAddToCart = () => {
    onAddToCart();
  };
  return (
    <button className="item-increase-btn" onClick={handleAddToCart}>
      +
    </button>
  );
};
export default IncreaseCardButton;
