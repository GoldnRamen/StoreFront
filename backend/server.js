const express = require("express")
const app = express()
const cors = require("cors")
const PORT = 5000

app.get("/", (req, res)=>{
    res.json({message: "The StoreFront server is ALIVE!!!"})
})

app.use(cors())
app.listen(PORT, ()=>{
    console.log(`Database Connection is Successfull and started on PORT ${PORT}!`)
})