import { Router } from "express";
import authToken from "../../middlewares/authToken";
import * as productController from "./product.controller";
const routes = Router();

routes.post("/createProduct", productController.createProduct);
routes.get(
  "/getProducts",
  authToken("admin", "merchant", "user"),
  productController.getProducts
);
routes.put("/updateProduct/:productId", productController.updateProduct);
routes.delete("/deleteProduct/:productId", productController.deleteProduct);

//Category

routes.post("/createCategory", productController.createCategory);
routes.post("/updateCategory", productController.updateCategory);
routes.post("/deleteCategory", productController.deleteCategory);

//Sub Category
routes.post("/createCategory", productController.createSubCategory);
routes.post("/updateCategory", productController.updateSubCategory);
routes.post("/deleteCategory", productController.deleteSubCategory);

export default routes;
