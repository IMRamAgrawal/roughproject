const express = require("express")
const cors = require("cors")
require("./conn/conn")
const User = require("./models/User")
const app = express();
const PORT = 5000;
app.use(cors())
app.use(express.json())


app.use("/api/auth", require("./routes/auth"))
app.use("/api/notes", require("./routes/notes"))
app.get("/api/login" ,(req,res)=>{
  res.send("hello word")
})
app.listen(PORT,()=>{
  console.log("app is listen on PORT")
})
