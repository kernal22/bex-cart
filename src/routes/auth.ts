import { Router } from "express";
import { AuthController } from "../controllers/index";
import { validateLogin, validateSignUp } from "../validators/index";

const _router = Router();

_router.post("/sign-up", validateSignUp, AuthController.signUp);
_router.post("/login", validateLogin, AuthController.login);

export default _router;
