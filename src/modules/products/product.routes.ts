import { Router } from "express";
import * as productController from "./product.controller";
const routes = Router();

routes.post("/createProduct", productController.createProduct);
routes.post("/getProducts", productController.getProducts);

export default routes;
