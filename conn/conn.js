const mongoose = require("mongoose");
// const dotenv = require('dotenv');
// var db = "mongodb://localhost:27017"

 mongoose.connect("mongodb://127.0.0.1:27017/tests").then(()=> {console.log("connection succeesfull....")})
 .catch((error)=>{console.log(error)})