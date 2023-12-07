import { Router } from "express";
import * as UserController from "./user.controller";
import { validate } from "../../utils/validation";
import { updateUser } from "./user.validation";
const routes = Router();

routes.get("/", UserController.getUserDetails);
routes.get("/:id", UserController.getUserById);
routes.put("/:id", validate(updateUser), UserController.updateUser);

export default routes;
