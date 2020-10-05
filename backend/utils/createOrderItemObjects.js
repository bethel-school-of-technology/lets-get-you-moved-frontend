const createOrderItemObjects = (orderId, items) => {
  return items.map(item => {
    const { label, value, count } = item;
    return { orderId, label, value, count };
  });
};

module.exports = createOrderItemObjects;
