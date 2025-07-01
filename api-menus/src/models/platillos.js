const { DataTypes } = require('sequelize');
const sequelize = require('./sequelize');

const Platillos = sequelize.define('Platillos', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false
  },
  descripcion: {
    type: DataTypes.STRING,
    allowNull: false
  },
  precio: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  categoria: {
    type: DataTypes.STRING,}

}, {
  tableName: 'platillos',
  timestamps: false
});

module.exports = Platillos;