const express = require('express')

const { registrationRouter } = require('./routes/registration.routes')

const { db } = require('./utils/db')

const app = express()

app.use(express.json())

app.use('/api/v1/registrations', registrationRouter)

db.authenticate()
  .then(() => console.log('Database authenticate'))
  .catch((err) => console.log(err))

db.sync()
  .then(() => console.log('Database sync'))
  .catch((err) => console.log(err))

const PORT = 5000

app.listen(PORT, () => {
  console.log(`Express app running on port ${PORT}`)
})
