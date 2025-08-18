const express = require("express")
const { customerLogin, customerReg } = require("../controllers/userControllers")
const router = express.Router()

router.post("/register", customerReg)
router.post("/login", customerLogin)

module.exports = router