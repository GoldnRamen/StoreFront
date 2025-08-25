const mongoose = require("mongoose")

const meatOrderSchema = new mongoose.Schema({
    orderType:{
        type: String,
        enum: ["Whole", "Parts", "Offal", "Mince", "Bulk"],
        trim: true,
        required: true
    },
    birdSex:{
        type: String,
        enum: ["Rooster", "Hen"],
        trim: true,
        required: true
    },
    orderQuantity:{
        type: Number,
        required: true,
        match: [/d[0-9]/, "Please enter a valid email address"]
    },
    birdBreed:{
        type: [],
        enum: ["F_Ecotype", "Sasso", "Noilers", "Kuroilers", "O_Layer", "Broiler"]
    },
    birdCuts:{
        type: String,
        enum: ["Drumsticks", "Wings", "Breasts", "Thighs", "Half_LVC", "Half_RVC", "Half_THC", "Half_BHC", "Heads", "Feet", "Neck", "Heart", "Gizzard", "Liver"]
    },
    orderTotal:{
        type: Number,
    }

   
}, {timestamps: true})

const meatOrderModel = mongoose.model("MeatOrders", meatOrderSchema)
module.exports = meatOrderModel