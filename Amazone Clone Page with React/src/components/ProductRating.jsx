const ProductRating = ({ rating, reviewCount }) => {
  return (
    <div className="product-rating">
      <span className="stars">
        {'★'.repeat(Math.floor(rating))}
        {'☆'.repeat(5 - Math.floor(rating))}
      </span>
      <span className="rating-text">{rating}</span>
      <span className="review-count">({reviewCount})</span>
    </div>
  );
};

export default ProductRating;
