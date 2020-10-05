const { Sequelize } = require('sequelize');
const db = require('../db');

const Order = db.define(
  'Order',
  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    clientId: {
      allowNull: false,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE,
      defaultValue: Sequelize.NOW,
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE,
      defaultValue: Sequelize.NOW,
    },
    deletedAt: {
      type: Sequelize.DATE,
      defaultValue: null,
    },
  },
  {}
);

module.exports = Order;
