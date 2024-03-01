import { Router } from "express";
import AuthController from "../controllers/auth.js";

const authRouter = Router();

authRouter.post("/signup", AuthController.signup);
authRouter.post("/login", AuthController.login);

export default authRouter;
