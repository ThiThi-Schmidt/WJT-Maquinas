import { Router } from "express";
import { AuthController } from "../controllers/auth.controller.js";

const authRouter = Router()
const authController = new AuthController()

authRouter.post("/auth/login", authController.login);

export default authRouter
