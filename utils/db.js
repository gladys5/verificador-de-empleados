const { Sequelize } = require('sequelize')
const db = new Sequelize({
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: '1103',
  database: 'checking',
  logging: false,
  dialectOptions: {
    useUTC: false,
  },
  timezone: '-06:00',
})
module.exports = { db }
