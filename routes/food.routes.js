const { Router } = require('express');
const foodRoute = Router();
const {
  addFood,
  deleteFood,
  getAllFoods
} = require('../queries.js/food.queries.js')

foodRoute.post('/', async (req, res) => {
  try {
    const data = await addFood(req.body)
    if (data) {
      res.json({ message: "Food Data added successfully", data })
    } else {
      res.status(400).json({ message: "something went wrong, please check the request body and try again" });
    }
  } catch (error) {
    res.status(500).json({ message: "Something is really wrong", error })
    throw error
  }
})
foodRoute.get('/', async (req, res) => {
  try {
    const data = await getAllFoods();
    if (data[0])
      res.json({ message: "Food Data Found in Database", data })
    else res.status(404).json({ message: "Database is empty for Foods",data })
  } catch (error) {
    res.status(500).json({ message: "Something is really wrong", error })
    throw error
  }
})

foodRoute.delete('/:foodId', async (req, res) => {
  try {
    const data = await deleteFood(req.params.foodId)
    if (data) {
      res.json({ message: "Food Data deleted successfully", data })
    } else {
      res.status(400).json({ message: "something went wrong, please check the request params and try again" });
    }
  } catch (error) {
    console.error(error)
  }
})

module.exports = { foodRoute }