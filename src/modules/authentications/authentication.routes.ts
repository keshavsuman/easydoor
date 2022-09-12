import { Router } from "express";

const routes = Router();

routes.post("/:role/login");
routes.post("/:role/signup");

export default routes;
