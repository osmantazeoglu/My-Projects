const ProductDiscount = ({ discount }) => {
  if (discount === undefined || discount === null || isNaN(discount)) {
    return null;
  }

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
