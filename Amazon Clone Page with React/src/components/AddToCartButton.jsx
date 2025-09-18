const AddToCartButton = ({ onAddToCart }) => {
  const handleAddToCart = () => {
    onAddToCart();
  };

  return (
    <button id='addcart' onClick={handleAddToCart}>
      Sepete ekle
    </button>
  );
};

export default AddToCartButton;
