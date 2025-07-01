const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Mesa = sequelize.define('Mesa', {
  number: {
    type: DataTypes.INTEGER,
    allowNull: false,
    unique: true
  },
  seats: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  status: {
    type: DataTypes.ENUM('available', 'occupied'),
    defaultValue: 'available'
  }
}, {
  tableName: 'mesas',
  timestamps: false
});

module.exports = Mesa;