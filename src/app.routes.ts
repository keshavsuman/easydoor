import { Router } from "express";
import authenticationRoutes from "./modules/authentications/authentication.routes";
import addressRoutes from "./modules/address/address.routes";
import commonRoutes from "./modules/common/common.routes";
import userRoutes from "./modules/user/user.routes";
import authToken from "./middlewares/authToken";

const routes = Router();

routes.use("/authentication", authenticationRoutes);
routes.use("/user", authToken(), userRoutes);
routes.use("/address", authToken(), addressRoutes);
routes.use("/common", authToken(), commonRoutes);

export default routes;
