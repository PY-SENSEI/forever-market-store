import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from "./config/mongodb.js";
import { connectCloudinary } from "./config/cloudinary.js";

//Routes
import userRouter from "./routes/userRoute.js";
import productRouter from "./routes/product.route.js";
import cartRouter from "./routes/cartRoute.js";
import orderRouter from "./routes/orderRoute.js";


//App config
const app = express();
const port = 4000;
connectDB();
connectCloudinary();

//Middlewares
app.use(express.json());
app.use(cors({
    origin: ['http://localhost:5173', 'http://localhost:5174'],
    credentials: true
}));

//Api endpoints
app.use('/api/user', userRouter);
app.use('/api/product', productRouter);
app.use('/api/cart', cartRouter)
app.use('/api/order', orderRouter)



app.listen(port, ( ) => {
    console.log(`Listening on port ${port}`)
})