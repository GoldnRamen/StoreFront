const bcryptjs = require("bcryptjs")
const userModel = require("../models/userModel")

const customerReg = async(req, res)=>{
    try {
        const {email, password} = req.body
        // const existingUser = await userModel.findOne({ $or: [{email}, {lastName}] })
        const existingUser = await userModel.findOne({email })

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
        console.log(req.body)
    }
}
const customerLogin = async(req, res)=>{
    try {
        const {email, password} = req.body
        const findUser = await userModel.findOne({email: email})
        if(!findUser) return res.status(404).send({success: false, msg: "Invalid Email Entered"})
        const findPassword = await bcryptjs.compare(password, findUser.password)
        if(!findPassword) return res.status(401).send({success: false, msg: "Invalid Password Entered"})
            const userCredentials = {
                id: findUser._id,
                email: findUser.email,
                role: findUser.role
            }
            findUser.lastLogin = new Date()
            await findUser.save()
        res.status(200).json({ success: true, msg: "Login Successful!", data: userCredentials})
    } catch (error) {
        res.status(500).json({ success: false, msg: "Login Failed!", error: error.message })
    }
}

module.exports = {customerReg, customerLogin}