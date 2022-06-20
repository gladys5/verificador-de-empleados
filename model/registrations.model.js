const { DataTypes } = require('sequelize')
const { db } = require('../utils/db')

const Registration = db.define(
  'registration',
  {
    id: {
      primaryKey: true,
      autoIncrement: true,
      allownull: false,
      type: DataTypes.INTEGER,
    },

    entranceTime: {
      type: DataTypes.DATE,
      allownull: false,
    },

    exitTime: {
      type: DataTypes.DATE,

      allownull: false,
    },
    status: {
      type: DataTypes.STRING,
      defaultValue: 'working',
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
)
module.exports = {
  Registration,
}
