import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import morgan from "morgan";
import UserRouter from "./routes/user.js";
import OrderRouter from "./routes/order.js";

const app = express();
dotenv.config();


app.use(morgan("dev"));
app.use(express.json({limit:"30mb",extended:false}));
app.use(express.urlencoded({limit:"30mb",extended:false}));
app.use(cors());
app.use("/api/users",UserRouter);
app.use("/api/orders",OrderRouter);


app.get("/",(req,res)=>{
    res.send("Welcome to Laundry Cart");
})

const port = process.env.PORT || 5000;
mongoose
    .connect("mongodb+srv://suraj:singh@cluster0.4sg9nez.mongodb.net/LaundryCart?retryWrites=true&w=majority")
    .then(()=>{
        app.listen(port,()=>console.log(`server running on port ${port}`));
    })
    .catch((err)=>console.log(err));






