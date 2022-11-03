import { Router } from "express";
import authToken from "../../middlewares/authToken";
import * as ShopController from "./shop.controller";

const routes = Router();

routes.post(
  "/createShop",
  authToken("admin", "merchant"),
  ShopController.createShop
);

routes.get(
  "/getShops",
  authToken("admin", "merchant", "user"),
  ShopController.getShops
);

routes.get(
  "/getShopsByMerchantId/:id",
  authToken("admin", "merchant", "user"),
  ShopController.getShopsByMerchantId
);

routes.put(
  "/updateShop:/shopId",
  authToken("admin", "merchant"),
  ShopController.updateShop
);

routes.delete(
  "/deleteShop/:shopId",
  authToken("admin", "merchant"),
  ShopController.deleteShop
);

export default routes;
