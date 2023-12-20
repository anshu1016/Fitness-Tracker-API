const { Schema, Types, model } = require('mongoose');

const { EXERCISEDATA } = require('../utils/constants.js')
const exerciseSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  duration: {
    type: Number,
    required: true
  },
  exerciseType: {
    type:  { exercise: String, caloriesPerMinute: Number },   
    required: true
  },
  totalCalories: {
    type: Number,
  }

});
const Exercise = model('Exercise', exerciseSchema)
module.exports = { Exercise };