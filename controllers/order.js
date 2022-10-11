
import ordersModel from "../models/order.js";


export const newOrder = async(req,res)=>{
    const {userId} = req.body;
    try{
        const allOrders = await ordersModel.find({userId:userId});
        const length = allOrders.length;
        const currentOrder = new ordersModel({
            ...req.body,
            orderId:`OR0000${length+1}`,
        })
        await currentOrder.save();
        res.status(201).json(currentOrder);
    }catch(error){
        console.log(error);
        res.status(500).json({message:"something went wrong"});
    }
}

export const getAllOrders = async(req,res)=>{
    const {userId} = req.body;
    try{
        const allOrders = await ordersModel.find({userId:userId});
        res.status(200).json(allOrders);
    }catch(error){
        console.log(error);
        res.status(500).json({message:"something went wrong"});
    }
}

export const deleteAnOrder = async(req,res)=>{
    const {orderId} = req.body;
    try{
        await ordersModel.findByIdAndDelete(orderId);
        res.status(200).json({message:"order deleted successfully"});
    }catch(error){
        console.log(error);
        res.status(500).json({message:"something went wrong"});
    }
}
