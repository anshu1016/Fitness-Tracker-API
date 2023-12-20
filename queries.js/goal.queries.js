const { Goal } = require('../models/goal.model.js');

const addGoal = async (goalInput) => {
  try {
    const addedGoal = new Goal(goalInput);
    console.log(addedGoal, "added lllllllllllll")
    const savedGoal = await addedGoal.save();
    return savedGoal ?? null
  } catch (error) {
    throw error
  }
}
const deleteGoal = async (goalId) => {
  try {
    const deletedData = await Goal.findByIdAndDelete(goalId);
    const updatedData = await Goal.find({})
    return { deletedData, updatedData };
  } catch (error) {
    throw error
  }
}
const getAllGoals = async () => {
  try {
    const allGoals = await Goal.find({});
    return allGoals;
  } catch (error) {
    throw error
  }
}

module.exports = {
  getAllGoals,
  deleteGoal,
  addGoal
}