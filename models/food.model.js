const {Schema, model} = require('mongoose');

const foodSchema= Schema({
  name:{
    type:String,
    required:true
    },
  
  calories:{
    type:Number,
    required:true
  },
  protein:{
    type:Number,
    required:true
  },
  carbohydrate:{
    type:Number,
    required:true
  },
  fat:{
    type:Number,
    required:true
  }
})

const Food = model('Food', foodSchema)

module.exports = {Food}