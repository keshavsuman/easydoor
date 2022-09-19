import { Router } from "express";
import * as ShopController from "./shop.controller";

const routes = Router();

routes.post("/createShop", ShopController.createShop);
routes.get("/getShops", ShopController.getShops);
routes.get("/getShopsByMerchantId/:id", ShopController.getShopsByMerchantId);
routes.put("/updateShop:/shopId", ShopController.updateShop);
routes.delete("/deleteSop/:shopId", ShopController.deleteShop);

export default routes;
