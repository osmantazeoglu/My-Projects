export const formatPrice = (price) => {
  const [whole, decimal] = price.toString().split('.');
  return {
    whole,
    decimal: decimal ? decimal : '00'
  };
};

export const formatDeliveryDate = (deliveryText) => {
  const dateRegex = /(\w+),?\s+(\w+)\s+(\d+)/g;
  let formattedText = deliveryText;
  let match;

  while ((match = dateRegex.exec(deliveryText)) !== null) {
    const [fullMatch, day, month, date] = match;
    const formattedDate = `${date} ${month} ${day}`;
    formattedText = formattedText.replace(fullMatch, formattedDate);
  }

  return formattedText;
};
