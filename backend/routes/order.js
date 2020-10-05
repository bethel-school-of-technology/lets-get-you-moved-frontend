const router = require('express').Router();
const User = require('../models/User');
const Order = require('../models/Order');
const OrderItem = require('../models/OrderItem');
const { SuccessReponse, ErrorReponse } = require('../utils/ResponseUtils');
const createOrderItemObjects = require('../utils/createOrderItemObjects');

// Create order route
router.post('/create', async (req, res) => {
  // { label, value, count }[] - items
  const { items, firebaseClientId } = req.body;
  try {
    // Finding user with firebase id, since it is the only id we store on client
    const user = await User.findOne({
      where: { firebaseId: firebaseClientId },
    });

    // If there is no user, respond with error
    if (!user) {
      return res.status(404).send(new ErrorReponse('User not found'));
    }

    // Creating order and saving
    const { id: orderId } = await Order.create({
      clientId: user.id,
    });

    // Creating orderItems with associated orderId
    const orderItems = await OrderItem.bulkCreate(
      createOrderItemObjects(orderId, items)
    );

    return res.status(200).send(new SuccessReponse({ orderId }));
  } catch (error) {
    console.log(error);
    return res.status(500).send(new ErrorReponse(error.message));
  }
});

// Order details (items)
router.get('/details/:orderId', async (req, res) => {
  const { orderId } = req.params;

  try {
    const order = await Order.findOne({
      where: {
        id: orderId,
      },
      include: [
        { model: OrderItem, attributes: ['label', 'id', 'count', 'value'] },
      ],
    });

    if (!order) {
      return res.status(404).send(new ErrorReponse("Can't find order"));
    }

    return res.send(new SuccessReponse(order));
  } catch (error) {
    console.log(error);
    return res.status(500).send(new ErrorReponse(error.message));
  }
});

module.exports = router;
