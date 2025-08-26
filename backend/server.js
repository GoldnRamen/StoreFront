const express = require("express")
const app = express()
const cors = require("cors")
const PORT = 5000
require("dotenv").config()
const connectDB = require("./config/db_config")

const user_routes = require("./routes/userRoutes")
const order_routes = require("./routes/meatOrderRoute")

app.get("/", (req, res)=>{
    res.json({message: "The StoreFront server is ALIVE!!!"})
})

app.use(cors())
app.use(express.json())

app.use("/api/users", user_routes)
app.use("/api/orders", order_routes)
app.listen(process.env.PORT, ()=>{
    console.log(`Database Connection is Successfull and started on PORT ${PORT}!`)
    connectDB()
})