const { Schema, model } = require('mongoose');
const goalSchema = Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  targetDate: {
    type: Date,
    required: true
  },
  targetCalories: {
    type: Number,
    required: true
  },
  status: {
    type: String,
    enum: ["In Progress", "Achieved", "Abandoned"]
  }

})
const Goal = model('Goal', goalSchema)

module.exports = { Goal }
// Goal Name (string)
// Goal Description (string)
// Target Date (date)
// Target Calories Value (number)
// Status (string, e.g., "In Progress", "Achieved", "Abandoned")