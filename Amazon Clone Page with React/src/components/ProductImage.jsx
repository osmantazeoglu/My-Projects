const ProductImage = ({ image, title }) => {
  return (
    <div className="product-image">
      <img src={image} alt={title} className="product-img" />
    </div>
  );
};

export default ProductImage;
