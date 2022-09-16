import { Router } from "express";
import * as ShopController from "./shop.controller";

const routes = Router();

routes.post("/createShop", ShopController.createShop);
routes.post("/getShops", ShopController.getShops);

export default routes;
