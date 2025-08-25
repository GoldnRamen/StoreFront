const mongoose = require("mongoose")

const liveOrderSchema = new mongoose.Schema({
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

const liveOrderModel = mongoose.model("LiveOrders", liveOrderSchema)
module.exports = liveOrderModel