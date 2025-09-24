import "../styles/components/CartProductCard.css";
import RemoveFromCardButton from "./ReduceCardButton";
import IncreaseCardButton from "./IncreaseCardButton";
import DeleteFromCardButton from "./DeleteCardButton";

const CartProductCard = ({ item, onRemove, onAddToCart }) => {
  const handleAddToCart = () => {
    onAddToCart?.(item.productId);
  };

  const handleRemoveCard = () => {
    onRemove?.(item.productId);
  };

  const handleDeleteCard = () => {
    
  }

  const product = item?.product || {};
  return (
    <div className="cart-card">
      <div className="cart-card-top">
        <div className="cart-card-image">
          <img
            src={product.image}
            alt={product.title}
            className="cart-card-img"
          />
        </div>

        <div className="cart-card-info">
          <h3 className="cart-card-title">{product.title}</h3>
          {product.author && (
            <p className="cart-card-author">by {product.author}</p>
          )}

          <div className="cart-card-meta">
            <div className="cart-card-price">
              <span className="cart-price-currency">₺</span>
              <span className="cart-price-whole">
                {Number(product.price || 0).toFixed(2)}
              </span>
            </div>

            <div className="cart-card-qty">
              <RemoveFromCardButton onRemovefromCard={handleRemoveCard} />
              <span className="cart-qty-value">{item.quantity}</span>
              <IncreaseCardButton onAddToCart={handleAddToCart} />
            </div>
            <div className="delete-buton">
              <DeleteFromCardButton onDeletefromCard={handleDeleteCard}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartProductCard;
