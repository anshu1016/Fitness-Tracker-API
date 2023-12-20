const { Router } = require('express')
const goalRoute = Router();

const {
  addGoal,
  deleteGoal,
  getAllGoals
} = require('../queries.js/goal.queries.js');

goalRoute.get('/', async (req, res) => {
  try {
    const data = await getAllGoals()
    if (data[0])
      res.json({ message: "Goals Found in Database", data })
    else res.status(404).json({ message: "Database is empty for Goals" ,data})
  } catch (error) {
    res.status(500).json({ message: "Somthing went wrong, please try again later", error })
    throw error
  }
})
goalRoute.post('/', async (req, res) => {
  try {
    const data = await addGoal(req.body);
    if (data)
      res.json({ message: "Goal Data added in Database", data })
    else res.json({ message: "Could not add data, please check request body and try again" })
  } catch (error) {
    res.status(500).json({ message: "Somthing went wrong, please check request body and try again", error })
    throw error
  }
})
goalRoute.delete('/:goalId', async (req, res) => {
  try {
    const data = await deleteGoal(req.params.goalId)
    if (data) {
      res.json({ message: "Goal Data deleted successfully", data })
    } else {
      res.status(400).json({ message: "something went wrong, please check the request params and try again" });
    }
  } catch (error) {
    res.status(500).json({ message: "Somthing went wrong, please try again with correct id", error:error })
    throw error
  }
})

module.exports = { goalRoute }