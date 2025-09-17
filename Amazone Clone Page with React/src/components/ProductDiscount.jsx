const ProductDiscount = ({ discount }) => {
  // Handle undefined, null, or invalid discount values
  if (discount === undefined || discount === null || isNaN(discount)) {
    return null; // Don't render anything if discount is invalid
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
