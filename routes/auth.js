const express = require("express")
const User = require("../models/User")
const router = express.Router();

router.post("/createuser", async(req, res)=>{

let success = false;
const {Name, Email, Password, PhoneNumber} = req.body
// const user = User(req.body);

let user = await User.findOne({Email: req.body.Email})

if(user){
    return res.json("Sorry a user with this email id already present")
}
const NewUser = new User({Name, Email, Password, PhoneNumber})
await NewUser.save();


success = true
res.json({success, message: "User Registered successfully"})
})
router.post("/login", async(req,res)=>{
    const{Email, Password} = req.body
  let success = false
    try{
       const user = await User.find({Email, Password})
        console.log(user)
        if(user.length > 0){
            const currentUser = {
                name :user[0].Name,
                email :user[0].Email,
                PhoneNumber: user[0].PhoneNumber,
                id :user[0]._id
            }
            success = true
            res.json({success, message: currentUser})
            
        }
        else{
            return res.status(400).json({message: "User Login Failed"})
        }
    }catch (error){
        return res.status(400).json({message: "something went wrong"})
    }
})

module.exports = router