import { Router } from "express";
import * as AuthenticationController from "./authentication.controller";
const routes = Router();

routes.post("/:role/login", AuthenticationController.login);
routes.post("/:role/signup", AuthenticationController.signup);
routes.post("/user/sendOTP", AuthenticationController.sendOTP);
routes.post("/user/verifyOTP", AuthenticationController.verifyOTP);

export default routes;
