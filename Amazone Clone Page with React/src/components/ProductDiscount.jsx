const ProductDiscount = ({ discount }) => {
  return (
    <>
      <div className="product-discount">
        {discount.toFixed(2)} TL oranında indirim
      </div>
      <p className="discount-text">promosyonu mevcut</p>
    </>
  );
};

export default ProductDiscount;
