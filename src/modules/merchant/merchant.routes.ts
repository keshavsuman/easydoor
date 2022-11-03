import { Router } from "express";
import authToken from "../../middlewares/authToken";
import * as merchantController from "./merchant.controller";

const routes = Router();

routes.put("/:merchantId", merchantController.updateMerchant);
routes.put(
  "/blockMerchant/:operation/:merchantId",
  merchantController.updateMerchant
);

export default routes;
