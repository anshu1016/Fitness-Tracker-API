const express = require('express');
const cors = require('cors');
const {intializeDatabase} = require('./database/db');

const {exerciseRoute} = require('./routes/exercise.routes.js');
const {foodRoute} = require('./routes/food.routes.js');
const {goalRoute} = require('./routes/goal.routes.js')
const {ExerciseTypes} = require('./models/exercise.type.model')

const app = express();
intializeDatabase();


app.use(express.json());
app.use(cors());
//All common routes
app.use('/exercises', exerciseRoute)
app.use('/foods', foodRoute)
app.use('/goals',goalRoute)
app.get('/exercise-types', async(req,res)=>{
  try{
    const allTypes= await ExerciseTypes.find({});
    if(allTypes[0]){
      res.json(allTypes)
    }else res.json({message:"No data found for exercise types"})
  }catch(error){
    res.status(502).json({message:"Something went wrong", error})
    console.error(error)
  }
})

app.use('/', (req,res)=>{
  res.send("<h2>Test</h2>")
})



app.listen('3000', ()=>{console.log("App started")})


