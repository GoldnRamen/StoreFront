const bcryptjs = require("bcryptjs")
const userModel = require("../models/userModel")

const customerReg = async(req, res)=>{
    try {
        const {firstName, LastName, email, password} = req.body
        const existingUser = await userModel.findOne({ $or: [{email}] })

        if(existingUser){
            return res.status(400).json({ success: false, msg: "An account with this email already exists"})
        }

        const encrypt_password = await bcryptjs.hash(password, 8)
        const newUser = { ...req.body, password: encrypt_password, role: "customer"}
        const create_user = new userModel(newUser)
        const resp = await create_user.save()

        res.status(201).json({ success: true, msg: "Registration Successful!", data: resp})
    } catch (error) {
        res.status(500).json({ success: false, msg: "Registeration Failed!", error: error.message })
    }
}

module.exports = {customerReg}