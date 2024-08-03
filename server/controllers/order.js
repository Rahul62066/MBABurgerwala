
import {asyncError} from "../middlewares/errorMiddleware.js";
import {Order} from "../models/Order.js"

export const placeOrder = asyncError(async(req,res,next)=>{

    const {
        shippingInfo,
        orderItems,
        paymentMethod,
        itemPrice,
        taxPrice,
        shippingCharges,
        totalAmount
    } = req.body;
    
    const user = req.user._id;
    
    
    const orderOpttions ={
        shippingInfo,
        orderItems,
        paymentMethod,
        itemPrice,taxPrice,
        shippingCharges,
        totalAmount,
        user
    };

    await Order.create(orderOpttions);
    res.status(201).json({
        success: true,
        message:"Order Placed successfully via Cash On Delivery"
    });
});