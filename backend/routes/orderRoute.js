import express from 'express'
import {
    allOrders,
    placeOrder,
    placeOrderRazorpay,
    placeOrderStripe,
    updateStatus, userOrders
} from "../controllers/orderController.js";
import adminAuth from "../middleware/adminAuth.js";
import authUser from "../middleware/auth.js";

const orderRouter = express.Router()

//Admin features
orderRouter.post('/list', adminAuth , allOrders);
orderRouter.post('/status', adminAuth , updateStatus);

//Payment Features
orderRouter.post('/place', authUser , placeOrder);
orderRouter.post('/stripe', authUser ,placeOrderStripe);
orderRouter.post('/razorpay', authUser , placeOrderRazorpay);

//User Features
orderRouter.post('/userorders', authUser, userOrders)

// verify

export default orderRouter
