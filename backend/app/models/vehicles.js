const Sequelize = require('sequelize');
const db = require('../util/database');

const Vehicle = db.define('vehicles',{
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  plate: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true
  },
  brand: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  type: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  version: {
    type: Sequelize.STRING,
    allowNull: false
  },
  year: {
    type: Sequelize.DATE,
    allowNull: false
  },
  cnh_conductor: {
    type: Sequelize.STRING,
    allowNull: false
  },
});

module.exports = Vehicle;