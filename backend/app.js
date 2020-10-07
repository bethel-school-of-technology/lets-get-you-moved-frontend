const express = require('express');
const app = express();
const cors = require('cors');
const User = require('./models/User');
const Order = require('./models/Order');
const OrderItem = require('./models/OrderItem');
require('dotenv').config();

// Applying middleware

// CORS policy
app.use(
  cors({
    // The only domain that can access this API
    origin: process.env.CORS_ORIGIN,
  })
);

// Body parser
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

// relations
User.hasMany(Order, {
  foreignKey: 'id',
});

Order.belongsTo(User, {
  foreignKey: 'id',
});

Order.hasMany(OrderItem, {
  foreignKey: 'orderId',
});

OrderItem.belongsTo(Order, {
  foreignKey: 'orderId',
});

// hello world
app.get('/', (req, res) => {
  res.send("I'm here live");
});

// User routes
app.use('/user', require('./routes/user'));


// Order routes
app.use('/order', require('./routes/order'));

const PORT = process.env.PORT || 4000;

app.listen(process.env.PORT, () =>
  console.log('Port ' + process.env.PORT + ' is running...')
);

// module.exports = app;