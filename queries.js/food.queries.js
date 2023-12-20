
const { Food } = require('../models/food.model.js')
const addFood = async (foodData) => {
  try {
    const addedFood = new Food(foodData)
    const savedFood = addedFood.save();
    if (savedFood) return savedFood;
    else console.log("could not save new food")
  } catch (err) {
    throw err
  }
}

const deleteFood = async (foodId) => {
  try {
    const deletedData = await Food.findByIdAndDelete(foodId);
    const updatedData = await Food.find({})
    return { deletedData, updatedData };
  } catch (error) {
    throw error
  }
}
async function getAllFoods() {
  try {
    const allFood = await Food.find({});
    return allFood;
  } catch (error) {
    throw error
  }
}

module.exports = { addFood, deleteFood, getAllFoods }