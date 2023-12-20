const mongoose = require('mongoose')

const mongoURI= process.env['MONGO_DB']

const intializeDatabase = async()=>{
try{
  const connection = await mongoose.connect(mongoURI,{
    useNewUrlParser :true,
    useUnifiedTopology:true
  })
  if(connection){
    console.log("Database connected successfully")
  }
  
}catch(error){
  console.error("Database connection failed", error)
}
  
}
module.exports = {intializeDatabase}