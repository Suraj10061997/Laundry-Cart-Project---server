import express from "express";
// import auth from "../middlewares/auth.js";
const router = express.Router();

import { newOrder,getAllOrders,deleteAnOrder } from "../controllers/order.js";

router.post("/newOrder",newOrder);
router.post("/getAllOrders",getAllOrders);
router.post("/deleteAnOrder",deleteAnOrder);
export default router;