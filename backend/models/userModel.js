const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    firstName:{
        type: String,
        trim: true,
        required: true
    },
    lastName:{
        type: String,
        trim: true,
        required: true
    },
    email:{
        type: String,
        required: [true, "Email is required"],
        unique: true,
        match: [/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, "Please enter a valid email address"]
    },
    phone:{
        type: String,
        required: [true, "Phone number is required"],
        match: [/^\d{8,15}$/, "Please enter a valid phone number"],
        required: true
    },
    city:{
        type: String,
        required: true,
    },
    gender:{
        type: String,
        enum: ["male", "female", "unspecified"],
    },
    age:{
        type: Date,
        required: false
    },
    avatar:{
        type: String,
        default: null,
        match: [/^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/, "Please enter a valid URL"]
    },
    password:{
        type: String,
        required: [true, "Password is required"],
        minlength: [6, "Password must be at least 6 characters"]
    },
    role: {
        type: String,
        enum: ["admin", "employee", "customer"],
        required: true,
        default: "customer"   
    },
    lastLogin: {
        type: Date,
        default: null
    }
   
}, {timestamps: true})

const userModel = mongoose.model("User", userSchema)
module.exports = userModel