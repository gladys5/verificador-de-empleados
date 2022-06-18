const { DataTypes } = require('sequelize')
const { db } = require('../utils/db')

const Registration = db.define('registration', {
  id: {
    primaryKey: true,
    autoIncrement: true,
    allownull: false,
    type: DataTypes.INTEGER,
  },

  entranceTime: {
    type: DataTypes.DATE,
    allownull: false,
    useUTC: false,
    timeZone: '-06:00',
  },

  exitTime: {
    type: DataTypes.DATE,
    useUTC: false,
    timeZone: '-06:00',

    allownull: false,
  },
  status: {
    type: DataTypes.STRING,
    defaultValue: 'working',
    allowNull: false,
  },
})
module.exports = {
  Registration,
}
