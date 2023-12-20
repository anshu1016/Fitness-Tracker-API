const { Exercise } = require('../models/exercise.model.js');

async function addExercise(exerciseData) {
  try {
    const totalCalorieAddedExercise = {
      ...exerciseData,
      totalCalories:
        exerciseData.exerciseType.caloriesPerMinute * exerciseData.duration,
    };
    const addedExercise = new Exercise(totalCalorieAddedExercise);
    const dataRecieved = await addedExercise.save();
    if (dataRecieved) {
      return dataRecieved;
    } else console.log('Could not add new Exercise');
  } catch (error) {
    console.log(error);
    throw error;
  }
}

async function deleteExercise(id) {
  try {
    const deletedData = await Exercise.findByIdAndDelete(id);
    const updatedData = await Exercise.find({})
    return {deletedData,updatedData};
  } catch (error) {
    console.error(error);
    throw error.reason;
  }
}

async function getAllExercises() {
  try {
    const allExercises = await Exercise.find({});
    return allExercises;
  } catch (error) {
    throw error;
  }
}

module.exports = { addExercise, deleteExercise, getAllExercises };
