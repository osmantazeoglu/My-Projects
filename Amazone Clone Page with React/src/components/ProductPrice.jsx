import { formatPrice } from '../utils/formatters';

const ProductPrice = ({ price }) => {
  const priceParts = formatPrice(price);

  return (
    <div className="product-price">
      <span className="price-whole">{priceParts.whole}</span>
      <span className="price-decimal">,{priceParts.decimal}</span>
      <span className="price-currency"> TL</span>
    </div>
  );
};

export default ProductPrice;
