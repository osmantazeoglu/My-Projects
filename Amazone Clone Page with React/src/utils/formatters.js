export const formatPrice = (price) => {
  // Handle undefined, null, or invalid price values
  if (price === undefined || price === null || isNaN(price)) {
    return {
      whole: '0',
      decimal: '00'
    };
  }
  
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
