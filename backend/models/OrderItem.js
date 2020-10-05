const { Sequelize } = require('sequelize');
const db = require('../db');

const OrderItem = db.define(
  'OrderItem',
  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    orderId: {
      allowNull: false,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    label: {
      allowNull: false,
      type: Sequelize.STRING,
    },
    value: {
      allowNull: false,
      type: Sequelize.INTEGER,
    },
    count: {
      allowNull: false,
      type: Sequelize.INTEGER,
    },
  },
  {}
);

module.exports = OrderItem;
