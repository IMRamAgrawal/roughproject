const mongoose = require("mongoose")
  
const UserSchema = new mongoose.Schema({
Name:{
    type: String
},
Email:{
    type: String
},
Password:{
    type: String
},
PhoneNumber:{
    type:  Number
},
date:{
    type:Date,
    default:Date.now
}
},

)

const User = mongoose.model("user", UserSchema)

module.exports = User;