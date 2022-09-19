import { Router } from "express";
import * as addressController from "./address.controller";
const routes = Router();

routes.post("/createAddress", addressController.createAddress);
routes.get("/getAddress", addressController.getAddresses);
routes.put("/updateAddress/:id", addressController.updateAddress);
routes.delete("/deleteAddress/:id", addressController.deleteAddress);

export default routes;
