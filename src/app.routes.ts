import { Router } from "express";
import authenticationRoutes from "./modules/authentications/authentication.routes";
import shopRoutes from "./modules/shop/shop.routes";
import orderRoutes from "./modules/order/order.routes";
import productRoutes from "./modules/product/product.routes";
import addressRoutes from "./modules/address/address.routes";
import authToken from "./middlewares/authToken";
const routes = Router();

routes.use("/", authenticationRoutes);
routes.use("/shop", authToken(), shopRoutes);
routes.use("/order", authToken(), orderRoutes);
routes.use("/product", authToken(), productRoutes);
routes.use("/address", authToken(), addressRoutes);

export default routes;
