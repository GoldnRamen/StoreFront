const express = require("express")
const { customerLogin, customerReg } = require("../controllers/userControllers")
const router = express.Router()

router.post("/login", customerReg)

module.exports = router