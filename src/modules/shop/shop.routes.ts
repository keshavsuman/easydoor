import { Router } from "express";

const routes = Router();

routes.post("/createProduct");
routes.post("/getProducts");

export default routes;
