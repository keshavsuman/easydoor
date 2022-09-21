import { Router } from "express";
import * as orderController from "./order.controller";

const routes = Router();

routes.get("/placeOrder", orderController.placeOrder);

export default routes;
