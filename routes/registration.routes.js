const express = require('express')

const {
  getAllEmployess,
  getOneEmployeeById,
  inputEmployee,
  outPutEmployee,
  exitEarlyEmployee,
} = require('../controllers/registration.controller')

const router = express.Router()

router.get('/', getAllEmployess)

router.get('/:id', getOneEmployeeById)

router.patch('/:id', outPutEmployee)

router.post('/', inputEmployee)

router.delete('/:id', exitEarlyEmployee)

module.exports = {
  registrationRouter: router,
}
