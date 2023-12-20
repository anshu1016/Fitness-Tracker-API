const {Router}= require('express');

const exerciseRoute = Router();
const {addExercise,
      deleteExercise, 
      getAllExercises} = require('../queries.js/exercise.queries.js')

exerciseRoute.get('/',async(req, res)=>{
  try{
    const data= await getAllExercises()
    if(data[0]){
    res.json({message:"Exercise Data Found in Database",data})}
    else res.status(404).json({message:"Database is empty for exercises",data})
  }catch(error){
       res.status(500).json(error)
  }
})

exerciseRoute.post('/',async(req, res)=>{
  try{
    const data= await addExercise(req.body);
    if(data){
      res.set('Access-Control-Allow-Origin', "*");
    res.json({message:"Exercise Data added successfully",data})
    }else {
      res.status(400).json({message:"something went wrong, please check the request body and try again"});
    }
  }catch(error){
    res.status(500).json({message:"Something is really wrong",error})
    throw error    
  }
})

exerciseRoute.delete('/:exerciseId',async(req, res)=>{
  try{
    const data= await deleteExercise(req.params.exerciseId)
    if(data){
  res.status(200).json({message:"Exercise data deleted successfully", data})
    }
  }catch(error){
    res.status(500).json(error)
    throw error
  }
})
module.exports = {exerciseRoute}