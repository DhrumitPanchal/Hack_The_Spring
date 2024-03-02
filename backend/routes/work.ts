import { Router } from "express";
import AuthController from "../controllers/work.js";

const workRouter = Router();

workRouter.post("/add", AuthController.add);
workRouter.get("/", AuthController.get);

export default workRouter;
