const mongoose = require("mongoose")

const eggOrderSchema = new mongoose.Schema({
    orderType:{
        type: String,
        enum: ["Broilers", "Layers", "Cockerels", "FreeRange", "Chicks"],
        trim: true,
        required: true
    },
    birdAge:{
        type: String,
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
        enum: ["NIC", "Orpingtons", "W_Leghorns", "Hybrids", "F_Ecotype", "Sasso", "Noilers", "Kuroilers"]
    }
   
}, {timestamps: true})

const eggOrderModel = mongoose.model("EggOrders", eggOrderSchema)
module.exports = eggOrderModel