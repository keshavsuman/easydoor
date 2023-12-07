import { Router } from "express";
import * as CommonController from "./common.controller";
const routes = Router();

routes.get("/signedUrl", CommonController.createUploadURL);

export default routes;
