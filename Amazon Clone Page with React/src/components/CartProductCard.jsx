import "../CartProductCard.css";

const CartProductCard = ({ item }) => {
  const product = item?.product || {};
  return (
    <div className="cart-card">
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
          <p className="cart-card-author">{product.author}</p>
        )}

        <div className="cart-card-meta">
          <div className="cart-card-price">
            <span className="cart-price-currency">₺</span>
            <span className="cart-price-whole">
              {Number(product.price || 0).toFixed(2)}
            </span>
          </div>

          <div className="cart-card-qty">
            <span className="cart-qty-label">Adet:</span>
            <span className="cart-qty-value">{item.quantity}</span>
          </div>

          <div className="cart-card-subtotal">
            <span className="cart-subtotal-label">Ara toplam:</span>
            <span className="cart-subtotal-value">₺{Number(item.subtotal || 0).toFixed(2)}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartProductCard;


