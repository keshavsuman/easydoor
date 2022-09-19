import { Router } from "express";
import * as productController from "./product.controller";
const routes = Router();

routes.post("/createProduct", productController.createProduct);
routes.get("/getProducts", productController.getProducts);
routes.put("/updateProduct/:productId", productController.updateProduct);
routes.delete("/deleteProduct/:productId", productController.deleteProduct);

export default routes;
