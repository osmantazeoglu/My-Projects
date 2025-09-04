import ProductImage from './ProductImage';
import ProductRating from './ProductRating';
import ProductPrice from './ProductPrice';
import ProductDiscount from './ProductDiscount';
import ProductDelivery from './ProductDelivery';
import AddToCartButton from './AddToCartButton';

const ProductCard = ({ product, setCartCount }) => {
  const handleAddToCart = () => {
    setCartCount(prev => prev + 1);
    console.log("sepete eklenen kitap id:", product.id);
  };

  return (
    <div className="product-card">
      <ProductImage image={product.image} title={product.title} />
      
      <div className="product-info">
        <h3 className="product-title">{product.title}</h3>
        <p className="product-author">{product.author}</p>

        <ProductRating 
          rating={product.rating} 
          reviewCount={product.reviewCount} 
        />

        <ProductPrice price={product.price} />

        <ProductDiscount discount={product.discount} />

        <ProductDelivery deliveryDate={product.deliveryDate} />

        <AddToCartButton 
          onAddToCart={handleAddToCart} 
        />
      </div>
    </div>
  );
};

export default ProductCard;
