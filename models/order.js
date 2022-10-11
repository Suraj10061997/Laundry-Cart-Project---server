import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
//   userId: {
//     type: String,
//     required: true,
//   },
//   orderId: {
//     type: String,
//     required: true,
//   },
//   storeInfo: {
//     type: String,
//     required: true,
//   },
//   userAddress: {
//     type: String,
//     required: true,
//   },
//   status: {
//     type: String,
//     required: true,
//   },
//   items: {
//     type: String,
//     required: true,
//   }
// pid:1,
// type:"T-shirts",
// washingTypes:[0,0,0,0],
// washingTypesPrices:[5,10,15,20],
// individualPriceSummation:0,
// totalPrice:0,
// totalQuantity:0,
// image:"/images/t-shirt.jpeg"

        userId:{type:String,required:true},
        orderId:{type:String,required:true},
        storeLocation:{type:String,required:true},
        storeCity:{type:String,required:true},
        storePhone:{type:String,required:true},
        totalPrice:{type:Number,required:true},
        totalQuantity:{type:Number,required:true},
        pickupCharges:{type:Number,required:true},
        orderDate:{type:String,required:true},
        orderTime:{type:String,required:true},
        orderStatus:{type:String,required:true},
        items:[]

});



const ordersModel = mongoose.model("Order", orderSchema);
export default ordersModel;


