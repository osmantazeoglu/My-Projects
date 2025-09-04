import { formatDeliveryDate } from '../utils/formatters';

const ProductDelivery = ({ deliveryDate }) => {
  const formattedDelivery = formatDeliveryDate(deliveryDate);

  return (
    <p className="delivery">
      {formattedDelivery}
    </p>
  );
};

export default ProductDelivery;
