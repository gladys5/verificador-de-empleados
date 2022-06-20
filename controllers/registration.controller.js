const { Registration } = require('../model/registrations.model')
const getAllEmployess = async (req, res) => {
  const registration = await Registration.findAll()

  res.status(200).json({
    registration,
  })
}
const getOneEmployeeById = async (req, res) => {
  const { id } = req.params
  const registration = await Registration.findOne({ where: { id } })

  res.status(200).json({
    registration,
  })
}
const inputEmployee = async (req, res) => {
  const { entranceTime } = req.body
  const registration = await Registration.create({
    entranceTime,
  })

  res.status(201).json({
    registration,
  })
}
const outPutEmployee = async (req, res) => {
  const { exitTime } = req.body
  const { id } = req.params

  const registration = await Registration.findOne({
    where: { id },
  })

  if (!registration) {
    return res.status(404).json({
      status: 'error',
      message: 'employee not found',
    })
  }
  await registration.update({ exitTime, status: 'out' })

  res.status(201).json({
    registration,
  })
}
const exitEarlyEmployee = async (req, res) => {
  const { exitTime } = req.body
  const { id } = req.params

  const registration = await Registration.findOne({
    where: { id },
  })

  if (!registration) {
    return res.status(404).json({
      status: 'error',
      message: 'Employee not found',
    })
  }

  await registration.update({ exitTime, status: 'cancel' })
  res.status(201).json({
    registration,
    status: 'success',
  })
}
module.exports = {
  getAllEmployess,
  getOneEmployeeById,
  inputEmployee,
  outPutEmployee,
  exitEarlyEmployee,
}
