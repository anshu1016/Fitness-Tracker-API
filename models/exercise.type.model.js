const { model, Schema } = require('mongoose');
const {EXERCISEDATA} = require('../utils/constants')
const exerciseTypes = Schema({
  exercise: String,
  caloriesPerMinute: Number,
})

const ExerciseTypes = model('ExerciseTypes', exerciseTypes);

async function seedExerciseTypes(data){
  try{
    for(let i = 0; i<data.length; i++){
      const addedType = new ExerciseTypes(data[i]);
      const savedData = await addedType.save();
      console.log("Data Saved :",savedData)
    }
    
  }catch(error){
    console.error(error)
  }
}
// seedExerciseTypes(EXERCISEDATA)

module.exports = { ExerciseTypes }