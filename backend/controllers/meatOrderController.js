const meatOrderModel = require("../models/meatOrderModel")

const sendMeatOrder = async(req, res)=>{
    try {
        const { orderType, birdSex, orderQuantity, birdBreed, birdCuts, orderTotal } = req.body;
        if (!orderType || !orderQuantity) {
            return res.status(400).json({ success: false, msg: "Missing required fields" });
        }
        const newOrder = new meatOrderModel({
            orderType,
            birdSex,
            orderQuantity,
            birdBreed,
            birdCuts,
            orderTotal
        });
        const resp = await newOrder.save()

        res.status(201).json({ success: true, msg: "Order Placed Successfully!", data: resp})
    } catch (error) {
        console.error("Order Error:", error.message);
        res.status(500).json({ success: false, msg: "Order Failed!", error: error.message })
        console.log(req.body)
    }
}

const getMeatorder = async(req, res)=>{
    try {
        
    } catch (error) {
        
    }
}

module.exports = {sendMeatOrder, getMeatorder}