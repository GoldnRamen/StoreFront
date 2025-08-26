const express = require("express")
const { sendMeatOrder } = require("../controllers/meatOrderController")
const router = express.Router()

router.post("/customer/meatOrder", sendMeatOrder)
module.exports = router