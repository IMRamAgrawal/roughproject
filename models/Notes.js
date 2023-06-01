const mongoose = require("mongoose")

const NotesSchema = new mongoose.Schema({
    // user:{
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: "user"
    // },
    user:{
        type:String,
        required: true
    },
    Title:{
        type: String,
        required: true
    },
    Description:{
        type: String,
        required: true
    },
    date:{
        type:Date,
        default:Date.now
    },
})

module.exports = mongoose.model("notes", NotesSchema)
