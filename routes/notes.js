const express = require("express")
const Notes = require("../models/Notes")
const router = express.Router();

router.post("/addnote", async(req, res)=>{

    let success = false;
    const {Title, Description, currentUser} = req.body
    // const user = User(req.body);
 
    // console.log(currentUser)
    const note = new Notes({
         Title, Description, user : currentUser.name
    })
     const savedNote = await note.save()
     

    
    success = true
    res.json({success, message:savedNote})
    })

    module.exports = router