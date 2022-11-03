import { Router } from "express";
import * as orderController from "./order.controller";

const routes = Router();

routes.get("/", orderController.getOrders);
routes.post("/placeOrder", orderController.placeOrder);
routes.put("/:orderId", orderController.updateOrder);
routes.put("/updateOrderStatus/:orderId", orderController.updateOrderStatus);
export default routes;
