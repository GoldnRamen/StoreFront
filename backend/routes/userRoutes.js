const express = require("express")
const { customerLogin, customerReg } = require("../controllers/userControllers")
const router = express.Router()

router.post("/register", customerReg)

module.exports = router