const mongoose = require('mongoose')

const URI = "mongodb+srv://admin:admin@estudo.vpfmc.mongodb.net/<dbname>?retryWrites=true&w=majority"

const connectDB = ()=>{
  await  mongoose.connect(URI);
}

module.exports = connectDB;