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
    },
    orderQuantity:{
        type: Number,
        required: true,
        min: [1, "Quantity must be at least 1"]
    },
    birdBreed:{
        type: [String],
        enum: ["F_Ecotype", "Sasso", "Noilers", "Kuroilers", "O_Layer", "Broiler"]
    },
    birdCuts:{
        type: String,
        enum: ["Drumsticks", "Wings", "Breasts", "Thighs", "Half_LVC", "Half_RVC", "Half_THC", "Half_BHC", "Heads", "Feet", "Neck", "Heart", "Gizzard", "Liver", "WholeCarcass", "Bones", "MBM"]
    },
    orderTotal:{
        type: Number,
        default: 0
    }

   
}, {timestamps: true})

const meatOrderModel = mongoose.model("MeatOrders", meatOrderSchema)
module.exports = meatOrderModel