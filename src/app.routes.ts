import { Router } from "express";
import authenticationRoutes from "./modules/authentications/authentication.routes";

const routes = Router();

routes.use("/", authenticationRoutes);

export default routes;
